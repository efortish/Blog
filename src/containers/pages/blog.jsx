import Footer from "components/navigation/footer"
import Navbar from "components/navigation/navbar"
import Layout from "hocs/layouts/layout"
import { useEffect } from "react"
import { get_categories } from "redux/actions/categories/categories"
import { connect } from "react-redux"
import { get_blog_list, get_blog_list_page } from "redux/actions/blog/blog"
import CategoriesHeader from "components/blog/CategoriesHeader"
import BlogList from "components/blog/BlogList"

function Blog({
    get_categories,
    categories,
    get_blog_list,
    posts,
    count,
    next,
    previous,
}){
    
    useEffect(()=>{
        window.scrollTo(0,0)
        get_categories()
        get_blog_list()
        get_blog_list_page()
    },[]
)
    
    
    
    return(
        <Layout>
            <Navbar/>
            <div className="pt-24">
                <CategoriesHeader categories={categories&&categories}/>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
                <div className="mx-auto max-w-6xl my-10">
                    {/* Content goes here */}
                    <BlogList posts={posts&&posts} get_blog_list_page={get_blog_list_page} count={count&&count}/>
                    </div>
                </div>
                <Footer/>

            </div>
            
        </Layout>
    )
}

const mapStateToProps= state=>({
    categories: state.categories.categories,
    posts : state.blog.blog_list,
    count : state.blog.count,
    next : state.blog.next,
    previous : state.blog.previous,


})

export default connect(mapStateToProps,{
    get_categories,
    get_blog_list,
    get_blog_list_page

}) (Blog)