import React from "react"
import './Layout.css';
import { useHistory } from 'react-router-dom';


const Layout = (props) => {
    const history = useHistory();

    const submitHandler = (event) => {
        history.push('/options')
    }

    return (
        <>
            <nav>
                <ul>
                    <li onClick={submitHandler}>End Test</li>
                    <li onClick={submitHandler}>Click Me</li>
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