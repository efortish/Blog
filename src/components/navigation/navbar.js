import { connect } from "react-redux"
import logooo from 'assets/img/logoo.png'
import whatsapp from 'assets/img/whatsapp2.gif'
import { NavLink, Link } from "react-router-dom"




function NavBar(){

    window.onscroll= function(){scrollFunction()}
    function scrollFunction(){
      if(document.getElementById('navbar')){
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop>50) {
          document.getElementById('navbar').classList.add('shadow-navbar');
          document.getElementById('navbar').classList.add('bg-white');
        }else{
          document.getElementById('navbar').classList.remove('shadow-navbar');
          document.getElementById('navbar').classList.remove('bg-white');
        }
      }
    }

    return(

    <nav id='navbar' className="w-full py-1 top-0 transition duration-300 ease-in-out z-50 fixed">
      <div className=" bg-white  px-4  sm:px-6">
      <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
          <div className="ml-0 mt-2">
          
          <Link to='/' className="">
          <img src={logooo} 
          width={80}
          height={70}
          alt="Logo"
          className=""/>
          </Link>
          </div>
          <div className="ml-4 mt-2 flex-shrink-0">
          <NavLink to='/nosotros' className="text-lg inline-flex font-medium leading-6 text-gray-900  border-b-2 border-white hover:border-green-500 mx-4">Acerca de nosotros</NavLink>
          <NavLink to='/producto' className="text-lg inline-flex font-medium leading-6 text-gray-900  border-b-2 border-white hover:border-green-500 mx-4">Producto</NavLink>
          <NavLink to='/blog' className="text-lg inline-flex font-medium leading-6 text-gray-900  border-b-2 border-white hover:border-green-500 mx-4">Blog</NavLink>
            <button
              type="button"
              className="ml-12 relative inline-flex items-center rounded-md border border-transparent bg-green-button px-5 py-2 text-sm font-bold text-black shadow-sm transition hover:duration-300 hover:ease-in-out hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2">
              Contáctanos
              <img src={whatsapp} className="w-7 h-7 mt-1 ml-2" alt="">
              </img>
            </button>
          </div>
        </div>
      </div>
    </nav>
    )
}

const mapStateToProps= state=>({

})
export default connect(mapStateToProps, {

})(NavBar)