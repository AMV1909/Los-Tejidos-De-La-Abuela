import { BsCheck2Square, BsXSquare } from "react-icons/bs";
import "./Cares.css";

const cares = [
    "No lavar con detergente",
    "Lavar con jabón suave",
    "No poner al sol",
    "No lavar con cepillo la capellada (tejido)",
];

const images = [
    "https://us.123rf.com/450wm/marysan9/marysan91807/marysan9180700749/114935059-detergente-en-polvo-de-dibujos-animados-vectoriales-dise%C3%B1o-de-paquete-de-polvo-de-lavander%C3%ADa-estilo.jpg?ver=6",
    "https://images.vexels.com/media/users/3/213317/isolated/preview/3de3ab98b0f31e3c77e1e2c82136c798-detergente-para-lavar-ropa.png",
    "https://img.freepik.com/vector-gratis/secar-colgar-ropa-al-aire-libre_1308-53308.jpg",
    "https://static.vecteezy.com/system/resources/previews/024/179/856/non_2x/smiling-young-woman-polish-shoes-with-brush-happy-girl-take-care-of-leather-footwear-illustration-vector.jpg",
];

const materials = [
    "Suela de Eva",
    "Plantilla de cuero",
    "Forro de tela",
    "Remaches de metal",
    "Hilo tipo crochet",
];

const materialsImages = [
    "https://www.lti.com.ar/wp-content/uploads/2019/02/2542-1.jpg",
    "https://www.maloik.cl/wp-content/uploads/plantilla2.webp",
    "https://dbdzm869oupei.cloudfront.net/img/blinds/preview/38204.png",
    "https://www.indux.mx/sites/default/files/indux-remache-bifurcado-03.png",
    "https://eladornomerceria.com/wp-content/uploads/2020/08/CROCHET_40.jpg",
];

const bools = [false, true, false, false];

export function Cares() {
    return (
        <main className="lzdla__cares">
            <h1>Cuidados A Tener En Cuenta</h1>

            <div className="lzdla__cares__container">
                {cares.map((care, index) => (
                    <div key={care} className="lzdla__cares__container__card">
                        <div>
                            {bools[index] ? (
                                <BsCheck2Square size={40} />
                            ) : (
                                <BsXSquare size={32} />
                            )}
                            <p>{care}</p>
                        </div>
                        <img src={images[index]} alt="care" />
                        <img
                            style={{ display: bools[index] ? "none" : "" }}
                            className="prohibido"
                            src="https://cdn-icons-png.flaticon.com/512/2576/2576762.png"
                            alt="Prohibido"
                        />
                    </div>
                ))}
            </div>

            <div className="lzdla__cares__materials">
                <h1>Materiales</h1>

                <p>
                    Nuestro calzado está hecho completamente de materiales
                    orgánicos y/o reciclables, permitiendo así su reutilización
                    incluso para poder más fabricar más productos de calzado en
                    el futuro
                </p>
            </div>

            <div className="lzdla__cares__container materialsIndeed">
                {materials.map((material, index) => (
                    <div
                        key={material}
                        className="lzdla__cares__container__card"
                    >
                        <p>{material}</p>
                        <img src={materialsImages[index]} alt="care" />
                    </div>
                ))}
            </div>
        </main>
    );
}
