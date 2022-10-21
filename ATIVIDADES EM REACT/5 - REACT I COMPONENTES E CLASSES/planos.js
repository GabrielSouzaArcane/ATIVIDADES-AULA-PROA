function planos (props){
    return ( <div>
        
           <center>
            <img src={props.imgE} alt='' width={'500px'} height={'500px'}/>
            <h1>{props.titulo}</h1>
            <p>{props.informações}</p>
           </center>
           <hr/>
          </div>)
    
}
export default planos