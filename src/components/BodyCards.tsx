/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useEffect, useState } from 'react';
import Sections from './Sections';
import SubSections from './SubSections';
import Carrousel from './Carrousel';
import Card from './Card';
import { EmblaOptionsType } from 'embla-carousel-react';
import BodyPlanes from './BodyPlanes';
import Modal from './Modal';
import Form from './Form';
import d_go_logo from '../../public/d_go_logo.png';
import fibra from '../../public/fibra.png'
import simetrica from '../../public/simetrica.png'
import velocidad from '../../public/velocidad.png'
import internet from '../../public/internet.png'
import diamante from '../../public/diamante.png'
import gol from '../../public/gol.png'
import fonowin from '../../public/fonoWin.png'
import peru from '../../public/peru.png'
import duo from '../../public/duo.png'
import tvwin from '../../public/tvwin.png'
import sports from '../../public/sports.png'
import multi from '../../public/multitv.png'

const ARRAY_TRIO=[
{
  img:fibra,
  text:'100% fibra Óptica'
},{
  img:simetrica,
  text:'Internet ilimitado y simétrico'
},{
  img:velocidad,
  text:'Mayor velocidad'
},{
  img:internet,
  text:'+30 canales en vivo'
},{
  img:diamante,
  text:'Graba tus programas favoritos'
},{
  img:gol,
  text:'Retrocede en vivo'
},{
  img:fonowin,
  text:'Tu teléfono fijo estés donde estés'
},{
  img:peru,
  text:'Llama a todo el Perú'
},{
  img:duo,
  text:'Conéctalo y úsalo'
}]

const ARRAY_TRIO_DGO=[
  {
    img:fibra,
    text:'100% fibra Óptica'
  },{
    img:simetrica,
    text:'Internet ilimitado y simétrico'
  },{
    img:velocidad,
    text:'Mayor velocidad'
  },{
    img:tvwin,
    text:'+60 canales en vivo'
  },{
    img:diamante,
    text:'Graba tus programas favoritos'
  },{
    img:sports,
    text:'Lo mejor del deporte por DSPORTS'
  },{
    img:fonowin,
    text:'Tu teléfono fijo estés donde estés'
  },{
    img:peru,
    text:'Llama a todo el Perú'
  },{
    img:duo,
    text:'Conéctalo y úsalo'
  }
]

const ARRAY_TRIO_DGOFULL=[
  {
    img:fibra,
    text:'100% fibra Óptica'
  },{
    img:simetrica,
    text:'Internet ilimitado y simétrico'
  },{
    img:velocidad,
    text:'Mayor velocidad'
  },{
    img:tvwin,
    text:'+80 canales en vivo'
  },{
    img:diamante,
    text:'Graba tus programas favoritos'
  },{
    img:sports,
    text:'Lo mejor del deporte por DSPORTS'
  },{
    img:fonowin,
    text:'Tu teléfono fijo estés donde estés'
  },{
    img:peru,
    text:'Llama a todo el Perú'
  },{
    img:duo,
    text:'Conéctalo y úsalo'
  }
]

const ARRAY_DUO=[
  {
    img:fibra,
    text:'100% fibra Óptica'
  },{
    img:simetrica,
    text:'Internet ilimitado y simétrico'
  },{
    img:velocidad,
    text:'Mayor velocidad'
  },{
    img:internet,
    text:'+30 canales en vivo'
  },{
    img:diamante,
    text:'Graba tu programa favorito'
  },{
    img:gol,
    text:'Retrocede en vivo'
  }
]

const ARRAY_DUO_DGO=[
  {
    img:fibra,
    text:'100% fibra Óptica'
  },{
    img:simetrica,
    text:'Internet ilimitado y simétrico'
  },{
    img:velocidad,
    text:'Mayor velocidad'
  },{
    img:tvwin,
    text:'+60 canales en vivo'
  },{
    img:multi,
    text:'Hasta 2 dispositivos en simultáneo'
  },{
    img:sports,
    text:'Lo mejor del deporte por DSPORTS'
  }
]

const ARRAY_DUO_DGOFULL=[
  {
    img:fibra,
    text:'100% fibra Óptica'
  },{
    img:simetrica,
    text:'Internet ilimitado y simétrico'
  },{
    img:velocidad,
    text:'Mayor velocidad'
  },{
    img:tvwin,
    text:'+80 canales en vivo'
  },{
    img:multi,
    text:'Hasta 2 dispositivos en simultáneo'
  },{
    img:sports,
    text:'Lo mejor del deporte por DSPORTS'
  }
]

