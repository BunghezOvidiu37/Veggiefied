import React from 'react';
import stylesPage from '../../../styles/Components/Navigation/Footer.module.scss';
import styles from '../../../styles/Components/Navigation/Cow.module.scss';

export default function FooterIcons() {
  return (
    <div className={stylesPage.footerContainer}>
      <div className={styles.cow}>
        <div className={styles.cow__head}>
          <div className={styles.eyes}></div>
          <div className={styles.eyes}></div>
          <div className={styles.earLeft}>
            <div className={styles.innerEar}></div>
          </div>
          <div className={styles.earRight}>
            <div className={styles.innerEar}></div>
          </div>
        </div>
        <div className={styles.cow__mouth}>
          <div className={styles.nostrils}></div>
          <div className={styles.nostrils}></div>
          <div className={styles.grassOne}></div>
          <div className={styles.grassTwo}></div>
        </div>
      </div>
    </div>
  );
}
