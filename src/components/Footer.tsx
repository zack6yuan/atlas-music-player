import { useState } from 'react';

import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";

export default function Footer() {
    const [image, setImage] = useState(moon);

    const changeImage = () => {
        if (image === moon) {
            setImage(sun);
        } else {
            setImage(moon);
        }
    }

  const year = new Date().getFullYear();
  return (
    <div className="sm:-mt-60 md:-mt-92">
        <div className="text-center p-8 sm:mt-50">
            <span className="colon">&copy; {year}</span>  Atlas School
        </div>
        <div className="flex justify-center theme-button text-center sm:mb-15 sm:-mt-5 md:-mt-6 cursor-pointer">
            <img src={ image } onClick={changeImage} alt="theme-image" />
        </div>
    </div>
  );
}
