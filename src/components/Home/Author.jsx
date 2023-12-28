import React from 'react'
import './Author.css'

const Author = () => {
  return (
    <div className="personal-information d-flex justify-content-center align-items-center left-col">
      <div className="dev-info">
        <div className="greetings">
          <h1>Hello</h1>
          <h2>I‘m Nazim.</h2>
        </div>
        <div className="dev-img">
          <img src="./img/dev.png" alt="Md Nazim Uddin's Picture" />
          <p className="photo-credit">Photo: Md Nazim Uddin</p>
        </div>
        <span className="dev-brief">
          <p className="brief-title">Here‘s how I came here...</p>
          <p className="brief">
            With a passion for building new things I started playing with the thought of being e tech enthusiast already in my childhood. However, somewhere in between childhood and my early twenties, i had somehow dropped that dream since i was following the career path of a international student. Now i am back in the game.
          </p>
        </span>
      </div>
    </div>
  )
}

export default Author