import Star from "../star/star.component";
import { useState } from "react";


function StarRating({ onChange }) { 
    const [rating, setRating] = useState(0);
    const changeRating = (newRating) => { 
        setRating(newRating); 
        onChange?.(newRating); 
      };
      return (
        <span>
          {[1, 2, 3, 4, 5].map((value) => (
            <Star
              key={value}
              filled={value <= rating}
              onClick={() => changeRating(value)}
            />
          ))}
        </span>
      );
    }
    export default StarRating;