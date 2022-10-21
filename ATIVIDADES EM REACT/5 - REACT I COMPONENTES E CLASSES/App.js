import './App.css';
import Planos from './planos';
import Form from './form'
 
var projeto = [{titulo:"Planos Claro móvel", info:"A Claro tem planos Pós-pago, Controle, Flex e Pré-pago para seu celular. Confira as vantagens e benefícios e escolha o melhor plano para você", Imagem:"https://th.bing.com/th/id/R.82dc19c2b1e53f73d6b730f38be34a37?rik=TcllPGP9JykPAA&pid=ImgRaw&r=0"},
               {titulo:"COMBO INTERNET E TV", info:"Assine Claro net vírtua, a banda larga que tem ultravelocidades de até 250 mega. Conheça também a Claro net tv com NOW, muita programação para você assistir quando e onde quiser.", Imagem:"https://th.bing.com/th/id/OIP.gVgY_pRvgQzfhmFVPHTYaAHaEE?pid=ImgDet&rs=1"},
               {titulo:"Internet Wi-fi Claro net vírtua", info:"A Claro net vírtua tem banda larga com ultravelocidade de até 250 Mega, além de wi-fi dentro e fora de casa. Enquanto você assiste a um filme no tablet, outra pessoa joga no celular e baixa fotos no computador, com muito mais velocidade. Cada um na sua tela.", Imagem:"https://vejasp.abril.com.br/wp-content/uploads/2020/09/20200723075957_1200_675_-_net_claro.jpg"},
                ]
        
 
function App() {
  return (
    <div className="App-header">
      {projeto.map((dado) => (<Planos titulo={dado.titulo} informações={dado.info} imgE={dado.Imagem}/>))}
      <Form/>
    </div>
  );
}


 
export default App;
 
