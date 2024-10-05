import Footer from "components/navigation/footer"
import Navbar from "components/navigation/navbar"
import Layout from "hocs/layouts/layout"

function Contactus(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                Contactus
                <Footer/>

            </div>
            
        </Layout>
    )
}
export default Contactus