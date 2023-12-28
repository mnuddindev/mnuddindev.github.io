import React from 'react'
import { useState } from 'react'
import './Nav.css'

const Nav = () => {
    const [sectionName, setSectionName] = useState("Home");
    const styles = {
        footerStyle: {
            backgroundColor: 'transparent'
        },
        normalStyle: {
            backgroundColor: '#e6e6e6',
        },
        colorWhite: {
            color: '#fff'
        },
        colorNormal: {
            color: '#656565'
        }
    }
    const hrefs = ["home", "home", "home", "home", "home"]

    return (
        <div className="page-label" style={sectionName === "Footer" ? styles.footerStyle : styles.normalStyle}>
            <nav className="left-nav">
                <p className="label-name" style={sectionName === "Footer" ? styles.colorWhite : styles.colorNormal}>{sectionName}</p>
                {
                    hrefs.map((url, index) => (
                        <a href={"#" + url} key={index} style={sectionName === "Footer" ? styles.colorWhite : styles.colorNormal}>{`0${index+1}`}</a>
                    ))
                }
            </nav>
        </div>
    )
}

export default Nav