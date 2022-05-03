import { ChatTeardropDots } from "phosphor-react"
import { useState } from "react"
/**
 * Estado eh uma variavel do JS como qualquer outra, mas que fica watching as alteracoes
 * no codigo para renderizar o componente com as alteracoes do estado
 * ** const [] = useState() tem () pois eh uma function, e comeca com false booleano
 * 
 * { isWidgetOpen ? <p>Hello world</p> : null} pode ser substituido por { isWidgetOpen && <p>Hello world</p>}
 * pois nao temos uma condicao ternaria aqui
 */

export function Widget() {
    const [isWidgetOpen, setWidgetOpen] = useState(false)

    function toogleWidgetVisibility() {
        setWidgetOpen(!isWidgetOpen)
    }

    return (
        <div className="absolute bottom-4 right-5">
            { isWidgetOpen && <p>Hello world</p>}
            
            <button onClick={toogleWidgetVisibility} className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
            <ChatTeardropDots className="h-6 w-6" />

            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 easy-linear">
                <span className="pl-2"></span>
                Feedback
            </span>
        </button>
        </div>
    )
}