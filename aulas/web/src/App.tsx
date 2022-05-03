interface ButtonProps {
  // text?: string
  text: string;
}


function Button(props: ButtonProps) {
  // return <button>{props.text}</button> (ou pode ser:)
  return <button className="bg-[#8257ec] text-violet-100 p-2 h-10 rounded hover:bg-red-700 transition-colors">{props.text ?? 'Default'}</button>
}

function App() {
  return (
    <div className="flex gap-2">
      <Button text="enviar"/>
      <Button text="oi pessoas"/>
      <Button />
    </div>
  )

}

export default App