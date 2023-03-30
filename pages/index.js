import landPageImg from "../img/landPageImg.jpg"
import decorativeAboutUs from "../img/decorativeAboutUs.jpg"
import homeStyles from '../styles/Home.module.css'
import Image from "next/image"
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect, useState } from "react";

export default function Index() {
  return (
    <div>
      <Home />
    </div>
  )
}

function Home() {

  const [contact, setContact] = useState({
    name: "",
    email: "",
    text: ""
  })

  const handleInput = (key, value) => {
    const contact_instance = contact
    contact_instance[key] = value
    setContact(contact_instance)
  }

  const handleFetch = async () => {
    const res = await fetch('/api/Contact', {
      method:'POST',
      body: JSON.stringify(contact)
    })
  }

  useEffect(() => {
    Aos.init({duration: 1000})
  }, [])

  return (
    <div>

      <Image width={String(landPageImg.width)} height={String(landPageImg.height)} src={landPageImg.src} className={homeStyles.landPageImg} alt=""/>

      <div className={homeStyles.main}>
        
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
          <h2 data-aos="fade">¿Quienes Somos?</h2>
          <p data-aos="fade"> 
            En Doorbell Ring, nos apasiona simplificar la vida de los educadores al ofrecer soluciones innovadoras y personalizadas para satisfacer sus necesidades de programación. Fundada en 2022, nuestra empresa se ha dedicado a brindar productos y servicios excepcionales a instituciones educativas en toda Colombia.
          </p>
          <p data-aos="fade">
            Nuestro equipo está compuesto por profesionales experimentados que están comprometidos a brindar el más alto nivel de servicio al cliente y satisfacción. Creemos que la tecnología puede desempeñar un papel clave para mejorar la experiencia de aprendizaje de los estudiantes y estamos orgullosos de estar a la vanguardia de esta revolución. Confíe en Doorbell Ring para brindarle las herramientas que necesita para tener éxito.
          </p>
          <div data-aos="fade-down" data-aos-delay="200" className={homeStyles.decorationFigure}></div>
          <div data-aos="fade-left" data-aos-delay="200" className={homeStyles.decorationFigure}></div>
          <div data-aos="fade-right" data-aos-delay="200" className={homeStyles.decorationFigure}></div>
          <Image src={decorativeAboutUs} className={homeStyles.decorativeAboutUs} />
        </article>

        <article className={homeStyles.ourServiceSection}>
          <h2 data-aos="fade">Nuestro Servicio</h2>
          <p data-aos="fade">
            En Doorbell Ring, ofrecemos una gama de servicios para satisfacer las necesidades de programación de instituciones educativas de todos los tamaños. Nuestro producto estrella es el timbre escolar automático con horarios programables, que se pueden personalizar para adaptarse a las necesidades únicas de su institución. Además, nuestro programa de programación elimina las inexactitudes de la planificación, creando horarios perfectos con facilidad.
          </p>
        </article>
        <article data-aos="fade-right" data-aos-delay="150" className={homeStyles.ContactUs}>
          <h2>Contacta con Nosotros</h2>
          <div className={homeStyles.ContactUsInputs}>
            <input type="text" placeholder="Nombre" onChange={(e) => handleInput("name", e.target.value)} />
            <input type="text" placeholder="Email" onChange={(e) => handleInput("email", e.target.value)} />
            <textarea placeholder="Escribe lo que quieres decir" onChange={(e) => handleInput("text", e.target.value)} />
          </div>
          <button onClick={() => handleFetch()} className={homeStyles.ContactUsSubmit}>Enviar</button>
        </article>

      </div>


    </div>
  )
}


  
  