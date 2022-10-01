import './App.css';
import Componente01  from './PROPSarray';
 
var projeto = [{inicio:"Snoop Dogg", linkbio:"https://pt.wikipedia.org/wiki/Snoop_Dogg", bio:"Sobre", titulo: "The Next Episode", cantor:"Snoop Dogg", Imagem : "https://cdns-images.dzcdn.net/images/artist/a423dd42b7394eeacc882be8ac633eee/500x500.jpg", alt: "", link:"https://www.youtube.com/watch?v=QZXc39hT8t4" },
               {inicio:"Bob Marley", linkbio:"https://pt.wikipedia.org/wiki/Bob_Marley", bio:"Sobre", titulo: "three little birds", cantor:"Bob Marley", Imagem : "https://files.cercomp.ufg.br/weby/up/120/o/noticia1305059253_ORIG.jpeg?1355967981", alt: "", link:"https://www.youtube.com/watch?v=HNBCVM4KbUM" },
               {inicio:"Eminem", linkbio:"https://pt.wikipedia.org/wiki/Eminem", bio:"Sobre", titulo: "FACK", cantor:"Eminem", Imagem : "https://i0.wp.com/popkultur.de/wp-content/uploads/2017/05/eminemneu.jpg?fit=1000%2C999&ssl=1", alt: "", link:"https://www.youtube.com/watch?v=BOI8OGIy6cA"},
               {inicio:"50 cent", linkbio:"https://pt.wikipedia.org/wiki/50_Cent", bio:"Sobre", titulo: "Just A Lil Bit", cantor:"50 Cent (Curtis James Jackson III)", Imagem : "https://th.bing.com/th/id/OIP.OJsCzjrgHfIpyG7HCZzs3AAAAA?pid=ImgDet&rs=1", alt: "" , link: "https://www.youtube.com/watch?v=Gfx9-FaA5BE"},
               {inicio:"Michael Jackson", linkbio:"https://pt.wikipedia.org/wiki/Michael_Jackson", bio:"Sobre", titulo: "Don’t Stop 'Til You Get Enough ", cantor:"Michael Jackson", Imagem : "https://th.bing.com/th/id/OIP.7Sa19tUPAT3QJkAC6RqkBQHaFj?pid=ImgDet&rs=1", alt: "", link:"https://www.youtube.com/watch?v=yURRmWtbTbo" },

            ]
        
 
function App() {
  return (
    <div className="App-header">
      {projeto.map((dado) => (<Componente01 titulo={dado.titulo} cantor={dado.cantor} nomeImagem={dado.Imagem} alt={dado.nomeIMAGEM} link={dado.link} tituloPage={dado.inicio} linkBIOGRAFIA={dado.linkbio} Biografia ={dado.bio}/>))}

    </div>
  );
}
 
export default App;
 
