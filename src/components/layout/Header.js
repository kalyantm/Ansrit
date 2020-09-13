import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../images/logo.png';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-white shadow-nav">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="mr-3">
          <img src={LogoIcon} width={50} height={50} />
        </div>
        Ansrit Solutions
      </div>
      {/* <div className="hidden md:block">
        <Button className="text-sm font-bold">Subscribe to our newsletter </Button>
      </div> */}
    </div>
  </header>
);

export default Header;
