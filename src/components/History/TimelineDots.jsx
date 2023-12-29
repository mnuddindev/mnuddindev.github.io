import React, { useRef } from 'react'

const TimelineDots = () => {
    const dots = useRef([])
  return (
    <div className="timeline-dots d-flex">
        {
            dots.current = Array.from({ length: 150 }, (_, index) => {
                return (
                  <span className="timeline-dot d-block" key={index} data-index={index}></span>
                )
            })
        }
    </div>
  )
}

export default TimelineDots