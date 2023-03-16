import { useState } from "react"
import Style from "../styles/Encuesta.module.css"
import { useRef } from "react"
import Logo1 from "../img/Logo1.svg"
import Logo2 from "../img/Logo2.svg"
import Image from "next/image"

export default function Encuesta() {

  const navBackground = useRef()

  const [data, setData] = useState({
    name: "",
    age: "",
    contact: "",
    color: "#006e61",
    institution: "",
    challenges: "",
    solutions: "",
    frequency: "",
    importance: "",
    feature: "",
    necessity: 0,
    usefull: "",
    alternatives: "",
    advices: "",
    logo: "",
    value: "",
    rate: 0,
    innovation: ""
  })
  
  const handleInput = (key, value) => {
    let newData = data
    newData[key] = value
    setData(newData)
    console.log(data)
  }

  const questions = {
    name: "¿Cual es tu nombre?",
    age: "¿Cuantos años tienes?",
    contact: "Escribe tu numero de telefono o correo electronico",
    color: ["¿Qué Color prefieres?", <ColorAnswer key="colorAnswer" handleInput={handleInput} />],
    institution: ["¿Para que tipo de institucion trabajas?", ["Educativa", "Cuidado de Salud", "Corporativa", "Governamental"]],
    challenges: "¿Cuales son algunos de los desafios diarios que enfrenta en la gestion de su institucion?",
    solutions: "¿Ha pensado en alguna solucion tecnologica en el pasado para resolver los problemas de su institucion?",
    frequency: ["¿Que tanto se ha encontrado con problemas en sus horarios?", ["Ninguna vez", "Casi Nunca", "Alguna vez", "Muy seguido", "Diario"]],
    importance: ["¿Que importancia le da a la personalizacion en los productos y servicios que utiliza para su institucion?", ["Muy necesario", "Necesario", "No Muy Necesario", "Nada Necesario"]],
    feature: "¿Que caracteristicas le gustaria ver en un software que prediga la mejor manera de crear horarios para su institucion?",
    necessity: ["¿Como mediria la necesidad de su institucion en una actualizacion de sus sistemas, metodologias, etc", [1,2,3,4,5]],
    usefull: "¿Consideras que este producto o servicio satisface las necesidades de las instituciones?",
    alternatives: "¿Qué alternativas le ofrecemos, que lo lleve a experimentar con nuestro producto?",
    advices: "¿Que mejorarias de este producto?",
    logo: ["¿Como te gustaria que fuese nuestro logo?", <LogoAnswer key="LogoAnswer" handleInput={() => handleInput} />],
    value: ["¿Cuales de los siguientes valores crees que le queda mejor a nuestra empresa?", ["Transparencia","Compromiso","Diferencia","Claridad","Cordialidad"]],
    rate: ["Del 1 al 5 ¿Como calificarias nuestro servicio al producto?", [1,2,3,4,5]],
    innovation: "¿Crees que nuestro proyecto seria innovador a nivel departamental, nacional, internacional?"
  }

  const questionsName = Object.keys(questions)

  const [questionNumber, setQuestionNumber] = useState(0);
  

  const handleFetch = async () => {
    const res = await fetch('/api/Send', {
      method:'POST',
      body: JSON.stringify(data)
    })
    window.location.reload(true)
  }

  const handleNext = () => {
    if(questionNumber != 17) {
      setQuestionNumber(questionNumber + 1)
    } else {
      handleFetch()
    }
    console.log(questionsName)
  }

  return (
    <div ref={navBackground} className={Style.EncuestaBody}>
      <div className={Style.navBackground}></div>
      <Card 
        num={questionNumber} 
        q={questions} 
        qN={questionsName}
        handleNext={() => handleNext()} 
        handleBack={() => {setQuestionNumber(questionNumber != 0 ? (questionNumber - 1) : questionNumber)}} 
        handleInput={handleInput}
        data={data}
        />

    </div>
  )
}

//Yes, i know. My practices are very ugly. I'm running out of time right now
function Card(props) {

  const question = props.q[props.qN[props.num]]

  const smallQuestions = ["name","age","contact"]

  const inputRef = useRef()

  const handler = () => {
    if(typeof(question) != "object") {
      inputRef.current.value = ""
    }
    props.handleNext()
  }

  return (
    <div className={Style.QuestionCard}>
      <h4>Pregunta #{props.num + 1}</h4>
      {typeof(question) != "object" ? 
      <>
        <h2>{question}</h2>
        <textarea
          className={smallQuestions.includes(props.qN[props.num]) ? Style.smallInputQuestion : Style.bigInputQuestion}
          onChange={(e) => props.handleInput(props.qN[props.num], e.target.value)}
          ref={inputRef}
          />
      </> :
        typeof question[1][Symbol.iterator] == "function" ? //Check if it's a list or a component
        <>
            <h2>{question[0]}</h2>
            <div className={Style.AnswersCard}>
              {
                question[1].map((ans, key) => 
                <div key={key} className={Style.cardAns}>

                  <input
                  className={Style.cardInputRadio} 
                  id={ans}
                  name={question[0]} 
                  type="radio" 
                  onChange={(e) => props.handleInput(props.qN[props.num], ans)}
                  key={key}
                   />

                  <label className={Style.cardRadioLabel} key={ans} htmlFor={ans} >{ans}</label>

                </div >
                )
              }
            </div>
          </> :
          <>
            <h2>{question[0]}</h2>
            {question[1]}
          </>
      }

      <button style={{backgroundColor: props.data.color}} className={Style.ButtonCard} onClick={props.handleBack}>Regresar</button>
      <button style={{backgroundColor: props.data.color}}  className={Style.ButtonCard} onClick={() => handler()}>{props.num < 17 ? "Siguiente": <a href="/">Enviar</a>}</button>
    </div>
  )
}

function ColorAnswer(props) {
  const colorChoose = (color) => {
    props.handleInput("color", color)
  }
  return(
    <div className={Style.AnswersCard}>
      <input name="color" type="radio" onClick={() => colorChoose("#4c2900")} className={`${Style.colorAnsBrown} ${Style.cardAns}`}></input>
      <input name="color" type="radio" onClick={() => colorChoose("#006e61")} className={`${Style.colorAnsTurquoise} ${Style.cardAns}`}></input>
      <input name="color" type="radio" onClick={() => colorChoose("#151314")} className={`${Style.colorAnsDark} ${Style.cardAns}`}></input>
      <input name="color" type="radio" onClick={() => colorChoose("#efb810")} className={`${Style.colorAnsYellow} ${Style.cardAns}`}></input>
    </div>
  )
}

function LogoAnswer(props) {
  return(
    <>
      <div className={Style.AnswersCard}>
        <div>
          <input name="svg" id="svg1" type="radio" className={Style.svgRadio} />
          <label className={Style.radiolabelsvg} htmlFor="svg1">
            <Image 
              onClick={() => props.handleInput("logo", "1")} 
              src={Logo1.src} 
              className={Style.svgLogo} 
              alt="First Logo DoorbellRing"
              width={Logo1.width}
              height={Logo1.height}
               />
          </label>
        </div>
        <div>
          <input name="svg" id="svg2" type="radio" className={Style.svgRadio} />
          <label className={Style.radiolabelsvg} htmlFor="svg2">
            <Image 
              onClick={() => props.handleInput("logo", "2")} 
              src={Logo2.src} 
              className={Style.svgLogo} 
              alt="Second Logo DoorbellRing"
              width={Logo2.width}
              height={Logo2.height}
              />
          </label>
        </div>
      </div>
    </>
  )
}