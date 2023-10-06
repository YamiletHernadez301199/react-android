import { MainLayout } from "../layaouts/MainLayout"
import '../components/style/_telefono.scss'
import '../components/style/_logo.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowLeft, faArrowRight, faArrowUpRightFromSquare, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
export const Telefono = () => {
    return (
        <>
            <div className="primer-color">
                <MainLayout>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col">
                                <div className="row">
                                    <div className="col-md-5">
                                        <h1 className="fw-bolder textouno">
                                            Teléfonos y tablets
                                        </h1>
                                        <h5 className="fw-bolder subtitulo-texto2 flex-container">
                                            <span className='word no-wrap word-split'>Si lo quieres,</span>
                                            <span className='word no-wrap word-split'>Android</span>
                                            <span className='word no-wrap word-split'>lo tiene.</span>
                                        </h5>
                                    </div>
                                    <div className="col contenedor">
                                        <img src={`../assets/img/img36.png`} className="img36" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </MainLayout>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="row segundo-color">
                            <div className="col-md-6">
                                <h5 className="fw-bolder textotres mt-5">Lo mejor y más reciente</h5>
                                <h1 className="fw-bolder subtitulo-texto3">
                                    Los primeros teléfonos 5G del mundo.
                                </h1>
                            </div>
                            <div className="col-md-5">
                                <h1 className="subtitulo-texto4">
                                    Descarga una película en 4K en un abrir y cerrar de ojos. Únete a una videollamada grupal
                                    sin miedo a que la imagen se congele. Convierte la sala de estar en un apocalipsis de zombis de RA.
                                    Los teléfonos evolucionan con la red 5G, y Android es el único sistema que la integra.
                                </h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col tercer-color">
                                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="row">
                                                <div className="col">
                                                    <img src={`../assets/img/img37.png`} class="imagenes" alt="..." />
                                                    <p className="fw-bolder texto-slider flex-container">
                                                        <span className='word no-wrap word-split'>Samsung</span>
                                                        <span className='word no-wrap word-split'>Galaxy S21 FE</span>
                                                        <span className='word no-wrap word-split'>5G</span>
                                                    </p>
                                                </div>
                                                <div className="col">
                                                    <img src={`../assets/img/img38.png`} class="imagenes" alt="..." />
                                                    <p className="fw-bolder texto-slider flex-container">
                                                        <span className='word no-wrap word-split'>Samsung</span>
                                                        <span className='word no-wrap word-split'>Galaxy S21 5G</span>
                                                    </p>
                                                </div>
                                                <div className="col">
                                                    <img src={`../assets/img/img39.png`} class="imagenes" alt="..." />
                                                    <p className="fw-bolder texto-slider flex-container">
                                                        <span className='word no-wrap word-split'>Samsung</span>
                                                        <span className='word no-wrap word-split'>Galaxy Note</span>
                                                        <span className='word no-wrap word-split'>20</span>
                                                    </p>
                                                </div>
                                                <div className="col">
                                                    <img src={`../assets/img/img40.png`} class="imagenes" alt="..." />
                                                    <p className="fw-bolder texto-slider flex-container">
                                                        <span className='word no-wrap word-split'>OPPO</span>
                                                        <span className='word no-wrap word-split'>Find X3 Pro</span>
                                                    </p>
                                                </div>
                                                <div className="col">
                                                    <img src={`../assets/img/img41.png`} class="imagenes" alt="..." />
                                                    <p className="fw-bolder texto-slider flex-container">
                                                        <span className='word no-wrap word-split'>OPPO</span>
                                                        <span className='word no-wrap word-split'>Reno6 Pro 5G</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="row">
                                                <div className="col">
                                                    <img src={`../assets/img/img42.png`} class="imagenes" alt="..." />
                                                    <p className="fw-bolder texto-slider flex-container">
                                                        <span className='word no-wrap word-split'>OPPO</span>
                                                        <span className='word no-wrap word-split'>RENO6 5G</span>
                                                    </p>
                                                </div>
                                                <div className="col">
                                                    <img src={`../assets/img/img43.png`} class="imagenes" alt="..." />
                                                    <p className="fw-bolder texto-slider flex-container">
                                                        <span className='word no-wrap word-split'>Xiaomi</span>
                                                        <span className='word no-wrap word-split'>11T Pro</span>
                                                    </p>
                                                </div>
                                                <div className="col">
                                                    <img src={`../assets/img/img44.png`} class="imagenes" alt="..." />
                                                    <p className="fw-bolder texto-slider flex-container">
                                                        <span className='word no-wrap word-split'>Xiaomi</span>
                                                        <span className='word no-wrap word-split'>Mi 11</span>
                                                    </p>
                                                </div>
                                                <div className="col">
                                                    <img src={`../assets/img/img45.png`} class="imagenes" alt="..." />
                                                    <p className="fw-bolder texto-slider flex-container">
                                                        <span className='word no-wrap word-split'>Motorola</span>
                                                        <span className='word no-wrap word-split'>2021 Edge</span>
                                                    </p>
                                                </div>
                                                <div className="col">
                                                    <img src={`../assets/img/img46.png`} class="imagenes" alt="..." />
                                                    <p className="fw-bolder texto-slider flex-container">
                                                        <span className='word no-wrap word-split'>Nokia</span>
                                                        <span className='word no-wrap word-split'>X20</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-6">
                                <h5 className="fw-bolder textocuatro mt-5">Teléfonos plegables</h5>
                                <h1 className="fw-bolder subtitulo-texto5">
                                    Dispositivos multitarea
                                </h1>
                            </div>
                            <div className="col-md-5">
                                <h1 className="subtitulo-texto6">
                                    Descarga una película en 4K en un abrir y cerrar de ojos. Únete a una videollamada grupal
                                    sin miedo a que la imagen se congele. Convierte la sala de estar en un apocalipsis de zombis de RA.
                                    Los teléfonos evolucionan con la red 5G, y Android es el único sistema que la integra.
                                </h1>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col">
                                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <img src={`../assets/img/img48.png`} class="imagenes2" alt="..." />
                                                    <p className="fw-bolder texto-slider2 flex-container">
                                                        <span className='word no-wrap word-split'>Microsoft</span>
                                                        <span className='word no-wrap word-split'>Surface Duo</span>
                                                    </p>
                                                </div>
                                                <div className="col-md-3">
                                                    <img src={`../assets/img/img47.png`} class="imagenes" alt="..." />
                                                    <p className="fw-bolder texto-slider flex-container">
                                                        <span className='word no-wrap word-split'>Samsung</span>
                                                        <span className='word no-wrap word-split'>Galaxy Z Fold3</span>
                                                        <span className='word no-wrap word-split'>5G</span>
                                                    </p>
                                                </div>
                                                <div className="col-md-3">
                                                    <img src={`../assets/img/img49.png`} class="imagenes" alt="..." />
                                                    <p className="fw-bolder texto-slider flex-container">
                                                        <span className='word no-wrap word-split'>Samsung</span>
                                                        <span className='word no-wrap word-split'>Galaxy Z Flip3</span>
                                                        <span className='word no-wrap word-split'>5g</span>
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-6">
                                <h5 className="fw-bolder textocinco mt-5">Selecciones populares</h5>
                                <h1 className="fw-bolder subtitulo-texto5">
                                    Cámaras que capturan cualquier imagen.
                                </h1>
                            </div>
                            <div className="col-md-5">
                                <h1 className="subtitulo-texto7">
                                    La tecnología de Android se incluye en algunas de las mejores cámaras del mundo.
                                    Por eso, aunque la acción se acelere o las luces disminuyan, la toma siempre será
                                    perfecta.
                                </h1>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col">
                                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <img src={`../assets/img/img50.png`} class="imagenes3" alt="..." />
                                                    <p className="fw-bolder texto-slider3 flex-container">
                                                        <span className='word no-wrap word-split'>Samsung</span>
                                                        <span className='word no-wrap word-split'>Galaxy S21</span>
                                                        <span className='word no-wrap word-split'>Ultra 5G</span>
                                                    </p>
                                                </div>
                                                <div className="col-md-6">
                                                    <img src={`../assets/img/img51.png`} class="imagenes4" alt="..." />
                                                    <p className="fw-bolder texto-slider4 flex-container">
                                                        <span className='word no-wrap word-split'>Vivo</span>
                                                        <span className='word no-wrap word-split'>V20</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-6">
                                <h5 className="fw-bolder textocinco mt-5">Tablets destacadas</h5>
                                <h1 className="fw-bolder subtitulo-texto5">
                                    A veces, necesitas una pantalla más grande.
                                </h1>
                            </div>
                            <div className="col-md-5">
                                <h1 className="subtitulo-texto7">
                                    Mira espectáculos como si estuvieras allí. Edita imágenes píxel por píxel.
                                    Con las tablets Android, tienes el tamaño de pantalla para hacer lo que quieras.
                                </h1>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col">
                                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <img src={`../assets/img/img54.png`} class="imagenes5" alt="..." />
                                                    <p className="fw-bolder texto-slider5 flex-container">
                                                        <span className='word no-wrap word-split'>Samsung</span>
                                                        <span className='word no-wrap word-split'>Galaxy Tab S7</span>
                                                    </p>
                                                </div>
                                                <div className="col-md-4">
                                                    <img src={`../assets/img/img52.png`} class="imagenes5" alt="..." />
                                                    <p className="fw-bolder texto-slider5 flex-container">
                                                        <span className='word no-wrap word-split'>Lenovo</span>
                                                        <span className='word no-wrap word-split'>Tab M10 HD</span>
                                                        <span className='word no-wrap word-split'>(2nd Gen)</span>
                                                        <span className='word no-wrap word-split'>Tablet</span>
                                                    </p>
                                                </div>
                                                <div className="col-md-4">
                                                    <img src={`../assets/img/img53.png`} class="imagenes5" alt="..." />
                                                    <p className="fw-bolder texto-slider5 flex-container">
                                                        <span className='word no-wrap word-split'>Lenovo</span>
                                                        <span className='word no-wrap word-split'>Yoga Smart Tab</span>
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-6">
                                <h5 className="fw-bolder textocinco mt-5">Android (edición Go)</h5>
                                <h1 className="fw-bolder subtitulo-texto5">
                                    Menos RAM, pero igual de poderoso.
                                </h1>
                            </div>
                            <div className="col-md-5">
                                <h1 className="subtitulo-texto8">
                                    Obtén lo mejor de Android en smartphones con menos de 2 GB de RAM.
                                    Las apps con un nuevo diseño, como Google Go y Cámara, ocupan menos espacio y
                                    se inician más rápido. Files te ayuda a compartir contenido sin usar datos.
                                    Además, Google Play recibe apps nuevas con regularidad, diseñadas exclusivamente
                                    para Android Go.
                                </h1>
                                <p>
                                    <br />
                                    <button type="button" className="btn btn-outline-success rounded-pill button-stayle4 py-3 px-5  mt-4"><div className='tex'>Más información</div></button>
                                </p>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col">
                                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <img src={`../assets/img/img55.png`} class="imagenes3" alt="..." />
                                                    <p className="fw-bolder texto-slider3 flex-container">
                                                        <span className='word no-wrap word-split'>Nokia</span>
                                                        <span className='word no-wrap word-split'>1.3</span>
                                                    </p>
                                                </div>
                                                <div className="col-md-6">
                                                    <img src={`../assets/img/img56.png`} class="imagenes4" alt="..." />
                                                    <p className="fw-bolder texto-slider4 flex-container">
                                                        <span className='word no-wrap word-split'>Tecno</span>
                                                        <span className='word no-wrap word-split'>Spark 8</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-8">
                                <h5 className="fw-bolder textocinco mt-5">Marcas destacadas</h5>
                                <h1 className="fw-bolder subtitulo-texto5">
                                    Elige la que más te gusta.
                                    Todas funcionan con Android.
                                </h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <img src={`../assets/img/img57.png`} className="imagenes7" alt="" />
                                <img src={`../assets/img/img58.png`} className="imagenes6" alt="" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <img src={`../assets/img/img59.png`} className="imagenes7" alt="" />
                                <img src={`../assets/img/img60.png`} className="imagenes8" alt="" />
                            </div>
                        </div>
                        <div className="row segundo-color">
                            <div className="col-md-6">
                                <h5 className="fw-bolder textotres mt-5">Comenzar</h5>
                                <h1 className="fw-bolder subtitulo-texto3">
                                    ¿Todo listo para hacer el cambio?
                                </h1>
                                <h1 className="subtitulo-texto9">
                                    En solo tres pasos, podrás transferir tus contactos,
                                    mensajes, fotos, videos y más desde tu iPhone a tu nuevo
                                    Android.
                                </h1>
                                <p>
                                    <button type="button" className="rounded-pill button-stayle5"><div className='text mx-5 my-3'>Cambiar ahora</div></button>
                                </p>
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
                </div>
            </div>
        </>
    )
}


