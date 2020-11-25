const path = require('path');
const readingTime = require('reading-time');
const mdxPrism = require('mdx-prism');
const withMdxEnhanced = require('next-mdx-enhanced');
const remarkAutoLinkHeadings = require('remark-autolink-headings');
const remarkSlug = require('remark-slug');
const remarkCodeTitles = require('remark-code-titles');

module.exports = {
  // remarkPlugins: [remarkAutoLinkHeadings, remarkSlug, remarkCodeTitles],
  // rehypePlugins: [mdxPrism],
  // extendFrontMatter: {
  //   process: (mdxContent) => ({
  //     wordCount: mdxContent.split(/\s+/gu).length,
  //     readingTime: readingTime(mdxContent),
  //   }),
  // },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
