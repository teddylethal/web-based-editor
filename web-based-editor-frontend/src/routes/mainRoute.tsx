import { Suspense } from 'react'
import { Outlet, RouteObject } from 'react-router-dom'
import LoadingWithEmptyContent from 'src/components/common/LoadingWithEmptyContent'
import mainPath from 'src/constants/path'
import MainLayout from 'src/layouts/MainLayout'
import Workspace from 'src/pages/Workspace'

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
  children: [{ path: mainPath.myWorkspace, element: <Workspace /> }]
}

export default MainRoute
