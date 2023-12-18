import React, {useContext, useEffect, useState} from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';

//import icoons
import { BsBag } from 'react-icons/bs';
import { Link } from 'react-router-dom';

//import logo
import Logo from '../img/logo.svg';
import { useTranslation } from 'react-i18next'; 


 const Header = ({children}) => {
  //multi language
 const [t, il8n] = useTranslation("global") ;
 const handlechangeLanguage = (lang) =>{
  il8n.changeLanguage(lang);
 };

//header state
 const [isActive, setIsActive] = useState(false);
 const {isOpen,setIsOpen} = useContext(SidebarContext);
 const {itemAmount} = useContext(CartContext);
//event listener
useEffect(()=> {
  window.addEventListener('scroll', () => {
    window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
  })

})

  return (
    <header className={`${isActive? 'bg-white py-4 shadow-md dark:bg-primary important' : 'bg-none py-6'} 
    fixed w-full z-10 transition-all` }>

      <div className='container mx-auto flex items-baseline
      justify-between h-full'>
      {/* logo */}
      <Link to= {'/'} >
        <div> 
          <img className='w-[40px]' src={Logo} alt='' />
          </div>
        </Link>

        {children}
        {/* multi language */}
        <div className=''>
        <button className='px-4 py-2 bg-blue-500 text-white rounded-md mx-3' onClick={()=> handlechangeLanguage("en")}>English</button>
        <button className='px-4 py-2 bg-blue-500 text-white rounded-md' onClick={()=> handlechangeLanguage("es")}>Spanish</button>
      </div>
      {/* cart */}
      <div onClick={() => setIsOpen(!isOpen)} 
      className='cursor-pointer flex relative '>
       <BsBag className='text-2xl'/>
       <div className='bg-red-500 absolute -right-2
       -bottom-2 text-[12px] w-[18px] h-[18px]
       text-white rounded-full flex justify-center
        items-center '>
        {itemAmount}
        </div>
        </div>
     
        </div>
   
    </header>
  );
};

export default Header;
