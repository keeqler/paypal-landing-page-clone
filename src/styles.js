import styled from 'styled-components';

import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  width: 100%;
  position: absolute;
`;

const Button = styled.button`
  width: 86px;
  height: 38px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  color: var(--blue-1);
  border-radius: 100px;
  cursor: pointer;
`;

/**
 * Header
 */

export const Header = styled.header`
  width: 100%;
  height: 60px;
  padding: 0 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 98237592;
`;

export const HeaderLogo = styled.img`
  width: 26px;
  height: 30px;
  object-fit: cover;
  object-position: 0;
`;

export const HeaderButton = styled(Button).attrs({ type: 'button' })`
  color: var(--blue-2);
  border: 1px solid var(--blue-2);
`;

export const MainNavBarLink = styled.a`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
  color: var(--neutral-1);

  :hover {
    text-decoration: none;
  }

  svg {
    margin: 0 8px;
    opacity: 0.72;
  }
`;

const ChildNavBarLink = styled.a`
  margin-bottom: 20px;
  margin-left: 10px;
  font-size: 15px;
  color: var(--neutral-1);
`;

export const PersonalNavBarLink = styled(ChildNavBarLink)``;

export const BusinessNavBarLink = styled(ChildNavBarLink)`
  margin-bottom: 10px;
`;

export const NavBarLinkGroupLabel = styled.span`
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 300;
  color: var(--neutral-1);
`;

export const NavBarGoBackButton = styled(MainNavBarLink).attrs({ type: 'button' })`
  margin-bottom: 40px;
  font-size: 16px;
  font-weight: 700;
  font-family: 'PayPalSansBig-Medium';

  svg {
    margin-left: 0;
    margin-right: 8px;
  }
`;

/**
 * Intro
 * */

export const Intro = styled.section`
  width: 100%;
  padding-top: 40px;
  background: var(--neutral-4);
`;

export const IntroContent = styled.div`
  width: 100%;
  max-width: 320px;
  margin: auto;
`;

export const IntroTitle = styled.h1`
  text-align: center;
`;

export const IntroSignUpButton = styled(Button)`
  width: 100%;
  height: 56px;
  margin-top: 40px;
  color: var(--blue-1);
  font-size: 16px;
  background: var(--yellow-1);
`;

export const IntroVideo = styled.video`
  width: 100%;
  margin: 0 auto;
  margin-top: 80px;
  display: block;
`;

/**
 * Business
 */

export const Business = styled.section`
  width: 100%;
  padding: 30px 0;
  background: var(--blue-1);
`;

export const BusinessTitle = styled.h4`
  font-family: 'PayPal Sans Big';
  font-weight: 100;
  color: var(--neutral-1);
  text-align: center;
`;

export const BusinessButton = styled(Button)`
  width: 100%;
  max-width: 140px;
  height: 36px;
  margin: 0 auto;
  margin-top: 20px;
  color: var(--blue-1);
  font-size: 12px;
  background: var(--neutral-1);
`;

/**
 * Features
 */

export const Feature = styled.section`
  padding: 40px;
  display: flex;
  flex-direction: column;
  text-align: center;
  background: ${({ whiteBg }) => (whiteBg ? 'var(--neutral-1)' : 'var(--neutral-4)')};
`;

export const FeatureTitle = styled.h1`
  margin-bottom: 20px;
`;

export const FeatureImage = styled.img`
  width: 100%;
  max-width: 260px;
  margin: auto;
  margin-bottom: 20px;
`;

export const FeatureText = styled.span`
  line-height: 1.5;
`;

export const FeatureLink = styled.a`
  margin-top: 20px;
  font-weight: 600;
`;

export const FeatureNewBadge = styled.span`
  width: 60px;
  height: 60px;
  margin: auto;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 18px;
  color: var(--neutral-1);
  background: var(--yellow-1);
`;

/**
 * Helping you
 */

export const HelpingYouVideoContainer = styled.div`
  height: 0;
  margin-bottom: 30px;
  padding-top: 56.25%;
  position: relative;
  z-index: 1;
`;

export const HelpingYouVideo = styled.iframe`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

/**
 * Brands
 */

export const BrandsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const BrandWrapper = styled.div`
  width: 50%;
  padding: 20px 10px;
`;

export const Brand = styled.img`
  width: 100%;
  max-width: 120px;
`;

/**
 * JoinCommunity
 */

export const JoinCommunity = styled(Feature)`
  padding: 60px 20px;
  align-items: center;
  background: var(--blue-1);
`;

export const JoinCommunityTitle = styled.h1`
  margin-bottom: 26px;
  color: var(--neutral-1);
`;

export const JoinCommunitySignUpButton = styled(IntroSignUpButton)`
  width: 100%;
  max-width: 300px;
  margin: 0;
  margin-bottom: 80px;
  background: var(--neutral-1);
`;

export const Counter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CounterDigitWrapper = styled.div`
  width: 40px;
  height: 60px;
  margin-right: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: var(--blue-2);
`;

export const CounterDigit = styled.span`
  color: var(--neutral-1);
  font-size: 26px;
  font-weight: 700;
`;

export const CounterLastDigitWrapper = styled(CounterDigitWrapper)`
  position: relative;
  display: block;
  overflow: hidden;
`;

const CounterLastDigit = styled(CounterDigit)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CounterLastDigitBefore = styled(CounterLastDigit)`
  @keyframes middleToTop {
    from {
      transform: translate(-50%, -50%);
    }

    to {
      transform: translate(-50%, -200%);
    }
  }

  animation: middleToTop 1s ease;
`;

export const CounterLastDigitAfter = styled(CounterLastDigit)`
  @keyframes bottomToMiddle {
    from {
      transform: translate(-50%, 200%);
    }

    to {
      transform: translate(-50%, -50%);
    }
  }

  animation: bottomToMiddle 1s ease;
`;

export const Footer = styled.footer`
  width: 100%;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FooterUsFlag = styled.img`
  align-self: center;
`;

export const FooterLinks = styled.div`
  margin-bottom: 16px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  * {
    margin-top: 6px;
    margin-right: 14px;
  }

  a:last-child {
    margin-right: 0;
  }
`;

export const Disclaimer = styled.div`
  padding: 40px 20px;
  font-size: 16px;
  line-height: 1.6;
  color: var(--neutral-2);
`;

export const FooterTopLink = styled.a`
  font-weight: 600;
  color: var(--neutral-2);
`;

export const FooterLink = styled.a`
  font-size: 14px;
  font-weight: 600;
  color: var(--neutral-3);
`;

export const FooterCopyright = styled.span`
  font-size: 14px;
  color: var(--neutral-3);
`;
