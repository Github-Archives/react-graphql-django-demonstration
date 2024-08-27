import Header from "../components/Header"
import Footer from "../components/Footer"
import "./MainLayout.css"

const MainLayout = ({ children }) => (
  <div className="main-layout">
    {/* <Header /> */}
    <div className="content">{children}</div>
    {/* <Footer /> */}
  </div>
)

export default MainLayout
