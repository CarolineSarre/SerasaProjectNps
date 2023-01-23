import { FaStar } from "react-icons/fa";

function Star({ filled, onClick }) {
    return (
      <FaStar 
       color={filled ? "#E63888" : "rgba(0,0,0,0.44)"} 
       onClick={onClick} />
    );
  }
export default Star;