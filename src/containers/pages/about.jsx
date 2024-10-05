import Footer from "components/navigation/footer"
import Navbar from "components/navigation/navbar"
import Layout from "hocs/layouts/layout"

function About(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                About
                <Footer/>

            </div>
            
        </Layout>
    )
}
export default About