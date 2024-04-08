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

const ARRAY_TRIO=[
{
  img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/fibra.png?alt=media&token=5c257722-5cc9-463b-bdc4-e89895ba0834",
  text:'100% fibra Óptica'
},{
  img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/Simetr%C3%ADa.png?alt=media&token=87bea0d1-236b-4da5-9f61-a8cf606fa56f",
  text:'Internet ilimitado y simétrico'
},{
  img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/velocidad.png?alt=media&token=a99dc734-529c-4638-891e-a6bbdc28fc80",
  text:'Mayor velocidad'
},{
  img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/internet.png?alt=media&token=ce59df37-4551-4bbc-88f8-a20310a9f31b",
  text:'+30 canales en vivo'
},{
  img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/diamante.png?alt=media&token=c5323a44-112c-4683-b3e5-dd5d86a0f0fd",
  text:'Graba tus programas favoritos'
},{
  img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/gol.png?alt=media&token=d027e1f2-e9aa-4abd-a543-de8544c7962c",
  text:'Retrocede en vivo'
},{
  img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/fonoWin.png?alt=media&token=61039f86-a583-453d-b6df-4e35240208a9",
  text:'Tu teléfono fijo estés donde estés'
},{
  img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/peru.png?alt=media&token=482b0a13-2a6c-43ee-abe6-65cd81360a44",
  text:'Llama a todo el Perú'
},{
  img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/duo.png?alt=media&token=a5dac55d-bb36-4041-b72f-9cbf2fc9e809",
  text:'Conéctalo y úsalo'
}
]

const ARRAY_TRIO_DGO=[
  {
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/fibra.png?alt=media&token=5c257722-5cc9-463b-bdc4-e89895ba0834",
    text:'100% fibra Óptica'
  },{
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/Simetr%C3%ADa.png?alt=media&token=87bea0d1-236b-4da5-9f61-a8cf606fa56f",
    text:'Internet ilimitado y simétrico'
  },{
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/velocidad.png?alt=media&token=a99dc734-529c-4638-891e-a6bbdc28fc80",
    text:'Mayor velocidad'
  },{
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/tvwin.png?alt=media&token=12fa8317-f6b7-4152-be7d-f298133b1944",
    text:'+60 canales en vivo'
  },{
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/diamante.png?alt=media&token=c5323a44-112c-4683-b3e5-dd5d86a0f0fd",
    text:'Graba tus programas favoritos'
  },{
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/sports.png?alt=media&token=e2f0c3df-8eba-4bc3-895b-e0eed2f32f00",
    text:'Lo mejor del deporte por DSPORTS'
  },{
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/fonoWin.png?alt=media&token=61039f86-a583-453d-b6df-4e35240208a9",
    text:'Tu teléfono fijo estés donde estés'
  },{
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/peru.png?alt=media&token=482b0a13-2a6c-43ee-abe6-65cd81360a44",
    text:'Llama a todo el Perú'
  },{
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/duo.png?alt=media&token=a5dac55d-bb36-4041-b72f-9cbf2fc9e809",
    text:'Conéctalo y úsalo'
  }
]

const ARRAY_TRIO_DGO_L1MAX=[
  {
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/fibra.png?alt=media&token=5c257722-5cc9-463b-bdc4-e89895ba0834",
    text:'100% fibra Óptica'
  },{
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/Simetr%C3%ADa.png?alt=media&token=87bea0d1-236b-4da5-9f61-a8cf606fa56f",
    text:'Internet ilimitado y simétrico'
  },{
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/velocidad.png?alt=media&token=a99dc734-529c-4638-891e-a6bbdc28fc80",
    text:'Mayor velocidad'
  },{
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/tvwin.png?alt=media&token=12fa8317-f6b7-4152-be7d-f298133b1944",
    text:'16 canales en vivo'
  },{
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/diamante.png?alt=media&token=c5323a44-112c-4683-b3e5-dd5d86a0f0fd",
    text:'Graba tus programas favoritos'
  },{
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/sports.png?alt=media&token=e2f0c3df-8eba-4bc3-895b-e0eed2f32f00",
    text:'Lo mejor del deporte por DSPORTS'
  },{
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/fonoWin.png?alt=media&token=61039f86-a583-453d-b6df-4e35240208a9",
    text:'Tu teléfono fijo estés donde estés'
  },{
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/peru.png?alt=media&token=482b0a13-2a6c-43ee-abe6-65cd81360a44",
    text:'Llama a todo el Perú'
  },{
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/duo.png?alt=media&token=a5dac55d-bb36-4041-b72f-9cbf2fc9e809",
    text:'Conéctalo y úsalo'
  }
]

