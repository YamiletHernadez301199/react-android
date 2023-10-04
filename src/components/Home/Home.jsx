import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import '../style/_text.scss'

export const Home = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);

    const handleMouseMove = (e) => {
        const windowHeight = window.innerHeight;
        const mouseY = windowHeight - e.clientY; // Invertir el valor del mouseY
        const percent = (mouseY / windowHeight) * 100;
        document.documentElement.style.setProperty('--scroll-percent', `${percent}%`);
        setIsScrolling(true);
    };

    const handleMouseLeave = () => {
        setIsScrolling(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const parallaxStyle = {
        transform: `translateY(${scrollY * 0}px)`, // Ajusta la velocidad del parallax según tus preferencias
        marginTop: `${scrollY * -0}px`, // Ajusta el valor según tus preferencias
    };
    const carouselRef = useRef(null);
    const [progress, setProgress] = useState(0);

    const handleNext = () => {
        if (carouselRef.current) {
            const nextIndex = carouselRef.current.getActiveIndex() + 1;
            carouselRef.current.select(nextIndex);
            updateProgress(nextIndex);
        }
    };
    const handlePrev = () => {
        if (carouselRef.current) {
            const prevIndex = carouselRef.current.getActiveIndex() - 1;
            carouselRef.current.select(prevIndex);
            updateProgress(prevIndex);
        }
    };

    const updateProgress = (index) => {
        // Calcula el progreso en base al índice de la diapositiva actual
        const totalSlides = carouselRef.current && carouselRef.current.props.children.length;
        if (totalSlides) {
            const newProgress = (index / (totalSlides - 10)) * 100;
            setProgress(newProgress);
        }
    };

    return (
        <>
            <div className={`image-scroll-container ${isScrolling ? 'scrolling' : ''}`}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ marginRight: '0' }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5" >
                            <div className='text-sm-start text-android flex-container'>
                                <span className='word no-wrap word-split'>Te</span>
                                <span className='word no-wrap word-split'>presentamos</span>
                                <span className='word no-wrap word-split'>Android 13</span>
                            </div>
                            <div className='text-android2 mt-5'>
                                Disfruta de dispositivos más personalizados, privados y conectados que nunca.
                            </div>
                            <p>
                                <button type="button" className="rounded-pill button-stayle"><div className='text mx-5 my-3'>Explorar Android 13</div></button>
                            </p>
                        </div>
                        <div className="col-md-7">
                            <img src="../assets/img/cap.png" className='cap img-fluid' alt="Imagen cap" />
                        </div>
                    </div>
                    <div className="row  mt-5">
                        <div className="col mt-3">
                            <div className="row mt-5">
                                <div className="col-md-7">
                                    <img src="../assets/img/img4.png" className='img4 img-fluid' alt="Imagen 4" />
                                    <p>
                                        <h1 className='texto mt-5 fw-bolder'>
                                            Protege tus datos y elige qué compartir.
                                        </h1>
                                    </p>
                                    <p className='texto mt-5'>
                                        El servicio de Google Play Protect te brinda actualizaciones de seguridad periódicas
                                        y control sobre el modo en el que se comparten tus datos. Trabajamos para proteger
                                        los más de 2,500 millones de dispositivos activos que usan Android todos los días y
                                        para mantener la privacidad de la información.
                                    </p>
                                    <p>
                                        <button type="button" className="btn btn-outline-success rounded-pill button-stayle2 py-3 px-5 texto mt-3"><div className='tex'>Más información</div></button>
                                    </p>
                                </div>
                                <div className="col-md-5">
                                    <img src="../assets/img/img5.png" className='img5 img-fluid' alt="Imagen 5" />
                                    <p>
                                        <h1 className='texto mt-5 fw-bolder'>
                                            Un mundo más accesible.
                                        </h1>
                                    </p>
                                    <p className='texto mt-5'>
                                        Lectores de pantalla, voz a texto y algunos de los métodos más recientes para que
                                        experimentes el mundo a tu manera.
                                    </p>
                                    <p>
                                        <br />
                                        <button type="button" className="btn btn-outline-success rounded-pill button-stayle2 py-3 px-5 texto mt-4"><div className='tex'>Más información</div></button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col">
                            <div className="row mt-5">
                                <div className="col-md-6">
                                    <p className='text-sm-start text-android3 flex-container'>
                                        <span className='word no-wrap word-split'>Todo tipo de</span>
                                        <span className='word no-wrap word-split'>dispositivos para</span>
                                        <span className='word no-wrap word-split'>todo el mundo.</span>
                                    </p>
                                </div>
                                <div className="col-md-3 texto3">
                                    <p className='text-justify'>
                                        Tienes opciones para trabajar, jugar videojuegos, transmitir contenido con 5G
                                        y mucho más. Hay más de 24,000 teléfonos y tablets que ejecutan Android.
                                        No importa lo que busques, siempre habrá algo para ti.
                                    </p>
                                    <p>
                                        <button type="button" className="btn btn-outline-success rounded-pill button-stayle2 py-3 px-4 mt-4"><div className='tex'>Ver todo</div></button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col mt-5">
                            <div className="image-scroll">
                                <div className="parallax-container">
                                    <img src="../assets/img/img6.png" className='img-fluid parallax-image' alt="Imagen deslizante" style={parallaxStyle} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col-md-6">
                                    <img src="../assets/img/img7.png" className='img7 img-fluid' alt="" />
                                    <p className='fw-bolder text-aling flex-container2'>
                                        <h1 className='texto mt-4 tex'>
                                            Descubre Android Go
                                        </h1>
                                    </p>
                                    <p className='texto mt-5'>
                                        Disfruta de una experiencia increíble para smartphones básicos,
                                        diseñada con novedosas apps que superan los límites de lo posible.
                                    </p>
                                    <p>
                                        <button type="button" className="btn btn-outline-success texto rounded-pill button-stayle2 py-3 px-5 mt-5"><div className='tex'>Más información</div></button>
                                    </p>
                                </div>
                                <div className="col-md-6">
                                    <img src="../assets/img/img8.png" className='img8 img-fluid' alt="" />
                                    <p className='fw-bolder text-aling flex-container2'>
                                        <h1 className='texto mt-4 tex'>
                                            Conduce con Android Auto
                                        </h1>
                                    </p>
                                    <p className='texto mt-5'>
                                        Navega y envía mensajes con el modo manos libres. Solo conecta el teléfono
                                        y ponte en marcha.
                                    </p>
                                    <p>
                                        <button type="button" className="btn btn-outline-success texto rounded-pill button-stayle2 py-3 px-5 mt-5"><div className='tex'>Más información</div></button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <img src="../assets/img/img10.png" className='img10 img-fluid' alt="" />
                                    <p className='fw-bolder text-aling flex-container2'>
                                        <h1 className='texto mt-4 tex'>
                                            Android para desarrolladores
                                        </h1>
                                    </p>
                                    <p className='texto mt-5'>
                                        Encuentra la documentación más reciente, los instructivos de CodeLab y
                                        las versiones preliminares.
                                    </p>
                                    <p>
                                        <button type="button" className="btn btn-outline-success texto rounded-pill button-stayle2 py-3 px-5 mt-5 texto"><div className='tex'>Más información</div></button>
                                    </p>
                                </div>
                                <div className="col">
                                    <img src="../assets/img/img9.png" className='img9 img-fluid' alt="" />
                                    <p className='fw-bolder text-aling flex-container2'>
                                        <h1 className='texto mt-4 tex'>
                                            Android para empresas
                                        </h1>
                                    </p>
                                    <p className='texto mt-5'>
                                        Navega en dispositivos recomendados, explora los recursos
                                        y consulta los informes más recientes.
                                    </p>
                                    <p>
                                        <button type="button" className="btn btn-outline-success texto rounded-pill button-stayle2 py-3 px-5 mt-5 texto"><div className='tex'>Más información</div></button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col mt-5">
                            <div className="row mt-5">
                                <div className="col-md-6">
                                        <h1 className='tex size'>
                                            Lee las últimas noticias
                                        </h1>
                                </div>
                                <div className="col-md-6 mt-5">
                                    <p className='texto mt-5 tex text-justify'>
                                        Las actualizaciones más recientes del SO, los anuncios más importantes y las últimas noticias
                                        sobre la plataforma. Aquí encontrarás todas las novedades sobre el universo de Android.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col mt-5">
                            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-interval="false">
                                <div className="carousel-inner " ref={carouselRef} style={{ background: 'rgba(169, 169, 169, 0.2)' }}>
                                    <div className="carousel-item active">
                                        <div className="d-flex">
                                            <div className="card carousel-card shadow-lg border-0" style={{ width: "37%", height: "27rem", position: "relative", left: "5%" }}>
                                                <div className="card-body shadow-lg">
                                                    <h5 className="card-title tex size2 mt-4 text-justify mx-3">Nuevas maneras de explorar en Android Go</h5>
                                                    <h5 className='text-top mx-3'>Leer el artículo completo <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></h5>
                                                </div>
                                            </div>
                                            <div className="card carousel-card shadow-lg border-0" style={{ width: "37%", height: "27rem", left: "7%" }}>
                                                <div className="card-body shadow-lg">
                                                    <h5 className="card-title tex size2 mt-2 text-justify mx-3">
                                                        Protección avanzada para quienes más la necesitan
                                                        Leer el artículo completo
                                                    </h5>
                                                    <h5 className='text-top2 mx-3'>Leer el artículo completo <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Otras diapositivas */}
                                    <div className="carousel-item active">
                                        <div className="d-flex">
                                            <div className="card carousel-card shadow-lg border-0" style={{ width: "37%", height: "27rem", position: "absolute", top: 0, left: "84%" }}>
                                                <div className="card-body shadow-lg">
                                                    <h5 className="card-title tex size2 mt-2 text-justify mx-3">
                                                        10 cosas que debes saber acerca de Android 10.
                                                        Leer el artículo completo
                                                    </h5>
                                                    <h5 className='text-top2 mx-3'>Leer el artículo completo <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress bg-secondari mt-5" style={{ height: "5px" }}>
                                    <div className="progress-bar"
                                        role="progress bar"
                                        style={{ width: "75%", backgroundColor: 'black' }}
                                        aria-valuenow={progress}
                                        aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-2 border-0">
                                <button className="carousel-progress" type="button" aria-label="Ir a la diapositiva anterior" onClick={handlePrev} disabled={progress === 0}>
                                    <FontAwesomeIcon icon={faArrowLeft} />
                                </button>
                                <button className="carousel-progress__next" type="button" aria-label="Ir a la diapositiva siguiente" onClick={handleNext} disabled={progress === 100}>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                            </div>
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
        </>
    )
}
