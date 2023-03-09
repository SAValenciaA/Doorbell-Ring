import landPageImg from "../img/landPageImg.jpg"
import homeStyles from '../styles/Home.module.css'

export default function Index() {
  return (
    <div>
      <Home />
    </div>
  )
}

function Home() {
  return (
    <div>

      <img src={landPageImg.src} className={homeStyles.landPageImg} alt="" />

      <main className={homeStyles.main}>
        
        <div className={homeStyles.heroText}>

          <h1 className={homeStyles.mainTitle}> 
            <span className={homeStyles.doorbellText}>Doorbell</span> <span className={homeStyles.ringText}>Ring</span>:
            elegancia, simplicidad y personalizacion
          </h1>

          <p className={homeStyles.heroParagraph}>
            Bienvenidos, somos el nuevo proveedor de soluciones tecnológicas flexibles y fáciles de usar para instituciones en Colombia. Ofrecemos soluciones personalizables y automatizadas para agilizar tus horarios.
          </p>

        </div>

        <article className={homeStyles.aboutUsSection}>
          <h2>¿Quienes Somos?</h2>
          <p> 
            En Doorbell Ring, nos apasiona simplificar la vida de los educadores al ofrecer soluciones innovadoras y personalizadas para satisfacer sus necesidades de programación. Fundada en 2022, nuestra empresa se ha dedicado a brindar productos y servicios excepcionales a instituciones educativas en toda Colombia.

            Nuestro equipo está compuesto por profesionales experimentados que están comprometidos a brindar el más alto nivel de servicio al cliente y satisfacción. Creemos que la tecnología puede desempeñar un papel clave para mejorar la experiencia de aprendizaje de los estudiantes y estamos orgullosos de estar a la vanguardia de esta revolución. Confíe en Doorbell Ring para brindarle las herramientas que necesita para tener éxito.
          </p>
        </article>

        <article className={homeStyles.ourServiceSection}>

        </article>

      </main>


    </div>
  )
}


  
  