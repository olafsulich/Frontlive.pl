import { memo, ReactNode } from 'react';
import cn from 'classnames';
import { PostThumbnail } from './postThumbnail/PostThumbnail';
import type { Heading, Post } from '../../../types/types';
import styles from './postsListing.module.scss';
import slugify from 'slugify';

type PostsListingProps = {
  readonly posts: Post[];
  readonly headingTag?: Heading;
  readonly isPrimary?: boolean;
};

export const PostsListing = memo(
  ({ posts, headingTag = 'h3', isPrimary = false }: PostsListingProps) => {
    return (
      <>
        {posts.map(({ slug, title, excerpt }) => (
          <PostThumbnail
            tag={headingTag}
            key={title}
            path={`/blog/${slug}`}
            heading={title}
            excerpt={excerpt}
            isPrimary={isPrimary}
          />
        ))}
      </>
    );
  },
);

PostsListing.displayName = 'PostsListing';
