interface ButtonPropos

function Button(props) {
  return <button>{props.text}</button>
}


function App() {
  return (
    <div>
      <Button text="enviar"/>
      <Button text="oi pessoas"/>
    </div>
  )

}

export default App
