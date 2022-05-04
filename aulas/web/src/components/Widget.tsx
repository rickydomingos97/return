import { ChatTeardropDots } from "phosphor-react"
import { useState } from "react"
import { Popover } from '@headlessui/react'

export function Widget() {
    const [isWidgetOpen, setWidgetOpen] = useState(false)

    function toogleWidgetVisibility() {
        setWidgetOpen(!isWidgetOpen)
    }

    return (
        <Popover className="absolute bottom-4 right-5">
            <Popover.Panel>Hello world</Popover.Panel>
            
            <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
            <ChatTeardropDots className="h-6 w-6" />

            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 easy-linear">
                <span className="pl-2"></span>
                Feedback
            </span>
        </Popover.Button>
        </Popover>
    )
}