const ARRAY_TRIO_DGOFULL=[
  {
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/fibra.png?alt=media&token=5c257722-5cc9-463b-bdc4-e89895ba0834",
    text:'100% fibra Óptica'
  },{
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/Simetr%C3%ADa.png?alt=media&token=87bea0d1-236b-4da5-9f61-a8cf606fa56f",
    text:'Internet ilimitado y simétrico'
  },{
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/velocidad.png?alt=media&token=a99dc734-529c-4638-891e-a6bbdc28fc80",
    text:'Mayor velocidad'
  },{
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/tvwin.png?alt=media&token=12fa8317-f6b7-4152-be7d-f298133b1944",
    text:'+80 canales en vivo'
  },{
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/diamante.png?alt=media&token=c5323a44-112c-4683-b3e5-dd5d86a0f0fd",
    text:'Graba tus programas favoritos'
  },{
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/sports.png?alt=media&token=e2f0c3df-8eba-4bc3-895b-e0eed2f32f00",
    text:'Lo mejor del deporte por DSPORTS'
  },{
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/fonoWin.png?alt=media&token=61039f86-a583-453d-b6df-4e35240208a9",
    text:'Tu teléfono fijo estés donde estés'
  },{
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/peru.png?alt=media&token=482b0a13-2a6c-43ee-abe6-65cd81360a44",
    text:'Llama a todo el Perú'
  },{
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/duo.png?alt=media&token=a5dac55d-bb36-4041-b72f-9cbf2fc9e809",
    text:'Conéctalo y úsalo'
  }
]

const ARRAY_DUO=[
  {
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/fibra.png?alt=media&token=5c257722-5cc9-463b-bdc4-e89895ba0834",
    text:'100% fibra Óptica'
  },{
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/Simetr%C3%ADa.png?alt=media&token=87bea0d1-236b-4da5-9f61-a8cf606fa56f",
    text:'Internet ilimitado y simétrico'
  },{
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/velocidad.png?alt=media&token=a99dc734-529c-4638-891e-a6bbdc28fc80",
    text:'Mayor velocidad'
  },{
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/internet.png?alt=media&token=ce59df37-4551-4bbc-88f8-a20310a9f31b",
    text:'+30 canales en vivo'
  },{
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/diamante.png?alt=media&token=c5323a44-112c-4683-b3e5-dd5d86a0f0fd",
    text:'Graba tu programa favorito'
  },{
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/gol.png?alt=media&token=d027e1f2-e9aa-4abd-a543-de8544c7962c",
    text:'Retrocede en vivo'
  }
]

const ARRAY_DUO_DGO=[
  {
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/fibra.png?alt=media&token=5c257722-5cc9-463b-bdc4-e89895ba0834",
    text:'100% fibra Óptica'
  },{
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/Simetr%C3%ADa.png?alt=media&token=87bea0d1-236b-4da5-9f61-a8cf606fa56f",
    text:'Internet ilimitado y simétrico'
  },{
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/velocidad.png?alt=media&token=a99dc734-529c-4638-891e-a6bbdc28fc80",
    text:'Mayor velocidad'
  },{
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/tvwin.png?alt=media&token=12fa8317-f6b7-4152-be7d-f298133b1944",
    text:'+60 canales en vivo'
  },{
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/multitv.png?alt=media&token=a79385d3-21bd-4ede-834d-097d8e39e1f8",
    text:'Hasta 2 dispositivos en simultáneo'
  },{
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/sports.png?alt=media&token=e2f0c3df-8eba-4bc3-895b-e0eed2f32f00",
    text:'Lo mejor del deporte por DSPORTS'
  }
]

