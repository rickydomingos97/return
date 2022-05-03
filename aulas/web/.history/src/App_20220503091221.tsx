interface ButtonPropos {
  text: string;
}

function Button(props: ButtonPropos) {
  return <button>{props.text}</button>
}


function App() {
  return (
    <div>
      <Button text="enviar"/>
      <Button text="oi pessoas"/>
    </div>

    <div>
      
    </div>
  )

}

export default App
