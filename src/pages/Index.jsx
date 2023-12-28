import React from 'react'
import Nav from '../components/Nav/Nav'
import Home from './Home'
import History from '../components/History/History'

const Index = () => {
    const contact = {
        author_name: 'Md Nazim Uddin',
        author_email: 'mnuddindev@outlook.com',
        author_phone: '+880 17161-24828',
        author_city: 'Chattogram',
        author_country: 'Bangladesh',
    }
    return (
        <>
            <Nav />
            <Home author={contact} />
            <History />
        </>
    )
}

export default Index