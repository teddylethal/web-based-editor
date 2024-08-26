import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <div
      className='flex h-full min-w-full w-full min-h-full shrink-0 flex-col justify-between bg-lightBg text-darkText duration-200 dark:bg-darkBg dark:text-lightText'
      style={{
        minHeight: 'inherit'
      }}
    >
      <div className='fixed z-20 w-full bg-red-300'>sdfkjhaskdjfhfakjs</div>
      <div className='w-full pt-10 tablet:pt-12 desktop:pt-16 min-h-full'>{children}</div>
    </div>
  )
}
