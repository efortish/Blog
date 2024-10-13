import Footer from "components/navigation/footer"
import Navbar from "components/navigation/navbar"
import Layout from "hocs/layouts/layout"
import Aboutus from "components/aboutus/aboutus"

function About(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">

            <Aboutus/>
                

            


            <Footer/>

            </div>
            
        </Layout>
    )
}
export default About