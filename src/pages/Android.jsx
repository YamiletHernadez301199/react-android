import { MainLayout } from "../layaouts/MainLayout"
import '../components/style/_android.scss'
import '../components/style/_logo.scss'
import { useEffect, useState } from "react";
export const Android = () => {
    
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

                                    <div className={`col special ${applyCustomStyles ? 'custom-styles' : ''}`} style={{ background:gradientColor , gridRow: 2  }}>
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
                    </div>
                </MainLayout>
        </>
    )
}
