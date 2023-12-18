import React from 'react';
import WomanImg from '../img/woman_hero.png'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 

const Hero = () => {
  const [t, il8n] = useTranslation("global") ;
  return(
    <section className='h-[800px] bg-no-repeat 
    bg-center bg-cover bg-hero py-24 '>
      <div className='container mx-auto flex justify-around h-full'>
       {/* text */}
       <div className='flex flex-col justify-center'>
        {/* pretitle */}
        <div  className='font-semibold flex items-center uppercase'>
          <div className='w-10 h-[2px] bg-red-500 mr-3 '></div> {t("hero.trend")}
        </div>
        {/* title */}
        <h1 className='text-[70px] leading-[1.1]
        font-light mb-4'>
          {t("hero.h1")} <br />
          <span className='font-semibold'> {t("hero.span")}</span>
          </h1>
          <Link to ={'/'} className='self-start uppercase
          font-semibold border-b-2 border-primary'>
              {t("hero.link")}
          </Link>

       </div>
        {/* image */}
        <div className='hidden lg:block'>
          <img src={WomanImg} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
