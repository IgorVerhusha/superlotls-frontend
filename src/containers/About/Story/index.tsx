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
              Our story begins in a land so prosperous, so filled with color
              and vibrancy, it created a creature not found anywhere else in
              the universe. The Superlotls call Salamansi their home, and the
              unique biology of that home bestowed them with incredible
              powers. Armed with super healing and regeneration abilities, the
              Superherd thought they were untouchable.
            </p>
            <p>
              In turn, they told the story of their long, illustrious lives
              and history by marking themselves withspecial tattoos using ink
              harvested and forged from their rich waterways.
            </p>
            <p>
              But over time, color started fading from the land. Their once
              lush landscape became sparse and the nutrient-rich water tainted
              from the activity above their underwater paradise. The
              Superherd’s healing powers were no match to the pollution that
              began to overtake Salamansi, their population was weakening.
            </p>
            <p>
              The leader of Salamansi, Elderlotl, had lived through centuries,
              but never encountered such devastation. His creatures were
              running out of options. That is until he remembered… the ink.
            </p>
            <p>
              The last bastion of their world that once was, the ink from
              their mysteriously powerful tattoos was derived from the fertile
              waters of a lively Salamansi.
            </p>
            <p>
              Elderlotl gathered the weakened Superlotls and instructed them
              to connect tattoo to tattoo, using the last of their strength to
              combine their super healing ability with the potential power
              stored in the ink.
            </p>
            <p>
              In one long chain, what was left of the Superherd joined
              together, the ground began to rumble from their combined
              strength. Cries rang out from the herd as they thought they
              could take no more, then, they noticed something. Every single
              Superlotl’s tattoo had a unique impact that brought a special
              power to restore the entire herd. Their breathing became
              steadier, and maybe it was their eyes playing tricks, but tinges
              of color started to return to the land around them.
            </p>
            <p>
              While not fully restored to the verdant utopia of decades past,
              they had unlocked the secret to healing. Now they had to take
              advantage… and fast.
            </p>
            <p>
              Help the Superherd grow their population, ink their future, and
              return peace to Salamansi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
