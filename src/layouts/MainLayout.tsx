import { ReactNode } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
    <Navbar/> 
    <main>{children}</main>
    <Footer/> 
    </>
  )
}

export default MainLayout