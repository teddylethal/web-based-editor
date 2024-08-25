import { useRoutes } from 'react-router-dom'
import mainPath from 'src/constants/path'
import MainLayout from 'src/layouts/MainLayout'
import HomePage from 'src/pages/HomePage'
import MainRoute from 'src/routes/mainRoute'
export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: mainPath.home,
      element: (
        <MainLayout>
          <HomePage />
        </MainLayout>
      )
    },
    {
      path: '',
      children: [MainRoute]
    }
  ])
  return routeElements
}
