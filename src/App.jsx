import { useState, useEffect, useRef } from 'react';
import Blue from './assets/pepsi-blue.png';
import Black from './assets/pepsi-black.png';
import Silver from './assets/pepsi-silver.png';
import Logo from './assets/logo.png';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { RiInstagramFill } from "react-icons/ri";

function App() {
  const [imagem, setImagem] = useState(localStorage.getItem('imagem') || Blue);
  const [bgColor, setBgColor] = useState(localStorage.getItem('cor') || '#0261BF');
  const [altImage, setAltImage] = useState('');
  const [hoverFont, setHoverFont] = useState('#fff');
  const [hoverButtonBg, setHoverButtonBg] = useState('#73A1D1');

  const buttonRef = useRef(null);
  const menuItemsRef = useRef([]);

  const latinha = [
    { imagem: Blue, cor: '#0261BF', alt: 'Latinha azul', fontHover: '#A1E1F0', hoverButton: '#73A1D1' },
    { imagem: Silver, cor: '#e60c2e', alt: 'Latinha prata', fontHover: '#F68988', hoverButton: '#E6A1A8' },
    { imagem: Black, cor: '#1F1E1F', alt: 'Latinha preta', fontHover: '#818081', hoverButton: '#818081' }
  ];

  const MudarImagem = (imagem, alt) => {
    setImagem(imagem);
    setAltImage(alt);
  };

  const MudarCor = (cor, fontHover, hoverButton) => {
    setBgColor(cor);
    setHoverFont(fontHover);
    setHoverButtonBg(hoverButton);
  };

  useEffect(() => {
    localStorage.setItem('imagem', imagem);
    localStorage.setItem('cor', bgColor);
  }, [imagem, bgColor]);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = '#fff';
      buttonRef.current.style.color = hoverFont;
    }
    menuItemsRef.current.forEach(item => {
      if (item) {
        item.style.color = '#fff';
      }
    });
  }, [hoverButtonBg, hoverFont]);

  return (
    <section style={{ backgroundColor: bgColor }}>
      <main className="container">
        <header>
          <img src={Logo} alt="Logotipo da PEPSI" className="logo" />
          <nav className="nav">
            <ul className="menu">
              {['Home', 'Products', 'What\'s New', 'Newsletter', 'Contact'].map((item, index) => (
                <li
                  key={index}
                  ref={el => menuItemsRef.current[index] = el}
                  style={{
                    color: '#fff',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = hoverFont)}
                  onMouseLeave={(e) => (e.target.style.color = '#fff')}
                >
                  {item}
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <section className="content">
          <div className="texts">
            <h1>THAT&apos;S WHAT</h1>
            <span className="typing-effect">I LIKE ❤️</span>
            <p className="textItem">
              Pepsi has always been about bringing people together and creating moments of joy.
            </p>
            <p className="textItem">
              Whether you&apos;re enjoying a refreshing Pepsi at a family gathering, a party with friends, or just a quiet moment to yourself, it&apos;s the perfect companion for all the things you love. That&apos;s what we like.
            </p>
            <button
              ref={buttonRef}
              className="buttonview"
              style={{
                transition: 'background-color 0.3s ease, color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = hoverButtonBg;
                e.target.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#fff';
                e.target.style.color = hoverFont;
              }}
            >
              VIEW ALL PRODUCTS
            </button>
          </div>

          <div className="can">
            {latinha.map((latinha, index) => (
              <button
                key={index}
                onClick={() => {
                  MudarImagem(latinha.imagem, latinha.alt);
                  MudarCor(latinha.cor, latinha.fontHover, latinha.hoverButton);
                }}
              >
                <img src={latinha.imagem} alt={latinha.alt} />
              </button>
            ))}
            <img
              src={imagem}
              alt={altImage}
              className="canSelect"
            />
          </div>
          <div className="socialIcons">
            <FaFacebookF />
            <FaTwitter />
            <RiInstagramFill />
          </div>
        </section>
      </main>
    </section>
  );
}

export default App;