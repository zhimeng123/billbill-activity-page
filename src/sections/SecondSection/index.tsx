import CartoonImage from '../../assets/cartoon.jpg'
import MoviceImage from '../../assets/movie.png'
import LifeImage from '../../assets/life.jpg'
import FoodImage from '../../assets/food.jpg'
import classNames from 'classnames'

import styles from './styles.module.scss'
import { useState } from 'react'


const tabs = [
  {
    key: 'cartoon',
    title: '动画',
  },
  {
    key: 'food',
    title: '美食'
  },
  {
    key: 'movie',
    title: '电影'
  },
  {
    key: 'life',
    title: '生活'
  }
]




const SecondSection = () => {

  const [activeTab, setActiveTab] = useState<String>('cartoon')
  return (
    <div className={styles.secondSection}>
      {/* Tabs */}
      <ul>
        {tabs.map(tab => (
          <li key={tab.key} onClick={() => setActiveTab(tab.key)}>
            <span>{tab.title}</span>
            {/* <span className={''} /> ${activeTab === tab.key && 'visible'} 百度怎么写 */}
            {/* {activeTab === tab.key && <span className={styles.line} />} */}
            <span className={classNames(styles.line, activeTab === tab.key && styles.visible)} />
          </li>
        ))}
      </ul>
      {/* Tab Content */}
      <div>
        <section>
          <h2>动画</h2>
          <img src={CartoonImage} alt="Cartoon" />
        </section>
        <section>
          <h2>美食</h2>
          <img src={FoodImage} alt="Food" />
        </section>
        <section>
          <h2>电影</h2>
          <img src={MoviceImage} alt="Movice" />
        </section>
        <section>
          <h2>生活</h2>
          <img src={LifeImage} alt="Life" />
        </section>
      </div>
    </div>
  )
}

export default SecondSection