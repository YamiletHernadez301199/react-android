import { MainLayout } from "../layaouts/MainLayout"
import '../components/style/_android.scss'
import '../components/style/_logo.scss'
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowLeft, faArrowRight, faArrowUpRightFromSquare, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
export const Android = () => {
    window.addEventListener('scroll', function () {
        const image = document.getElementById('resize-image');
        const scrollY = window.scrollY;

        // Define el punto de desencadenamiento del efecto (ajusta según sea necesario)
        const triggerPoint = 300;

        // Calcula la escala basada en la posición de scroll
        const scale = 1 + scrollY / triggerPoint; // Ajusta el factor de escala según sea necesario

        // Limita la escala máxima (opcional)
        const maxScale = 2; // Cambia esto al valor máximo deseado
        if (scale > maxScale) {
            return;
        }

        // Aplica la escala a la imagen
        image.style.transform = `scale(${scale})`;
    });




    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const scrollHeight = document.documentElement.scrollHeight;

        const newScrollProgress = scrollY / (scrollHeight - windowHeight);
        setScrollProgress(newScrollProgress);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const staticColor = scrollProgress < 0 ? '#ffffff' : '#d7effe';
    const gradientColor = `linear-gradient(to right, ${staticColor} ${scrollProgress * 100}%, #ffffff ${scrollProgress * 100}%)`;

    // Define una variable para determinar si se debe aplicar un estilo específico
    const applyCustomStyles = window.innerWidth <= 360; // o usa otra lógica según tu necesidad


    return (
        <>
            <MainLayout>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col-md-6 color-colum">
                                    <h5 className="textoAndroid">
                                        Qué es Android
                                    </h5>
                                    <h1 className={`fw-bolder subtitulo ${applyCustomStyles ? 'custom-styles' : ''}`}>
                                        La plataforma que lleva a los dispositivos móviles más allá.
                                    </h1>
                                </div>

                                <div className={`col special ${applyCustomStyles ? 'custom-styles' : ''}`} style={{ background: gradientColor, gridRow: 2 }}>
                                    <img src={`../assets/img/img11.png`} className="img" alt="" />
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col-md-6 mt-5">
                                    <p className="fw-bolder subtitulo">
                                        La mejor tecnología para tu teléfono, tablet, reloj, TV y automóvil.
                                    </p>
                                </div>
                                <div className="col-md-5 mt-5">
                                    <p className="textoAndroid2 lh-lg">
                                        A veces un dispositivo no solo funciona bien, sino que de verdad facilita tu vida:
                                        eso es Android. Es la razón por la que tu GPS evita el tráfico, el reloj puede enviar mensajes
                                        de texto y el Asistente sabe responder preguntas. Es el sistema operativo que utilizan 2,500 millones
                                        de dispositivos activos. Desde teléfonos con 5G hasta las más increíbles tablets,
                                        la tecnología de Android está presente en todos ellos.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src={`../assets/img/img15.png`} class="slider" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={`../assets/img/img16.png`} class="slider" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={`../assets/img/img13.png`} class="slider" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={`../assets/img/img14.png`} class="slider" alt="..." />
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="progress mt-5" style={{ height: '5px' }}>
                                    <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <button className="btn btn-light btn-left" disabled><FontAwesomeIcon icon={faArrowLeft} /> </button>
                                    <button className="btn btn-light btn-right"><FontAwesomeIcon icon={faArrowRight} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col mt-5">
                            <div className="row mt-5">
                                <div className="col mt-5">
                                    <p className="fw-bolder subtitulo">
                                        Siempre desafiamos los límites de lo posible.
                                    </p>
                                </div>
                                <div className="col align-self-end">
                                    <p className="text-justify parrafo">
                                        Todos pueden acceder a Android: desarrolladores, diseñadores y fabricantes de dispositivos.
                                        Es decir que más personas pueden probar,
                                        imaginar y crear cosas que el mundo nunca ha visto hasta ahora.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row  mt-5">
                        <div className="col mt-5">
                            <div className="card-group gap-5 card-style">
                                <div className="card border-0">
                                    <img src={`../assets/img/img18.png`} className="card-img-top borde" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title parrafo2 fw-bolder">Traduce idiomas al instante.</h5>
                                    </div>
                                    <p className="card-text subparrafo">Más información <FontAwesomeIcon icon={faArrowDown} transform="rigth-5" /></p>
                                </div>
                                <div className="card border-0">
                                    <img src={`../assets/img/img19.png`} className="card-img-top borde" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title parrafo2 fw-bolder">Usa la cámara para hacer búsquedas en la Web.</h5>
                                    </div>
                                    <p className="card-text subparrafo">Más información <FontAwesomeIcon icon={faArrowDown} transform="rigth-5" /></p>
                                </div>
                                <div className="card border-0">
                                    <img src={`../assets/img/img17.png`} className="card-img-top borde" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title parrafo2 fw-bolder">Genera subtítulos automáticamente para el contenido multimedia que reproduces en el teléfono.</h5>
                                    </div>
                                    <p className="card-text subparrafo">Más información <FontAwesomeIcon icon={faArrowDown} transform="rigth-5" /></p>
                                </div>
                            </div>
                            <div className="progress mt-5" style={{ height: '5px' }}>
                                <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button className="btn btn-light btn-left" disabled><FontAwesomeIcon icon={faArrowLeft} /> </button>
                                <button className="btn btn-light btn-right"><FontAwesomeIcon icon={faArrowRight} /></button>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col mt-5">
                            <div className="row mt-5">
                                <div className="col mt-5">
                                    <p className="fw-bolder subtitulo">
                                        La seguridad integrada mantiene tu teléfono protegido.
                                    </p>
                                </div>
                                <div className="col">
                                    <p className="textoAndroid2 lh-lg">
                                        Cuando tienes Android, tienes seguridad integrada que nunca deja de funcionar. Google Play Protect analiza
                                        todas las apps. Además, el software recibe actualizaciones de seguridad con frecuencia y la plataforma está
                                        en constante evolución.
                                        Es como un guardia de seguridad que nunca se toma un descanso, una siesta ni vacaciones.
                                    </p>
                                    <p>
                                        <button type="button" className="btn btn-outline-success rounded-pill style-button py-3 px-5 texto mt-3">
                                            <div className='tex'>Más información</div>
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col mt-5">
                            <div className="image-container">
                                <img src={`../assets/img/img4.png`} alt="" id="resize-image" />

                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6 mt-4">
                            <p className="fw-bolder subtitulo">
                                Tú controlas tu información.
                            </p>
                            <p className="textoAndroid2 lh-lg">
                                En Android, tú decides si se comparte tu información, como la Actividad web y
                                de aplicaciones o el Historial de ubicaciones, y cuándo. Si una app accede a tu
                                ubicación mientras no la usas, recibirás una notificación. Si en algún momento quieres
                                cambiar los permisos, todas las opciones de configuración de privacidad están en un solo
                                lugar.
                                Es tu privacidad, y tú tienes el control.
                            </p>
                            <p>
                                <button type="button" className="btn btn-outline-success rounded-pill style-button py-3 px-5 texto">
                                    <div className='tex'>Más información</div>
                                </button>
                            </p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col mt-5">
                            <div className="row mt-5">
                                <div className="col mt-5">
                                    <p className="fw-bolder subtitulo">
                                        El balance adecuado para ti.
                                    </p>
                                </div>
                                <div className="col">
                                    <p className="textoAndroid2 lh-lg">
                                        Bienestar digital te proporciona las herramientas necesarias para comprender
                                        cómo usar el teléfono y decidir qué te resulta más útil: no importa si lo que quieres
                                        es desconectarte,
                                        disminuir las distracciones o simplemente relajarte antes de ir a dormir.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <img src={`../assets/img/img20.png`} className="img20 img-fluid" alt="" />
                                    <div className="col">
                                        <img src={`../assets/img/img22.png`} className="img22 img-fluid contenedor" alt="" />
                                    </div>
                                    <div className="col-md-6 parrafo3 text-start   offset-md-6">
                                        <div className="col-md-5">
                                            <p>
                                                El panel es un gran ejemplo. Te muestra un resumen del tiempo de uso,
                                                las notificaciones, con cuánta frecuencia desbloqueas el teléfono y mucho más.
                                                Esta es solo una de las tantas herramientas
                                                que te brinda Bienestar digital.
                                            </p>
                                            <p>
                                                <button type="button" className="btn btn-outline-success rounded-pill style-button2 py-3 px-5 texto mt-3">
                                                    <div className='tex'>Más información</div>
                                                </button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <img src={`../assets/img/img23.png`} className="img23 img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col mt-5">
                            <div className="row mt-5">
                                <div className="col-md-6 mt-5">
                                    <p className="fw-bolder subtitulo">
                                     Tecnología útil para todos.
                                    </p>
                                </div>
                                <div className="col-md-5">
                                    <p className="parrafo4 lh-lg">
                                    Cada uno usa el dispositivo a su manera. Por eso, desarrollamos funciones y
                                     productos accesibles que se adaptan a las distintas maneras en las que las personas
                                      quieren experimentar el mundo. Lectores de pantalla, supresores de sonido y hasta rutas 
                                      a pie con realidad aumentada. Porque, cuando se trata de tecnología, 
                                    no hay una única estrategia que les sirva a todos por igual.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row  mt-5">
                        <div className="col mt-5">
                            <div className="card-group gap-5 card-style">
                                <div className="card border-0">
                                    <img src={`../assets/img/img26.png`} className="card-img-top borde" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title parrafo2 fw-bolder">Traduce idiomas al instante.</h5>
                                    </div>
                                    <p className="card-text subparrafo">Más información <FontAwesomeIcon icon={faArrowDown} transform="rigth-5" /></p>
                                </div>
                                <div className="card border-0">
                                    <img src={`../assets/img/img25.png`} className="card-img-top borde" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title parrafo2 fw-bolder">Usa la cámara para hacer búsquedas en la Web.</h5>
                                    </div>
                                    <p className="card-text subparrafo">Más información <FontAwesomeIcon icon={faArrowDown} transform="rigth-5" /></p>
                                </div>
                                <div className="card border-0">
                                    <img src={`../assets/img/img26.png`} className="card-img-top borde" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title parrafo2 fw-bolder">Genera subtítulos automáticamente para el contenido multimedia que reproduces en el teléfono.</h5>
                                    </div>
                                    <p className="card-text subparrafo">Más información <FontAwesomeIcon icon={faArrowDown} transform="rigth-5" /></p>
                                </div>
                            </div>
                            <div className="progress mt-5" style={{ height: '5px' }}>
                                <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button className="btn btn-light btn-left" disabled><FontAwesomeIcon icon={faArrowLeft} /> </button>
                                <button className="btn btn-light btn-right"><FontAwesomeIcon icon={faArrowRight} /></button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <img src={`../assets/img/img27.png`} className="img27 img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col mt-5">
                            <div className="row mt-5">
                                <div className="col">
                                    <h5 className='texto text-nav-top'>
                                        PARA DESARROLLADORES
                                        <hr />
                                    </h5>
                                    <p className='texto'>
                                        Recursos para desarrolladores
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} transform="right-5" />
                                    </p>
                                    <p className='texto'>
                                        Android Studio y SDK
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} transform="right-5" />
                                    </p>
                                    <p className='texto'>
                                        Proyecto de código abierto de Android
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} transform="right-5" />
                                    </p>
                                </div>
                                <div className="col">
                                    <h5 className='text-nav-top2'>
                                        PARA EMPRESAS
                                        <hr />
                                    </h5>
                                    <p className=''>
                                        Descripción general de Enterprise
                                    </p>
                                    <p className=''>
                                        Administración
                                    </p>
                                    <p className=''>
                                        Seguridad
                                    </p>
                                    <p className=''>
                                        Inscripción
                                    </p>
                                    <p>
                                        Empleados
                                    </p>
                                    <p>
                                        Recomendado
                                    </p>
                                    <p>
                                        Dispositivos de Enterprise
                                    </p>
                                    <p>
                                        Recursos
                                    </p>
                                    <p>
                                        Para socios
                                    </p>
                                    <p>
                                        Directorio de soluciones
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} transform="right-3" />
                                    </p>
                                </div>
                                <div className="col">
                                    <h5 className='text-nav-top2'>
                                        PARA LA PRENSA
                                        <hr />
                                    </h5>
                                    <p>
                                        Blog de Android
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} transform="right-3" />
                                    </p>
                                    <p>
                                        Blog de Enterprise
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} transform="right-3" />
                                    </p>
                                    <p>
                                        Sección de prensa
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} transform="right-3" />

                                    </p>
                                    <p>
                                        Android es para todo el mundo
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} transform="right-3" />

                                    </p>
                                    <p>
                                        Comunicarse con el equipo de prensa
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} transform="right-3" />
                                    </p>
                                    <p>
                                        Cómo funciona Google Play
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} transform="right-3" />

                                    </p>
                                </div>
                                <div className="col">
                                    <h5 className='text-nav-top2'>
                                        EL ECOSISTEMA
                                        <hr />
                                    </h5>
                                    <p>
                                        Android Auto
                                    </p>
                                    <p>
                                        Android TV
                                    </p>
                                    <p>
                                        Wear OS by Google
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} transform="right-3" />
                                    </p>
                                </div>
                                <div className="col">
                                    <h5 className='text-nav-top2'>
                                        ASISTENCIA
                                        <hr />
                                    </h5>
                                    <p>
                                        Cambiar desde iOS
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} transform="right-3" />
                                    </p>
                                    <p>
                                        Centro de ayuda de Android
                                    </p>
                                    <p>
                                        Android File Transfer
                                    </p>
                                    <p>
                                        Encontrar mi dispositivo
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} transform="right-3" />
                                    </p>
                                    <p>
                                        Unirse a estudios de usuarios
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} transform="right-3" />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className='texto text-nav-top' />
                    <div className="row justify-content-start mt-5">
                        <div className="col-3">
                            <div className="row">
                                <div className="col">
                                    <p className='texto tex1'>
                                        Política de Privacidad
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} transform="right-5" />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="row">
                                <p className='texto tex1 mx-1'>
                                    <FontAwesomeIcon icon={faGlobe} transform="left-5" />
                                    Español (México)
                                </p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="row">
                                <p className='texto tex1 mx-1 text-end'>
                                    <FontAwesomeIcon icon={faTwitter} transform="left-40" size="xl" />
                                    <FontAwesomeIcon icon={faInstagram} transform="left-30" size="xl" />
                                    <FontAwesomeIcon icon={faYoutube} transform="left-20" size="xl" />
                                    <FontAwesomeIcon icon={faFacebook} transform="left-10" size="xl" />
                                    <FontAwesomeIcon icon={faLinkedin} transform="rigth-5" size="xl" />
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p className='texto text-small'>
                                    Es posible que algunas funciones y ciertos dispositivos
                                    no estén disponibles en todos los países o estén sujetos a disponibilidad.
                                </p>
                                <p className='texto text-small'>
                                    Algunas funciones y la disponibilidad varían según el fabricante del
                                    equipo original (OEM) o el fabricante del dispositivo.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout >
        </>
    )
}
