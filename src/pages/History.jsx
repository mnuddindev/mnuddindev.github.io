import React, { useEffect, useRef } from 'react'
import PageTitle from '../components/History/PageTitle'
import Timeline from '../components/History/Timeline'
import gsap from 'gsap'

const History = () => {
  const animationCompleted = useRef(false)

  const titleAnimation = (params) => {
    const { h1, h2 } = params;
    const tl = gsap.timeline({
      defaults: {
        opacity: 0,
        y: 50,
        ease: 'power2.out',
      },
      onComplete: () => {
        animationCompleted.current = true;
      },
    });
    tl.fromTo(h2, { x: '-100%' }, { opacity: 1, x: '0%', duration: 1, ease: 'power2.out'}, 'race').fromTo(h1, { x: '-100%' }, { opacity: 1, x: '0%', duration: 0.7, ease: 'power2.out'}, 'race');
    return tl;
  };

  useEffect(() => {
    const history = document.querySelector('.history');
    const [h2, h1] = document.querySelectorAll('.history .container-fluid .page-titles h2, .history .container-fluid .page-titles h1');

    const title = titleAnimation({ h1, h2 });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (animationCompleted.current) {
              title.restart();
            } else {
              title.play();
            }
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (history) {
      observer.observe(history);
    }

    return () => {
      if (history) {
        observer.unobserve(history);
      }
    };
  }, []);

  return (
    <section className='main-container history' >
      <div className="container-fluid m-0">
        <PageTitle />
        <Timeline />
      </div>
    </section>
  )
}

export default History