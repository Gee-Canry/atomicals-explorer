import { Outlet } from 'react-router-dom'
import Header from '../Header'
import { Pane } from 'evergreen-ui'

function Layout() {
  return (
    <Pane className="w-screen h-screen flex flex-col">
      <Header></Header>
      <div className="px-20 bg-slate-50 flex-1">
        <Outlet />
      </div>
    </Pane>
  )
}

export default Layout
