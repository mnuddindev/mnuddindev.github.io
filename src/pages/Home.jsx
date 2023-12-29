import React, { useEffect, useRef } from 'react';
import Author from '../components/Home/Author';
import AuthorInterest from '../components/Home/AuthorInterest';
import gsap from 'gsap';

const Home = (props) => {
    const animationCompletedRef = useRef(false);

    const author = (params) => {
        const [h1, h2, devImg, photoCredit, brief] = params;
        const tl = gsap.timeline({
            defaults: {
                opacity: 0,
                y: 50,
                ease: 'power2.out',
            },
            onComplete: () => {
                animationCompletedRef.current = true;
            },
        });
        tl.fromTo(h1, { y: 50 }, { opacity: 1, y: 0, duration: 1 });
        tl.fromTo(h2, { y: 50 }, { opacity: 1, y: 0, duration: 1 }, '-=0.5');
        tl.fromTo(devImg, { y: 100 }, { opacity: 1, y: 0, delay: 0.1, duration: 0.9, ease: 'back.out(1.7)' });
        tl.fromTo(photoCredit, { y: -20 }, { opacity: 1, y: 0, delay: 0.1, duration: 0.5, ease: 'power1.inOut' });
        tl.fromTo(brief, { x: 1000, opacity: 0 }, { opacity: 1, x: 0, delay: 0.1, duration: 0.5, stagger: 0.3, ease: 'power1.inOut' });
        return tl;
    };

    const authorinterest = (params) => {
        const [title, font, fontTitle, contactP] = params;
        const atl = gsap.timeline();
        atl.fromTo(title, { y: -1000, opacity: 0 }, { y: 0, opacity: 1, delay: 0.2, duration: 0.9, stagger: 0.3, ease: 'back.out(0.8)' });
        atl.fromTo(font, { x: 100, opacity: 0 }, { x: 0, opacity: 1, delay: 0.1, duration: 0.9, ease: 'back.out(0.8)' });
        atl.fromTo(fontTitle, { x: -20, opacity: 0 }, { x: 0, opacity: 1, delay: 0.1, duration: 0.2, ease: 'power1.inOut' });
        atl.fromTo(contactP, { y: 100, opacity: 0 }, { y: 0, opacity: 1, delay: 0.1, duration: 0.5, stagger: 0.3, ease: 'power1.inOut' });
        return atl;
    };

    useEffect(() => {
        const [landing, h1, h2, devImg, photoCredit, brief] = document.querySelectorAll('.main-container, .greetings h1, .greetings h2, .dev-img img, .dev-img .photo-credit, .dev-brief');
        const title = document.querySelectorAll('.title');
        const font = document.querySelectorAll('.personal-interests i');
        const fontTitle = document.querySelectorAll('.iname');
        const contactP = document.querySelectorAll('.contact p');

        const anime = author([h1, h2, devImg, photoCredit, brief]);
        const authori = authorinterest([title, font, fontTitle, contactP]);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (animationCompletedRef.current) {
                            // If the animation has completed, restart from the beginning
                            anime.restart();
                            authori.restart();
                        } else {
                            // If the animation is still in progress, resume
                            anime.play();
                            authori.play();
                        }
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        if (landing) {
            observer.observe(landing);
        }

        return () => {
            if (landing) {
                observer.unobserve(landing);
            }
        };
    }, []);

    return (
        <section className="main-container" name={"Home"}>
            <div className="container-fluid m-0 d-flex justify-content-center">
                <Author />
                <AuthorInterest author={props.author} />
            </div>
        </section>
    )
}

export default Home