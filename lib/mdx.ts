import { bundleMDX } from 'mdx-bundler';
import fs from 'fs';
import path from 'path';
import remarkPrism from 'remark-prism';
import remarkGfm from 'remark-gfm';
import { remarkCodeHike } from '@code-hike/mdx';

const ROOT_PATH = process.cwd();
const POSTS_PATH = path.join(ROOT_PATH, 'content');

export async function loadMDX(source: string) {
  const loadedTheme = await import(`../theme.json`).then((module) => module.default);

  const bundle = await bundleMDX<{ title: string }>({
    source,
    globals: { image: 'image' },
    xdmOptions(options) {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        [remarkCodeHike, { theme: loadedTheme }],
      ];
      return options;
    },
  });

  return bundle;
}

export const getPost = async (slug: string) => {
  const source = fs.readFileSync(path.join(POSTS_PATH, `${slug}.mdx`), 'utf-8');

  const { code, frontmatter } = await loadMDX(source);

  return { frontmatter, code };
};
