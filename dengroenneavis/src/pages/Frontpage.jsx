import banner_image1 from "../assets/banner_image1.jpg";
import banner_image2 from "../assets/banner_image2.jpg";
import banner_image3 from "../assets/banner_image3.jpg";

export function Frontpage() {

    return (
        <div>
               <h1>Frontpage</h1>
    <figure>
        <img src={banner_image1} alt="Banner 1" />
    </figure>
    <figure>
        <img src={banner_image2} alt="Banner 2" />
    </figure>
    <figure>
        <img src={banner_image3} alt="Banner 3" />
    </figure>

        </div>


    )
}
