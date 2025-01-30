import React, { useContext, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { dataContext } from '../Context/ContextAPIProvider';
import it from '../../assets/counters/it.png';
import cn from '../../assets/counters/cn.png';
import eg from '../../assets/counters/eg.png';
import fr from '../../assets/counters/fr.png';
import gr from '../../assets/counters/gr.png';
import ie from '../../assets/counters/ie.png';
import jm from '../../assets/counters/jm.png';
import kn from '../../assets/counters/kn.png';
import mx from '../../assets/counters/mx.png';
import nl from '../../assets/counters/nl.png';
import pl from '../../assets/counters/pl.png';
import ru from '../../assets/counters/ru.png';
import th from '../../assets/counters/th.png';
import tr from '../../assets/counters/tr.png';
import us from '../../assets/counters/us.png';
import ca from '../../assets/counters/ca.png';
import es from '../../assets/counters/es.png';
import gb from '../../assets/counters/gb.png';
import hr from '../../assets/counters/hr.png';
import In from '../../assets/counters/in.png';
import jp from '../../assets/counters/jp.png';
import ma from '../../assets/counters/ma.png';
import my from '../../assets/counters/my.png';
import ph from '../../assets/counters/ph.png';
import pt from '../../assets/counters/pt.png';
import tn from '../../assets/counters/tn.png';
import ua from '../../assets/counters/UA.png';
import vn from '../../assets/counters/vn.png';
import AOS from 'aos';

function BrowserCountry() {
  const { area } = useParams();
  const { setSelectedArea } = useContext(dataContext);
  const country = [
    { id: 1, imgSrc: gb, name: 'British' },
    { id: 2, imgSrc: cn, name: 'Chinese' },
    { id: 3, imgSrc: eg, name: 'Egyptian' },
    { id: 4, imgSrc: fr, name: 'French' },
    { id: 5, imgSrc: gr, name: 'Greek' },
    { id: 6, imgSrc: ie, name: 'Irish' },
    { id: 7, imgSrc: jm, name: 'Jamaican' },
    { id: 8, imgSrc: kn, name: 'Kenyan' },
    { id: 9, imgSrc: mx, name: 'Mexican' },
    { id: 10, imgSrc: nl, name: 'Dutch' },
    { id: 11, imgSrc: pl, name: 'Polish' },
    { id: 12, imgSrc: ru, name: 'Russian' },
    { id: 13, imgSrc: th, name: 'Thai' },
    { id: 14, imgSrc: tr, name: 'Turkish' },
    { id: 15, imgSrc: us, name: 'American' },
    { id: 16, imgSrc: ca, name: 'Canadian' },
    { id: 17, imgSrc: es, name: 'Spanish' },
    { id: 18, imgSrc: hr, name: 'Croatian' },
    { id: 19, imgSrc: In, name: 'Indian' },
    { id: 20, imgSrc: jp, name: 'Japanese' },
    { id: 21, imgSrc: ma, name: 'Moroccan' },
    { id: 22, imgSrc: my, name: 'Malaysian' },
    { id: 23, imgSrc: ph, name: 'Filipino' },
    { id: 24, imgSrc: pt, name: 'Portuguese' },
    { id: 25, imgSrc: tn, name: 'Tunisian' },
    { id: 26, imgSrc: ua, name: 'Ukrainian' },
    { id: 27, imgSrc: vn, name: 'Vietnamese' },
    { id: 28, imgSrc: it, name: 'Italian' },
  ]

  useEffect(() => {
    setSelectedArea(area)
    AOS.init({once: false,});
  }, [area]);
  return (
    <div className='container browserCountry'>
      <h1>Browse Country </h1>
      <div className='country-div'>
        {country?.map((element) => (
          <NavLink data-aos="zoom-in" to={`/${encodeURIComponent(element.name)}`} key={element.id} onClick={()=>{setSelectedArea(element.name)}} className='country-link'>
            <img src={element.imgSrc} alt={element.name} />
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default BrowserCountry