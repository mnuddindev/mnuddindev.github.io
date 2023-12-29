import React from 'react'

const Education = (props) => {
    return (
        <div className="education">
            {
                Object.entries(props.da).map(([key, entry]) => {
                    return (
                        <div className={`${key} life`} key={key}>
                            <span className="doing-icon">
                                <i className={key.includes('job') ? 'fa-thin fa-wrench' : 'fa-thin fa-graduation-cap'}></i>
                            </span>
                            <div className="additional-details">
                                <span className="long-line"></span>
                                <div className="education-details">
                                    <span className="short-line"></span>
                                    {
                                        Object.entries(entry).map(([dataKey, dataValue]) => {
                                            return (
                                                <div className={dataKey} key={dataKey}>
                                                    {
                                                        Object.entries(dataValue).map(([subKey, subValue]) => {
                                                            return (
                                                                <p className={subKey} key={subKey}>{subValue}</p>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Education