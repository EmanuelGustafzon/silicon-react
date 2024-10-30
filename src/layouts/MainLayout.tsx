import { ReactNode } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import '../styles/globals/index.css'
import useTheme from "../hooks/useTheme";
import CurrentPath from "../components/CurrentPath";
import useCurrentDevice from "../hooks/useCurrentDevice";

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { theme } = useTheme()
  const device = useCurrentDevice()
  return (
    <div className={`main-layout ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`} >
      <Navbar/> 
      { device === 'desktop' && <CurrentPath/> }
      <main>{children}</main>
      <Footer/> 
    </div>
  )
}

export default MainLayout