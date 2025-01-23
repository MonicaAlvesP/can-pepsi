import { useState, useEffect } from 'react'
import Blue from './assets/pepsi-blue.png'
import Black from './assets/pepsi-black.png'
import Silver from './assets/pepsi-silver.png'
import Logo from './assets/logo.png';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { RiInstagramFill } from "react-icons/ri";


function App() {

  const [imagem, setImagem] = useState(localStorage.getItem('imagem') || Blue)
  const [bgColor, setBgColor] = useState(localStorage.getItem('cor') || '#0261BF')
  const [altImage, setAltImage] = useState('')

  const latinha = [
    { imagem: Blue, cor: '#0261BF', alt: 'Latinha azul' },
    { imagem: Silver, cor: '#e60c2e', alt: 'Latinha prata' },
    { imagem: Black, cor: '#1F1E1F', alt: 'Latinha preta' }
  ];

  const MudarImagem = (imagem, altImage) => {
    setImagem(imagem),
      setAltImage(altImage)
  }

  const MudarCor = (cor) => {
    setBgColor(cor)
  }

  useEffect(() => {
    localStorage.setItem('imagem', imagem);
    localStorage.setItem('cor', bgColor);
  }, [imagem, bgColor]);

  return (
    <section style={{ backgroundColor: bgColor }}>
      <main className="container">
        <header>
          <img src={Logo} alt="Logotipo da PEPSI" className="logo" />
          <nav className="nav">
            <ul className="menu">
              <li>Home</li>
              <li>Products</li>
              <li>What&apos;s New</li>
              <li>Newsletter</li>
              <li>Contact</li>
            </ul>
          </nav>
        </header>


        <section className="content">
          <div className="texts">
            <h1>
              THAT&apos;S WHAT</h1>
            <span className='typing-effect'> I LIKE ❤️</span>
            <p className='textItem'>
              Pepsi has always been about bringing people together and creating moments of joy.
            </p>
            <p className='textItem'>
              Whether you&apos;re enjoying a refreshing Pepsi at a family gathering, a party with friends, or just a quiet moment to yourself, it&apos;s the perfect companion for all the things you love. That&apos;s what we like.
            </p>
            <button className='buttonview'>VIEW ALL PRODUCTS</button>
          </div>

          <div className="can">
            {latinha.map((latinha, index) => (
              <button
                key={index}
                onClick={() => {
                  MudarImagem(latinha.imagem, latinha.alt);
                  MudarCor(latinha.cor);
                }}
              >
                <img src={latinha.imagem}
                  alt={altImage}
                />
              </button>
            ))}
            <img src={imagem}
              alt={altImage}
              className="canSelect" />
          </div>
          <div className='socialIcons'>
            <FaFacebookF />
            <FaTwitter />
            <RiInstagramFill />
          </div>
        </section>


      </main>
    </section>
  )
}

export default App