const ARRAY_DUO_FONO=[
  {
    img:fibra,
    text:'100% fibra Óptica'
  },{
    img:simetrica,
    text:'Internet ilimitado y simétrico'
  },{
    img:velocidad,
    text:'Mayor velocidad'
  },{
    img:fonowin,
    text:'Tu teléfono fijo estés donde estés'
  },{
    img:peru,
    text:'Llama a todo el Perú'
  },{
    img:duo,
    text:'Conéctalo y úsalo'
  }
]




const IMG = {
  img: d_go_logo,
  text: 'direct tv go logo'
};

const SUB_SECTIONS: string[][] = [
  [
    'Internet + WINTV + FONOWIN',
    'Internet + DGO Básico + FONOWIN',
    'Internet + DGO Full + FONOWIN',
  ],
  [
    'Internet + WINTV',
    'Internet + DGO Básico',
    'Internet + DGO Full',
    'Internet + FONOWIN',
  ],
  [
    'Internet + WINTV + FONOWIN',
    'Internet + DGO Básico + FONOWIN',
    'Internet + DGO Full + FONOWIN',
  ],
  [
    'Internet + WINTV',
    'Internet + DGO Básico',
    'Internet + DGO Full',
    'Internet + FONOWIN',
  ],
];

const OPTIONS_CARDS: EmblaOptionsType = {
  loop: false,
  slidesToScroll: 1,
  startIndex: 0,
};

