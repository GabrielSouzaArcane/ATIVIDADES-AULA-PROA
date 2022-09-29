function card (props){
    return <div><center>
           <img src={props.foto} alt={props.nomeFoto}/>
           <h2>{props.nome}</h2>
           <h3><p>{props.descrição}</p></h3>
           <a target="_blank" href={props.link}>{props.nomeLink}</a>
           </center>
           <hr/>
          </div>
    
}
export default card