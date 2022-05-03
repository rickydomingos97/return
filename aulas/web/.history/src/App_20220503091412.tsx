interface ButtonPropos {
  text: string;
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
      <h1 text="Ola pessoas esse eh o nosso menu principal"></h1>
    </div>
  )

}

export default App
