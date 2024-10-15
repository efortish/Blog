import ompets from 'assets/img/ompets.png'
import { NavLink, Link } from "react-router-dom"



export default function ProductDetail() {
    return (
      

    
        <div class="relative z-20  items-center overflow-hidden bg-white">
                <div class="container relative flex px-6 py-10 mx-auto">
                    <div class="relative z-20 flex flex-col sm:w-3/5 md:w-3/5 lg:w-3/5">
                        
                        <h1 class="flex flex-col text-4xl font-black leading-none text-gray-800 font-bebas-neue sm:text-5xl">
                            OM PETS
                            <span class="text-3xl sm:text-4xl">
                                CBD - Sacha Inchi
                            </span>
                        </h1><br></br>
                        <p class="text-sm text-gray-700 sm:text-base">
                        Descubre el poder natural de nuestro Aceite de Sacha Inchi con 0.72% de concentración de CBD, una fórmula refinada que combina los beneficios de los ácidos grasos omega 3, 6 y 9 con las propiedades nutritivas del extracto de cannabis, reconocido mundialmente por su eficacia.
                        </p><br></br>
                        <p class="text-sm hidden lg:flex text-gray-700 sm:text-base">
                        El CBD es conocido por su capacidad para ofrecer un alivio duradero del dolor crónico y agudo, lo que puede ser especialmente útil para mascotas que padecen lesiones, artritis y otros tipos de dolor.<br></br><br></br>Este aceite también es eficaz para ayudar a las mascotas a superar el estrés y la ansiedad. Las propiedades del CBD han demostrado ser útiles en la regulación de estímulos relacionados con el dolor y el apetito, gracias a sus efectos antiinflamatorios y antioxidantes.<br></br><br></br>Además, el aceite de Sacha Inchi está formulado con activos naturales que ayudan a reconstituir el sistema biológico de las mascotas, fortaleciendo su salud y bienestar.
                        </p>
                        
                        <div class="flex mt-8">
                            <a href="/contacto" class="px-4 py-6 mr-4 text-white uppercase bg-pink-500 border-2 border-transparent rounded-lg text-md hover:bg-pink-400">
                                Comprar
                            </a>
                            <Link to='/blog/cbd' className="px-4 py-4 text-pink-500 uppercase bg-transparent border-2 border-pink-500 rounded-lg  hover:bg-pink-500 hover:text-white text-md">
                                Leer más
                            </Link>
                            
                        </div>
                    </div>
                    <div class="relative sm:block flex sm:w-1/3 lg:w-3/5">
                        <img src={ompets} class="max-w-60 m-auto md:max-w-80 lg:max-w-md xl:max-w-xl"/>
                    </div>
                </div>
                <div class="container px-6 py-10 mx-auto lg:hidden">
                <p class="text-sm text-gray-700 sm:text-base ">
                Este aceite también es eficaz para ayudar a las mascotas a superar el estrés y la ansiedad. Las propiedades del CBD han demostrado ser útiles en la regulación de estímulos relacionados con el dolor y el apetito, gracias a sus efectos antiinflamatorios y antioxidantes.
                </p>
                <p class="text-sm text-gray-700 sm:text-base mt-4">
                Además, el aceite de Sacha Inchi está formulado con activos naturales que ayudan a reconstituir el sistema biológico de las mascotas, fortaleciendo su salud y bienestar.
                </p>
            </div>
        </div>
    
    )
  }