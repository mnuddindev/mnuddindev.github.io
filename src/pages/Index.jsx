import React, { useRef, useEffect, useState } from 'react'
import Nav from '../components/Nav/Nav'
import Home from './Home'
import History from '../pages/History'
import Footer from '../pages/Footer'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Index = () => {
    const contact = {
        author_name: 'Md Nazim Uddin',
        author_email: 'mnuddindev@outlook.com',
        author_phone: '+880 17161-24828',
        author_city: 'Chattogram',
        author_country: 'Bangladesh',
    }

    const [isAnimating, setIsAnimating] = useState(false);
    useEffect(() => {
        const sections = document.querySelectorAll('.main-container')
        const tl = gsap.timeline({})
        const handleScroll = (e) => {
            if (isAnimating) {
                return
            }
            e.preventDefault();
            setIsAnimating(true)
            const scrollDistance = window.innerHeight
            if (e.deltaY > 0) {
                tl.to(window, {
                    duration: 1,
                    scrollTo: `+=${scrollDistance}`,
                    onComplete: () => setIsAnimating(false),
                })
            } else {
                tl.to(window, {
                    duration: 1,
                    scrollTo: `-=${scrollDistance}`,
                    onComplete: () => setIsAnimating(false),
                })
            }
        }

        window.addEventListener('wheel', handleScroll)
        return () => {
            window.removeEventListener('wheel', handleScroll)
        }
    }, [isAnimating])


    return (
        <>
            <Nav />
            <Home author={contact} />
            <History />
            <Footer />
        </>
    )
}

export default Index