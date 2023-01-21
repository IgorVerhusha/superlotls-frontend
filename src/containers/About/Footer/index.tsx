import React from 'react';
import cn from 'classnames';
import background from 'public/assets/img/about/footer/background.png';
import styles from './styles.module.scss';
import mainStyles from './../styles.module.scss';

const Index = () => {
  return (
    <footer className={styles.footer}>
      <img src={background.src} alt="" className={styles.footerBg} />
      <div className={cn(styles.footerContainer, mainStyles.container)}>
        <div className={styles.footerLeftBlock}>
          <h2 className={styles.footerTitle}>
            Any Questions? Please Contact <img src="assets/img/about/footer/arrow.svg" alt="" />
          </h2>
          <strong className={styles.footerSubtitle}
          >or send a DM to our founding team, we don’t bite!*a<a href="#"
          >Check Team</a
          ></strong
          >
        </div>
        <a href="mailto:superlotls@getinkbox.com" className={styles.footerMail}
        ><img
          src="assets/img/about/footer/mail.svg"
          alt=""
        />superlotls@getinkbox.com</a
        >
      </div>
      <div className={cn(styles.socialContainer, mainStyles.container)}>
        <div className={styles.socialLeftBlock}>
          <span>TERMS & CONDITIONS</span>
          <span>PRIVACY POLICY</span>
        </div>
        <a href="https://niftables.com" target="_blank" rel="noreferrer">
          <img src="assets/img/home-page/footer/poweredby.svg" alt="" className={styles.socialLogo} />
        </a>
        <div className={styles.social}>
          <a href="https://discord.gg/8aTE9GTsAT" target="_blank" rel="noreferrer">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20" cy="20" r="20" fill="white" />
              <path
                d="M27.1868 12.9974C25.8289 12.3305 24.3923 11.8567 22.9151 11.5884C22.7311 11.9376 22.5161 12.4072 22.3678 12.7808C20.7751 12.5294 19.197 12.5294 17.6335 12.7808C17.4854 12.4073 17.2655 11.9376 17.0798 11.5884C15.6011 11.8568 14.1633 12.3318 12.8048 13.0009C10.1014 17.2888 9.36849 21.4701 9.73489 25.5923C11.528 26.9977 13.2656 27.8515 14.974 28.4102C15.3986 27.7974 15.7739 27.1485 16.0961 26.4704C15.4827 26.2253 14.8914 25.9233 14.3292 25.5678C14.4771 25.4527 14.6216 25.3328 14.7624 25.2081C18.1693 26.8807 21.8711 26.8807 25.2374 25.2081C25.3788 25.332 25.5233 25.4519 25.6706 25.5678C25.1074 25.9242 24.515 26.2269 23.9004 26.4722C24.2244 27.1531 24.599 27.8025 25.0225 28.4119C26.7325 27.8533 28.4718 26.9995 30.2648 25.5923C30.6948 20.8137 29.5304 16.6707 27.1868 12.9973V12.9974ZM16.5603 23.0573C15.5375 23.0573 14.6988 22.0551 14.6988 20.8347C14.6988 19.6143 15.5197 18.6105 16.5603 18.6105C17.601 18.6105 18.4397 19.6126 18.4218 20.8347C18.4234 22.0551 17.601 23.0573 16.5603 23.0573ZM23.4394 23.0573C22.4167 23.0573 21.578 22.0551 21.578 20.8347C21.578 19.6143 22.3988 18.6105 23.4394 18.6105C24.4801 18.6105 25.3188 19.6126 25.3009 20.8347C25.3009 22.0551 24.4801 23.0573 23.4394 23.0573Z"
                fill="#5865F2"
              />
            </svg>
          </a>
          <a href="https://twitter.com/superlotls" target="_blank">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20" cy="20" r="20" fill="white" />
              <path
                d="M30.0832 13.7072C29.3416 14.0379 28.5449 14.2614 27.7073 14.3624C28.5715 13.842 29.218 13.0229 29.5263 12.058C28.7144 12.5433 27.8258 12.885 26.8991 13.0681C26.2759 12.3984 25.4506 11.9546 24.5511 11.8054C23.6516 11.6563 22.7284 11.8102 21.9247 12.2432C21.121 12.6763 20.4819 13.3643 20.1066 14.2004C19.7312 15.0365 19.6406 15.9739 19.8488 16.8671C18.2037 16.784 16.5943 16.3536 15.1251 15.604C13.6559 14.8543 12.3597 13.8021 11.3207 12.5156C10.9654 13.1324 10.7611 13.8475 10.7611 14.6091C10.7608 15.2948 10.9285 15.9699 11.2495 16.5746C11.5706 17.1793 12.0349 17.6949 12.6014 18.0757C11.9444 18.0546 11.3019 17.876 10.7274 17.5545V17.6082C10.7273 18.5698 11.0578 19.5018 11.6628 20.246C12.2678 20.9903 13.11 21.501 14.0465 21.6915C13.437 21.8575 12.798 21.8819 12.1778 21.763C12.442 22.5904 12.9567 23.3139 13.6498 23.8323C14.3429 24.3507 15.1797 24.6379 16.0431 24.6538C14.5774 25.8118 12.7674 26.4399 10.9041 26.4372C10.5741 26.4373 10.2443 26.4179 9.9165 26.3791C11.8078 27.603 14.0095 28.2525 16.258 28.25C23.8696 28.25 28.0306 21.9051 28.0306 16.4023C28.0306 16.2235 28.0262 16.043 28.0182 15.8642C28.8276 15.2751 29.5262 14.5456 30.0814 13.7099L30.0832 13.7072Z"
                fill="#1D9BF0"
              />
            </svg>
          </a>
          <a href="https://www.instagram.com/superlotls" target="_blank">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">

              <circle cx="20" cy="20" r="20" fill="white" />
              <path
                d="M29.1078 16.2447C29.0975 15.4749 28.9532 14.7128 28.6812 13.9924C28.4454 13.3847 28.0852 12.8329 27.6236 12.3721C27.1621 11.9113 26.6093 11.5517 26.0006 11.3163C25.2883 11.0493 24.5358 10.905 23.7752 10.8894C22.7958 10.8457 22.4853 10.8335 19.9991 10.8335C17.513 10.8335 17.1944 10.8335 16.2221 10.8894C15.4618 10.9051 14.7096 11.0494 13.9976 11.3163C13.3889 11.5516 12.8361 11.9111 12.3745 12.3719C11.9129 12.8327 11.5527 13.3847 11.3171 13.9924C11.0492 14.703 10.9049 15.454 10.8905 16.2132C10.8467 17.1919 10.8335 17.5019 10.8335 19.9839C10.8335 22.4659 10.8335 22.783 10.8905 23.7546C10.9058 24.5149 11.0493 25.265 11.3171 25.9775C11.5531 26.585 11.9136 27.1367 12.3753 27.5973C12.837 28.0579 13.3899 28.4173 13.9987 28.6525C14.7087 28.9302 15.461 29.0849 16.2231 29.1099C17.2035 29.1536 17.514 29.1668 20.0002 29.1668C22.4863 29.1668 22.8049 29.1668 23.7772 29.1099C24.5378 29.095 25.2904 28.951 26.0027 28.6841C26.6112 28.4483 27.1638 28.0886 27.6253 27.6279C28.0868 27.1671 28.4471 26.6154 28.6832 26.0079C28.951 25.2965 29.0945 24.5464 29.1098 23.7851C29.1536 22.8074 29.1668 22.4974 29.1668 20.0144C29.1648 17.5324 29.1648 17.2173 29.1078 16.2447ZM19.993 24.6775C17.3929 24.6775 15.2865 22.5746 15.2865 19.9788C15.2865 17.383 17.3929 15.2801 19.993 15.2801C21.2413 15.2801 22.4384 15.7752 23.321 16.6563C24.2037 17.5375 24.6996 18.7326 24.6996 19.9788C24.6996 21.225 24.2037 22.4201 23.321 23.3013C22.4384 24.1825 21.2413 24.6775 19.993 24.6775ZM24.8869 16.202C24.7427 16.2021 24.5999 16.1739 24.4667 16.1188C24.3335 16.0638 24.2125 15.9831 24.1105 15.8814C24.0086 15.7796 23.9278 15.6588 23.8727 15.5258C23.8176 15.3928 23.7893 15.2502 23.7894 15.1063C23.7894 14.9625 23.8178 14.8201 23.8729 14.6872C23.928 14.5544 24.0088 14.4336 24.1107 14.3319C24.2126 14.2303 24.3335 14.1496 24.4666 14.0945C24.5997 14.0395 24.7423 14.0112 24.8864 14.0112C25.0304 14.0112 25.1731 14.0395 25.3062 14.0945C25.4393 14.1496 25.5602 14.2303 25.662 14.3319C25.7639 14.4336 25.8447 14.5544 25.8998 14.6872C25.955 14.8201 25.9833 14.9625 25.9833 15.1063C25.9833 15.7121 25.4926 16.202 24.8869 16.202Z"
                fill="url(#paint0_radial_1432_6645)" />
              <path
                d="M29.1078 16.2447C29.0975 15.4749 28.9532 14.7128 28.6812 13.9924C28.4454 13.3847 28.0852 12.8329 27.6236 12.3721C27.1621 11.9113 26.6093 11.5517 26.0006 11.3163C25.2883 11.0493 24.5358 10.905 23.7752 10.8894C22.7958 10.8457 22.4853 10.8335 19.9991 10.8335C17.513 10.8335 17.1944 10.8335 16.2221 10.8894C15.4618 10.9051 14.7096 11.0494 13.9976 11.3163C13.3889 11.5516 12.8361 11.9111 12.3745 12.3719C11.9129 12.8327 11.5527 13.3847 11.3171 13.9924C11.0492 14.703 10.9049 15.454 10.8905 16.2132C10.8467 17.1919 10.8335 17.5019 10.8335 19.9839C10.8335 22.4659 10.8335 22.783 10.8905 23.7546C10.9058 24.5149 11.0493 25.265 11.3171 25.9775C11.5531 26.585 11.9136 27.1367 12.3753 27.5973C12.837 28.0579 13.3899 28.4173 13.9987 28.6525C14.7087 28.9302 15.461 29.0849 16.2231 29.1099C17.2035 29.1536 17.514 29.1668 20.0002 29.1668C22.4863 29.1668 22.8049 29.1668 23.7772 29.1099C24.5378 29.095 25.2904 28.951 26.0027 28.6841C26.6112 28.4483 27.1638 28.0886 27.6253 27.6279C28.0868 27.1671 28.4471 26.6154 28.6832 26.0079C28.951 25.2965 29.0945 24.5464 29.1098 23.7851C29.1536 22.8074 29.1668 22.4974 29.1668 20.0144C29.1648 17.5324 29.1648 17.2173 29.1078 16.2447ZM19.993 24.6775C17.3929 24.6775 15.2865 22.5746 15.2865 19.9788C15.2865 17.383 17.3929 15.2801 19.993 15.2801C21.2413 15.2801 22.4384 15.7752 23.321 16.6563C24.2037 17.5375 24.6996 18.7326 24.6996 19.9788C24.6996 21.225 24.2037 22.4201 23.321 23.3013C22.4384 24.1825 21.2413 24.6775 19.993 24.6775ZM24.8869 16.202C24.7427 16.2021 24.5999 16.1739 24.4667 16.1188C24.3335 16.0638 24.2125 15.9831 24.1105 15.8814C24.0086 15.7796 23.9278 15.6588 23.8727 15.5258C23.8176 15.3928 23.7893 15.2502 23.7894 15.1063C23.7894 14.9625 23.8178 14.8201 23.8729 14.6872C23.928 14.5544 24.0088 14.4336 24.1107 14.3319C24.2126 14.2303 24.3335 14.1496 24.4666 14.0945C24.5997 14.0395 24.7423 14.0112 24.8864 14.0112C25.0304 14.0112 25.1731 14.0395 25.3062 14.0945C25.4393 14.1496 25.5602 14.2303 25.662 14.3319C25.7639 14.4336 25.8447 14.5544 25.8998 14.6872C25.955 14.8201 25.9833 14.9625 25.9833 15.1063C25.9833 15.7121 25.4926 16.202 24.8869 16.202Z"
                fill="url(#paint1_radial_1432_6645)" />
              <path
                d="M19.993 23.031C21.6815 23.031 23.0503 21.6645 23.0503 19.9788C23.0503 18.2932 21.6815 16.9267 19.993 16.9267C18.3046 16.9267 16.9358 18.2932 16.9358 19.9788C16.9358 21.6645 18.3046 23.031 19.993 23.031Z"
                fill="url(#paint2_radial_1432_6645)" />
              <path
                d="M19.993 23.031C21.6815 23.031 23.0503 21.6645 23.0503 19.9788C23.0503 18.2932 21.6815 16.9267 19.993 16.9267C18.3046 16.9267 16.9358 18.2932 16.9358 19.9788C16.9358 21.6645 18.3046 23.031 19.993 23.031Z"
                fill="url(#paint3_radial_1432_6645)" />

              <defs>
                <radialGradient id="paint0_radial_1432_6645" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(26.3252 31.6418) rotate(-115.776) scale(25.0009 37.1859)">
                  <stop offset="0.24392" stopColor="#FF1B90" />
                  <stop offset="0.436673" stopColor="#F80261" />
                  <stop offset="0.688476" stopColor="#ED00C0" />
                  <stop offset="0.776787" stopColor="#C500E9" />
                  <stop offset="0.893155" stopColor="#7017FF" />
                </radialGradient>
                <radialGradient id="paint1_radial_1432_6645" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(17.4793 28.5343) rotate(-57.4396) scale(10.8326 11.2675)">
                  <stop stopColor="#FFD600" />
                  <stop offset="0.484375" stopColor="#FF6930" />
                  <stop offset="0.734375" stopColor="#FE3B36" />
                  <stop offset="1" stopColor="#FE3B36" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="paint2_radial_1432_6645" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(26.3252 31.6418) rotate(-115.776) scale(25.0009 37.1859)">
                  <stop offset="0.24392" stopColor="#FF1B90" />
                  <stop offset="0.436673" stopColor="#F80261" />
                  <stop offset="0.688476" stopColor="#ED00C0" />
                  <stop offset="0.776787" stopColor="#C500E9" />
                  <stop offset="0.893155" stopColor="#7017FF" />
                </radialGradient>
                <radialGradient id="paint3_radial_1432_6645" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(17.4793 28.5343) rotate(-57.4396) scale(10.8326 11.2675)">
                  <stop stopColor="#FFD600" />
                  <stop offset="0.484375" stopColor="#FF6930" />
                  <stop offset="0.734375" stopColor="#FE3B36" />
                  <stop offset="1" stopColor="#FE3B36" stopOpacity="0" />
                </radialGradient>
                <clipPath id="clip0_1432_6645">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>

          </a>
        </div>
      </div>
    </footer>
  );
};

export default Index;
