import React from 'react';
import cn from 'classnames';
import storyHeader from 'public/assets/img/about/story/story-header.png';
import storyBg from 'public/assets/img/about/story/story-bg.png';
import stone from 'public/assets/img/about/story/stone.png';
import arrow from 'public/assets/img/about/story/arrow.png';
import superlotl from 'public/assets/img/about/story/superlotl.png';
import styles from './styles.module.scss';
import mainStyles from './../styles.module.scss';

const Story = () => {
  return (
    <section className={styles.story}>
      <img
        src={storyHeader.src}
        alt=""
        className={styles.storyHeader}
      />
      <img src={storyBg.src} alt="" className={styles.storyBg} />
      <div className={cn(styles.storyContainer, mainStyles.container)}>
        <div className={styles.storyLeftBlock}>
          <img src={stone.src} alt="" className={styles.stone} />
          <h2 className={styles.storyTitle}>
            Return of the Herd: <span>The Full Story</span>
          </h2>
          <strong className={styles.storySubtitle}
          >Please sit here, relax and read our story :)
            <img src={arrow.src} alt="" />
          </strong>
        </div>
        <div className={styles.storyRightBlock}>
          <img src={superlotl.src} alt="" />
          <div className={styles.description}>
            <p>
              <b>Chapter 1</b>
            </p>
            <p>
              Our story begins in a land so prosperous, so filled with color and vibrancy it created a creature not
              found anywhere else in the universe. The Superlotl call Salamansi their home, and the unique biology
              of that home bestowed them with incredible powers. Armed with super healing and regeneration abilities,
              the Superlotl thought they were untouchable.
            </p>
            <p>
              In turn, they told the story of their long, illustrious lives and rich history by marking
              themselves with special tattoos using ink harvested and distilled from their rich waterways.
            </p>
            <p>
              But over time, color started fading from the land. Their once lush landscape became sparse
              and the nutrient-rich water tainted from the activity above their underwater paradise.
              The Superlotls healing powers were no match to the pollution that began to overtake Salamansi,
              their population was weakening.
            </p>
            <p>
              The leader of Salamansi, Elderlotl, had lived through centuries, but never encountered such devastation.
              The Superlotl were running out of options, and their entire existence was now threatened.
            </p>
            <p>
              <b>Chapter 2</b>
            </p>
            <p>
              Coming soon...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
