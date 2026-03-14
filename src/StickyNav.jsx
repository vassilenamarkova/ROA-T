import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { translations } from './translations';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// Add this function to your StickyNavigation component or App.js
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

const StickyNavigation = ({ logo, scrolledLogo, customLogoHeight }) => {
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = translations[language];

  // Function to handle navigation to sections
  const handleSectionNavigation = (sectionId) => {
    if (location.pathname === '/') {
      // We're on the home page, just scroll to the section
      scrollToSection(sectionId);
    } else {
      // We're on a different page, navigate to home first, then scroll
      navigate('/');
      // Use setTimeout to ensure the page has loaded before scrolling
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  };

  // Function to handle logo click - different behavior for big vs scrolled logo
  const handleLogoClick = (e) => {
    e.preventDefault(); // Prevent default Link behavior
    
    if (scrolled) {
      // Scrolled logo: always go to landing section
      if (location.pathname === '/') {
        // We're on the home page, just scroll to landing
        setTimeout(() => {
          scrollToSection('landing');
        }, 50);
      } else {
        // We're on a different page, navigate to home first, then scroll
        navigate('/');
        setTimeout(() => {
          scrollToSection('landing');
        }, 100);
      }
    } else {
      // Big logo: only navigate from non-main pages
      if (location.pathname !== '/') {
        navigate('/');
      }
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      zIndex: 10000,
      display: 'flex',
      alignItems: 'center',
      background: scrolled 
        ? 'rgba(255, 255, 255, 0.47)'
        : 'rgba(255, 255, 255, 1)',
      backdropFilter: 'blur(10px)',
      minHeight: scrolled ? '8px':'80px',
      transition: 'background 0.3s ease',
      borderBottom: scrolled ? '1px solid rgba(0, 0, 160, 0.1)' : 'none'
    }}>
      <style>
        {`
          .nav-link:hover {
            color: #4d4dff !important;
          }
          .lang-button:hover {
            color: #0000A0 !important;
          }
        `}
      </style>
      
      {/* Language toggle - repositioned when scrolled */}
      <div style={{
        position: 'fixed',
        top: '5%',
        left: 'auto',
        right: '10px',
        fontSize: '0.8rem',
        fontFamily: 'Inria Sans',
        letterSpacing: '0px',
        transition: 'color 0.3s ease'
      }}>
        <button 
          className="lang-button"
          onClick={() => toggleLanguage('BG')}
          style={{
            background: 'none',
            border: 'none',
            textDecoration: 'none',
            color: language === 'BG' ? '#0000A0' : '#666',
            fontWeight: language === 'BG' ? '700' : '500',
            cursor: 'pointer',
            fontSize: 'inherit',
            fontFamily: 'inherit',
            outline: 'none',
            padding: scrolled? '5px':'1px',
            margin: scrolled? '2px':'1px',
            transition: 'color 0.3s ease'
          }}
        >
          BG
        </button>
        <span style={{ color: '#0000A0' }}>/</span>
        <button
          className="lang-button"
          onClick={() => toggleLanguage('EN')}
          style={{
            background: 'none',
            border: 'none',
            textDecoration: 'none',
            color: language === 'EN' ? '#0000A0' : '#666',
            fontWeight: language === 'EN' ? '700' : '500',
            cursor: 'pointer',
            fontSize: 'inherit',
            fontFamily: 'inherit',
            outline: 'none',
            padding: scrolled? '5px':'1px',
            margin: scrolled? '2px':'1px',
            transition: 'color 0.3s ease'
          }}
        >
          EN
        </button>
      </div>
      
      {/* Left side - adjust spacing when scrolled to account for language toggle */}
      <div style={{
        flex: '1',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingLeft: scrolled ? '80px' : '0' // Add padding when scrolled to avoid overlap
      }}>
        <button 
          className="nav-link"
          onClick={() => handleSectionNavigation('home')}
          style={{
            background: 'none',
            border: 'none',
            textDecoration: 'none',
            color: '#0000A0',
            fontSize: '1.1rem',
            fontWeight: '500',
            transition: 'color 0.3s ease',
            cursor: 'pointer',
            fontFamily: 'inherit',
            outline: 'none'
          }}
        >
          {t.home}
        </button>

        <button 
          className="nav-link"
          onClick={() => handleSectionNavigation('about-us')}
          style={{
            background: 'none',
            border: 'none',
            textDecoration: 'none',
            color: '#0000A0',
            fontSize: '1.1rem',
            fontWeight: '500',
            transition: 'color 0.3s ease',
            cursor: 'pointer',
            fontFamily: 'inherit',
            outline: 'none'
          }}
        >
          {t.about}
        </button>
      </div>
      
      {/* Centered logo */}
      <div style={{
        flex: '0 0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Link to="/" onClick={handleLogoClick}>
          <img 
            src={scrolled ? (scrolledLogo || logo || '/flowLogo.svg') : (logo || '/flowLogo.svg')}
            className="logo react" 
            alt="React logo"
            style={scrolled ? {
                height: '25px',
                width: 'auto',
                transition: 'height 0.3s ease',
                objectFit: 'contain',
                objectPosition: 'center',
                padding: '6px',
                margin: '0',
                display: 'block',
                verticalAlign: 'top',
                zIndex: 99999,
                cursor: 'pointer'
            } : {
                height: customLogoHeight || '80px',
                width: 'auto',
                transition: 'height 0.3s ease',
                cursor: 'pointer'
            }}
          />
        </Link>
      </div>
      
      {/* Right side - add equal padding to maintain center balance */}
      <div style={{
        flex: '1',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingRight: scrolled ? '80px' : '0' // Add equal padding to maintain center balance
      }}>
        <Link
          to="/careers"
          className="nav-link"
          style={{
            textDecoration: 'none',
            color: '#0000A0',
            fontSize: '1.1rem',
            fontWeight: '500',
            transition: 'color 0.3s ease',
            outline: 'none'
          }}
        >
          {t.careers}
        </Link>
        
        <button 
          className="nav-link"
          onClick={() => handleSectionNavigation('contacts')}
          style={{
            background: 'none',
            border: 'none',
            textDecoration: 'none',
            color: '#0000A0',
            fontSize: '1.1rem',
            fontWeight: '500',
            transition: 'color 0.3s ease',
            cursor: 'pointer',
            fontFamily: 'inherit',
            outline: 'none'
          }}
        >
          {t.contacts}
        </button>
      </div>
    </div>
  );
};

export default StickyNavigation;