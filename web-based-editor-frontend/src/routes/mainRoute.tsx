import { Suspense } from 'react'
import { Outlet, RouteObject } from 'react-router-dom'
import LoadingWithEmptyContent from 'src/components/common/LoadingWithEmptyContent'
import MainLayout from 'src/layouts/MainLayout'

function MainRouteWrapper() {
  return (
    <MainLayout>
      <Suspense fallback={<LoadingWithEmptyContent />}>
        <Outlet />
      </Suspense>
    </MainLayout>
  )
}

const MainRoute: RouteObject = {
  path: '',
  element: <MainRouteWrapper />,
  children: []
}

export default MainRoute
