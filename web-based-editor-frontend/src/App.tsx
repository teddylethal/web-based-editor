import 'react-toastify/dist/ReactToastify.css'
import { createContext, useContext, useEffect } from 'react'
import { LocalStorageEventTarget } from './utils/auth'
import { AppContext, AppProvider } from './contexts/app.context'
import classNames from 'classnames'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import ScrollToTop from './ScrollToTop'
import useRouteElements from './hooks/useRouteElements'
import { ToastContainer } from 'react-toastify'
import ErrorBoundary from './components/common/ErrorBoundary'
import LoadingPage from './components/common/LoadingPage'
import { EditorProvider } from './contexts/editor.context'

export type ThemeContextType = 'light' | 'dark'
export const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => {}
})

function AppInner() {
  const { handleLogout, loadingPage, theme } = useContext(AppContext)

  const routeElements = useRouteElements()

  useEffect(() => {
    const resetFunction = () => {
      handleLogout()
    }
    LocalStorageEventTarget.addEventListener('clearLS', resetFunction)
    return () => {
      LocalStorageEventTarget.removeEventListener('clearLS', resetFunction)
    }
  }, [handleLogout])

  return (
    <div
      className={classNames('w-full', theme === 'dark' ? 'dark' : 'light')}
      style={{
        minHeight: 'inherit'
      }}
    >
      {routeElements}
      <ToastContainer
        position='top-right'
        autoClose={3000}
        limit={3}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme={theme === 'dark' ? 'dark' : 'light'}
      />
      {loadingPage && <LoadingPage />}
    </div>
  )
}

function App() {
  return (
    <ScrollToTop>
      <AppProvider>
        <EditorProvider>
          <ErrorBoundary>
            <AppInner />
          </ErrorBoundary>
        </EditorProvider>
      </AppProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </ScrollToTop>
  )
}

export default App
