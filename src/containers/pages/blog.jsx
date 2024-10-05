import Footer from "components/navigation/footer"
import Navbar from "components/navigation/navbar"
import Layout from "hocs/layouts/layout"

function Blog(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                Blog
                <Footer/>

            </div>
            
        </Layout>
    )
}
export default Blog