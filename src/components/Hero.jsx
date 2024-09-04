import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo ,smallHeroVideo} from '../utils';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [videoSrc, setvideoSrc] = useState(window.
    innerWidth < 760 ? smallHeroVideo : heroVideo);

  const handleVideoSrcSet = () =>{
    setvideoSrc(window.innerWidth < 760 ? smallHeroVideo : heroVideo);
  }
  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);
    return () => window.removeEventListener('resize', handleVideoSrcSet);
  })


  useGSAP(() => {
    gsap.to('#hero', {opacity: 1, delay: 2})
    gsap.to('#cta', {opacity: 1, delay: 2, y: 10})
  })
  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
      <p id="hero" className="hero-title">
        iPhone 15 Pro
      </p>
          <div className='md:w-10/12 w-9/12'>
            <video className='pointer-events-none'autoPlay muted playsInline={true} key={videoSrc}>
              <source src={videoSrc} type='video/mp4'/>
            </video>
          </div>
      </div>

      <div id='cta'className='flex flex-col items-center opacity-0 translate-y-20'>
        <p className='font-normal text-xl text-center'>
          <span className='text-sm'>Unlock the future with iPhone 15 Pro.</span>
          <br/>
          <span className='text-gray'>Experience the future now.</span>
          <br />
          From Rs. 1,29,800.00 /-
        </p>
        <a href='#Highlights' className='btn'> Buy Now</a>
      </div>
    </section>
  )
}

export default Hero

