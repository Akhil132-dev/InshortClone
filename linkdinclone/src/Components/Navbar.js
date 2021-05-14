import React from 'react'
import './Navbar.css'
import Sidemanu from './Sidemanu'

function Navbar() {

    return (
        <div className="header">

            <div className="header__icon">
                <Sidemanu />
            </div>
            <img className="header__img" src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" alt="inshorts" />


        </div>
    )
}

export default Navbar
