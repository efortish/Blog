//React
import { connect } from "react-redux"
import {useState, Fragment, useEffect } from 'react'
import { NavLink, Link } from "react-router-dom"
//Micelaneous
import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
//Images
import logooo from 'assets/img/logoo.png'
import whatsapp from 'assets/img/whatsapp2.gif'
import blog from "containers/pages/blog"
import ompets from "assets/img/ompets.png"
import logosinpets from "assets/img/logosinpets.jpeg"






function NavBar(){

    const [loading,setLoading]=useState(true)

    window.onscroll= function(){scrollFunction()}

    const [open, setOpen] = useState(false)
    
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

    <nav data-scroll data-scroll-id="hey" id='navbar' className="w-full py-1 top-0 transition duration-500 ease-in-out z-40 fixed">
      <div className=" bg-white  px-4  sm:px-6">
        
        <div className="-ml-5 -mt-2 hidden lg:flex flex-wrap items-center justify-between sm:flex-nowrap md:px-4 px-2">
          <Link to='/' className="">
            <img src={ompets} 
            width={80}
            height={70}
            alt="Logo"
            className=""
            />
          </Link>
          <div className="ml-4 mt-2 flex-shrink-0">
          <NavLink to='/nosotros' className="text-lg inline-flex font-semibold leading-6 text-gray-900  border-b-2 border-white hover:border-green-500 mx-4">Acerca de nosotros</NavLink>
          <NavLink to='/producto' className="text-lg inline-flex font-semibold leading-6 text-gray-900  border-b-2 border-white hover:border-green-500 mx-4">Producto</NavLink>
          <NavLink to='/blog' className="text-lg inline-flex font-semibold leading-6 text-gray-900  border-b-2 border-white hover:border-green-500 mx-4">Blog</NavLink>
            
          <Link
              to="/contacto"
              className="inline-flex ml-12 items-center rounded-md border border-transparent bg-green-button px-6 py-3 text-base font-medium text-black shadow-sm hover:bg-gray-700 hover:text-white transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">

              Contáctanos
              <img src={whatsapp} className="w-7 h-7 mt-1 ml-2" alt="">
              </img>
          </Link>  
          </div>
        </div>
        <div className="-ml-5 -mt-2 lg:hidden flex flex-wrap items-center justify-between sm:flex-nowrap md:px-4 px-2 z-40">
          <Link to='/' className="ml-4 mt-3">
            <img src={ompets} 
            width={80}
            height={70}
            alt="Logo"
            className=""
            />
          </Link>
          
            <div className="ml-4 mt-2 flex-shrink-0">
              <Popover>
                <PopoverButton className="block text-sm/6 font-semibold text-black focus:outline-none data-[active]:text-black data-[hover]:text-black data-[focus]:outline-1 data-[focus]:outline-black">
                <i class='bx bx-menu text-4xl'></i>
                </PopoverButton>
                <PopoverPanel
                  transition
                  anchor="bottom"
                  className="divide-y divide-black/5 rounded-xl bg-white border border-black text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0 z-50">
                  <div className="p-3">
                    <a className="block rounded-lg py-2 px-3 transition hover:bg-black/5" href="/nosotros">
                      <p className="font-semibold text-black px-4">Acerca de nosotros</p>
          
                    </a>
                    <a className="block rounded-lg py-2 px-3 transition hover:bg-black/5" href="/blog">
                      <p className="font-semibold text-black px-4">Blog <i class='bx bxl-blogger text-xl ml-2' ></i></p>
                      
                    </a>
                    <a className="block rounded-lg py-2 px-3 transition hover:bg-black/5" href="/producto">
                      <p className="font-semibold text-black px-4">Producto <i class='bx bx-leaf text-xl ml-2' ></i></p>
                      
                    </a>
                  </div>
                  <div className="p-3">
                    <a className="block rounded-lg py-2 px-3 transition hover:bg-black/5" href="/contacto">
                      <p className="font-semibold text-black px-4">Contáctanos<i class='bx bxl-whatsapp text-xl ml-2' ></i></p>
          
                    </a>
                  </div>
                </PopoverPanel>
              </Popover>
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