import { Component, ErrorInfo, ReactNode } from 'react'
import mainPath from 'src/constants/path'

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(): State {
    //? Update state so the next render will show the fallback UI
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    //? You can also log the error to an error reporting service
    console.error('Uncaught error: ', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      //? You can render any custom fallback UI
      return (
        <main className='flex h-screen w-full flex-col items-center justify-center bg-lightBg dark:bg-darkBg'>
          <h1 className='text-9xl font-extrabold tracking-widest text-darkText dark:text-lightText'>500</h1>
          <div className='absolute rotate-12 rounded bg-haretaColor px-2 text-sm capitalize'>Something went wrong</div>
          <button className='mt-5'>
            <a
              href={mainPath.home}
              className='group relative inline-block text-sm font-medium text-haretaColor focus:outline-none focus:ring active:text-orange-500'
            >
              <span className='bg-haretext-haretaColor absolute inset-0 translate-x-0.5 translate-y-0.5 transition-transform group-hover:translate-x-0 group-hover:translate-y-0'></span>

              <span className='relative block rounded-md border border-current bg-[#1A2238] px-8 py-3 hover:bg-haretaColor hover:text-darkText'>
                <span>Go Home</span>
              </span>
            </a>
          </button>
        </main>
      )
    }

    // eslint-disable-next-line react/prop-types
    return this.props.children
  }
}
