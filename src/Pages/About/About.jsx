import { Card } from "../../Components";
import logo from "../../Assets/descargar.png";
import iso9001 from "../../Assets/iso9001.png";
import iso26000 from "../../Assets/iso26000.png";
import camaraComercio from "../../Assets/camara.webp";
import dian from "../../Assets/dian.png";

import "./About.css";

export function About() {
    return (
        <main className="lzdla__about">
            <section className="lzdla__about-section_title">
                <div>
                    <h1>Los Tejidos De La Abuela</h1>
                    <p>"Tejiendo moda, tejiendo un mundo mejor."</p>
                </div>
                <img src={logo} alt="logo" />
            </section>

            <section className="lzdla__about-information">
                <Card
                    title="¿Quiénes somos?"
                    description="Nosotros somos una familia apasionada y creativa que
                        cree en el poder de la artesanía para cambiar el mundo,
                        somos más que una marca de zapatos; Somos una promesa de
                        un futuro más limpio y consciente."
                    background="#e1dcf1"
                />

                <Card
                    title="Misión"
                    description="En nuestra empresa de zapatos tejidos en crochet , nos dedicamos
                        a crear productos únicos y artesanales que reflejan la belleza
                        del trabajo hecho a mano. Nuestra misión es proporcionar a
                        nuestros clientes calzado de alta calidad, cómodo y con diseños
                        originales, confeccionados con cuidado y dedicación por
                        artesanos expertos en el arte del tejido en crochet. Buscamos
                        promover la tradición y el valor de la artesanía, al tiempo que
                        ofrecemos productos de moda sostenibles y respetuosos con el
                        medio ambiente. Nos esforzamos por brindar una experiencia al
                        cliente excepcional y fomentar la creatividad y la apreciación
                        por el trabajo hecho a mano en cada paso de nuestro camino."
                    background="#b0d3ef"
                />

                <Card
                    title="Visión"
                    description="Para el año 2028 nos visualizamos como una empresa líder en la
                        industria de calzado tejido en crochet, reconocida por nuestra
                        excelencia artesanal, diseño innovador y nuestro compromiso.
                        Queremos ser una marca de referencia en la mente de los amantes
                        de la moda y la artesanía, que aprecian la belleza y el encanto
                        de los productos hechos a mano. Aspiramos a expandir nuestro
                        alcance globalmente, llevando nuestros diseños únicos y éticos a
                        diferentes partes del mundo. Nuestro objetivo es mantenernos
                        fieles a nuestras raíces artesanales mientras evolucionamos con
                        el tiempo, siendo líderes en la innovación y sostenibilidad en
                        el mercado de calzado tejido a mano."
                    background="#bdefb0"
                />
            </section>

            <div className="lzdla__about-certifications">
                <h1>Certificaciones</h1>
                <div>
                    <div>
                        <img src={iso9001} alt="iso9001" />
                        <p>ISO 9001</p>
                    </div>
                    <div>
                        <img className="fix" src={iso26000} alt="iso26000" />
                        <p>ISO 26000</p>
                    </div>
                    <div>
                        <img
                            className="fix"
                            src={camaraComercio}
                            alt="camaraComercio"
                        />
                        <p>Cámara de comercio</p>
                    </div>
                    <div>
                        <img className="fix" src={dian} alt="dian" />
                        <p>DIAN</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
