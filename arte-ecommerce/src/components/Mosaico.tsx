import React from "react";
import "./Mosaico.css";

import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";
import image9 from "../assets/image9.png";
import image10 from "../assets/image10.png";
import image11 from "../assets/image11.png";
import image12 from "../assets/image12.png";

import relevo1 from "../assets/relevo1.png";
import relevo2 from "../assets/relevo2.png";
import relevo3 from "../assets/relevo3.png";
import relevo4 from "../assets/relevo4.png";
import relevo5 from "../assets/relevo5.png";
import relevo6 from "../assets/relevo6.png";
import relevo7 from "../assets/relevo7.png";
import relevo8 from "../assets/relevo8.png";
import relevo9 from "../assets/relevo9.png";
import relevo10 from "../assets/relevo10.png";
import relevo11 from "../assets/relevo11.png";
import relevo12 from "../assets/relevo12.png";

const imagens = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12];
const relevos = [relevo1, relevo2, relevo3, relevo4, relevo5, relevo6, relevo7, relevo8, relevo9, relevo10, relevo11, relevo12];

const Mosaico: React.FC = () => {
  return (
    <div className="mosaico">
      {imagens.map((img, i) => (
        <div className="mosaico-item" key={i}>
          <img src={img} alt={`Mosaico ${i+1}`} />
          <img className="relevo" src={relevos[i]} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Mosaico; 