const ARRAY_DUO_DGO_L1MAX=[
  {
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/fibra.png?alt=media&token=5c257722-5cc9-463b-bdc4-e89895ba0834",
    text:'100% fibra Óptica'
  },{
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/Simetr%C3%ADa.png?alt=media&token=87bea0d1-236b-4da5-9f61-a8cf606fa56f",
    text:'Internet ilimitado y simétrico'
  },{
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/velocidad.png?alt=media&token=a99dc734-529c-4638-891e-a6bbdc28fc80",
    text:'Mayor velocidad'
  },{
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/tvwin.png?alt=media&token=12fa8317-f6b7-4152-be7d-f298133b1944",
    text:'16 canales en vivo'
  },{
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/multitv.png?alt=media&token=a79385d3-21bd-4ede-834d-097d8e39e1f8",
    text:'Hasta 2 dispositivos en simultáneo'
  },{
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/sports.png?alt=media&token=e2f0c3df-8eba-4bc3-895b-e0eed2f32f00",
    text:'Lo mejor del deporte por DSPORTS'
  }
]

const ARRAY_DUO_DGOFULL=[
  {
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/fibra.png?alt=media&token=5c257722-5cc9-463b-bdc4-e89895ba0834",
    text:'100% fibra Óptica'
  },{
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/Simetr%C3%ADa.png?alt=media&token=87bea0d1-236b-4da5-9f61-a8cf606fa56f",
    text:'Internet ilimitado y simétrico'
  },{
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/velocidad.png?alt=media&token=a99dc734-529c-4638-891e-a6bbdc28fc80",
    text:'Mayor velocidad'
  },{
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/tvwin.png?alt=media&token=12fa8317-f6b7-4152-be7d-f298133b1944",
    text:'+80 canales en vivo'
  },{
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/multitv.png?alt=media&token=a79385d3-21bd-4ede-834d-097d8e39e1f8",
    text:'Hasta 2 dispositivos en simultáneo'
  },{
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/sports.png?alt=media&token=e2f0c3df-8eba-4bc3-895b-e0eed2f32f00",
    text:'Lo mejor del deporte por DSPORTS'
  }
]

const ARRAY_DUO_FONO=[
  {
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/fibra.png?alt=media&token=5c257722-5cc9-463b-bdc4-e89895ba0834",
    text:'100% fibra Óptica'
  },{
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/Simetr%C3%ADa.png?alt=media&token=87bea0d1-236b-4da5-9f61-a8cf606fa56f",
    text:'Internet ilimitado y simétrico'
  },{
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/velocidad.png?alt=media&token=a99dc734-529c-4638-891e-a6bbdc28fc80",
    text:'Mayor velocidad'
  },{
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/fonoWin.png?alt=media&token=61039f86-a583-453d-b6df-4e35240208a9",
    text:'Tu teléfono fijo estés donde estés'
  },{
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/peru.png?alt=media&token=482b0a13-2a6c-43ee-abe6-65cd81360a44",
    text:'Llama a todo el Perú'
  },{
    img:"https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/duo.png?alt=media&token=a5dac55d-bb36-4041-b72f-9cbf2fc9e809",
    text:'Conéctalo y úsalo'
  }
]

const IMG = {
  img: "https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/d_go_logo.png?alt=media&token=a068a7bb-9469-41b8-a712-a79cc5e02bc5",
  text: 'direct tv go logo'
};

