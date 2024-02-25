import CartoonImage from '../../assets/cartoon.jpg'
import MoviceImage from '../../assets/movie.png'
import LifeImage from '../../assets/life.jpg'
import FoodImage from '../../assets/food.jpg'
import LogoImage from '../../assets/logo.png'
import classNames from 'classnames'

import styles from './styles.module.scss'
import { useEffect, useRef, useState } from 'react'


const tabs = [
  {
    key: 'cartoon',
    title: '动画',
    image: CartoonImage
  },
  {
    key: 'food',
    title: '美食',
    image: FoodImage
  },
  {
    key: 'movie',
    title: '电影',
    image: MoviceImage
  },
  {
    key: 'life',
    title: '生活',
    image: LifeImage
  }
]

const TAB_HEIGHT = 56


const SecondSection = () => {
  const [activeTab, setActiveTab] = useState<String>('cartoon')
  const [isFixed, setIsFixed] = useState<boolean>(false)
  const secondSectionRef = useRef<HTMLDivElement>(null) // 拿到secondsection的DIV


  const Activate = (key: string) => {
    setActiveTab(key)
    const tabContentEl = document.querySelector(`[data-id=${key}]`) // 查找data-id
    if (tabContentEl) {
      tabContentEl.scrollIntoView({ behavior: 'smooth' }) // 跳转 平滑的
    }
  }
  // 吸顶效果  getBoundingClientRect
  const onScroll = () => {
    if (secondSectionRef.current) {
      const { top } = secondSectionRef.current.getBoundingClientRect()
      setIsFixed(top <= 0) // secondsection底部和页面上边界 无距离 true折叠

      const sectionNodes = secondSectionRef.current.querySelectorAll('section') //nodeList
      Array.from(sectionNodes).forEach(sectionEl => {
        const { top } = sectionEl.getBoundingClientRect()
        const key = sectionEl.getAttribute('data-id') || ''
        if (top <= TAB_HEIGHT) {
          setActiveTab(key)
        }
      })
    }
  }
  // 监听全局的window
  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    // 结束监听
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])
  return (
    <div className={styles.secondSection} ref={secondSectionRef}>
      {/* Tabs */}
      <ul className={classNames((isFixed && styles.isFixed))}>
        {tabs.map(tab => (
          <li key={tab.key} onClick={() => Activate(tab.key)}>
            <span>{tab.title}</span>
            {/* <span className={''} /> ${activeTab === tab.key && 'visible'} 百度怎么写 */}
            {/* {activeTab === tab.key && <span className={styles.line} />} */}
            <span className={classNames(styles.line, activeTab === tab.key && styles.visible)} />
          </li>
        ))}
      </ul>
      {/* Tab Content */}
      <div>
        {tabs.map(tab => (
          <section data-id={tab.key}>
            <h2>{tab.title}</h2>
            <img src={tab.image} alt={tab.key} />
          </section>
        ))}
      </div>
      <div className={classNames(styles.btnWrapper, { [styles.visible]: isFixed })}>
        <img src={LogoImage} alt='LOGO' />
        <a href='https://www.bilibili.com/' target='_blank'>
          <button>App内打开</button>
        </a>
      </div>
    </div>
  )
}

export default SecondSection