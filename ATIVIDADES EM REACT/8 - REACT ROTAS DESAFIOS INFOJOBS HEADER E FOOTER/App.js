import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Menu from './pages/Menu'
import MinhaArea from './pages/MinhaArea';
import Logo from'./logoInfo.png'
import LogoPlay from'./logoPlay.png'
import LogoFooterB from'./logoFooterB.png'
import LogoFooter from'./logoFooter.png'
function App() {
  return (
    <div className="App">
    <Router>
      <div >
        <header className="App-header">
          <div className='divMenu'>
            
            <ul>
              <li><img className='Logo' src={Logo} alt=''/></li>
              <li><button className='Entrar'>Entrar</button></li>
            </ul>
          
          </div> 
        <center><Menu className="MenuGeral"/></center>
        </header>
        <body className='Fundo'>

          <Routes>
            <Route exact path="/" element={<MinhaArea/>} />
          </Routes>

        </body>
      <footer>
         <ul>
            <li><h4>Institucional</h4></li>
            <li>Quem somos?</li>
            <li>Por que usar Infojobs?</li>
            <li>Trabalhe Conosco</li>
            <li>Política de Cookies</li>
            <li>Consentimento de Cookies</li>
            <li>Ativar acesso em libras</li>

          </ul>     
          <ul>
          <li><h4>Empresa</h4></li>
          <li>Ajuda</li>
          <li>Artigos</li>
          <li>Anunciar Vagas</li>
          <li>Busque candidatos</li>
          <li>PandaPé</li>
          <li>Aviso legal</li>
          <li>Política de Privacidade</li>

          </ul>
          <ul>
          <li><h4>Candidato</h4></li>
          <li>Ajuda</li>
          <li>Artigos</li>
          <li>Vagas</li>
          <li>Guia de Cargos</li>
          <li>Aviso legal</li>
          <li>Política de Privacidade</li>
          <li>Busca de emprego segura</li>
          </ul>
          <div className='DivFooter'>
            <ul className='FooterListaLINK'>
              <li><a target={'_blank'} href='https://www.facebook.com/infojobs.com.br'><button className='footerLINK'><img src='https://www.infojobs.com.br/App_Theme/images/icons/facebook.svg?v=1.0' alt=''/></button></a></li>
              <li><a target={'_blank'} href='https://twitter.com/infojobscombr'><button className='footerLINK'><img src='https://www.infojobs.com.br/App_Theme/images/icons/twitter.svg?v=1.0' alt=''/></button></a></li>
              <li><a target={'_blank'} href='https://www.youtube.com/user/InfoJobscombr'><button className='footerLINK'><img src='https://www.infojobs.com.br/App_Theme/images/icons/youtube.svg?v=1.0' alt=''/></button></a></li>
              <li><a target={'_blank'} href='https://www.linkedin.com/company/infojobs/'><button className='footerLINK'><img src='https://www.infojobs.com.br/App_Theme/images/icons/linkedin.svg?v=1.0' alt=''/></button></a></li>
              <li><a target={'_blank'} href='https://www.instagram.com/infojobsbr/'><button className='footerLINK'><img src='https://www.infojobs.com.br/App_Theme/images/icons/instagram.svg?v=1.0' alt=''/></button></a></li>
            </ul>
            <div className='DivFooterLogo'>
             <center><a target={'_blank'} href='https://play.google.com/store/apps/details?id=com.infojobs.phone&referrer=xtor%3DEPR-369427104%26origenvisita%3D644&utm_medium=promo_www&utm_source=infojobs&utm_campaign=botones_footer'><img className='logoPlay' src={LogoPlay} alt=''/></a>
              <br/>
              <img className='logoFooterB' src={LogoFooterB} alt=''/></center>
            </div>
            </div>
            
      </footer>
      <center><img className='logoFooterFim' src={LogoFooter} alt=''/></center>


      </div>
    </Router>
    </div>
  );
}

export default App;