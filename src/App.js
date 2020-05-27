import React from 'react'
import NavBar from '../backup/components/js/navbar'
import { hot } from 'react-hot-loader'

function App(){
    return(
        <div className="navbar-container">
            <NavBar />
        </div>
    )
}

export default hot(module)(App);