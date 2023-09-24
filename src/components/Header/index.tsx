import { NavLink } from 'react-router-dom'
import { Pane } from 'evergreen-ui'

function Header() {
  return (
    <Pane className="w-screen flex items-center px-10 py-4 border-b border-gray-200">
      <div className="w-64">
        <div className="w-32 h-8 bg-green-600"></div>
      </div>
      <div className="text-base flex-1">
        <NavLink className="px-6" to="/token">Token</NavLink>
        <NavLink className="px-6" to="/account">Account</NavLink>
        <NavLink className="px-6" to="/nft">NFT</NavLink>
      </div>
    </Pane>
  )
}

export default Header
