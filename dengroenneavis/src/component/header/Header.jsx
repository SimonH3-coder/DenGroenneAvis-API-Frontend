import Logogroenne from "../../assets/Logogroenne.svg";
import { Categogrydropdown } from "../../component/categogrydropdown/Categogrydropdown";

export function Header() {
    return (
        <div>
        <img src={Logogroenne} alt="Logo" />
            <Categogrydropdown/>
        </div>
        
        

      
        
    )
}