import BannerImage from '../../assets/banner.jpg'
import styles from './styles.module.scss'




const FirstSection = () => {
  return (
    <div className={styles.firstSection}>
      <img src={BannerImage} alt='Banner' />
    </div>
  )
}

export default FirstSection