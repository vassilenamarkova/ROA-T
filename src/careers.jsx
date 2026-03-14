import { useLanguage } from './LanguageContext';
import { translations } from './translations';
import lady from './assets/lady.svg'; 
import im1 from './assets/im1.png';
import im2 from './assets/im2.png';
import im3 from './assets/im3.png';
import { LanguageProvider } from './LanguageContext';

const Careers = () => {
  const { language} = useLanguage();
  const t = translations[language];

  return (
    <LanguageProvider>
        <>
          <div style={{
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          width: '100vw',
          backgroundColor: '#C59E71',
          padding: '-100rem',
          minHeight: '70vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: '2rem',
          marginTop: '0.5rem',
          zIndex: 1000
        }}>
          {/* Main content container */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: '2rem',
            marginTop: '1.7rem',
            padding: '1rem',
            minHeight: '75vh'
          }}>
            
            {/* TITLE */}
            <div style={{
              flex: '0 0 290px',
              height: '250px',
              position: 'relative'
            }}>
              {/* Background text */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '-50px',
                transform: 'translate(-50%, -50%)',
                fontSize: '5rem',
                fontWeight: '500',
                color: 'rgba(255, 255, 255, 0.86)',
                zIndex: 1,
                userSelect: 'none',
                pointerEvents: 'none',
                whiteSpace: 'nowrap'  ,
                letterSpacing: '0.5rem'
              }}>
                {t.hiring}
              </div>
              
              
            </div>
          </div>
          
          {/*Welcome to FLOW */}
          <div style={{
            position: 'absolute',
            top: '200px',
            left: '10.5%',
            fontSize: '1.4rem',
            color: '#FFFF',  // Changed from 'light' to '300' (numeric is more reliable)
            fontFamily: 'Inria Sans',
            zIndex: 10,
            width: '700px',
            textAlign: 'left',
            lineHeight: '0.9',
            letterSpacing: '0.1rem'
          }}>
              {t.careerText}
                          
          </div>

          {/*LADY */}
          <div style={{
              position: 'absolute',
              bottom: '-7.5%',
              right: '50px',
              zIndex: 1000,
              boxShadow: 'none'
          }}>
              <img
                  src={lady}
                  alt="Barista illustration"
                  style={{
                      width: '300px',
                      height: 'auto',
                      filter: 'none',
                      boxShadow: 'none',
                      WebkitFilter: 'none',
                      outline: 'none',
                      border: 'none',
                      display: 'block', // avoids inline spacing
                  }}
              />
          </div>

          

        </div>

          {/*COLLAGE */}
                  {/*COLLAGE */}
          <div style={{
              position: 'relative',
              left: '50%',
              right: '50%',
              marginLeft: '-50vw',
              marginRight: '-50vw',
              marginTop: '1vw',
              width: '100vw',
              height: '80vh',
              display: 'flex',
              zIndex: '100'
          }}>
              <img
                  src={im1}
                  alt="Banner image 1"
                  style={{
                      width: '33.33%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      objectPosition: '50% 42%'
                  }}
              />
              <img
                  src={im2}
                  alt="Banner image 2"
                  style={{
                      width: '33.33%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      objectPosition: '50% 42%'
                  }}
              />
              <img
                  src={im3}
                  alt="Banner image 3"
                  style={{
                      width: '33.33%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      objectPosition: '50% 42%'
                  }}
              />

              <div style={{
                  position: 'absolute',
                  bottom: '-35px',
                  left: '89%',
                  transform: 'translateX(-50%)',
                  fontWeight: '300',
                  zIndex: 100,
                  textAlign: 'center',
                  whiteSpace: 'nowrap',
                  padding: '8px 0',
                  fontSize: '0.9rem', // Slightly smaller font
                  fontFamily: 'Inria Sans',
                  color: '#A2A2A2',
                  }}>
                  {t.rights}
              </div>
          </div>
    
          
        
        </>
      </LanguageProvider>
    );
};

export default Careers;