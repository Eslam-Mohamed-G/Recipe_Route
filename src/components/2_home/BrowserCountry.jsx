import React from 'react';
import { NavLink } from 'react-router-dom';
import ar from '../../assets/counters/ar.png';
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
import sk from '../../assets/counters/sk.png';
import th from '../../assets/counters/th.png';
import tr from '../../assets/counters/tr.png';
import us from '../../assets/counters/us.png';
import ca from '../../assets/counters/ca.png';
import dz from '../../assets/counters/dz.png';
import es from '../../assets/counters/es.png';
import gb from '../../assets/counters/gb.png';
import hr from '../../assets/counters/hr.png';
import In from '../../assets/counters/in.png';
import jp from '../../assets/counters/jp.png';
import ma from '../../assets/counters/ma.png';
import my from '../../assets/counters/my.png';
import ph from '../../assets/counters/ph.png';
import pt from '../../assets/counters/pt.png';
import sa from '../../assets/counters/sa.png';
import sy from '../../assets/counters/sy.png';
import tn from '../../assets/counters/tn.png';
import ua from '../../assets/counters/UA.png';
import vn from '../../assets/counters/vn.png';

function BrowserCountry() {
  const country = [
    { id: 1, imgSrc: ar, name: 'ar' },
    { id: 2, imgSrc: cn, name: 'cn' },
    { id: 3, imgSrc: eg, name: 'eg' },
    { id: 4, imgSrc: fr, name: 'fr' },
    { id: 5, imgSrc: gr, name: 'gr' },
    { id: 6, imgSrc: ie, name: 'ie' },
    { id: 7, imgSrc: jm, name: 'jm' },
    { id: 8, imgSrc: kn, name: 'kn' },
    { id: 9, imgSrc: mx, name: 'mx' },
    { id: 10, imgSrc: nl, name: 'nl' },
    { id: 11, imgSrc: pl, name: 'pl' },
    { id: 12, imgSrc: ru, name: 'ru' },
    { id: 13, imgSrc: sk, name: 'sk' },
    { id: 14, imgSrc: th, name: 'th' },
    { id: 15, imgSrc: tr, name: 'tr' },
    { id: 16, imgSrc: us, name: 'us' },
    { id: 17, imgSrc: ca, name: 'ca' },
    { id: 18, imgSrc: dz, name: 'dz' },
    { id: 19, imgSrc: es, name: 'gb' },
    { id: 20, imgSrc: hr, name: 'hr' },
    { id: 21, imgSrc: In, name: 'In' },
    { id: 22, imgSrc: jp, name: 'jp' },
    { id: 23, imgSrc: ma, name: 'ma' },
    { id: 24, imgSrc: my, name: 'my' },
    { id: 25, imgSrc: ph, name: 'ph' },
    { id: 26, imgSrc: pt, name: 'pt' },
    { id: 27, imgSrc: sa, name: 'sa' },
    { id: 28, imgSrc: sy, name: 'sy' },
    { id: 29, imgSrc: tn, name: 'tn' },
    { id: 30, imgSrc: ua, name: 'ua' },
    { id: 31, imgSrc: vn, name: 'vn' },
    { id: 32, imgSrc: gb, name: 'gb' },
  ]
  return (
    <div className='container'>
      <h1>Browse Country </h1>
      <div className='country-div'>
        {country?.map((element) => (
          <NavLink key={element.id} className='country-link'>
            <img src={element.imgSrc} alt={element.name} style={{ width: 64 }} />
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default BrowserCountry