import React, { useMemo } from 'react'
import TimelineDots from './TimelineDots'
import './Timeline.css'
import Education from './Education'

const Timeline = () => {
  const educationdata = useMemo(
    () => ({
      "psc": {
        "timeline-start d-flex align-items-center": {
          "timeline-month": "01",
          "timeline-year": "2006",
        },
        "timeline-end d-flex align-items-center": {
          "timeline-month": "02",
          "timeline-year": "2011",
        },
        "details": {
          "degree": "Primary School Certificate",
          "type": "Student",
          "institute": "East Firozshah Primary School.",
        }
      },
      "jsc": {
        "timeline-start d-flex align-items-center": {
          "timeline-month": "01",
          "timeline-year": "2012",
        },
        "timeline-end d-flex align-items-center": {
          "timeline-month": "12",
          "timeline-year": "2014",
        },
        "details": {
          "degree": "Junior School Certificate",
          "type": "Student",
          "institute": "N.M Alhaz Mostofa Hakim High School.",
        }
      },
      "ssc": {
        "timeline-start d-flex align-items-center": {
          "timeline-month": "01",
          "timeline-year": "2015",
        },
        "timeline-end d-flex align-items-center": {
          "timeline-month": "12",
          "timeline-year": "2016",
        },
        "details": {
          "degree": "Secondary School Certificate",
          "type": "Business Study",
          "institute": "N.M Alhaz Mostofa Hakim High School.",
        }
      },
      "hsc": {
        "timeline-start d-flex align-items-center": {
          "timeline-month": "04",
          "timeline-year": "2019",
        },
        "timeline-end d-flex align-items-center": {
          "timeline-month": "06",
          "timeline-year": "2017",
        },
        "details": {
          "degree": "Higher Secondary School Certificate",
          "type": "Business Study",
          "institute": "Chattogram Collegiate School.",
        }
      },
      "microsoft-course": {
        "timeline-start d-flex align-items-center": {
          "timeline-month": "01",
          "timeline-year": "2019",
        },
        "timeline-end d-flex align-items-center": {
          "timeline-month": "04",
          "timeline-year": "2019",
        },
        "details": {
          "degree": "Computer Operator Certificate",
          "type": "Microsoft Office",
          "institute": "Hajicamp Jubo-unnoyon Kendro.",
        }
      },
      "appifylab job": {
        "timeline-start d-flex align-items-center": {
          "timeline-month": "02",
          "timeline-year": "2022",
        },
        "timeline-end d-flex align-items-center": {
          "timeline-month": "08",
          "timeline-year": "2021",
        },
        "details": {
          "degree": "Junior GoLang Engineer",
          "type": "Internship",
          "institute": "AppifyLab Sylhet.",
        }
      },
      "bkttc job": {
        "timeline-start d-flex align-items-center": {
          "timeline-month": "01",
          "timeline-year": "2023",
        },
        "timeline-end d-flex align-items-center": {
          "timeline-month": "07",
          "timeline-year": "2023",
        },
        "details": {
          "degree": "Automobile Engineer",
          "type": "Internship",
          "institute": "BKTTC, Chattogram.",
        }
      },
    }),
    []
  )
  return (
    <div className="timeline">
        <div className="timeline-journey">
            <TimelineDots />
            <Education da={educationdata} />
        </div>
    </div>
  )
}

export default Timeline