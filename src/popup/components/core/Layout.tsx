import Header from './Header'
import Tabs from './Tabs'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Tabs />
      {children}
    </div>
  )
}

export default Layout
