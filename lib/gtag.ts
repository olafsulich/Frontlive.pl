export const reportPageView = (url: string) => {
  //@ts-ignore
  window.gtag('config', process.env.GA_TRACKING_ID, {
    page_path: url,
  });
};

//@ts-ignore
export const event = ({ action, category, label, value }) => {
  //@ts-ignore
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
