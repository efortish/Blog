import Footer from "components/navigation/footer"
import Navbar from "components/navigation/navbar"
import Layout from "hocs/layouts/layout"

function Product(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                Product
                <Footer/>

            </div>
            
        </Layout>
    )
}
export default Product