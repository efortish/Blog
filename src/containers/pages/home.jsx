import Header from "components/home/header"
import Incentives from "components/home/incentives"
import Footer from "components/navigation/footer"
import Navbar from "components/navigation/navbar"
import Layout from "hocs/layouts/layout"
import {useEffect} from 'react'

function Home(){

    useEffect(()=>{
        window.scrollTo(0,0)
    
    },[])
    
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                <Header/>
                <Incentives/>
            </div>

                
                <Footer/>

            
            
        </Layout>
    )
}
export default Home