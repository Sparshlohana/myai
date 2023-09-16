'use client'

import { MicIcon, PlusIcon, RigthArrow, SmilyFaceIcon } from "@/components/global/icons/Icons"
import { useState } from "react"

const Chat = () => {
    const [messages, setMessages] = useState('')
    const [response, setResponse] = useState('')

    const getAiResponse = async () => {
        console.log(messages);
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }
        try {
            const queryParams = new URLSearchParams({ messages }).toString();
            console.log(queryParams);
            const response = await fetch(`/api/ai?${queryParams}`, options);
            const responseJson = await response.json();
            setResponse(responseJson.response)
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e) => {
        setMessages(e.target.value)
    }

    return (
        <div className="relative w-[69vw]">
            <div className="">
                <div className="mt-5 ml-4 text-white max-w-[350px] rounded-lg leading-6 border p-1 break-words">
                    <p>Hi, I am Sparsh&apos;s AI!! How may I help you!?</p>
                </div>
                {messages && <div className="float-right mt-5 ml-4 text-white max-w-[350px] rounded-lg leading-6 border p-1 break-words">
                    <p>{messages}</p>
                </div>}
                {response && <div className="mt-16 ml-4 text-white max-w-[350px] rounded-lg leading-6 border p-1 break-words">
                    <p>{response}</p>
                </div>}
            </div>
            <div className="absolute bottom-0 bg-[#620A08] w-full p-4 flex gap-5 items-center">
                <div><SmilyFaceIcon className="fill-white cursor-pointer" /></div>
                <div><PlusIcon className="fill-white  cursor-pointer" /></div>
                <div className="w-full">
                    <input name="chat" onChange={handleChange} value={messages} className="w-full py-2 px-3 bg-[#6d0d0a] text-white outline-none rounded" type="text" placeholder="Type a message..." />
                </div>

                {messages ? <div><RigthArrow onClick={getAiResponse} className="fill-white  cursor-pointer" /></div> : <div><MicIcon className="fill-white  cursor-pointer" /></div>}


            </div>
        </div>
    )
}

export default Chat
