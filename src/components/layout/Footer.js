import React from 'react';

const SOCIAL = [
  // TODO: When we hookup social media in the future
  // {
  //   icon: GithubIcon,
  //   link: 'https://github.com/ajayns/gatsby-absurd',
  // },
  // {
  //   icon: InstagramIcon,
  //   link: 'https://instagram.com/ajay_ns',
  // },
  // {
  //   icon: TwitterIcon,
  //   link: 'https://twitter.com/ajayns08',
  // },
];

const Footer = () => (
  <>
    <div className="background:white shadow-nav container mx-auto lg:pt-40 pt-20">
      <div className="flex justify-between items-center">
        <div className="color:black">
          <h2 className="text-2xl">AnsrIT Solutions</h2>
          <span>Copyright © 2020 Company Inc. All rights reserved.</span>
        </div>
        <div className="flex">
          {SOCIAL.map(({ icon, link }) => (
            <a key={link} href={link}>
              <img className="mx-0 my-4" src={icon} alt="link" />
            </a>
          ))}
        </div>
      </div>
    </div>
  </>
);
export default Footer;
