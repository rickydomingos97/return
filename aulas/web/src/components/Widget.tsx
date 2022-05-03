import { ChatTeardropDots } from "phosphor-react"

export function Widget() {
    return (
        <div className="absolute bottom-4 right-5">
            <button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
            <ChatTeardropDots className="h-6 w-6" />

            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 easy-linear">
                <span className="pl-2"></span>
                Feedback
            </span>
        </button>
        </div>
    )
}