interface ButtonProps {
  // text?: string
  text: string;
}


function Button(props: ButtonProps) {
  // return <button>{props.text}</button>
  return <button>{props.text ?? 'Default'}</button>
}



function App() {
  return (
    <div>
      <Button text="enviar"/>
      <Button text="oi pessoas"/>
      <Button >
    </div>
  )

}

export default App