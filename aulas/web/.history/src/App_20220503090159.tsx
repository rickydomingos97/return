function Button(props) {
  const newLocal = props.text
  return <button>{newLocal}</button>
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
