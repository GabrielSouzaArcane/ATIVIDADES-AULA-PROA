import { Link } from 'react-router-dom'
import {FaRegAddressCard} from'react-icons/fa'
import {BiSearch} from'react-icons/bi'
import {TbMessages} from'react-icons/tb'
import {RiSuitcase2Line} from'react-icons/ri'
import {FaHouseUser} from 'react-icons/fa'
import {FaHandHoldingUsd} from'react-icons/fa'
import {RiMoneyDollarBoxLine} from'react-icons/ri'
import {BsHouseFill} from'react-icons/bs'
import '../App.css'

function Menu (){
    return(
        <div>
         
            <ul className='Lista'>
                
                <li className='ListaB'><Link className='ListaC' to="/"><button className='ListaD'><FaHouseUser className='MenuIcon'/><br/> Minha área</button></Link></li>
                <li className='ListaB'><Link className='ListaC' to="/MinhaArea"><button className='ListaD'><RiSuitcase2Line className='MenuIcon'/><br/> Candidaturas</button></Link></li>
                <li className='ListaB'><Link className='ListaC' to="/MinhaArea"><button className='ListaD'><BiSearch className='MenuIcon'/><br/> Buscar vagas</button></Link></li>
                <li className='ListaB'><Link className='ListaC' to="/MinhaArea"><button className='ListaD'><FaRegAddressCard className='MenuIcon'/><br/>Currículo</button></Link></li>
                <li className='ListaB'><Link className='ListaC' to="/MinhaArea"><button className='ListaD'><TbMessages className='MenuIcon'/><br/>Mensagens</button></Link></li>
                <li className='ListaB'><Link className='ListaC' to="/MinhaArea"><button className='ListaD'><FaHandHoldingUsd  className='MenuIcon'/><br/> Empresas</button></Link></li>
                <li className='ListaB'><Link className='ListaC' to="/MinhaArea"><button className='ListaD'><RiMoneyDollarBoxLine className='MenuIcon' /><br/> Salários</button></Link></li>
            
            </ul>
        </div>
    )
}
export default Menu