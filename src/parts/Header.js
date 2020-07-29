import React from 'react'
import IconText from './IconText'
import Button from 'components/Button'

export default function Header(props) {

    const getNavLinkClass = path =>{
        return props.location.pathname === path ? "active":""
    }

    return (
        <header className="spacing-sm">
            <div className="container-fluid">

                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <IconText/>
                
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className={`nav-item ${getNavLinkClass("/")}`}>
                                <Button type="Link" href="/" children="Home" className="nav-link"></Button>
                            </li>
                            <li className={`nav-item ${getNavLinkClass("/browse-by")}`}>
                                <Button type="Link" href="/browseby" children="Browse By" className="nav-link"></Button>
                            </li>
                            <li className={`nav-item ${getNavLinkClass("/stories")}`}>
                                <Button type="Link" href="/stories" children="Stories" className="nav-link"></Button>
                            </li>
                            <li className={`nav-item ${getNavLinkClass("/agents")}`}>
                                <Button type="Link" href="/agents" children="Agents" className="nav-link"></Button>
                            </li>
                        </ul>
                        
                    </div>
                </nav>
            </div>
        </header>
    )
}
