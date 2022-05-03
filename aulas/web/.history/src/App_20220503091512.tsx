interface ButtonPropos {
  text: string;
}

interface TextProps {
  text:string;
}

function Button(props: ButtonPropos) {
  return <button>{props.text}</button>
}

function Home() {
  return <h1>{props.text}</h1>
}


function App() {
  return (
    <div>
      <Button text="enviar"/>
      <Button text="oi pessoas"/>
    </div>

    <div>
      <Home text="Ola pessoas esse eh o nosso menu principal"></Home>
    </div>
  )

}

export default App
