import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';

const NavButton = ({title,customFunc,icon,color,dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button type='button' onClick={customFunc} style={{color}} 
      className="relative text-xl rounded-full p-3 hover:bg-light-gray">
      <span 
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-3 w-3 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {

  const {activeMenu, setActiveMenu ,isClicked, setIsClicked ,handleClick,screenSize,setScreenSize ,currentColor} = useStateContext();

  useEffect(() => {
    // add screen resize event listeners
    const handleSizeChange = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleSizeChange);
    handleSizeChange();
    return () => window.removeEventListener('resize', handleSizeChange);
  },[]);

  // Handle active menu everytime screen resizes
  useEffect(() => {
    if(screenSize <= 900){
      setActiveMenu(false);
    }else{
      setActiveMenu(true);
    }
  },[screenSize])

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
    {/* Sidebar icon */}
      <NavButton title="Menu" customFunc={()=> setActiveMenu(prevActiveMenu => !prevActiveMenu)} color={currentColor} icon={<AiOutlineMenu />} />
      <div className='flex'>
      {/* Cart,Chat,Notification icon */}
        <NavButton title="Cart" customFunc={() => handleClick('cart')} color={currentColor} icon={<FiShoppingCart />} />
        <NavButton title="Chat" dotColor="#03C9D7" customFunc={() => handleClick('chat')} color={currentColor} icon={<BsChatLeft />} />
        <NavButton title="Notification" dotColor="rgb(254, 201, 15)" customFunc={() => handleClick('notification')} color={currentColor} icon={<RiNotification3Line />} />
      
      {/* Profile icon */}
        <TooltipComponent content="Profile" position="BottomCenter">
          <div onClick={()=>handleClick('userProfile')} className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg">
            <img className="rounded-full w-8 h-8" src={avatar} alt="user-profile"/>
            <p>
              <span className="text-gray-400 text-14">Hi,</span>{' '}
              <span className="text-gray-400 font-bold ml-1 text-14">
                Michael
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
      
      {/* If anyone of the icon is clicked then show that component */}
        {isClicked.cart && (<Cart />)}
        {isClicked.chat && (<Chat />)}
        {isClicked.notification && (<Notification />)}
        {isClicked.userProfile && (<UserProfile />)}
      </div>
    </div>
  )
}

export default Navbar