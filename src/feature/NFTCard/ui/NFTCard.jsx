import { iconClock, iconEthereum, iconViews, imageAvatar, imageEquilibrium } from '../../../shared/assets';
import styles from './NFTCard.module.css';

export function NFTCard() {
  return (
    <article className={styles.nft}>
      <a href='/' className={styles.nft__image_container}>
        <img src={imageEquilibrium}  alt="Equilibrium #3429 preview" className={styles.nft__img} />
        <div className={styles.nft__overlay}>
          <img src={iconViews} alt="" aria-hidden="true"/>
        </div>
      </a>
      <h2 className={styles.nft__title}>
        <a className={styles.nft_link} href="/">Equilibrium #3429</a>
      </h2>
      <p className={styles.nft__text}>
        Our Equilibrium collection promotes balance and calm.
      </p>
      <div className={styles.nft__info}>
        <div className={`${styles.nft__price} ${styles.nft__info_leveling}`}>
          <img src={iconEthereum} alt="" aria-hidden="true" />
          0.041 ETH
        </div>
        <div className={styles.nft__info_leveling}>
          <img src={iconClock} alt="" aria-hidden="true" />
          3 days left
        </div>
      </div>
      <hr className={styles.nft__separation}/>
      <div className={styles.nft__creator}>
        <img className={styles.nft__creator_avatar} src={imageAvatar} alt="Avatar image" />
        <p>Creation of <a className={styles.nft_link} href="/">Jules Wyvern</a></p>
      </div>
    </article>
  );
}