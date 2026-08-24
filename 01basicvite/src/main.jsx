
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

const reactElement={
    type : 'a',
    props : {
        href : "https://google.com",
        target: "_blank",
    },
    children : 'Click to visit google'
}

function myapp(){
    return(
        <div>
            <h1>
                custom react application
            </h1>
        </div>
    )
}


const AnotherElement = (
    <a href = "https://google.com" target='_blank'>Visit Google</a>
)
const aReactElement = React.createElement(
    'a',
    {
        href: 'https://google.com',
        target: '_blank'
    },
    'Click to visit google'
)
createRoot(document.getElementById('root')).render(

    <App />
    //myapp()
    //AnotherElement
    //aReactElement

)
