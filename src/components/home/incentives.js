import shipping from 'assets/img/entrega.png'
import omega from 'assets/img/omega.png'
import cbd from 'assets/img/cbd.png'

const incentives = [
    
    {
      name: 'Omegas 3-6 y 9',
      imageSrc: omega,
      description: "Disfruta de las propiedades de los ácidos grasos que contiene la semilla amazónica de Sacha Inchi.",
    },
    {
      name: 'CBD',
      imageSrc: cbd,
      description:
        " CBD de espectro completo, enriquecido con terpenos. ¡Todos los beneficios de la planta en una sola gota!",
    },
    {
        name: 'Envío Gratis',
        imageSrc: shipping,
        description: "Envío completamente gratis en Bogotá, proximamente envío gratuito con cobertura nacional",
      },
  ]
  
  export default function Incentives() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                Aumentemos la calidad de vida de nuestros animalitos
              </h2>
              <p className="mt-4 text-gray-500">
              Apoya la salud de tu mascota de forma natural. Nuestro suplemento combina los beneficios antiinflamatorios del sacha inchi y las propiedades calmantes del CBD, reduciendo el dolor articular, la ansiedad y fortaleciendo el sistema inmunológico.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
              {incentives.map((incentive) => (
                <div key={incentive.name} className="sm:flex lg:block">
                  <div className="sm:flex-shrink-0">
                    <img className="h-16 w-16" src={incentive.imageSrc} alt="" />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                    <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                    <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }