interface ButtonProps {
  text: string;
}

interface HomeProps {
  text:string;
}

function Button(props: ButtonProps) {
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
