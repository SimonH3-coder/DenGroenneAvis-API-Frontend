
import Logogroenne from "../../assets/Logogroenne.svg";
import { NavLink } from "react-router";
import { Categogrydropdown } from "../../component/categogrydropdown/Categogrydropdown";
import icons8mail from "../../assets/icons8mail.png";
import icons8infosquared from "../../assets/icons8infosquared.png"; 
import icons8testaccount from "../../assets/icons8testaccount.png";

export function Header() {
    return (
        <div>
        <img src={Logogroenne} alt="Logo" />
            <Categogrydropdown/>

            <NavLink to="/annonce"><button>Opret annonce</button></NavLink>
            <img src={icons8mail} alt="Mail" />
            <img src={icons8infosquared} alt="Info" />
            <NavLink to="/Profile"><img src={icons8testaccount} alt="Profile" /></NavLink>


        </div>

     
        
        

      
        
    )
}