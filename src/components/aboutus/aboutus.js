import { connect } from "react-redux"
import backgrond from "assets/img/Designer.jpeg"
import backgronds from "assets/img/space.png"
import grass from "assets/img/grass.jpg"





  
  export default function Aboutus() {
    return (
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          alt=""
          src={grass}
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-40"
        />
        <div
          aria-hidden="true"
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mt-6 hidden text-lg leading-8 text-gray-300 md:grid grid-cols-2 gap-6">
            <p>
            En Om Pets, nuestro compromiso es mejorar la calidad de vida de las
            mascotas, brindándoles un suplemento natural y saludable que combina las
            propiedades del aceite de sacha inchi con los beneficios del CBD. Creemos
            firmemente que nuestros amigos peludos merecen el mayor bienestar y
            atención, por eso trabajamos con pasión para ofrecerles productos que
            promuevan su vitalidad, tranquilidad y felicidad.
            </p>
            <p>
            Nuestra misión es proporcionar soluciones que ayuden a nuestras mascotas
            a llevar una vida plena, aliviando su estrés, mejorando su bienestar
            físico y emocional, y apoyando su salud a largo plazo. Con ingredientes
            naturales y cuidadosamente seleccionados, nuestro producto ha sido
            formulado para cuidar a las mascotas de manera responsable, respetuosa y
            con amor.
            </p>
        </div>
        <div className="mt-6 md:hidden text-lg leading-8 text-gray-300">
            <p>
            En Om Pets, nuestro compromiso es mejorar la calidad de vida de las
            mascotas, brindándoles un suplemento natural y saludable que combina las
            propiedades del aceite de sacha inchi con los beneficios del CBD. Creemos
            firmemente que nuestros amigos peludos merecen el mayor bienestar y
            atención, por eso trabajamos con pasión para ofrecerles productos que
            promuevan su vitalidad, tranquilidad y felicidad.
            </p><br></br>
            <p>
            Nuestra misión es proporcionar soluciones que ayuden a nuestras mascotas
            a llevar una vida plena, aliviando su estrés, mejorando su bienestar
            físico y emocional, y apoyando su salud a largo plazo. Con ingredientes
            naturales y cuidadosamente seleccionados, nuestro producto ha sido
            formulado para cuidar a las mascotas de manera responsable, respetuosa y
            con amor.
            </p>
        </div>
         
        </div>
      </div>
    )
  }