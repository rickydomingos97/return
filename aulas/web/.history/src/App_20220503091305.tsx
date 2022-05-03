interface ButtonPropos {
  text: string;
}

function Button(props: ButtonPropos) {
  return <button>{props.text}</button>
}

function Home() {}


function App() {
  return (
    <div>
      <Button text="enviar"/>
      <Button text="oi pessoas"/>
    </div>

    <div>
      <h1>Ola pessoas esse eh o nosso menu principal</h1>
    </div>
  )

}

export default App
