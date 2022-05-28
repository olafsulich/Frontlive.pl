import React from 'react';
import {
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  useMatches,
  KBarResults,
  useRegisterActions,
} from 'kbar';
import cn from 'classnames';
import FocusTrap from 'focus-trap-react';
import styles from './kbar.module.scss';
import { KbarHeaderBrowser } from './kbarHeaderBrowser/KbarHeaderBrowser';
import { KbarInput } from './kbarInput/KbarInput';
import { useSocialActions } from './hooks/useSocialActions';
import { useNavActions } from './hooks/useNavActions';
import { usePostsActions } from './hooks/usePostsActions';
import { useHelperActions } from './hooks/useHelperActions';

export const Kbar = () => {
  const { results } = useMatches();
  useNavActions();
  useHelperActions();
  useSocialActions();
  usePostsActions();

  const getKBarMaxHeight = () => {
    if (typeof window !== 'undefined') {
      const TABLET_MINIMUM_WIDTH = 639;
      const KBAR_HEADER_HEIGHT = 120;

      return document.documentElement.clientWidth < TABLET_MINIMUM_WIDTH
        ? window.innerHeight - KBAR_HEADER_HEIGHT
        : undefined;
    }

    return undefined;
  };

  return (
    <KBarPortal>
      <FocusTrap>
        <div id="kbar-navigation" className={styles.wrapper}>
          <KBarPositioner className={styles.positioner}>
            <KBarAnimator className={styles.animator}>
              <KbarHeaderBrowser />
              <KbarInput />
              <KBarResults
                maxHeight={getKBarMaxHeight()}
                items={results}
                onRender={({ item, active }) =>
                  typeof item === 'string' ? (
                    <div className={styles.group}>{item}</div>
                  ) : (
                    <div className={styles.itemWrapper}>
                      <div
                        className={cn(styles.item, {
                          [styles.itemActive]: active,
                        })}
                      >
                        <div className={styles.nameWrapper}>
                          {item.icon && <div className={styles.icon}>{item.icon}</div>}
                          {item.name}
                        </div>
                        {item.shortcut && <kbd className={styles.shortcut}>{item.shortcut}</kbd>}
                      </div>
                    </div>
                  )
                }
              />
            </KBarAnimator>
          </KBarPositioner>
        </div>
      </FocusTrap>
    </KBarPortal>
  );
};
