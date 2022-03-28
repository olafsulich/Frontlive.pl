import { useEffect, useRef } from 'react';
import createGlobe from 'cobe';
import styles from './community.module.scss';
import HashtagIcon from '../../../public/icons/hashtag.svg';

export const Community = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const prefersReducesMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 700 * 2,
      height: 700 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 0,
      mapSamples: 12000,
      mapBrightness: 1,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.4, 0.4, 0.4],
      glowColor: [0.1, 0.1, 0.1],
      markers: [
        // longitude latitude
        { location: [53.01440462995244, 18.595711094458885], size: 0.2 },
        { location: [-23.83191937977045, 134.780421418798], size: 0.05 },
        { location: [40.77908549431273, -73.9673265135487], size: 0.08 },
        { location: [14.899786946599338, 18.867906238625423], size: 0.1 },
        { location: [-28.934461266481744, -58.739516273343185], size: 0.12 },
        { location: [46.53682872207067, 105.63353874686649], size: 0.14 },
        { location: [20.83700653893472, 49.07282338846693], size: 0.08 },
        { location: [0.32050953396923726, 113.69975760382037], size: 0.1 },
        { location: [-15.708535217009219, 38.67420389817698], size: 0.12 },
        { location: [-47.622392594570854, -69.78242488432574], size: 0.14 },
        { location: [68.23641309481363, 61.74891015260419], size: 0.1 },
        { location: [62.874684849756, -105.77062148260667], size: 0.12 },
        { location: [63.50888276916102, -155.8682781437868], size: 0.14 },
      ],
      onRender: (state: any) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        if (!prefersReducesMotion) {
          state.phi = phi;
          phi += 0.0045;
        }
      },
    });

    return () => {
      globe.destroy();
    };
  }, [prefersReducesMotion]);

  return (
    <section className={styles.wrapper}>
      <canvas className={styles.globe} ref={canvasRef} />
      <ul className={styles.list}>
        <li className={styles.item}>
          <HashtagIcon className={styles.icon} />
          TypeScript
          <span className={styles.counter}>8</span>
        </li>
        <li className={styles.item}>
          <HashtagIcon className={styles.icon} />
          React
          <span className={styles.counter}>8</span>
        </li>
        <li className={styles.item}>
          <HashtagIcon className={styles.icon} />
          HTML
          <span className={styles.counter}>8</span>
        </li>
        <li className={styles.item}>
          <HashtagIcon className={styles.icon} />
          CSS
          <span className={styles.counter}>8</span>
        </li>
        <li className={styles.item}>
          <HashtagIcon className={styles.icon} />
          JavaScript
          <span className={styles.counter}>8</span>
        </li>
        <li className={styles.item}>
          <HashtagIcon className={styles.icon} />
          Praca
          <span className={styles.counter}>8</span>
        </li>
        <li className={styles.item}>
          <HashtagIcon className={styles.icon} />
          Architektura
          <span className={styles.counter}>8</span>
        </li>
        <li className={styles.item}>
          <HashtagIcon className={styles.icon} />
          TypeScript
          <span className={styles.counter}>8</span>
        </li>
      </ul>
    </section>
  );
};
