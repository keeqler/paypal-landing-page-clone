import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { motion } from 'framer-motion';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import NavBar from '~/components/NavBar';
import logo from '~/assets/logo.svg';
import phoneVideo1 from '~/assets/phone_video_1.mp4';
import purpleYogaImage from '~/assets/purple_yoga.png';
import notificationsImage from '~/assets/notifications.gif';
import payTouchFreeImage from '~/assets/pay_touch_free.gif';
import coinyHillImage from '~/assets/coiny_hill.png';
import usFlagImage from '~/assets/us-flag.jpg';
import huluLogo from '~/assets/hulu_logo.png';
import grubhubLogo from '~/assets/grubhub_logo.png';
import potteryBarnLogo from '~/assets/potterybarn_logo.png';
import spotifyLogo from '~/assets/spotify_logo.png';
import ultaLogo from '~/assets/ulta_logo.png';
import grouponLogo from '~/assets/groupon_logo.png';

import BaseStyles from './BaseStyles';
import * as s from './styles';

const App = () => {
  const [counterFirstDigits, setCounterFirstDigits] = useState('34600000');
  const [counterLastDigit, setCounterLastDigit] = useState(1);
  const [counterLastDigitVisible, setCounterLastDigitVisible] = useState(true);
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [personalNavBarOpen, setPersonalNavBarOpen] = useState(false);
  const [businessNavBarOpen, setBusinessNavBarOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounterLastDigit(lastDigit => {
        let nextLastDigit;

        if (lastDigit < 9) {
          nextLastDigit = lastDigit + 1;
        } else {
          nextLastDigit = 0;

          setTimeout(() => setCounterFirstDigits(digits => (parseInt(digits) + 1).toString()), 500);
        }

        return nextLastDigit;
      });

      setCounterLastDigitVisible(false);
      setCounterLastDigitVisible(true);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <BaseStyles />
      <header>
        <NavBar isOpen={navBarOpen}>
          <s.MainNavBarLink onClick={() => setPersonalNavBarOpen(true)}>
            PERSONAL <AiOutlineRight />
          </s.MainNavBarLink>

          <s.MainNavBarLink onClick={() => setBusinessNavBarOpen(true)}>
            BUSINESS <AiOutlineRight />
          </s.MainNavBarLink>

          <s.MainNavBarLink>DEVELOPER</s.MainNavBarLink>
          <s.MainNavBarLink>HELP</s.MainNavBarLink>
        </NavBar>

        <NavBar isOpen={personalNavBarOpen}>
          <s.NavBarGoBackButton onClick={() => setPersonalNavBarOpen(false)}>
            <AiOutlineLeft /> PERSONAL
          </s.NavBarGoBackButton>

          <s.PersonalNavBarLink>How PayPal Works</s.PersonalNavBarLink>
          <s.PersonalNavBarLink>PayPal App</s.PersonalNavBarLink>
          <s.PersonalNavBarLink>Buy and Shop</s.PersonalNavBarLink>
          <s.PersonalNavBarLink>Send and Request Money</s.PersonalNavBarLink>
          <s.PersonalNavBarLink>PayPal Credit and Cards</s.PersonalNavBarLink>
          <s.PersonalNavBarLink>Start Selling</s.PersonalNavBarLink>
        </NavBar>

        <NavBar isOpen={businessNavBarOpen}>
          <s.NavBarGoBackButton onClick={() => setBusinessNavBarOpen(false)}>
            <AiOutlineLeft /> BUSINESS
          </s.NavBarGoBackButton>

          <s.NavBarLinkGroupLabel>PAYPAL COMMERCE PLATFORM</s.NavBarLinkGroupLabel>
          <s.BusinessNavBarLink>Overview</s.BusinessNavBarLink>
          <s.BusinessNavBarLink>Accept Payments</s.BusinessNavBarLink>
          <s.BusinessNavBarLink>Make Payments</s.BusinessNavBarLink>
          <s.BusinessNavBarLink>Manage Risk</s.BusinessNavBarLink>
          <s.BusinessNavBarLink>Accelerate Growth</s.BusinessNavBarLink>
          <s.BusinessNavBarLink>Streamline Operations</s.BusinessNavBarLink>

          <s.NavBarLinkGroupLabel>SOLUTIONS FOR</s.NavBarLinkGroupLabel>
          <s.BusinessNavBarLink>Businesses</s.BusinessNavBarLink>
          <s.BusinessNavBarLink>Enterprises</s.BusinessNavBarLink>
          <s.BusinessNavBarLink>Platforms & Marketplaces</s.BusinessNavBarLink>

          <s.NavBarLinkGroupLabel>RESOURCES</s.NavBarLinkGroupLabel>
          <s.BusinessNavBarLink>Getting Started</s.BusinessNavBarLink>
          <s.BusinessNavBarLink>Pricing</s.BusinessNavBarLink>
          <s.BusinessNavBarLink>Business Resource Center</s.BusinessNavBarLink>
          <s.BusinessNavBarLink>Nonprofits</s.BusinessNavBarLink>
        </NavBar>
      </header>
      <s.Container
        initial={{ transform: 'translate(0px)' }}
        animate={navBarOpen ? { transform: 'translate(240px)' } : { transform: 'translate(0px)' }}
        transition={{ duration: 0.3 }}
      >
        <s.Header>
          <s.HeaderButton
            onClick={() => {
              setNavBarOpen(value => !value);
              setBusinessNavBarOpen(false);
              setPersonalNavBarOpen(false);
            }}
          >
            {navBarOpen && (
              <AiOutlineClose size={14} style={{ marginRight: 4 }} color="var(--blue-2)" />
            )}
            {!navBarOpen && <FaBars style={{ marginRight: 8 }} color="var(--blue-2)" />}
            Menu
          </s.HeaderButton>

          <s.HeaderLogo src={logo} />
          <s.HeaderButton>Log In</s.HeaderButton>
        </s.Header>
        <main>
          <s.Intro>
            <s.IntroContent>
              <s.IntroTitle>With ways to pay, shop and chip in, we're here for you</s.IntroTitle>
              <s.IntroSignUpButton>Sign Up for Free</s.IntroSignUpButton>
            </s.IntroContent>
            <s.IntroVideo muted autoPlay loop>
              <source type="video/mp4" src={phoneVideo1} />
            </s.IntroVideo>
          </s.Intro>

          <s.Business>
            <s.BusinessTitle>Looking for PayPal for Business?</s.BusinessTitle>
            <s.BusinessButton>PayPal for Business</s.BusinessButton>
          </s.Business>

          <s.Feature>
            <s.HelpingYouVideoContainer>
              <s.HelpingYouVideo src="https://www.youtube-nocookie.com/embed/Rr_sRAOn45Y?autoplay=0&amp;rel=0&amp;autohide=2&amp;border=0&amp;wmode=opaque&amp;showinfo=0&amp;hd=1&amp;playsinline=1&amp;enablejsapi=1&amp;modestbranding=1&amp;mute=1"></s.HelpingYouVideo>
            </s.HelpingYouVideoContainer>
            <s.FeatureTitle>Helping you come together</s.FeatureTitle>
            <s.FeatureText>
              We’re all finding ways to come together. Now watch how we’ve been there to help, from
              securely paying your online Pilates instructor, to getting take out touch free.
            </s.FeatureText>
          </s.Feature>

          <s.Feature whiteBg>
            <s.FeatureImage src={purpleYogaImage} />
            <s.FeatureTitle>Send money in seconds</s.FeatureTitle>
            <s.FeatureText>
              Do more with friends – send money, split bills and pool funds from friends quickly and
              easily, with just a mobile number or email address.
            </s.FeatureText>
            <s.FeatureLink>Download the App</s.FeatureLink>
          </s.Feature>

          <s.Feature>
            <s.FeatureImage src={notificationsImage} />
            <s.FeatureTitle>Get instant spend notifications</s.FeatureTitle>
            <s.FeatureText>
              Whether shopping at your usual store or somewhere new, we help keep checkout fast and
              your eligible purchase protected. You also get instant spend notifications, so you can
              easily keep track of all your online hauls.
            </s.FeatureText>
            <s.FeatureLink>Download the App</s.FeatureLink>
          </s.Feature>

          <s.Feature whiteBg>
            <s.FeatureImage src={payTouchFreeImage} />
            <s.FeatureNewBadge>New</s.FeatureNewBadge>
            <s.FeatureTitle>Pay touch-free</s.FeatureTitle>
            <s.FeatureText>
              With the PayPal app, the only thing you need to touch when you pay in-person, is your
              own phone.
            </s.FeatureText>
            <s.FeatureLink>Learn More</s.FeatureLink>
          </s.Feature>

          <s.Feature>
            <s.FeatureImage src={coinyHillImage} />
            <s.FeatureNewBadge>New</s.FeatureNewBadge>
            <s.FeatureTitle>Save more when you shop online with Honey</s.FeatureTitle>
            <s.FeatureText>
              Honey has joined the PayPal family. Use it to help find discounts at over 30,000
              retailers online. Plus, Honey is 100% free.
            </s.FeatureText>
            <s.FeatureLink>Join Honey</s.FeatureLink>
          </s.Feature>

          <s.Feature whiteBg>
            <s.FeatureTitle>Checkout with millions of brands you love</s.FeatureTitle>
            <s.BrandsContainer>
              <s.BrandWrapper>
                <s.Brand src={huluLogo} />
              </s.BrandWrapper>
              <s.BrandWrapper>
                <s.Brand src={grubhubLogo} />
              </s.BrandWrapper>
              <s.BrandWrapper>
                <s.Brand src={potteryBarnLogo} />
              </s.BrandWrapper>
              <s.BrandWrapper>
                <s.Brand src={spotifyLogo} />
              </s.BrandWrapper>
              <s.BrandWrapper>
                <s.Brand src={ultaLogo} />
              </s.BrandWrapper>
              <s.BrandWrapper>
                <s.Brand src={grouponLogo} />
              </s.BrandWrapper>
            </s.BrandsContainer>
          </s.Feature>

          <s.JoinCommunity>
            <s.JoinCommunityTitle>
              Join the global community of 325 million PayPal users
            </s.JoinCommunityTitle>
            <s.JoinCommunitySignUpButton>Sign Up for Free</s.JoinCommunitySignUpButton>
            <s.Counter>
              {counterFirstDigits.split('').map(number => (
                <s.CounterDigitWrapper key={Math.random().toString()}>
                  <s.CounterDigit>{number}</s.CounterDigit>
                </s.CounterDigitWrapper>
              ))}
              <s.CounterLastDigitWrapper>
                {counterLastDigitVisible && (
                  <>
                    <s.CounterLastDigitBefore>
                      {counterLastDigit - 1 > -1 ? counterLastDigit - 1 : 9}
                    </s.CounterLastDigitBefore>
                    <s.CounterLastDigitAfter>{counterLastDigit}</s.CounterLastDigitAfter>
                  </>
                )}
              </s.CounterLastDigitWrapper>
            </s.Counter>
          </s.JoinCommunity>
        </main>
        <s.Disclaimer>
          Paying friends back, or chipping in requires that you have an account with PayPal.
          Creating a Money Pools page requires a PayPal Cash or Cash Plus account. A recipient will
          need to create an account with PayPal to receive money, if they don't already have one.
          <br />
          <br />
          Terms and limitations apply. See terms at{' '}
          <a href="https://www.paypal.com/purchaseprotection">www.paypal.com/purchaseprotection</a>
        </s.Disclaimer>

        <s.Footer>
          <s.FooterUsFlag src={usFlagImage} alt="United States flag" />
          <s.FooterLinks>
            <s.FooterTopLink href="#">Help</s.FooterTopLink>
            <s.FooterTopLink href="#">Contact</s.FooterTopLink>
            <s.FooterTopLink href="#">Fees</s.FooterTopLink>
            <s.FooterTopLink href="#">Security</s.FooterTopLink>
            <s.FooterTopLink href="#">Apps</s.FooterTopLink>
            <s.FooterTopLink href="#">Shop</s.FooterTopLink>
          </s.FooterLinks>
          <s.FooterLinks>
            <s.FooterLink href="#">About</s.FooterLink>
            <s.FooterLink href="#">Newsroom</s.FooterLink>
            <s.FooterLink href="#">Jobs</s.FooterLink>
            <s.FooterLink href="#">Investor Relations</s.FooterLink>
            <s.FooterLink href="#">Social Innovation</s.FooterLink>
            <s.FooterLink href="#">Public Policy</s.FooterLink>
            <s.FooterLink href="#">Sitemap</s.FooterLink>
            <s.FooterLink href="#">Enterprise</s.FooterLink>
            <s.FooterLink href="#">Partners</s.FooterLink>
          </s.FooterLinks>
          <s.FooterLinks>
            <s.FooterCopyright>&copy; 1999–2020</s.FooterCopyright>
            <s.FooterLink href="#">Accessibility</s.FooterLink>
            <s.FooterLink href="#">Privacy</s.FooterLink>
            <s.FooterLink href="#">Legal</s.FooterLink>
          </s.FooterLinks>
        </s.Footer>
      </s.Container>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
