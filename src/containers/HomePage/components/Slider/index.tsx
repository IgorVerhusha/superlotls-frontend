import React, { FC, memo, TouchEvent, useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import { useRouter } from 'next/router';
import teamBackground from 'public/assets/img/home-page/team/background.png';
import { CO_FOUNDERS, SLIDES } from '@constants/home-page';
import mainStyles from './../../styles.module.scss';
import styles from './styles.module.scss';

type Props = {
  pageIsInit: boolean
}

const Slider: FC<Props> = ({pageIsInit}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState<number>();
  const teamSection = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const handleTouchStart = (e: TouchEvent) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };


  const nextSlide = () => {
    if (currentSlide + 1 === SLIDES.length) return;
    setCurrentSlide((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (currentSlide === 0) return;
    setCurrentSlide((prev) => prev - 1);
  };

  const handleTouchMove = (e: TouchEvent) => {
    const touchDown = touchPosition;
    if (touchDown === undefined) {
      return;
    }
    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;
    if (diff > 5) {
      prevSlide();
    }
    if (diff < -5) {
      nextSlide();
    }
    setTouchPosition(undefined);
  };

  useEffect(() => {
    if (pageIsInit && router.asPath === '/#team') {
      teamSection?.current?.scrollIntoView(
        { behavior: 'auto' }
      );
    }
  }, [pageIsInit]);

  return (
    <section ref={teamSection} className={styles.team}>
      <img src={teamBackground.src} alt="" className={styles.teamBackground} />
      <div className={styles.slider} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
        <div className={styles.sliderWrapper}>
          {SLIDES.map((item, index) => <img
            key={index}
            className={cn(styles.slide,
              {
                [styles.active]: index === currentSlide,
                [styles.center]: index === currentSlide + 1,
                [styles.left]: index === currentSlide + 2,
                [styles.none]: index === currentSlide - 1,
              }
            )} src={item.src} alt=""
          />)}
        </div>
      </div>
      <div className={styles.capsule}>
        <video autoPlay loop playsInline muted>
          <source
            src="/assets/img/home-page/team/ezgif.com-gif-maker.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className={cn(styles.teamContainer, mainStyles.container)}>
        <h2 className={styles.teamTitle}>The Team</h2>
        <div className={styles.rightBlock}>
          <div className={styles.buttonContainer}>
            <button className={cn(styles.button,
              { [styles.active]: currentSlide === 0 }
            )} onClick={prevSlide}>
              <img src="/assets/img/home-page/team/button-arrow.svg" alt="" />
            </button>
            <button className={cn(styles.button,
              { [styles.active]: currentSlide + 1 === SLIDES.length })} onClick={nextSlide}>
              <img src="/assets/img/home-page/team/button-arrow.svg" alt="" />
            </button>
          </div>
          {CO_FOUNDERS.map((item, index) => {
            return (<div key={item.name} className={cn(styles.founders, { [styles.show]: index === currentSlide })}>
                <span>{item.name}</span>
                <strong>{item.position}</strong>
                <p>
                  {item.description}
                </p>
                <div className={styles.social}>
                  {item.linkedin && <a href={item.linkedin}>
                      <svg
                              width="46"
                              height="46"
                              viewBox="0 0 46 46"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                      >
                          <circle cx="23" cy="23" r="23" />
                          <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M20.5279 19.0857H24.0991V20.8646C24.6135 19.8415 25.9327 18.9223 27.9145 18.9223C31.7135 18.9223 32.6154 20.9588 32.6154 24.6953V31.6155H28.7693V25.5463C28.7693 23.4184 28.2548 22.2184 26.9452 22.2184C25.1289 22.2184 24.3741 23.5117 24.3741 25.5453V31.6155H20.5279V19.0857ZM13.9327 31.4521H17.7789V18.9223H13.9327V31.4521ZM18.3298 14.8367C18.33 15.1591 18.266 15.4783 18.1417 15.7757C18.0174 16.0732 17.8353 16.343 17.6058 16.5694C17.1408 17.0315 16.5114 17.2902 15.8558 17.2886C15.2014 17.2882 14.5734 17.0301 14.1077 16.5703C13.8791 16.3431 13.6975 16.0731 13.5734 15.7756C13.4494 15.4781 13.3852 15.159 13.3846 14.8367C13.3846 14.1857 13.6443 13.5627 14.1087 13.103C14.574 12.6426 15.2022 12.3845 15.8568 12.3848C16.5125 12.3848 17.1414 12.6434 17.6058 13.103C18.0693 13.5627 18.3298 14.1857 18.3298 14.8367Z"
                                  fill="#235DC0"
                          />
                      </svg>
                  </a>}
                  {item.twitter && <a href={item.twitter}>
                      <svg
                              width="46"
                              height="46"
                              viewBox="0 0 46 46"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                      >
                          <circle cx="23" cy="23" r="23" />
                          <path
                                  d="M33.6727 16.5256C32.9073 16.8648 32.0851 17.0939 31.2206 17.1975C32.1126 16.6638 32.7798 15.8239 33.098 14.8344C32.26 15.3321 31.3429 15.6825 30.3865 15.8702C29.7433 15.1835 28.8914 14.7283 27.9631 14.5754C27.0348 14.4224 26.0819 14.5803 25.2524 15.0243C24.423 15.4684 23.7633 16.1739 23.3759 17.0313C22.9885 17.8887 22.895 18.8501 23.11 19.766C21.412 19.6808 19.751 19.2394 18.2346 18.4707C16.7183 17.7019 15.3805 16.6229 14.3081 15.3037C13.9415 15.9362 13.7306 16.6695 13.7306 17.4505C13.7302 18.1536 13.9034 18.8459 14.2347 19.466C14.566 20.0862 15.0453 20.6149 15.63 21.0054C14.9519 20.9838 14.2888 20.8006 13.6958 20.4709V20.5259C13.6957 21.512 14.0368 22.4678 14.6612 23.231C15.2856 23.9943 16.1548 24.518 17.1214 24.7133C16.4924 24.8835 15.8329 24.9086 15.1927 24.7866C15.4654 25.6351 15.9966 26.3771 16.712 26.9086C17.4273 27.4402 18.291 27.7348 19.1821 27.7511C17.6694 28.9386 15.8013 29.5827 13.8782 29.5799C13.5376 29.58 13.1972 29.5601 12.8589 29.5203C14.8109 30.7754 17.0832 31.4415 19.4039 31.4389C27.2597 31.4389 31.5543 24.9324 31.5543 19.2894C31.5543 19.106 31.5497 18.9209 31.5415 18.7375C32.3768 18.1334 33.0979 17.3854 33.6709 16.5284L33.6727 16.5256Z"
                                  fill="#235DC0"
                          />
                      </svg>
                  </a>}
                  {item.site && <a href={item.site}>
                      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="19" cy="19" r="19" fill="white" />
                          <g clipPath="url(#clip0_1091_6351)">
                              <path
                                      d="M14.8696 18.9004C14.8722 19.7696 14.9691 20.6352 15.1582 21.478H18.174V16.5215H15.1163C14.9554 17.3017 14.8727 18.0996 14.8696 18.9004Z"
                                      fill="#0D4B9E" />
                              <path
                                      d="M19.8262 16.5215V21.478H22.8209C23.0164 20.6363 23.1204 19.7707 23.1305 18.9004C23.129 18.0998 23.0484 17.3019 22.8902 16.5215H19.8262Z"
                                      fill="#0D4B9E" />
                              <path
                                      d="M19 9.91309C17.2028 9.91309 15.4459 10.446 13.9516 11.4445C12.4573 12.443 11.2926 13.8622 10.6048 15.5226C9.91702 17.183 9.73707 19.0101 10.0877 20.7728C10.4383 22.5355 11.3038 24.1547 12.5746 25.4255C13.8454 26.6963 15.4646 27.5618 17.2273 27.9124C18.99 28.263 20.817 28.0831 22.4775 27.3953C24.1379 26.7075 25.5571 25.5428 26.5556 24.0485C27.5541 22.5541 28.087 20.7973 28.087 19C28.087 16.59 27.1296 14.2787 25.4255 12.5746C23.7214 10.8705 21.4101 9.91309 19 9.91309ZM25.9402 22.8109H23.8843C23.4956 24.0279 22.9208 25.1773 22.1805 26.2185C21.6342 26.4566 21.0626 26.6319 20.4767 26.741C21.5259 25.6009 22.3335 24.2601 22.8506 22.7995H19.4885V26.8603H18.5287V22.8109H15.1494C15.6659 24.2735 16.4735 25.6162 17.5234 26.758C16.9496 26.6501 16.3896 26.4787 15.8537 26.2469C15.1107 25.197 14.5359 24.0378 14.1499 22.8109H12.0599C11.8785 22.4799 11.7209 22.1364 11.5885 21.7829H13.8602C13.6474 20.8704 13.5369 19.937 13.5308 19C13.5311 18.1315 13.6225 17.2654 13.8034 16.4159H11.4806C11.6 16.0635 11.7443 15.72 11.9122 15.388H14.0761C14.4821 14.0357 15.1117 12.7611 15.9389 11.6169C16.4634 11.3995 17.0099 11.2396 17.5688 11.1398C16.439 12.3524 15.5864 13.7961 15.0699 15.3709H18.5287V11.049H19.4885V15.388H22.9472C22.4317 13.8157 21.581 12.374 20.454 11.1625C21.012 11.2551 21.5585 11.4074 22.0839 11.6169C22.9063 12.7528 23.5339 14.0176 23.9411 15.3596H26.0822C26.2501 15.6916 26.3944 16.0351 26.5138 16.3875H24.208C24.3928 17.2461 24.4861 18.1218 24.4863 19C24.4834 19.9425 24.3748 20.8817 24.1626 21.8H26.4343C26.2938 22.1482 26.1287 22.4861 25.9402 22.8109Z"
                                      fill="#0D4B9E" />
                          </g>
                          <defs>
                              <clipPath id="clip0_1091_6351">
                                  <rect width="18.1739" height="18.1739" fill="white"
                                          transform="translate(9.91309 9.91309)" />
                              </clipPath>
                          </defs>
                      </svg>
                  </a>}

                </div>
              </div>
            );
          })
          }
        </div>
      </div>
    </section>
  );
};

export default memo(Slider);
