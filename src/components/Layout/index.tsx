import { NavLink, Outlet } from 'react-router-dom'
import Header from '../Header'
import { Pane } from 'evergreen-ui'

function Layout() {
  return (
    <Pane width="100vw" height="100vh">
      <Header></Header>
      <div>

        <Outlet />
      </div>
    </Pane>
  )
}

export default Layout
