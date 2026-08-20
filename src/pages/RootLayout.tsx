import { Outlet } from 'react-router-dom'
import Footer from '../shared/Footer'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import CTA from '../shared/CTA'

const RootLayout = () => {
    return (
        <div>
            <Banner/>
            <Navbar/>
            <Outlet />
            <CTA/>
            <Footer/>
        </div>
    )
}

export default RootLayout