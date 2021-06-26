import React from "react"
import './Layout.css';


const Layout = (props) => {

    function joke(){
        alert('You Clicked The Button!\nTHANK YOU!')
    }


    return (
        <>
            <nav>
                <ul>
                    <li onClick={joke}>Click Me</li>
                </ul>
            </nav>
            <div className="content">
                {props.children}
            </div>
            <footer>
                <span>Quiz Application, 2021</span>
            </footer>
        </>

    )
}

export default Layout;