import React from 'react';
import { useTranslation } from 'react-i18next'; 

const Footer = () => {
  const [t, il8n] = useTranslation("global") ;
  return (
    <footer className='bg-primary py-12'>
      <div className='container mx-auto'>
        <p className='text-white text-center'>
         {t('footer.body1')} &copy; {t('footer.body2')}

        </p>
      </div>
    </footer >



  );
};

export default Footer;
