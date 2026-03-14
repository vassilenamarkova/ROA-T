import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Users, Phone, Briefcase } from 'lucide-react';

const MobileNavigation = ({ logo, scrolledLogo, customLogoHeight = "60px" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isMobile = windowWidth <= 768;
  const currentLogo = isScrolled ? scrolledLogo : logo;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navigateToPage = (path) => {
    window.location.href = path;
    setIsMenuOpen(false);
  };

  if (!isMobile) {
    // Return your original StickyNavigation component for desktop
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '80px',
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2rem',
        transition: 'all 0.3s ease'
      }}>
        {/* Logo */}
        <div style={{ height: customLogoHeight }}>
          <img 
            src={currentLogo} 
            alt="Logo" 
            style={{ 
              height: '100%',
              width: 'auto',
              objectFit: 'contain'
            }} 
          />
        </div>

        {/* Desktop Navigation */}
        <nav style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center'
        }}>
          <button
            onClick={() => scrollToSection('landing')}
            style={{
              background: 'none',
              border: 'none',
              color: isScrolled ? '#0000A0' : '#FFFFFF',
              fontSize: '1.1rem',
              fontFamily: 'Inria Sans',
              cursor: 'pointer',
              transition: 'color 0.3s ease'
            }}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about-us')}
            style={{
              background: 'none',
              border: 'none',
              color: isScrolled ? '#0000A0' : '#FFFFFF',
              fontSize: '1.1rem',
              fontFamily: 'Inria Sans',
              cursor: 'pointer',
              transition: 'color 0.3s ease'
            }}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('contacts')}
            style={{
              background: 'none',
              border: 'none',
              color: isScrolled ? '#0000A0' : '#FFFFFF',
              fontSize: '1.1rem',
              fontFamily: 'Inria Sans',
              cursor: 'pointer',
              transition: 'color 0.3s ease'
            }}
          >
            Contacts
          </button>
          <button
            onClick={() => navigateToPage('/careers')}
            style={{
              background: 'none',
              border: 'none',
              color: isScrolled ? '#0000A0' : '#FFFFFF',
              fontSize: '1.1rem',
              fontFamily: 'Inria Sans',
              cursor: 'pointer',
              transition: 'color 0.3s ease'
            }}
          >
            Careers
          </button>
        </nav>
      </div>
    );
  }

  // Mobile Navigation
  return (
    <>
      {/* Mobile Header */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '60px',
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1rem',
        transition: 'all 0.3s ease'
      }}>
        {/* Logo */}
        <div style={{ height: '40px' }}>
          <img 
            src={currentLogo} 
            alt="Logo" 
            style={{ 
              height: '100%',
              width: 'auto',
              objectFit: 'contain'
            }} 
          />
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {isMenuOpen ? (
            <X size={24} color={isScrolled ? '#0000A0' : '#FFFFFF'} />
          ) : (
            <Menu size={24} color={isScrolled ? '#0000A0' : '#FFFFFF'} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '60px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
            animation: 'fadeIn 0.3s ease'
          }}
        >
          <style>
            {`
              @keyframes fadeIn {
                from { opacity: 0; transform: translateY(-20px); }
                to { opacity: 1; transform: translateY(0); }
              }
            `}
          </style>

          <button
            onClick={() => scrollToSection('landing')}
            style={{
              background: 'none',
              border: 'none',
              color: '#FFFFFF',
              fontSize: '1.5rem',
              fontFamily: 'Inria Sans',
              cursor: 'pointer',
              padding: '1rem 2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              transition: 'all 0.3s ease',
              borderRadius: '8px'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            <Home size={20} />
            Home
          </button>

          <button
            onClick={() => scrollToSection('about-us')}
            style={{
              background: 'none',
              border: 'none',
              color: '#FFFFFF',
              fontSize: '1.5rem',
              fontFamily: 'Inria Sans',
              cursor: 'pointer',
              padding: '1rem 2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              transition: 'all 0.3s ease',
              borderRadius: '8px'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            <Users size={20} />
            About
          </button>

          <button
            onClick={() => scrollToSection('contacts')}
            style={{
              background: 'none',
              border: 'none',
              color: '#FFFFFF',
              fontSize: '1.5rem',
              fontFamily: 'Inria Sans',
              cursor: 'pointer',
              padding: '1rem 2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              transition: 'all 0.3s ease',
              borderRadius: '8px'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            <Phone size={20} />
            Contacts
          </button>

          <button
            onClick={() => navigateToPage('/careers')}
            style={{
              background: 'none',
              border: 'none',
              color: '#FFFFFF',
              fontSize: '1.5rem',
              fontFamily: 'Inria Sans',
              cursor: 'pointer',
              padding: '1rem 2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              transition: 'all 0.3s ease',
              borderRadius: '8px'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            <Briefcase size={20} />
            Careers
          </button>
        </div>
      )}
    </>
  );
};

export default MobileNavigation;