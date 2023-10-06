import { MainLayout } from "../layaouts/MainLayout"
import '../components/style/_android13.scss'
import '../components/style/_logo.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowLeft, faArrowRight, faArrowUpRightFromSquare, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
export const Android13 = () => {
    return (
        <>
            <MainLayout>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col-md-5 parrafotext">
                                    <h5 className="fw-bolder mt-5">Android 13</h5>
                                    <h1 className="fw-bolder subtitulo2">
                                        Tu teléfono, tablet y mucho más: todo a tu manera.
                                    </h1>
                                </div>
                                <div className="col-md-6">
                                    <div className="video-style">
                                        <video width="100%" height="100%" autoPlay muted>
                                            <source src="../assets/img/Video1.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col parrafotext">
                                    <h1 className="fw-bolder top">
                                        Contenido destacado de Android 13
                                    </h1>
                                </div>
                                <div className="col-md-6">
                                    <img src={`../assets/img/img28.png`} className="img28" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col">
                            <div className="row color-columa">
                                <div className="col-md-5 parrafotext">
                                    <h5 className="fw-bolder mt-5">Personal</h5>
                                    <h1 className="fw-bolder subtitulo2">
                                        Hecho a tu medida y solo para ti.
                                    </h1>
                                </div>
                                <div className="col-md-5">
                                    <h1 className="texto-parrafo3">
                                        Haz que tu Android se vea y se sienta tal y como quieres. Gracias a la tecnología de
                                        Material You, ahora puedes personalizar las apps con colores, temas o idiomas. Incluso
                                        el reproductor multimedia se adaptará a tus gustos musicales.
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col-md-5 parrafotext2">
                                    <h5 className="fw-bolder mt-5">Temas para íconos de apps</h5>
                                    <h1 className="fw-bolder subtitulo3">
                                        Tu teléfono. Tu estilo.
                                    </h1>
                                </div>
                                <div className="col-md-5">
                                    <h1 className="texto-parrafo3">
                                        Personaliza tu teléfono con tu proprio estilo. Expandimos los temas para íconos de apps
                                        a fin de que puedas configurar más apps (no solo las de Google)
                                        y hacer que coincidan con los tonos y colores de tu fondo de pantalla.1
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col mt-5">
                            <div className="slide-show-animation mt-5">
                                <div className="pading">
                                    .
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col-md-4 parrafotext3">
                                    <h5 className="fw-bolder">Nuevos controles de contenido multimedia</h5>
                                    <h1 className="fw-bolder subtitulo2">
                                        Tu música nunca lució tan bien.
                                    </h1>
                                    <h5 className="texto-parrafo4">
                                        Android 13 incluye un nuevo reproductor multimedia, en el que se muestran las portadas de los álbumes en
                                        mayor tamaño junto con una barra de
                                        reproducción que se mueve al ritmo de la música.2
                                    </h5>
                                </div>
                                <div className="col-md-6">
                                    <div className="video-style2">
                                        <video width="100%" height="100%" autoPlay muted>
                                            <source src="../assets/img/Video2.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row style-columna">
                        <div className="col">
                            <div className="row row-invertir">
                                <div className="col">
                                    <img src={`../assets/img/img32.png`} className="img32" alt="" />
                                </div>
                                <div className="col-md-4 parrafotext6">
                                    <h5 className="fw-bolder mt-5">Preferencias de idioma de las apps</h5>
                                    <h1 className="fw-bolder subtitulo2">
                                        Usa siempre el idioma correcto.
                                    </h1>
                                    <h1 className="texto-parrafo4">
                                        Configura idiomas diferentes para cada app. Así, podrás
                                        usar distintos idiomas con fluidez en tu dispositivo, tal
                                        como en la vida real.3
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row color-columa">
                        <div className="col">
                            <div className="row">
                                <div className="col-md-5 parrafotext6">
                                    <h5 className="fw-bolder mt-5">Privacidad</h5>
                                    <h1 className="fw-bolder subtitulo2">
                                        Seguridad que mantiene tus datos protegidos todo el día.
                                    </h1>
                                </div>
                                <div className="col-md-5">
                                    <h1 className="texto-parrafo3">
                                        Desde el momento en que enciendes tu dispositivo,
                                        Android trabaja para proteger tus datos. Con Android 13,
                                        tienes más control sobre la información a la que pueden
                                        o no acceder las apps, lo que incluye fotos y videos específicos
                                        y el historial del portapapeles.
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="row mt-5">
                                <div className="col-md-3  parrafotext6">
                                    <h5 className="fw-bolder mt-5">Selector de fotos</h5>
                                    <h1 className="fw-bolder subtitulo2">
                                        Tú eres quien manda.
                                    </h1>
                                    <h5 className="mt-5">
                                        Android 13 ayuda a mantener tu contenido privado. Comparte solo las fotos
                                        y los videos que elijas con ciertas apps, y no toda tu biblioteca.4
                                    </h5>
                                </div>
                                <div className="col-md-7">
                                    <div className="video-style3">
                                        <video width="100%" height="100%" autoPlay muted>
                                            <source src="../assets/img/Video3.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col mt-5">
                            <div className="row row-invertir2">
                                <div className="col">
                                    <img src={`../assets/img/img34.png`} className="img34" alt="" />
                                </div>
                                <div className="col-md-4 parrafotext7">
                                    <h5 className="fw-bolder mt-5">Permisos de notificaciones</h5>
                                    <h1 className="fw-bolder subtitulo2">
                                        No más notifica­ciones molestas.
                                    </h1>
                                    <h1 className="texto-parrafo4">
                                        Ahora tienes el control de las apps que pueden enviarte
                                        notificaciones, limitando las distracciones.
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="row mt-5">
                                <div className="col-md-3  parrafotext6">
                                    <h5 className="fw-bolder mt-5">Eliminación del historial del portapapeles</h5>
                                    <h1 className="fw-bolder subtitulo2">
                                        Protección proactiva.
                                    </h1>
                                    <h5 className="mt-5">
                                        Android 13 cuenta con protecciones incorporadas para ayudarte a proteger tus datos
                                        personales. A fin de proteger la información del portapapeles, recibirás una alerta
                                        cuando una app acceda a él, y el historial del portapapeles
                                        se borrará después de un tiempo para impedir el acceso no deseado.
                                    </h5>
                                </div>
                                <div className="col-md-7">
                                    <div className="video-style3">
                                        <video width="100%" height="100%" autoPlay muted>
                                            <source src="../assets/img/Video4.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h1 className="fw-bolder parrafotext8 flex-container">
                                <span className='word no-wrap word-split'>Descubre cómo Android </span>
                                <span className='word no-wrap word-split'>te ayuda a protegerte.</span>
                            </h1>
                            <div className="d-grid gap-2 d-md-block">
                                <button type="button" className="rounded-pill button-stayles">
                                    <div className='text mx-5 my-2'>
                                        Más información sobre la seguridad
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="row  color-columa2">
                        <div className="col">
                            <div className="row">
                                <div className="col-md-5 parrafotext6">
                                    <h5 className="fw-bolder mt-5">Más allá del teléfono.</h5>
                                    <h1 className="fw-bolder subtitulo2">
                                        Dispositivos que funcionan mejor en conjunto.
                                    </h1>
                                </div>
                                <div className="col-md-5">
                                    <h1 className="texto-parrafo3">
                                        Android 13 no es solo para teléfonos, ya que integra de
                                        forma fluida todos los dispositivos de tu día a día,
                                        con funciones que mejoran la experiencia de enviar
                                        mensajes, disfrutar audio y realizar varias tareas a la
                                        vez.
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="row row-invertir3">
                                <div className="col-md-6">
                                    <div className="video-style4">
                                        <video width="100%" height="100%" autoPlay muted>
                                            <source src="../assets/img/Video5.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                                <div className="col-md-4 parrafotext9">
                                    <h5 className="fw-bolder">Transmisión de apps de mensajería</h5>
                                    <h1 className="fw-bolder subtitulo2">
                                        Chatea en todas partes.
                                    </h1>
                                    <h5 className="texto-parrafo4">
                                        Tus apps de mensajería se transmiten directamente a la Chromebook para que puedas enviar
                                        y recibir mensajes incluso cuando no tengas a la mano el teléfono.
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="row mt-5">
                                <div className="col-md-3  parrafotext10">
                                    <h5 className="fw-bolder mt-5">Copia y pega entre dispositivos</h5>
                                    <h1 className="fw-bolder subtitulo2">
                                        Transferen­cias sin interrup­ciones.
                                    </h1>
                                    <h5 className="mt-5">
                                        Realiza tus tareas en el dispositivo que prefieras.
                                        Solo tienes que copiar contenido, como una URL, un texto o una foto,
                                        desde tu celular y pegarlo en tu tablet o viceversa, de la tablet al celular.
                                        Próximamente en dispositivos con Android 13.
                                    </h5>
                                </div>
                                <div className="col-md-7">
                                    <div className="video-style3">
                                        <video width="100%" height="100%" autoPlay muted>
                                            <source src="../assets/img/Video6.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="row row-invertir3 mt-5">
                                <div className="col-md-6">
                                    <div className="video-style4">
                                        <video width="100%" height="100%" autoPlay muted>
                                            <source src="../assets/img/Video7.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                                <div className="col-md-4 parrafotext10">
                                    <h5 className="fw-bolder">Audio mejorado</h5>
                                    <h1 className="fw-bolder subtitulo2">
                                        Disfruta del audio mejorado.
                                    </h1>
                                    <h5 className="texto-parrafo4">
                                        La función de Audio espacial te permite disfrutar un sonido más inmersivo.
                                        En auriculares con seguimiento de cabeza, el Audio espacial cambia la fuente
                                        de sonido según cómo muevas la cabeza, lo que te hará sentir que estás
                                        dentro de un juego de deportes, una película o un concierto desde tu teléfono
                                        o tablet Android. Además, Android 13 usa audio Bluetooth de bajo consumo (LE) que mejora
                                        la calidad del sonido y te permite transmitir contenido multimedia a varias personas a la
                                        vez.
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="row mt-5">
                                <div className="col-md-4  parrafotext10">
                                    <h5 className="fw-bolder mt-5">Varias tareas a la vez en tablets</h5>
                                    <h1 className="fw-bolder subtitulo2">
                                        Mayor y mejor product­ividad.
                                    </h1>
                                    <h5 className="mt-5">
                                        La barra de tareas actualizada en las tablets te ayuda a realizar dos tareas
                                        a la vez. Ahora puedes arrastrar y soltar otra app de la biblioteca a una
                                        vista de pantalla dividida directamente desde la barra de tareas. Y, cuando
                                        estés escribiendo o dibujando con una pluma stylus, la tablet registrará tu
                                        palma y la pluma como toques separados, lo que disminuirá la cantidad de
                                        marcas accidentales que ocurren solo por posar la mano sobre la pantalla..
                                    </h5>
                                </div>
                                <div className="col-md-6">
                                    <div className="video-style8">
                                        <video width="100%" height="100%" autoPlay muted>
                                            <source src="../assets/img/Video8.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h1 className="fw-bolder parrafotext8 flex-container">
                                <span className='word no-wrap word-split'>Descubre cómo</span>
                                <span className='word no-wrap word-split'>Android te ayuda a</span>
                                <span className='word no-wrap word-split'>protegerte.</span>
                            </h1>
                            <div className="d-grid gap-2 d-md-block">
                                <button type="button" className="rounded-pill button-stayles">
                                    <div className='text mx-5 my-2'>
                                        Más información sobre la seguridad
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col mt-5">
                            <img src={`../assets/img/img35.png`} className="img35" alt="" />
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
            </MainLayout>
        </>
    )
}

