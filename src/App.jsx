import { useState } from 'react'
import Blue from './assets/pepsi-blue.png'
import Black from './assets/pepsi-black.png'
import Silver from './assets/pepsi-silver.png'
import Logo from './assets/logo.png';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { RiInstagramFill } from "react-icons/ri";


function App() {

  const [imagem, setImagem] = useState(Blue)
  const [bgColor, setBgColor] = useState('#0261BF')

  const latinha = [
    { imagem: Blue, cor: '#0261BF' },
    { imagem: Silver, cor: '#e60c2e' },
    { imagem: Black, cor: '#1F1E1F' }
  ];

  const MudarImagem = (imagem) => {
    setImagem(imagem)
  }

  const MudarCor = (cor) => {
    setBgColor(cor)
  }

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
              THAT&apos;S WHAT <span>I LIKE</span>
            </h1>
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
                  MudarImagem(latinha.imagem);
                  MudarCor(latinha.cor);
                }}
              >
                <img src={latinha.imagem}
                  alt={`latinhas ${latinha.cor}`}
                />
              </button>
            ))}
            <img src={imagem}
              alt="Latinha selecionada"
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
