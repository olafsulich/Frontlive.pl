import { memo } from 'react';
import { Heading } from 'components/shared/components/heading/Heading';
import { ProjectsListing } from './projectsListing/ProjectsListing';
import styles from './portfolio.module.scss';

type Variant = 'blue' | 'green' | 'orange' | 'yellow' | 'purple' | 'black';

type Project = {
  title: string;
  excerpt: string;
  path: string;
  image: string;
  variant: Variant;
  technologies: string[];
  slug: string;
};

type PortfolioProps = {
  projects: Project[];
};

export const Portfolio = memo<PortfolioProps>(({ projects }) => (
  <main className={styles.wrapper}>
    <Heading tag="h1" variant="primary" className={styles.heading}>
      Portfolio
    </Heading>
    <ProjectsListing projects={projects} />
  </main>
));