const BodyCards = () => {
  const [numberCall, setNumberCall] = useState<string>('(01) 6806774');
  const [tSource, setTSource] = useState<string>('');
  const [inputState, setInputState] = useState<string>('');
  const viewModal = () => setActiveModal((_prev) => (true));
  const closeModal = () => setActiveModal((_prev) => (false));
  const getChildrens = (array: any[]) => (array.map((item, index) => {
    const {
      title,
      styleCard,
      stylesMbps,
      mbps,
      mbpsLast,
      aditional,
      promo,
      img,
      stylesPrice,
      price,
      timePromo,
      regularPrice2,
      regularPrice,
      imgs,
      onClick,
    } = item;
  
    return (
      <Card
        key={ index }
        title="Internet 100% Fibra"
        styles={ styleCard }
      >
        <BodyPlanes
          title={ title }
          stylesMbps={ stylesMbps }
          mbps={ mbps }
          mbpsLast={ mbpsLast }
          aditional={ aditional }
          promo={ promo }
          img={ img }
          stylesPrice={ stylesPrice }
          price={ price }
          timePromo={ timePromo }
          regularPrice={ regularPrice }
          regularPrice2={ regularPrice2 }
          imgs={ imgs }
          onClick={ onClick }
        />
      </Card>
    )
  }));
  const setNumber = (e: any) => {
    const value = e.target.value;

    if (/^\d*$/.test(value)) {
      if (value.length <= 9) {
        setInputState((_prev) => (value))
      } else {
        setInputState((prev) => (prev))
      }
    }
  };
  const sendNumber = (e: any) => {
    e.preventDefault();

    const wsDataA = new URLSearchParams(window.location.search);

    if (tSource == '01winperu') {
      wsDataA.append("service", "callmeWinPeru1");
    } else {
      wsDataA.append("service", "callmeWinPeru");
    }
    wsDataA.append("username", "dacarEs");
    wsDataA.append("password", "jAcXDq35DJLBWfMzTxGG");
    wsDataA.append("telephone", inputState);
    wsDataA.append("ip", "127.0.0.1");
    wsDataA.append("tsource", tSource);


    const leadUrlA = "https://ws-dacar-ica.octopus-latam.com/?" + wsDataA.toString();

    fetch(leadUrlA)
      .then((res) => res.json())
      .catch((error) => console.log(error))
      .then((response) => {
        console.log(response);
        console.log(leadUrlA);

        setInputState(() => (''));
        closeModal();
      });
  };

  const ARRAYS_CHILDRENS = [
    [
      [/* TRIO WIN  */
        {
          title: '',
          styleCard: { border: '1px solid #ff5a0a' },
          stylesMbps: { color: '#ff5a0a' },
          mbps: 200,
          mbpsLast: 100,
          promo: 'Duplica tu velocidad x6 meses',
          stylesPrice: { background: '#ff5a0a', border: '1px solid #ff5a0a' },
          price: 104,
          timePromo: 'Precio promo x2 meses',
          regularPrice: 134,
          imgs: ARRAY_TRIO,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #ff5a0a' },
          stylesMbps: { color: '#ff5a0a' },
          mbps: 300,
          mbpsLast: 150,
          promo: 'Duplica tu velocidad x6 meses',
          stylesPrice: { background: '#ff5a0a', border: '1px solid #ff5a0a' },
          price: 124,
          timePromo: 'Precio promo x2 meses',
          regularPrice: 154,
          imgs: ARRAY_TRIO,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #ff5a0a' },
          stylesMbps: { color: '#ff5a0a' },
          mbps: 400,
          mbpsLast: 200,
          promo: 'Duplica tu velocidad x6 meses',
          stylesPrice: { background: '#ff5a0a', border: '1px solid #ff5a0a' },
          price: 134,
          timePromo: 'Precio promo x2 meses',
          regularPrice: 164,
          imgs: ARRAY_TRIO,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #ff5a0a' },
          stylesMbps: { color: '#ff5a0a' },
          mbps: 600,
          mbpsLast: 300,
          promo: 'Duplica tu velocidad x6 meses',
          stylesPrice: { background: '#ff5a0a', border: '1px solid #ff5a0a' },
          price: 174,
          timePromo: 'Precio promo x2 meses',
          regularPrice: 204,
          imgs: ARRAY_TRIO,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #ff5a0a' },
          stylesMbps: { color: '#ff5a0a' },
          mbps: 600,
          mbpsLast: undefined,
          promo: 'Duplica tu velocidad x6 meses',
          stylesPrice: { background: '#ff5a0a', border: '1px solid #ff5a0a' },
          price: 264,
          timePromo: 'Precio promo x2 meses',
          regularPrice: 294,
          imgs: ARRAY_TRIO,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #ff5a0a' },
          stylesMbps: { color: '#ff5a0a' },
          mbps: 1000,
          mbpsLast: undefined,
          promo: 'Duplica tu velocidad x6 meses',
          stylesPrice: { background: '#ff5a0a', border: '1px solid #ff5a0a' },
          price: 464,
          timePromo: 'Precio promo x2 meses',
          regularPrice: 494,
          imgs: ARRAY_TRIO,
          onClick: viewModal
        },
      ],
      [ /* TRIO DGO BÁSICO  */
        {
          title: '',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 200,
          mbpsLast: 100,
          promo: 'Duplica tu velocidad x6 meses',
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: 136,
          timePromo: 'Precio promo x6 meses',
          regularPrice: 156,
          imgs: ARRAY_TRIO_DGO,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 300,
          mbpsLast: 150,
          promo: 'Duplica tu velocidad x6 meses',
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: 156,
          timePromo: 'Precio promo x2 meses',
          regularPrice: 176,
          imgs: ARRAY_TRIO_DGO,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 400,
          mbpsLast: 200,
          promo: 'Duplica tu velocidad x6 meses',
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: 166,
          timePromo: 'Precio promo x2 meses',
          regularPrice: 186,
          imgs: ARRAY_TRIO_DGO,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 600,
          mbpsLast: 300,
          promo: 'Duplica tu velocidad x6 meses',
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: 206,
          timePromo: 'Precio promo x6 meses',
          regularPrice: 226,
          imgs: ARRAY_TRIO_DGO,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 600,
          mbpsLast: undefined,
          promo: 'Duplica tu velocidad x6 meses',
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: 296,
          timePromo: 'Precio promo x2 meses',
          regularPrice: 316,
          imgs: ARRAY_TRIO_DGO,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 1000,
          mbpsLast: undefined,
          promo: 'Duplica tu velocidad x6 meses',
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: 496,
          timePromo: 'Precio promo x2 meses',
          regularPrice: 516,
          imgs: ARRAY_TRIO_DGO,
          onClick: viewModal
        },
      ],
      [ /* TRIO DGO FULL  */
        {
          title: '',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 200,
          mbpsLast: 100,
          promo: 'Duplica tu velocidad x6 meses',
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: 158,
          timePromo: 'Precio promo x2 meses',
          regularPrice: 178,
          imgs: ARRAY_TRIO_DGOFULL,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 300,
          mbpsLast: 150,
          promo: 'Duplica tu velocidad x6 meses',
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: 178,
          timePromo: 'Precio promo x2 meses',
          regularPrice: 198,
          imgs: ARRAY_TRIO_DGOFULL,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 400,
          mbpsLast: 200,
          promo: 'Duplica tu velocidad x6 meses',
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: 188,
          timePromo: 'Precio promo x2 meses',
          regularPrice: 208,
          imgs: ARRAY_TRIO_DGOFULL,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 600,
          mbpsLast: 300,
          promo: 'Duplica tu velocidad x6 meses',
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: 228,
          timePromo: 'Precio promo x2 meses',
          regularPrice: 248,
          imgs: ARRAY_TRIO_DGOFULL,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 600,
          mbpsLast: undefined,
          promo: 'Duplica tu velocidad x6 meses',
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: 318,
          timePromo: 'Precio promo x2 meses',
          regularPrice: 338,
          imgs: ARRAY_TRIO_DGOFULL,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 1000,
          mbpsLast: undefined,
          promo: 'Duplica tu velocidad x6 meses',
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: 518,
          timePromo: 'Precio promo x2 meses',
          regularPrice: 538,
          imgs: ARRAY_TRIO_DGOFULL,
          onClick: viewModal
        },
      ],
    ],
    [
      [/* DUO WIN */
        {
          title: '',
          styleCard: { border: '1px solid #ff5a0a' },
          stylesMbps: { color: '#ff5a0a' },
          mbps: 200,
          mbpsLast: 100,
          promo: 'Duplica tu velocidad x4 meses',
          stylesPrice: { background: '#ff5a0a', border: '1px solid #ff5a0a' },
          price: 94,
          timePromo: 'Precio promo x2 meses',
          regularPrice: 124,
          imgs: ARRAY_DUO,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #ff5a0a' },
          stylesMbps: { color: '#ff5a0a' },
          mbps: 300,
          mbpsLast: 150,
          promo: 'Duplica tu velocidad x4 meses',
          stylesPrice: { background: '#ff5a0a', border: '1px solid #ff5a0a' },
          price: 114,
          timePromo: 'Precio promo x2 meses',
          regularPrice: 144,
          imgs: ARRAY_DUO,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #ff5a0a' },
          stylesMbps: { color: '#ff5a0a' },
          mbps: 400,
          mbpsLast: 200,
          promo: 'Duplica tu velocidad x4 meses',
          stylesPrice: { background: '#ff5a0a', border: '1px solid #ff5a0a' },
          price: 124,
          timePromo: 'Precio promo x2 meses',
          regularPrice: 154,
          imgs: ARRAY_DUO,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #ff5a0a' },
          stylesMbps: { color: '#ff5a0a' },
          mbps: 600,
          mbpsLast: 300,
          promo: 'Duplica tu velocidad x4 meses',
          stylesPrice: { background: '#ff5a0a', border: '1px solid #ff5a0a' },
          price: 164,
          timePromo: 'Precio promo x2 meses',
          regularPrice: 194,
          imgs: ARRAY_DUO,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #ff5a0a' },
          stylesMbps: { color: '#ff5a0a' },
          mbps: 600,
          mbpsLast: undefined,
          promo: 'Duplica tu velocidad x4 meses',
          stylesPrice: { background: '#ff5a0a', border: '1px solid #ff5a0a' },
          price: 254,
          timePromo: 'Precio promo x2 meses',
          regularPrice: 284,
          imgs: ARRAY_DUO,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #ff5a0a' },
          stylesMbps: { color: '#ff5a0a' },
          mbps: 1000,
          mbpsLast: undefined,
          promo: 'Duplica tu velocidad x4 meses',
          stylesPrice: { background: '#ff5a0a', border: '1px solid #ff5a0a' },
          price: 454,
          timePromo: 'Precio promo x2 meses',
          regularPrice: 484,
          imgs: ARRAY_DUO,
          onClick: viewModal
        },
      ],
      [/* DUO DGO BÁSICO */
        {
          title: '',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 200,
          mbpsLast: 100,
          promo: 'Duplica tu velocidad x4 meses',
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: 126,
          timePromo: 'Precio promo x2 meses',
          regularPrice: 146,
          imgs: ARRAY_DUO_DGO,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 300,
          mbpsLast: 150,
          promo: 'Duplica tu velocidad x4 meses',
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: 146,
          timePromo: 'Precio promo x2 meses',
          regularPrice: 166,
          imgs: ARRAY_DUO_DGO,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 400,
          mbpsLast: 200,
          promo: 'Duplica tu velocidad x4 meses',
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: 156,
          timePromo: 'Precio promo x2 meses',
          regularPrice: 176,
          imgs: ARRAY_DUO_DGO,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 600,
          mbpsLast: 300,
          promo: 'Duplica tu velocidad x4 meses',
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: 196,
          timePromo: 'Precio promo x2 meses',
          regularPrice: 216,
          imgs: ARRAY_DUO_DGO,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 600,
          mbpsLast: undefined,
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: 286,
          timePromo: 'Precio promo x2 meses',
          regularPrice: 306,
          imgs: ARRAY_DUO_DGO,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 1000,
          mbpsLast: undefined,
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: 486,
          timePromo: 'Precio promo x2 meses',
          regularPrice: 506,
          imgs: ARRAY_DUO_DGO,
          onClick: viewModal
        },
      ],
      [/* DUO DGO FULL */
        {
          title: ' ',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 200,
          mbpsLast: 100,
          promo: 'Duplica tu velocidad x4 meses',
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: 148,
          timePromo: 'Precio promo x2 meses',
          regularPrice: 168,
          imgs:ARRAY_DUO_DGOFULL,
          onClick: viewModal
        },
        {
          title: ' ',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 300,
          mbpsLast: 150,
          promo: 'Duplica tu velocidad x4 meses',
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: 168,
          timePromo: 'Precio promo x2 meses',
          regularPrice: 188,
          imgs:ARRAY_DUO_DGOFULL,
          onClick: viewModal
        },
        {
          title: ' ',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 400,
          mbpsLast: 200,
          promo: 'Duplica tu velocidad x4 meses',
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: 178,
          timePromo: 'Precio promo x2 meses',
          regularPrice: 198,
          imgs:ARRAY_DUO_DGOFULL,
          onClick: viewModal
        },
        {
          title: ' ',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 600,
          mbpsLast: 300,
          promo: 'Duplica tu velocidad x4 meses',
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: 218,
          timePromo: 'Precio promo x6 meses',
          regularPrice: 238,
          imgs:ARRAY_DUO_DGOFULL,
          onClick: viewModal
        },
        {
          title: ' ',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 600,
          mbpsLast: undefined,
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: 308,
          timePromo: 'Precio promo x2 meses',
          regularPrice: 328,
          imgs:ARRAY_DUO_DGOFULL,
          onClick: viewModal
        },
        {
          title: ' ',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 1000,
          mbpsLast: undefined,
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: 508,
          timePromo: 'Precio promo x2 meses',
          regularPrice: 528,
          imgs:ARRAY_DUO_DGOFULL,
          onClick: viewModal
        },
      ],
      [/* DUO FONO WIN */
        {
          title: ' + Fono WIN',
          styleCard: { border: '1px solid #ff5a0a' },
          stylesMbps: { color: '#ff5a0a' },
          mbps: 200,
          mbpsLast: 100,
          promo: 'Duplica tu velocidad x4 meses',
          stylesPrice: { background: '#ff5a0a', border: '1px solid #ff5a0a' },
          price: 89,
          timePromo: 'Precio promo x2 meses',
          regularPrice: 109,
          imgs: ARRAY_DUO_FONO,
          onClick: viewModal
        },
        {
          title: ' + Fono WIN',
          styleCard: { border: '1px solid #ff5a0a' },
          stylesMbps: { color: '#ff5a0a' },
          mbps: 300,
          mbpsLast: 150,
          promo: 'Duplica tu velocidad x4 meses',
          stylesPrice: { background: '#ff5a0a', border: '1px solid #ff5a0a' },
          price: 109,
          timePromo: 'Precio promo x2 meses',
          regularPrice: 129,
          imgs: ARRAY_DUO_FONO,
          onClick: viewModal
        },
        {
          title: ' + Fono WIN',
          styleCard: { border: '1px solid #ff5a0a' },
          stylesMbps: { color: '#ff5a0a' },
          mbps: 400,
          mbpsLast: 200,
          promo: 'Duplica tu velocidad x4 meses',
          stylesPrice: { background: '#ff5a0a', border: '1px solid #ff5a0a' },
          price: 119,
          timePromo: 'Precio promo x2 meses',
          regularPrice: 139,
          imgs: ARRAY_DUO_FONO,
          onClick: viewModal
        },
        {
          title: ' + Fono WIN',
          styleCard: { border: '1px solid #ff5a0a' },
          stylesMbps: { color: '#ff5a0a' },
          mbps: 600,
          mbpsLast: 300,
          promo: 'Duplica tu velocidad x4 meses',
          stylesPrice: { background: '#ff5a0a', border: '1px solid #ff5a0a' },
          price: 159,
          timePromo: 'Precio promo x2 meses',
          regularPrice: 179,
          imgs: ARRAY_DUO_FONO,
          onClick: viewModal
        },
        {
          title: ' + Fono WIN',
          styleCard: { border: '1px solid #ff5a0a' },
          stylesMbps: { color: '#ff5a0a' },
          mbps: 600,
          mbpsLast: undefined,
          promo: 'Duplica tu velocidad x4 meses',
          stylesPrice: { background: '#ff5a0a', border: '1px solid #ff5a0a' },
          price: 249,
          timePromo: 'Precio promo x2 meses',
          regularPrice: 269,
          imgs: ARRAY_DUO_FONO,
          onClick: viewModal
        },
        {
          title: ' + Fono WIN',
          styleCard: { border: '1px solid #ff5a0a' },
          stylesMbps: { color: '#ff5a0a' },
          mbps: 1000,
          mbpsLast: undefined,
          promo: 'Duplica tu velocidad x4 meses',
          stylesPrice: { background: '#ff5a0a', border: '1px solid #ff5a0a' },
          price: 449,
          timePromo: 'Precio promo x2 meses',
          regularPrice: 469,
          imgs: ARRAY_DUO_FONO,
          onClick: viewModal
        },
      ],
    ],
    [
      [/* TRIO WIN  GAMER*/
        {
          title: '',
          styleCard: { border: '1px solid #ff5a0a' },
          stylesMbps: { color: '#ff5a0a' },
          mbps: 100,
          stylesPrice: { background: '#ff5a0a', border: '1px solid #ff5a0a' },
          price: 134,
          timePromo: 'Precio promo x6 meses',
          regularPrice: 164,
          imgs: ARRAY_TRIO,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #ff5a0a' },
          stylesMbps: { color: '#ff5a0a' },
          mbps: 150,
          stylesPrice: { background: '#ff5a0a', border: '1px solid #ff5a0a' },
          price: 154,
          timePromo: 'Precio promo x6 meses',
          regularPrice: 184,
          imgs: ARRAY_TRIO,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #ff5a0a' },
          stylesMbps: { color: '#ff5a0a' },
          mbps: 200,
          stylesPrice: { background: '#ff5a0a', border: '1px solid #ff5a0a' },
          price: 164,
          timePromo: 'Precio promo x6 meses',
          regularPrice: 194,
          imgs: ARRAY_TRIO,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #ff5a0a' },
          stylesMbps: { color: '#ff5a0a' },
          mbps: 300,
          stylesPrice: { background: '#ff5a0a', border: '1px solid #ff5a0a' },
          price: 204,
          timePromo: 'Precio promo x6 meses',
          regularPrice: 234,
          imgs: ARRAY_TRIO,
          onClick: viewModal
        }
      ],
      [ /* TRIO DGO BÁSICO GAMER*/
        {
          title: ' + DGO Básico',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 100,
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: 166,
          timePromo: 'Precio promo x6 meses',
          regularPrice: 186,
          imgs:ARRAY_TRIO_DGO,
          onClick: viewModal
        },
        {
          title: ' + DGO Básico',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 150,
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: 186,
          timePromo: 'Precio promo x6 meses',
          regularPrice: 206,
          imgs:ARRAY_TRIO_DGO,
          onClick: viewModal
        },
        {
          title: ' + DGO Básico',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 200,
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: 196,
          timePromo: 'Precio promo x6 meses',
          regularPrice: 216,
          imgs:ARRAY_TRIO_DGO,
          onClick: viewModal
        },
        {
          title: ' + DGO Básico',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 300,
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: 236,
          timePromo: 'Precio promo x6 meses',
          regularPrice: 256,
          imgs:ARRAY_TRIO_DGO,
          onClick: viewModal
        }
      ],
      [ /* TRIO DGO FULL GAMER*/
        {
          title: ' ',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 100,
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: 188,
          timePromo: 'Precio promo x6 meses',
          regularPrice: 208,
          imgs:ARRAY_TRIO_DGOFULL,
          onClick: viewModal
        },
        {
          title: ' ',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 150,
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: 208,
          timePromo: 'Precio promo x6 meses',
          regularPrice: 228,
          imgs:ARRAY_TRIO_DGOFULL,
          onClick: viewModal
        },
        {
          title: ' ',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 200,
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: 218,
          timePromo: 'Precio promo x6 meses',
          regularPrice: 238,
          imgs:ARRAY_TRIO_DGOFULL,
          onClick: viewModal
        },
        {
          title: ' ',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 300,
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: 258,
          timePromo: 'Precio promo x6 meses',
          regularPrice: 278,
          imgs:ARRAY_TRIO_DGOFULL,
          onClick: viewModal
        }
      ],
    ],
    [
      [/* DUO WIN GAMER*/
        {
          title: '',
          styleCard: { border: '1px solid #ff5a0a' },
          stylesMbps: { color: '#ff5a0a' },
          mbps: 100,
          stylesPrice: { background: '#ff5a0a', border: '1px solid #ff5a0a' },
          price: 124,
          timePromo: 'Precio promo x4 meses',
          regularPrice: 154,
          imgs: ARRAY_DUO,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #ff5a0a' },
          stylesMbps: { color: '#ff5a0a' },
          mbps: 150,
          stylesPrice: { background: '#ff5a0a', border: '1px solid #ff5a0a' },
          price: 144,
          timePromo: 'Precio promo x4 meses',
          regularPrice: 174,
          imgs: ARRAY_DUO,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #ff5a0a' },
          stylesMbps: { color: '#ff5a0a' },
          mbps: 200,
          stylesPrice: { background: '#ff5a0a', border: '1px solid #ff5a0a' },
          price: 154,
          timePromo: 'Precio promo x4 meses',
          regularPrice: 184,
          imgs: ARRAY_DUO,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #ff5a0a' },
          stylesMbps: { color: '#ff5a0a' },
          mbps: 300,
          stylesPrice: { background: '#ff5a0a', border: '1px solid #ff5a0a' },
          price: 194,
          timePromo: 'Precio promo x4 meses',
          regularPrice: 224,
          imgs: ARRAY_DUO,
          onClick: viewModal
        }
      ],
      [/* DUO DGO BÁSICO GAMER*/
        {
          title: ' + DGO Básico',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 100,
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: 156,
          timePromo: 'Precio promo x4 meses',
          regularPrice: 176,
          imgs:ARRAY_DUO_DGO,
          onClick: viewModal
        },
        {
          title: ' + DGO Básico',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 150,
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: 176,
          timePromo: 'Precio promo x4 meses',
          regularPrice: 196,
          imgs:ARRAY_DUO_DGO,
          onClick: viewModal
        },
        {
          title: ' + DGO Básico',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 200,
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: 186,
          timePromo: 'Precio promo x4 meses',
          regularPrice: 206,
          imgs:ARRAY_DUO_DGO,
          onClick: viewModal
        },
        {
          title: ' + DGO Básico',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 300,
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: 226,
          timePromo: 'Precio promo x4 meses',
          regularPrice: 246,
          imgs:ARRAY_DUO_DGO,
          onClick: viewModal
        }
      ],
      [/* DUO DGO FULL GAMER*/
        {
          title: ' ',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 100,
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: 178,
          timePromo: 'Precio promo x4 meses',
          regularPrice: 198,
          imgs:ARRAY_DUO_DGOFULL,
          onClick: viewModal
        },
        {
          title: ' ',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 150,
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: 198,
          timePromo: 'Precio promo x4 meses',
          regularPrice: 218,
          imgs:ARRAY_DUO_DGOFULL,
          onClick: viewModal
        },
        {
          title: ' ',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 200,
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: 208,
          timePromo: 'Precio promo x4 meses',
          regularPrice: 228,
          imgs:ARRAY_DUO_DGOFULL,
          onClick: viewModal
        },
        {
          title: ' ',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 300,
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: 248,
          timePromo: 'Precio promo x4 meses',
          regularPrice: 268,
          imgs:ARRAY_DUO_DGOFULL,
          onClick: viewModal
        }
      ],
      [/* DUO FONO WIN GAMER*/
        {
          title: '',
          styleCard: { border: '1px solid #ff5a0a' },
          stylesMbps: { color: '#ff5a0a' },
          mbps: 100,
          stylesPrice: { background: '#ff5a0a', border: '1px solid #ff5a0a' },
          price: 119,
          timePromo: 'Precio promo x4 meses',
          regularPrice: 139,
          imgs: ARRAY_DUO_FONO,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #ff5a0a' },
          stylesMbps: { color: '#ff5a0a' },
          mbps: 150,
          stylesPrice: { background: '#ff5a0a', border: '1px solid #ff5a0a' },
          price: 139,
          timePromo: 'Precio promo x4 meses',
          regularPrice: 159,
          imgs: ARRAY_DUO_FONO,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #ff5a0a' },
          stylesMbps: { color: '#ff5a0a' },
          mbps: 200,
          stylesPrice: { background: '#ff5a0a', border: '1px solid #ff5a0a' },
          price: 149,
          timePromo: 'Precio promo x4 meses',
          regularPrice: 169,
          imgs: ARRAY_DUO_FONO,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #ff5a0a' },
          stylesMbps: { color: '#ff5a0a' },
          mbps: 300,
          stylesPrice: { background: '#ff5a0a', border: '1px solid #ff5a0a' },
          price: 189,
          timePromo: 'Precio promo x4 meses',
          regularPrice: 209,
          imgs: ARRAY_DUO_FONO,
          onClick: viewModal
        }
      ],
    ],
  ];

  const [activeModal, setActiveModal] = useState(false);

  const [selectedIndexSections, setSelectedIndexSections] = useState<number>(0);
  const [selectedIndexSubSections, setSelectedIndexSubSections] = useState<number>(0);
  const [subSections, setSubSections] = useState<string[]>(SUB_SECTIONS[0]);
  const [slideCountCards, setSlideCountCards] = useState<number>(ARRAYS_CHILDRENS[0][0].length);
  const [slideCards, setSlideCards] = useState<number[]>(Array.from(Array(slideCountCards).keys()));
  const [childrens, setChildrens] = useState<JSX.Element[]>(getChildrens(ARRAYS_CHILDRENS[0][0]));
  

  useEffect(() => {
    if (window) {
      const url = new URLSearchParams(window.location.search);

      const tSource = url.get('T-source');

      if (tSource) {
        setTSource(tSource);
      }
    }
  },[]);

  useEffect(() => {
    if (tSource) {
      switch (tSource) {
        case '01winperu':
          setNumberCall(() => '(01) 6806775');
          break;
      
        default:
          setNumberCall(() => '(01) 6806774');
          break;
      }
    }
  },[tSource]);

  useEffect(() => {
    const ch = getChildrens(ARRAYS_CHILDRENS[selectedIndexSections][0]);

    setSelectedIndexSubSections(() => 0)
    setSubSections(() => (SUB_SECTIONS[selectedIndexSections]));
    setSlideCountCards(ARRAYS_CHILDRENS[selectedIndexSections][0].length);
    setChildrens(() => ch);
  },[selectedIndexSections]);

  useEffect(() => {
    const ch = getChildrens(ARRAYS_CHILDRENS[selectedIndexSections][selectedIndexSubSections]);

    setSlideCountCards(ARRAYS_CHILDRENS[selectedIndexSections][selectedIndexSubSections].length);
    setChildrens(() => ch);
  },[selectedIndexSubSections]);

  useEffect(() => {
    setSlideCards(() =>(Array.from(Array(slideCountCards).keys())));
  },[slideCountCards]);

  return (
    <>
      <div
        className="
          block
          w-5/6
          mx-auto
          my-8 
        "
      >
        <Sections
          selectedIndex={ selectedIndexSections }
          setSelectedIndex={ setSelectedIndexSections }
        />
        <SubSections
          titles={ subSections }
          selectedIndex={ selectedIndexSubSections }
          setSelectedIndex={ setSelectedIndexSubSections }
        />
      </div>
      <div
        className="
          my-4
        "
      >
        <Carrousel
          classNameSlide="embla__slide__trhee"
          slides={ slideCards }
          options={ OPTIONS_CARDS }
          haveButtons={ true }
          haveDots={ false }
          interval={ 0 }
          childrens={ childrens }
        />
      </div>

      <Modal
        active={ activeModal }
        onClick={ closeModal }
      >
        <Form
          className='
            relative
            max-w-[450px]
          '
          id='number-modal'
          inputState={ inputState }
          inputChange={ setNumber }
          onClick={ sendNumber }
        >
          <>
            <span
              className="
                    font-bold
                  text-[#ff5a0a]
                    max-md:text-4xl
                    lg:text-4xl
                  "
            >
              ¡Excelente Elección!
            </span>
            <span
              className="
                    font-bold
                    max-md:text-lg
                    lg:text-xl
                    text-[#301d19]
                  "
            >
              Llámanos gratis al
            </span>
            <span
              className="
                    font-bold
                    max-md:text-2xl
                    lg:text-2xl
                    text-[#301d19]
                  "
            >
              <a href={`tel:${ numberCall }`}>{ numberCall }</a>
            </span>
            <span
              className="
                    font-bold
                    max-md:text-lg
                    lg:text-xl
                    text-[#301d19]
                  "
            >
              O si prefieres dejanos tu número y te llamaremos inmediatamente...
            </span>
          </>
        </Form>
      </Modal>
    </>
  )
}

export default BodyCards
