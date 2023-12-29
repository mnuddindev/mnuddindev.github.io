import React from 'react'
import './AuthorInterest.css'

const AuthorInterest = (props) => {
    const interests = {
        "cooking": "cauldron",
        "photography": "camera-polaroid",
        "coding- and history books": "book",
        "hiking": "person-hiking",
        "workout": "dumbbell",
        "coding": "code",
        "singing": "microphone-stand",
        "praying": "person-praying",
        "": "",
    }
    const skills = {
        "html 5": "html5",
        "css 3": "css3-alt",
        "javascript": "js",
        "php": "php",
        "mysql": "mysql",
        "github": "github",
        "python": "python",
        "golang": "golang",
        "react": "react",
        "postgresql": "postgresql",
        "wordpress": "wordpress",
        "": ""
    }
    return (
        <div className="personal-interests right-col col-12">
            <div className="interests">
                <h1 className="title">Interests</h1>
                <div className="d-flex pt-20 flex-wrap justify-content-between align-items-center">
                    {
                        Object.entries(interests).map(([key, value]) => {
                            return (
                                <span key={key} className={key === "hiking" || "workout" || "coding" || "singing" ? "interest d-flex pt-15" : "interest d-flex"}>
                                    <i className={"fa-duotone fa-" + value}></i>
                                    <p className="iname">{key}</p>
                                </span>
                            )
                        })
                    }
                </div>
            </div>
            <div className="skills">
                <h1 className="title">Technology Skills</h1>
                <div className="personal-skills pt-20 d-flex flex-wrap justify-content-start align-items-center">
                    {
                        Object.entries(skills).map(([key, value]) => {
                            return (
                                <span className={key === "postgresql" ? "skill d-flex react pt-15" : key === "wordpress" ? "skill d-flex pt-15" : "skill d-flex"}>
                                    <i className={"fa-brands fa-" + value}></i>
                                    <p className="iname text-uppercase">{key}</p>
                                </span>
                            )
                        })
                    }
                </div>
            </div>
            <div className="contact">
                <h1 className="title">Contact</h1>
                <span>
                    <p className="dev-name pt-10">{props.author.author_name}</p>
                    <a href={"mailto:" + props.author.author_email} className="dev-email pt5">
                        <p>{props.author.author_email}</p>
                    </a>
                    <p className="dev-phone pt5">{props.author.author_phone}</p>
                    <p className="dev-address pt5">{`${props.author.author_city} / ${props.author.author_country}`}</p>
                </span>
            </div>
        </div>
    )
}

export default AuthorInterest