const IMG_L1MAX = {
  img: "https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/dgl1max.webp?alt=media&token=971ec966-ef9c-496d-8e34-ab2d5e2ae771",
  text: 'direct tv go logo'
};

const SUB_SECTIONS: Array<Array<string>> = [
  [
    'Internet + WINTV Plus + FONOWIN',
    'Internet + DGO L1MAX + FONOWIN',
    'Internet + DGO Básico + FONOWIN',
    'Internet + DGO Full + FONOWIN',
  ],
  [
    'Internet + WINTV Plus',
    'Internet + DGO L1MAX',
    'Internet + DGO Básico',
    'Internet + DGO Full',
    'Internet + FONOWIN',
  ],
  [
    'Internet + WINTV Plus + FONOWIN',
    'Internet + DGO L1MAX + FONOWIN',
    'Internet + DGO Básico + FONOWIN',
    'Internet + DGO Full + FONOWIN',
  ],
  [
    'Internet + WINTV Plus',
    'Internet + DGO L1MAX',
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
      classImg,
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
          classImg={ classImg }
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
    } else if (tSource == '02winperu') {
      wsDataA.append("service", "callmeWinPeru2");
    } else{
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
          mbps: 400,
          mbpsLast: 200,
          promo: 'Duplica tu velocidad x6 meses',
          stylesPrice: { background: '#ff5a0a', border: '1px solid #ff5a0a' },
          price: 124,
          timePromo: 'Precio promo x2 meses',
          regularPrice: 134,
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
          price: 144,
          timePromo: 'Precio promo x2 meses',
          regularPrice: 154,
          imgs: ARRAY_TRIO,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #ff5a0a' },
          stylesMbps: { color: '#ff5a0a' },
          mbps: 800,
          mbpsLast: 400,
          promo: 'Duplica tu velocidad x6 meses',
          stylesPrice: { background: '#ff5a0a', border: '1px solid #ff5a0a' },
          price: 154,
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
          mbpsLast: undefined,
          promo: '  -  ',
          stylesPrice: { background: '#ff5a0a', border: '1px solid #ff5a0a' },
          price: 194,
          timePromo: 'Precio promo x2 meses',
          regularPrice: 204,
          imgs: ARRAY_TRIO,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #ff5a0a' },
          stylesMbps: { color: '#ff5a0a' },
          mbps: 1000,
          mbpsLast: undefined,
          promo: ' - ',
          stylesPrice: { background: '#ff5a0a', border: '1px solid #ff5a0a' },
          price: 284,
          timePromo: 'Precio promo x2 meses',
          regularPrice: 294,
          imgs: ARRAY_TRIO,
          onClick: viewModal
        },
      ],
      [ /* TRIO DGO L1MAX  */
        {
          title: '',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 400,
          mbpsLast: 200,
          promo: 'Duplica tu velocidad x6 meses',
          img: IMG_L1MAX,
          classImg: "w-40",
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: "158",
          imgs: ARRAY_TRIO_DGO_L1MAX,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 600,
          mbpsLast: 300,
          promo: 'Duplica tu velocidad x6 meses',
          img: IMG_L1MAX,
          classImg: "w-40",
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: "178",
          imgs: ARRAY_TRIO_DGO_L1MAX,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 800,
          mbpsLast: 400,
          promo: 'Duplica tu velocidad x6 meses',
          img: IMG_L1MAX,
          classImg: "w-40",
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: "188",
          imgs: ARRAY_TRIO_DGO_L1MAX,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 600,
          mbpsLast: undefined,
          promo: '',
          img: IMG_L1MAX,
          classImg: "w-40",
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: "228",
          imgs: ARRAY_TRIO_DGO_L1MAX,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 1000,
          mbpsLast: undefined,
          promo: '',
          img: IMG_L1MAX,
          classImg: "w-40",
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: "318",
          imgs: ARRAY_TRIO_DGO_L1MAX,
          onClick: viewModal
        },
      ],
      [ /* TRIO DGO BÁSICO  */
        {
          title: '',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 400,
          mbpsLast: 200,
          promo: 'Duplica tu velocidad x6 meses',
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: "156",
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
          price: "176",
          imgs: ARRAY_TRIO_DGO,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 800,
          mbpsLast: 400,
          promo: 'Duplica tu velocidad x6 meses',
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: "186",
          imgs: ARRAY_TRIO_DGO,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 600,
          mbpsLast: undefined,
          promo: '',
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: "226",
          imgs: ARRAY_TRIO_DGO,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 1000,
          mbpsLast: undefined,
          promo: '',
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: "316",
          imgs: ARRAY_TRIO_DGO,
          onClick: viewModal
        },
      ],
      [ /* TRIO DGO FULL  */
        {
          title: '',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 400,
          mbpsLast: 200,
          promo: 'Duplica tu velocidad x6 meses',
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: "178",
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
          price: "198",
          imgs: ARRAY_TRIO_DGOFULL,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 800,
          mbpsLast: 400,
          promo: 'Duplica tu velocidad x6 meses',
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: "208",
          imgs: ARRAY_TRIO_DGOFULL,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 600,
          mbpsLast: undefined,
          promo: '',
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: "248",
          imgs: ARRAY_TRIO_DGOFULL,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 1000,
          mbpsLast: undefined,
          promo: '',
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: "338",
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
          mbps: 400,
          mbpsLast: 200,
          promo: 'Duplica tu velocidad x6 meses',
          stylesPrice: { background: '#ff5a0a', border: '1px solid #ff5a0a' },
          price: 114,
          timePromo: 'Precio promo x2 meses',
          regularPrice: 124,
          imgs: ARRAY_DUO,
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
          price: 134,
          timePromo: 'Precio promo x2 meses',
          regularPrice: 144,
          imgs: ARRAY_DUO,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #ff5a0a' },
          stylesMbps: { color: '#ff5a0a' },
          mbps: 800,
          mbpsLast: 400,
          promo: 'Duplica tu velocidad x6 meses',
          stylesPrice: { background: '#ff5a0a', border: '1px solid #ff5a0a' },
          price: 144,
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
          mbpsLast: undefined,
          promo: ' - ',
          stylesPrice: { background: '#ff5a0a', border: '1px solid #ff5a0a' },
          price: 184,
          timePromo: 'Precio promo x2 meses',
          regularPrice: 194,
          imgs: ARRAY_DUO,
          onClick: viewModal
        },
        {
          title:  '',
          styleCard: { border: '1px solid #ff5a0a' },
          stylesMbps: { color: '#ff5a0a' },
          mbps: 1000,
          mbpsLast: undefined,
          promo: ' - ',
          stylesPrice: { background: '#ff5a0a', border: '1px solid #ff5a0a' },
          price: 274,
          timePromo: 'Precio promo x2 meses',
          regularPrice: 284,
          imgs: ARRAY_DUO,
          onClick: viewModal
        },
      ],
      [/* DUO DGO L1MAX */
        {
          title: '',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 400,
          mbpsLast: 200,
          promo: 'Duplica tu velocidad x6 meses',
          img: IMG_L1MAX,
          classImg: "w-40",
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: "148",
          imgs: ARRAY_DUO_DGO_L1MAX,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 600,
          mbpsLast: 300,
          promo: 'Duplica tu velocidad x6 meses',
          img: IMG_L1MAX,
          classImg: "w-40",
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: "168",
          imgs: ARRAY_DUO_DGO_L1MAX,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 800,
          mbpsLast: 400,
          promo: 'Duplica tu velocidad x6 meses',
          img: IMG_L1MAX,
          classImg: "w-40",
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: "178",
          imgs: ARRAY_DUO_DGO_L1MAX,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 600,
          mbpsLast: undefined,
          img: IMG_L1MAX,
          classImg: "w-40",
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: "218",
          imgs: ARRAY_DUO_DGO_L1MAX,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 1000,
          mbpsLast: undefined,
          img: IMG_L1MAX,
          classImg: "w-40",
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: "308",
          imgs: ARRAY_DUO_DGO_L1MAX,
          onClick: viewModal
        },
      ],
      [/* DUO DGO BÁSICO */
        {
          title: '',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 400,
          mbpsLast: 200,
          promo: 'Duplica tu velocidad x6 meses',
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: "146",
          imgs: ARRAY_DUO_DGO,
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
          price: "166",
          imgs: ARRAY_DUO_DGO,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 800,
          mbpsLast: 400,
          promo: 'Duplica tu velocidad x6 meses',
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: "176",
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
          price: "216",
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
          price: "306",
          imgs: ARRAY_DUO_DGO,
          onClick: viewModal
        },
      ],
      [/* DUO DGO FULL */
        {
          title: ' ',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 400,
          mbpsLast: 200,
          promo: 'Duplica tu velocidad x6 meses',
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: "168",
          imgs:ARRAY_DUO_DGOFULL,
          onClick: viewModal
        },
        {
          title: ' ',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 600,
          mbpsLast: 300,
          promo: 'Duplica tu velocidad x6 meses',
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: "188",
          imgs:ARRAY_DUO_DGOFULL,
          onClick: viewModal
        },
        {
          title: ' ',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 800,
          mbpsLast: 400,
          promo: 'Duplica tu velocidad x6 meses',
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          price: '198',
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
          price: "238",
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
          price: "328",
          imgs:ARRAY_DUO_DGOFULL,
          onClick: viewModal
        },
      ],
      [/* DUO FONO WIN */
        {
          title: ' ',
          styleCard: { border: '1px solid #ff5a0a' },
          stylesMbps: { color: '#ff5a0a' },
          mbps: 400,
          mbpsLast: 200,
          promo: 'Duplica tu velocidad x6 meses',
          stylesPrice: { background: '#ff5a0a', border: '1px solid #ff5a0a' },
          price: 109,
          regularPrice: undefined,
          timePromo: undefined,
          imgs: ARRAY_DUO_FONO,
          onClick: viewModal
        },
        {
          title: ' ',
          styleCard: { border: '1px solid #ff5a0a' },
          stylesMbps: { color: '#ff5a0a' },
          mbps: 600,
          mbpsLast: 300,
          promo: 'Duplica tu velocidad x6 meses',
          stylesPrice: { background: '#ff5a0a', border: '1px solid #ff5a0a' },
          timePromo: undefined,
          price: 129,
          regularPrice: undefined,
          imgs: ARRAY_DUO_FONO,
          onClick: viewModal
        },
        {
          title: ' ',
          styleCard: { border: '1px solid #ff5a0a' },
          stylesMbps: { color: '#ff5a0a' },
          mbps: 800,
          mbpsLast: 400,
          promo: 'Duplica tu velocidad x6 meses',
          stylesPrice: { background: '#ff5a0a', border: '1px solid #ff5a0a' },
          timePromo: undefined,
          price: 139,
          regularPrice: undefined,
          imgs: ARRAY_DUO_FONO,
          onClick: viewModal
        },
        {
          title: ' ',
          styleCard: { border: '1px solid #ff5a0a' },
          stylesMbps: { color: '#ff5a0a' },
          mbps: 600,
          mbpsLast: undefined,
          promo: ' - ',
          stylesPrice: { background: '#ff5a0a', border: '1px solid #ff5a0a' },
          timePromo: undefined,
          price: 179,
          regularPrice: undefined,
          imgs: ARRAY_DUO_FONO,
          onClick: viewModal
        },
        {
          title: ' ',
          styleCard: { border: '1px solid #ff5a0a' },
          stylesMbps: { color: '#ff5a0a' },
          mbps: 1000,
          mbpsLast: undefined,
          promo: ' - ',
          stylesPrice: { background: '#ff5a0a', border: '1px solid #ff5a0a' },
          timePromo: undefined,
          price: 269,
          regularPrice: undefined,
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
          mbps: 250,
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
          mbps: 350,
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
          mbps: 400,
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
          mbps: 600,
          stylesPrice: { background: '#ff5a0a', border: '1px solid #ff5a0a' },
          price: 204,
          timePromo: 'Precio promo x6 meses',
          regularPrice: 234,
          imgs: ARRAY_TRIO,
          onClick: viewModal
        }
      ],
      [ /* TRIO DGO L1MAX GAMER*/
        {
          title: '',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 250,
          img: IMG_L1MAX,
          classImg: "w-40",
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          timePromo: 'Precio promo x6 meses',
          price: "168",
          regularPrice: 188,
          imgs:ARRAY_TRIO_DGO_L1MAX,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 350,
          img: IMG_L1MAX,
          classImg: "w-40",
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          timePromo: 'Precio promo x6 meses',
          price: "188",
          regularPrice: 208,
          imgs:ARRAY_TRIO_DGO_L1MAX,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 400,
          img: IMG_L1MAX,
          classImg: "w-40",
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          timePromo: 'Precio promo x6 meses',
          price: "198",
          regularPrice: 218,
          imgs:ARRAY_TRIO_DGO_L1MAX,
          onClick: viewModal
        },
        {
          title: ' ',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 600,
          img: IMG_L1MAX,
          classImg: "w-40",
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          timePromo: 'Precio promo x6 meses',
          price: "238",
          regularPrice: 258,
          imgs:ARRAY_TRIO_DGO_L1MAX,
          onClick: viewModal
        }
      ],
      [ /* TRIO DGO BÁSICO GAMER*/
        {
          title: '',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 250,
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          timePromo: 'Precio promo x6 meses',
          price: "166",
          regularPrice: 186,
          imgs:ARRAY_TRIO_DGO,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 350,
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          timePromo: 'Precio promo x6 meses',
          price: "186",
          regularPrice: 206,
          imgs:ARRAY_TRIO_DGO,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 400,
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          timePromo: 'Precio promo x6 meses',
          price: "196",
          regularPrice: 216,
          imgs:ARRAY_TRIO_DGO,
          onClick: viewModal
        },
        {
          title: ' ',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 600,
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          timePromo: 'Precio promo x6 meses',
          price: "236",
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
          mbps: 250,
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          timePromo: 'Precio promo x6 meses',
          price: "188",
          regularPrice: 208,
          imgs:ARRAY_TRIO_DGOFULL,
          onClick: viewModal
        },
        {
          title: ' ',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 350,
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          timePromo: 'Precio promo x6 meses',
          price: "208",
          regularPrice: 228,
          imgs:ARRAY_TRIO_DGOFULL,
          onClick: viewModal
        },
        {
          title: ' ',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 400,
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          timePromo: 'Precio promo x6 meses',
          price: "218",
          regularPrice: 238,
          imgs:ARRAY_TRIO_DGOFULL,
          onClick: viewModal
        },
        {
          title: ' ',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 600,
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          timePromo: 'Precio promo x6 meses',
          price: "258",
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
          mbps: 250,
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
          mbps: 350,
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
          mbps: 400,
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
          mbps: 600,
          stylesPrice: { background: '#ff5a0a', border: '1px solid #ff5a0a' },
          price: 194,
          timePromo: 'Precio promo x4 meses',
          regularPrice: 224,
          imgs: ARRAY_DUO,
          onClick: viewModal
        }
      ],
      [/* DUO DGO L1MAX GAMER*/
        {
          title: '',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 250,
          img: IMG_L1MAX,
          classImg: "w-40",
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          timePromo: 'Precio promo x4 meses',
          price: "158",
          regularPrice: 178,
          imgs:ARRAY_DUO_DGO_L1MAX,
          onClick: viewModal
        },
        {
          title: ' ',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 350,
          img: IMG_L1MAX,
          classImg: "w-40",
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          timePromo: 'Precio promo x4 meses',
          price: "178",
          regularPrice: 198,
          imgs:ARRAY_DUO_DGO_L1MAX,
          onClick: viewModal
        },
        {
          title: ' ',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 400,
          img: IMG_L1MAX,
          classImg: "w-40",
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          timePromo: 'Precio promo x4 meses',
          price: "188",
          regularPrice: 208,
          imgs:ARRAY_DUO_DGO_L1MAX,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 600,
          img: IMG_L1MAX,
          classImg: "w-40",
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          timePromo: 'Precio promo x4 meses',
          price: "228",
          regularPrice: 248,
          imgs:ARRAY_DUO_DGO_L1MAX,
          onClick: viewModal
        }
      ],
      [/* DUO DGO BÁSICO GAMER*/
        {
          title: '',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 250,
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          timePromo: 'Precio promo x4 meses',
          price: "156",
          regularPrice: 176,
          imgs:ARRAY_DUO_DGO,
          onClick: viewModal
        },
        {
          title: ' ',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 350,
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          timePromo: 'Precio promo x4 meses',
          price: "176",
          regularPrice: 196,
          imgs:ARRAY_DUO_DGO,
          onClick: viewModal
        },
        {
          title: ' ',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 400,
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          timePromo: 'Precio promo x4 meses',
          price: "186",
          regularPrice: 206,
          imgs:ARRAY_DUO_DGO,
          onClick: viewModal
        },
        {
          title: '',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 600,
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          timePromo: 'Precio promo x4 meses',
          price: "226",
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
          mbps: 250,
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          timePromo: 'Precio promo x4 meses',
          price: "178",
          regularPrice: 198,
          imgs:ARRAY_DUO_DGOFULL,
          onClick: viewModal
        },
        {
          title: ' ',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 350,
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          timePromo: 'Precio promo x4 meses',
          price: "198",
          regularPrice: 218,
          imgs:ARRAY_DUO_DGOFULL,
          onClick: viewModal
        },
        {
          title: ' ',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 400,
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          timePromo: 'Precio promo x4 meses',
          price: "208",
          regularPrice: 228,
          imgs:ARRAY_DUO_DGOFULL,
          onClick: viewModal
        },
        {
          title: ' ',
          styleCard: { border: '1px solid #26aae1' },
          stylesMbps: { color: '#26aae1' },
          mbps: 600,
          img: IMG,
          stylesPrice: { background: '#26aae1', border: '1px solid #26aae1' },
          timePromo: 'Precio promo x4 meses',
          price: "248",
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
          mbps: 250,
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
          mbps: 350,
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
          mbps: 400,
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
          mbps: 600,
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
  const [includeL1Max, setIncludeL1Max] = useState<boolean>(false);
  

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
        case '02winperu':
          setNumberCall(() => '(01) 7540488');
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
    const name = SUB_SECTIONS[selectedIndexSections][selectedIndexSubSections];

    name.includes("L1MAX") ? setIncludeL1Max(true) : setIncludeL1Max(false);

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
          w-[95%]
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
      {
        includeL1Max ?
        <div
          className='
            w-full
            flex
            items-start
            justify-center
            gap-4
            my-6
          '
        >
          <p
            className="
              w-auto
              font-black
              text-3xl
              text-[#321712]
              text-end
              uppercase
            "
          >
            todos los planes incluyen
          </p>
          <img className='w-auto h-10 object-contain' src='https://firebasestorage.googleapis.com/v0/b/win-dacar.appspot.com/o/l1max.png?alt=media&token=35861974-d1ed-46f7-8e57-0aea0f2b98eb' alt='l1max logo' />
        </div> :
        <></>
      }
    </>
  )
}

export default BodyCards
