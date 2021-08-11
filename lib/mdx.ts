import { serialize } from "next-mdx-remote/serialize";
// import remarkAutoLinkHeadings from "remark-autolink-headings";
// import remarkSlug from "remark-slug";
// import mdxPrism from "mdx-prism";
import type { PostFrontmatter } from "../types/types";


const mdxSource = `
---
title: Example Post
published: 2021-02-13
description: This is some description
---

# Wahoo

Here's a **neat** demo:
`.trim();

export const transformMdx = () => {
  return serialize(mdxSource, {
    // scope: frontmatter,
  });
};
