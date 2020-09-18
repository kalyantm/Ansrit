import React from 'react';
import LogoIcon from '../../images/logo.jpg';
// import Button from '../Button';

const Header = () => (
  <header className="bg-white">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex sm:items-center text-2xl">
        <div className="mr-3">
          <img src={LogoIcon} width={150} height={150} />
        </div>
      </div>
      {/* <div className="hidden md:block">
        <Button className="text-sm font-bold">Subscribe to our newsletter </Button>
      </div> */}
    </div>
  </header>
);

export default Header;
