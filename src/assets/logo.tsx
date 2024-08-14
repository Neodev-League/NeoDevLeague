import imageToAdd from "./logo2.png";
import "../style.css" 

function Logo() {
   return <img className="h-auto w-16" src={imageToAdd} alt="Image" />;
}
export default Logo;