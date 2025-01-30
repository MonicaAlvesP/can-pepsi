import { createContext, useContext, useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import Blue from "@/assets/pepsi-blue.png";
import Black from "@/assets/pepsi-black.png";
import Silver from "@/assets/pepsi-silver.png";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import s from "@/sass/app.module.scss";

// Cria um contexto para o tema
const ThemeContext = createContext();

// ThemeProvider para gerenciar o estado do tema e fornecê-lo aos componentes filhos
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "blue-theme");
  const [imagem, setImagem] = useState(localStorage.getItem("imagem") || Blue);
  const [altImage, setAltImage] = useState("Latinha azul");

  // Salva o tema e a imagem no localStorage sempre que eles mudam
  useEffect(() => {
    localStorage.setItem("theme", theme);
    localStorage.setItem("imagem", imagem);
  }, [theme, imagem]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, imagem, setImagem, altImage, setAltImage }}>
      <div className={`${s.app} ${s[theme]}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

// Componente ThemeSelector para permitir que os usuários selecionem um tema
const ThemeSelector = () => {
  const { setTheme, setImagem, setAltImage, imagem, altImage } = useContext(ThemeContext);

  const themes = [
    { imagem: Blue, alt: "Latinha azul", theme: "blue-theme" },
    { imagem: Silver, alt: "Latinha prata", theme: "silver-theme" },
    { imagem: Black, alt: "Latinha preta", theme: "black-theme" },
  ];

  return (
    <section className={s.can}>
      {themes.map((latinha, index) => (
        <div
          className={s.canItem}
          key={index}
          onClick={() => {
            setTheme(latinha.theme);
            setImagem(latinha.imagem);
            setAltImage(latinha.alt);
          }}
        >
          <img src={latinha.imagem} alt={latinha.alt} />
        </div>
      ))}
      <img src={imagem} alt={altImage} className={s.canSelect} />
    </section>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <header className={s.containerHeader}>
        <img src={logo} alt="Logotipo da PEPSI" />
        <nav className={s.navigation}>
          <ul className={s.menu}>
            <li>Home</li>
            <li>Products</li>
            <li>What's New</li>
            <li>Newsletter</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <main className={s.container}>
        <section className={s.texts}>
          <h1>THAT'S WHAT</h1>
          <span className={s.typingEffect}>I LIKE ❤️</span>
          <p className={s.textItem}>
            Pepsi sempre foi sobre reunir pessoas e criar momentos de alegria.
            Seja aproveitando uma Pepsi refrescante em uma reunião de família, uma festa com amigos,
            ou apenas um momento tranquilo para você, é o companheiro perfeito para todas as coisas que você ama.
            Isso é o que gostamos.
          </p>
          <button className={s.buttonview}>VER TODOS OS PRODUTOS</button>
        </section>
        <ThemeSelector />
        <section className={s.socialIcons}>
          <FaFacebookF />
          <FaTwitter />
          <RiInstagramFill />
        </section>
      </main>
    </ThemeProvider>
  );
};

export default App;
