import { AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <div
      className='flex h-full min-h-full shrink-0 flex-col justify-between bg-lightBg text-darkText duration-200 dark:bg-darkBg dark:text-lightText'
      style={{
        minHeight: 'inherit'
      }}
    >
      <div className='fixed z-20 w-full'>
        <AnimatePresence>sdfkjhaskdjfhfakjs</AnimatePresence>
      </div>
      <div className='w-full pt-10 tablet:pt-12 desktop:pt-16'>{children}</div>
    </div>
  )
}
