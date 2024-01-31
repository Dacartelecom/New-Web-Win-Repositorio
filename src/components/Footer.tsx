/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useEffect, useState } from 'react';
import logoWhite from '../../public/win_logo_white.png';
import './Footer.css'
import Modal from './Modal';

const Footer = () => {
      const [numberCall, setNumberCall] = useState<string>('(01) 6806774');
     const [tSource, setTSource] = useState<undefined | string>(undefined);
     const [activeModalT, setActiveModalT] = useState(false);
     const viewModalT = () => setActiveModalT((_prev) => (true));
     const closeModalT = () => setActiveModalT((_prev) => (false));

     const [activeModalC, setActiveModalC] = useState(false);
     const viewModalC = () => setActiveModalC((_prev) => (true));
     const closeModalC = () => setActiveModalC((_prev) => (false));
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

  return (
<div className=' '>
    {/* <div className='w-full bg-[#ff5a0a]'>
      <div className='flex items-center w-full '>
        <div className='Logo-header-footer'>
          <img src={`
        ${ logoWhite }`} alt="" />
          </div>

          <div className='number-header-footer font-bold'>
       <ul className='flex'>
        <span className='bg-white text-[#ff5a0a] p-1 rounded-lg max-md:hidden items-center'>WIN - AGENCIA AUTORIZADA AGORA TELECOM</span>
       </ul>

          </div>

         <div className='condiciones-footer'>
        <ul className='w-full'>
          <li><h2>Llámanos al</h2></li>
        <li><a href={`tel:${ numberCall }`}>{ numberCall }</a></li>
        </ul>
          </div>

    </div>
    <div>
      <a
          href={`tel:${ numberCall }`}
          className="fixed left-3 bottom-3 rounded-full w-16 h-16 bg-[#ff5a0a] text-white text-3xl flex items-center justify-center animate-[blink_2s_infinite] md:hidden"
        >
          <i className="fa-solid fa-phone-volume"></i>
        </a>
    </div>
    <div className='line '>
      <hr />
      <span  className='terminos-condiciones' onClick={viewModalT}>Términos y Condiciones del Sitio Web</span> | <span  className='terminos-condiciones' onClick={viewModalC}>Política de Privacidad</span>
      </div>
      
    </div> */}
    <div className="flex h-[250px] flex-col bg-[#ff5a0a] text-white max-lg:h-auto">
        <div className="flex justify-around items-center h-full w-full max-lg:flex-col ">
          <div className=''> 
          <img src={`${logoWhite}`} alt="" className='w-[250px]'/> 
          </div>

      <div className='grid grid-cols-1 text-2xl max-lg:flex max-lg:flex-col max-lg:my-5  max-lg:text-lg'> 
      <div className='flex flex-col'>
        <span className='bg-white text-[#ff5a0a] p-1 rounded-lg items-center'>WIN - AGENCIA AUTORIZADA AGORA TELECOM</span>
      </div>
      </div>
      
      <div className="flex items-center flex-col w-[380px] max-lg:my-5 text-left max-lg:text-center"> 
      <ul className='w-full'>
          <li className='text-5xl font-bold'><h2>Llámanos al</h2></li>
        <li className='text-6xl font-bold'><a href={`tel:${ numberCall }`}>{ numberCall }</a></li>
        </ul>
       </div>
      </div>
      <div>
      <a
          href={`tel:${ numberCall }`}
          className="fixed left-3 bottom-3 rounded-full w-16 h-16 bg-[#ff5a0a] text-white text-3xl flex items-center justify-center animate-[blink_2s_infinite] md:hidden"
        >
          <i className="fa-solid fa-phone-volume"></i>
        </a>
    </div>
      <hr className="w-[90%] m-auto " />
      <div className="text-center flex justify-center max-lg:flex-col max-lg:flex">
      <span  className='terminos-condiciones max-lg:mx-0 mx-2 underline' onClick={viewModalT}>Términos y Condiciones del Sitio Web 
      </span> <span className='mx-2'>|</span>  <span  className='terminos-condiciones max-lg:mx-0 mx-2 underline' onClick={viewModalC}> Política de Privacidad</span>
      </div>
    </div>

    <Modal active={ activeModalT }
        onClick={ closeModalT }>
          <div className='bg-white p-4 w-3/4 rounded-md z-10 text-justify text-xl overflow-y-scroll h-3/4'>
              <h1 className='text-[#ff5a0a] text-center'>TÉRMINOS Y CONDICIONES DE USO DEL SITIO WEB</h1>
              <span>El presente documento establece los términos y condiciones generales (en adelante, los “Términos y Condiciones”)aplicables al uso del sitio web https://planesfibraperu.com.pe/ (en adelante, el “Sitio”) puesto a disposición del público en general (en adelante, indistintamente, el “Usuario” o los “Usuarios”) por parte de Agora Telecom S.A.C. (en adelante, la “Empresa”) , para la comercialización de productos y servicios prestados por Wi-Net Telecom S.A.C. (en adelante, “WIN”). El Usuario que desee usar el Sitio podrá hacerlo sujetándose a los Términos y Condiciones. LOS PRESENTES TÉRMINOS Y CONDICIONES TIENEN UN CARÁCTER OBLIGATORIO Y VINCULANTE, POR LO QUE CUALQUIER USUARIO QUE NO ACEPTE ESTOS TÉRMINOS Y CONDICIONES DEBERÁ ABSTENERSE DE UTILIZAR EL SITIO. El Usuario debe leer todas las condiciones establecidas en estos Términos y Condiciones, así como en los demás documentos incorporados en el Sitio previo al uso del Sitio. La aceptación expresa de los Términos y Condiciones que se establecen a continuación y/o el mero uso del Sitio que haga el Usuario, implica que el Usuario declara haber sido previamente informado de, así como haber leído, comprendido y aceptado, estos Términos y Condiciones, así como las condiciones particulares o modificaciones que respecto de ellas se puedan efectuar, a todas las cuales el Usuario se adhiere plenamente y sin reservas. El Usuario declara y garantiza estar apto y tener capacidad legal para aceptar los presentes Términos y Condiciones y que toda la información que proporcione a la Empresa en el marco del Sitio, bajo cualquier forma, será exacta, verdadera, completa y correcta; liberando de cualquier responsabilidad sobre el particular a la Empresa y a WIN. En ese sentido, para efectos de las exoneraciones de responsabilidad, WIN comprende también a cualquiera de sus respectivos directores, funcionarios, empleados u otros representantes.
              </span>
                          <h1 className='text-[#ff5a0a] text-left'>1. RESPONSABILIDAD LIMITADA</h1>
                          <span>El Usuario declara haber comprendido y aceptado que toda información, comunicación, opinión, manifestación, contenido, transacción u operación a la que acceda a través del Sitio es de exclusiva responsabilidad de la Empresa; reconociendo el Usuario que el uso del Sitio y la confianza que asigne al mismo son bajo su propio riesgo. En ese sentido, el Usuario declara haber comprendido y aceptado que, por ser el Sitio un espacio de propiedad de la Empresa y administrado exclusivamente por ella, WIN no respalda ni garantiza la información, comunicaciones, opiniones, manifestaciones, contenido, transacciones u operaciones a las que el Usuario acceda a través del Sitio; por lo cual el Usuario libera de cualquier responsabilidad sobre el particular a WIN.
              </span>
              <h1 className='text-[#ff5a0a] text-left'>2. LIMITACIONES Y MODIFICACIÓN DE LAS CONDICIONES APLICABLES AL SITIO</h1>
              <span>La Empresa expresamente se reserva la facultad y puede efectuar, en cualquier momento, bajo su exclusiva discreción y sin previo aviso, modificaciones sobre estos Términos y Condiciones. Las modificaciones entrarán en vigor inmediatamente después de que aparezcan publicadas por cualquier medio, sin necesidad de notificación alguna al Usuario. En los casos en que la Empresa estime conveniente realizar alguna notificación, esta se efectuará por cualquier medio, incluyendo, sin limitaciones, anotación en el sitio web https://planesfibraperu.com.pe/, correo electrónico u otros mecanismos electrónicos o convencionales de correos o comunicaciones, o cualquier otro método equivalente. Es recomendable que el Usuario revise en forma periódica el Sitio a fin de informarse de las modificaciones que puedan haberse introducido; la continuación en el uso del Sitio, implicará la aceptación sin reservas a dichas modificaciones por parte del Usuario.
              </span>
              <h1 className='text-[#ff5a0a] text-left'>3. SUSPENSIÓN</h1>
              <span>La Empresa se reserva el derecho de suspender en cualquier momento, temporalmente y sin previo aviso, el Sitio, por el tiempo que resulte necesario.
              </span>
              <h1 className='text-[#ff5a0a] text-left'>4. VIGENCIA, INTERRUPCIÓN Y TERMINACIÓN DEL SITIO
              </h1>
              <span>El Sitio estará disponible por tiempo indefinido. La Empresa, en cualquier momento, sin previo aviso, podrá interrumpir, desactivar, denegar, bloquear, dar por terminado el acceso o cancelar, en todo o parte, el Sitio, por cualquier razón, incluyendo, sin limitación, la detección de cualquier tipo de acto u omisión que, a juicio y a sola discreción de la Empresa, se considere como una violación a estos Términos y Condiciones, a otras condiciones aplicables o a las que emanen de la normativa vigente, sin que ello genere para La Empresa responsabilidad de clase alguna. La Empresa no asumirá responsabilidad alguna frente al Usuario o frente a terceros por ninguna de las acciones antes mencionadas. Ni la interrupción, desactivación, denegación, bloqueo, terminación del acceso, desactivación del Sitio, ni cualquier acción u omisión del Usuario implicará la pérdida de vigencia de estos Términos y Condiciones.
              </span>
              <h1 className='text-[#ff5a0a] text-left'>5. INTERPRETACIÓN</h1>
              <span>Los títulos de las cláusulas o numerales son meramente orientadores y no forman parte del contenido preceptivo de estos Términos y Condiciones. Los términos y condiciones que integran los presentes Términos y Condiciones constituyen la expresión formal y definitiva de la declaración de voluntad de las partes, debiendo interpretarse los unos por los otros atribuyendo a los dudosos el sentido que se derive del conjunto de todos. La eventual nulidad o ineficacia de algunas de las estipulaciones, no afecta ni invalida la eficacia u obligatoriedad de las demás contenidas en los presentes Términos y Condiciones. Cualesquiera documentos o declaraciones previos a la entrada en vigor de los presentes Términos y Condiciones se considerarán definitivamente derogados.
              </span>
              <h1 className='text-[#ff5a0a] text-left'>6. COMPETENCIA
              </h1>
              <span>Todas las cuestiones relacionadas con el uso del Sitio se rigen por las leyes peruanas. La Empresa y el Usuario hacen renuncia expresa a cualquier otro fuero y convienen que cualquier controversia derivada de su uso o aplicación será sometida a la jurisdicción de los Juzgados y Tribunales competentes de Lima, Perú. En el caso de que el Usuario tenga su domicilio fuera de Perú, la Empresa y el Usuario se someten, con renuncia expresa a cualquier otro fuero, a los Juzgados y Tribunales competentes en Lima, Perú.</span>
              </div>
              </Modal>

          <Modal active={ activeModalC }
        onClick={ closeModalC }>
          <div className='bg-white p-4 w-3/4 rounded-md z-10 text-justify text-xl overflow-y-scroll h-3/4'>
              <h1 className='text-[#ff5a0a] text-center'>POLÍTICA DE PRIVACIDAD</h1>
              <span>Agora Telecom S.A.C. es una sociedad interesada en garantizar, respetar y cumplir de manera estricta el derecho fundamental de protección de los datos personales, previsto en el artículo 2, numeral 6, de la Constitución Política del Perú, realizando el almacenamiento de datos, utilizando estándares de alta calidad, con la finalidad de mantener la confidencialidad de los mismos, cumpliendo con lo ordenado en la Ley de Protección de Datos Personales - Ley N° 29733, reglamento de ley aprobado por el decreto supremo N° 003-2013-JUS, o cualquier otra norma que derogue y/o modifique las normas existentes.
              Como es nuestra intención, mantener una relación duradera, es importante que usted nos otorgue su aprobación para acceder a sus datos personales, para ello es necesario brindarle la siguiente información:

          </span>
            <h1 className='text-[#ff5a0a] text-left'>1.- ¿Qué son los datos personales?</h1>
            <span>Conforme a la ley, los datos personales es toda información sobre una persona natural que la identifica o la hace identificable a través de medios que pueden ser razonablemente utilizados. Tenemos, por ejemplo, los datos de carácter identificativo, como lo son nombres, apellidos, N.º de DNI, N.º de RUC, N.º de Pasaporte, Dirección de domicilio, teléfono, dirección de correo electrónico, imagen, voz, firma electrónica; datos de características personales; datos económicos - financieros y de seguros, entre otros. Pudiendo acceder de igual forma a sus datos personales, en forma física, oral o electrónica, sea a través de fuentes públicas o de terceros.
          </span>
          <h1 className='text-[#ff5a0a] text-left'>2.- ¿Es obligatorio obtener autorización para el tratamiento de sus datos personales?</h1>
          <span>Sí, los datos personales solamente pueden ser objeto de tratamiento con consentimiento del titular, salvo que la ley lo autorice en determinada situación. De igual manera, es preciso indicar que el consentimiento es libre, previo, informado, expreso e inequívoco.
          </span>
          <h1 className='text-[#ff5a0a] text-left'>3.- ¿Agora Telecom S.A.C. es el titular de sus datos personales?</h1>
          <span>Sí, al aceptar nuestra política de privacidad, sus datos pueden ser tratados por la empresa, es importante precisar que, al haber dado usted su consentimiento de utilización de datos, nuestra empresa está autorizada a almacenar, procesar y transferir sus datos personales a otras empresas vinculadas.
          Los datos serán incluidos en nuestro fichero de clientes y nuestra finalidad es informar a nuestros clientes las actualizaciones de nuestros servicios y/o productos.

          </span>
          <h1 className='text-[#ff5a0a] text-left'>4.- ¿Usted autoriza el ofrecimiento de nuevos productos y/o servicios que oferte la empresa?</h1>
          <span>Si usted acepta la presente política de privacidad, Agora Telecom S.A.C. se comunicará con usted y será informado a través de medios telemáticos, llamadas, sistemas de llamadas telefónicas, mensajes de texto u otros mensajes electrónicos de uso masivo de comunicación de nuevos productos y servicios, que sean promovidos como resultado de campañas de promoción y marketing que realice la empresa.
          </span>
          <h1 className='text-[#ff5a0a] text-left'>5.- ¿Es factible que usted revoque la autorización de sus datos?</h1>
          <span>Sí, es posible revocar la autorización en cualquier momento, sin justificación previa. Se puede revocar la autorización para las finalidades autorizadas, ya sea de manera parcial o total.
          </span>
          <h1 className='text-[#ff5a0a] text-left'>6.- ¿Qué derechos ejercen los titulares de los datos personales?</h1>
          <span>Derecho de acceso: solicitando información sobre los datos personales registrados en el banco de datos; derecho de rectificación (actualización, inclusión): con los que usted puede modificar los datos brindados, ya sea porque exista algún error, sean falsos, incompletos u otra causa; derecho de cancelación (supresión): ejerciendo este derecho es posible solicitar la supresión o cancelación de sus datos personales de nuestro banco de datos considerando que son esenciales para la ejecución del mismo; derecho de oposición: toda persona tienen la facultad de oponerse al uso de sus datos, cuando estos no han sido autorizados, asimismo puede oponerse por la situación personal concreta.
</span>
          </div>
    </Modal>
</div>



  )
};

export default Footer;