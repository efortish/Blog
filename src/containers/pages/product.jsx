import Footer from "components/navigation/footer"
import Navbar from "components/navigation/navbar"
import Layout from "hocs/layouts/layout"
import ProductDetail from "components/product/product"

function Product(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                <ProductDetail/>
                <Footer/>

            </div>
            
        </Layout>
    )
}
export default Product