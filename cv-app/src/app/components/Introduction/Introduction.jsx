import React from "react";
import './Introduction.scss';
import '../SectionHeadline/SectionHeadline'
import SectionHeadline from "../SectionHeadline/SectionHeadline";
import image from './OliverDirr.png';

const Introduction = ({showMobile,executeScroll, text}) => {
  return (
      <div className="Introduction">
      <SectionHeadline text={"Über mich"}/>
      {showMobile?
      <div>
            <button type="button" className="btn btn-primary">
                   Mehr Infos
            </button>
             <button type="button" className="btn btn-primary"onClick={() => executeScroll('skills')}>
             Scroll
             </button>
      </div>
      :
      <div className="Introduction-content">
      <div class=" Introduction-text">Hallo ich bin Oliver, ich studiere Wirtschaftsinformatik und bin 23 Jahre alt. In der Vergangenheit habe ich verschiedenste Programmiererfahrungen, im besonderen im breich der Webentwicklung mit React gesammelt.</div>
      <div class=""><img className="Introduction-image" src={image}/></div>
</div>
      }
     

      </div>
  );
};

export default Introduction;
