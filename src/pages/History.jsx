import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../components/History/PageTitle'
import Timeline from '../components/History/Timeline'
import gsap from 'gsap'

const History = () => {
  const animationMap = [
    { revealedDots: 8, item: '.psc' },
    { revealedDots: 40, item: '.jsc' },
    { revealedDots: 63, item: '.ssc' },
    { revealedDots: 81, item: '.hsc' },
    { revealedDots: 95, item: '.microsoft-course' },
    { revealedDots: 119, item: '.appifylab' },
    { revealedDots: 134, item: '.bkttc' },
  ];
  let dotTimeline
  const animationCompleted = useRef(false)
  const dotanimation = () => {
    const dots = document.querySelectorAll('.timeline-dot')
    dotTimeline = gsap.timeline()
    dots.forEach((dot, index) => {
      dotTimeline.fromTo(dot, { opacity: 0, x: '-100%' }, { opacity: 1, x: '0%', duration: 0.06, ease: 'power1.inOut' }, index * 0.06);
      const animationItem = animationMap.find(item => item.revealedDots === index)
      if (animationItem) {
        dotTimeline.add(() => {
          gsap.fromTo(animationItem.item, {x: '-100%', opacity: 0}, {x: '0%', opacity: 1})
        })
      }
    })
    return dotTimeline
  }
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
    tl.fromTo(h2, { x: '-100%' }, { opacity: 1, x: '0%', duration: 1, ease: 'power2.out' }, 'race').fromTo(h1, { x: '-100%' }, { opacity: 1, x: '0%', duration: 0.7, ease: 'power2.out' }, 'race');
    return tl;
  }

  useEffect(() => {
    const history = document.querySelector('.history');
    const [h2, h1] = document.querySelectorAll('.history .container-fluid .page-titles h2, .history .container-fluid .page-titles h1')
    const title = titleAnimation({ h1, h2 })
    dotTimeline = dotanimation()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (animationCompleted.current) {
              title.restart();
              dotTimeline.restart()
              animationCompleted.current = false
              animationMap.map((k, v) => {
                gsap.set(k.item, {  x: -1000, opacity: 0 })
              })
            } else {
              title.play()
              dotTimeline.play()  
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
      animationCompleted.current = false;
      dotTimeline.kill()
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