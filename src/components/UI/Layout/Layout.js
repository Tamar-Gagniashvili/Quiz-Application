import React from "react"
import './Layout.css';

const Layout = (props) => {
    return (
        <>
            <nav>
                <ul>
                    <li>End Test</li>
                    <li>Fun thing</li>
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