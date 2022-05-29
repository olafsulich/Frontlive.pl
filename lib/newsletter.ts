import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

type MailchimpSubscribersResponse = {
  total_subscribers: number;
};

type MailchimpCampaignResponse = {
  campaigns: {
    id: string;
    send_time: string;
    long_archive_url: string;
    settings: {
      subject_line: string;
    };
  }[];
};

export const getMailchimpSubscribersCount = async () => {
  const subscribersResponse = await fetch(
    `https://${process.env.MAILCHIMP_API_KEY!.split('-')[1]}.api.mailchimp.com/3.0/`,
    {
      headers: {
        Authorization: `Bearer ${process.env.MAILCHIMP_API_KEY}`,
        'Content-Type': 'application/json',
      },
    },
  );

  const subscribersData: MailchimpSubscribersResponse = await subscribersResponse.json();

  return subscribersData.total_subscribers;
};

const transformMailchimpCampaigns = (campaigns: MailchimpCampaignResponse['campaigns']) => {
  return campaigns
    .sort((a, b) => {
      const dateA = dayjs(a.send_time, 'YYYY-MM-DD');
      const dateB = dayjs(b.send_time, 'YYYY-MM-DD');
      if (dateA.isBefore(dateB)) {
        return 1;
      }
      if (dateB.isBefore(dateA)) {
        return -1;
      }

      return 0;
    })
    .map((campaign) => ({
      id: campaign.id,
      link: campaign.long_archive_url,
      name: campaign.settings.subject_line,
      sendTime: campaign.send_time,
    }));
};

export const getMailchimpCampaigns = async () => {
  const campaignsResponse = await fetch(
    `https://${
      process.env.MAILCHIMP_API_KEY!.split('-')[1]
    }.api.mailchimp.com/3.0/campaigns?count=100?sort_field=send_time`,
    {
      headers: {
        Authorization: `Bearer ${process.env.MAILCHIMP_API_KEY}`,
        'Content-Type': 'application/json',
      },
    },
  );

  const campaignsData: MailchimpCampaignResponse = await campaignsResponse.json();

  return transformMailchimpCampaigns(campaignsData.campaigns);
};
