import { ReactNode } from 'react'
import styles from './mainlayout.module.scss'
import SideBar from 'src/components/common/SideBar'

interface Props {
  children: ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img src='/images/Woodong_logo.png' alt='woodong_logo' />
      </div>
      <div className={styles.body}>
        <div className={styles.sidebar}>
          <SideBar />
        </div>

        <div className={styles.content}>{children}</div>
      </div>
    </div>
  )
}
