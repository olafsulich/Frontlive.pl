import { NextSeo } from 'next-seo';

const title = 'Dołącz do społeczności Frontlive!';
const description = 'Bo w programowaniu liczą się ludzie';
const url = 'https://frontlive.pl/discord';
const imageThumbnail = '/images/discord.png';

const Discord = () => {
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        url,
        title,
        description,
        images: [
          {
            url: imageThumbnail,
            alt: title,
            width: 1200,
            height: 628,
          },
        ],
      }}
    />
  );
};

export default Discord;
