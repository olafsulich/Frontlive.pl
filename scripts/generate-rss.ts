//@ts-ignore @ts-nocheck
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const RSS = require("rss");
const dayjs = require("dayjs");
require("dayjs/locale/pl");
const localizedFormat = require("dayjs/plugin/localizedFormat");
const customParseFormat = require("dayjs/plugin/customParseFormat");

dayjs.extend(localizedFormat);
dayjs.extend(customParseFormat);

type Post = {
  title: string;
  excerpt: string;
  publishedAt: string;
  category: string;
  slug: string;
  popular: boolean;
  isPublished: boolean;
};

const POSTS_PATH = path.join(process.cwd(), "content/posts");
const MDX_PATTERN = /\.mdx?$/;

const filterUnpublishedPosts = (posts: Post[]) =>
  posts.filter((post) => post.isPublished);

const sortPostsByNewest = (posts: Post[]) => {
  return posts.sort((a, b) => {
    const dateA = dayjs(a.publishedAt, "DD-MM-YYYY");
    const dateB = dayjs(b.publishedAt, "DD-MM-YYYY");
    if (dateA.isBefore(dateB)) {
      return 1;
    }
    if (dateB.isBefore(dateA)) {
      return -1;
    }

    return 0;
  });
};

const getAllPosts = () => {
  const fileNames = fs.readdirSync(POSTS_PATH);

  const allPosts = fileNames.map((filename: string): Post => {
    const slug = filename.replace(MDX_PATTERN, "");
    const fullPath = path.join(POSTS_PATH, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data: frontmatter } = matter(fileContents);
    const { title, category, excerpt, publishedAt, popular, isPublished } =
      frontmatter;

    return {
      slug,
      title,
      category,
      excerpt,
      publishedAt,
      popular,
      isPublished,
    };
  });

  const filteredPosts = filterUnpublishedPosts(allPosts);
  const sortedPosts = sortPostsByNewest(filteredPosts);

  return sortedPosts;
};

const generateRSS = () => {
  const posts = getAllPosts();
  const feed = new RSS({
    title: "Frontlive.pl by Olaf Sulich",
    site_url: "https://frontlive.pl",
    feed_url: "https://frontlive.pl/rss.xml",
    language: "pl",
    copyright: "2020 Olaf Sulich",
    webMaster: "Olaf Sulich",
    managingEditor: "Olaf Sulich",
  });

  posts.map(({ slug, title, excerpt, publishedAt, category }: Post) => {
    feed.item({
      title: title,
      guid: slug,
      categories: [category],
      description: excerpt,
      url: `https://frontlive.pl/blog/${slug}`,
      date: new Date(dayjs(publishedAt, "DD-MM-YYYY").format("MM-DD-YYYY")),
      author: "Olaf Sulich",
    });
  });

  const rss = feed.xml({ indent: true });
  fs.writeFileSync("./public/rss.xml", rss);
};

generateRSS();
