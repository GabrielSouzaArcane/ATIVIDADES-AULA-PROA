function ComponenteLista({itens}){
    return(
        <div>
            <h3>
                {itens.length > 0 ?
                    itens.map((item, index) => (
                        <p key = {index}>{item}</p>
                    )) : (<p>Lista Vazia!</p>)
                }
            </h3>
        </div>
    )
}

export default ComponenteLista