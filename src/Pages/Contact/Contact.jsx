import { useState } from "react";
import "./Contact.css";

export function Contact() {
    const [data, setData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const onChange = (e) => {
        setData({
            ...data,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setData({
            name: "",
            email: "",
            message: "",
        });

        alert(
            "Gracias por contactarnos, te responderemos lo más pronto posible"
        );
    };

    return (
        <main className="lzdla__contact">
            <section className="section-map">
                <h1>¿Dónde puedes encontrarnos?</h1>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.2760767455857!2d-75.63158677949092!3d6.0934651242635995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4686851e55dded%3A0x26ceac57d717cc6e!2sCl.%20127b%20Sur%20%2342-80%2C%20Caldas%2C%20Antioquia!5e0!3m2!1ses-419!2sco!4v1694987650276!5m2!1ses-419!2sco"
                    width={600}
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </section>

            <h1 className="contact">Contáctanos</h1>
            <div className="p">
                <p>
                    Puedes escribirnos a cualquiera de nuestras redes sociales o
                    dejarnos un mensaje con ayuda del formulario de abajo
                </p>
            </div>

            <div className="logos">
                <a
                    href="https://www.facebook.com/profile.php?id=100072339908785"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png"
                        alt="Facebook"
                    />
                </a>

                <a
                    href="https://www.instagram.com/pidguah/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
                        alt="Instagram"
                    />
                </a>

                <a
                    href="https://api.whatsapp.com/send/?phone=573134127842&text=Hola%2C+quiero+saber+más+sobre+sus+productos.&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/WhatsApp_logo-color-vertical.svg/2048px-WhatsApp_logo-color-vertical.svg.png"
                        alt="Whatsapp"
                    />
                </a>
            </div>

            <div className="form">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Escribe tu nombre"
                        onChange={onChange}
                        value={data.name}
                        required
                    />

                    <label htmlFor="email">Correo electrónico</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Escribe tu correo electrónico"
                        onChange={onChange}
                        value={data.email}
                        required
                    />

                    <label htmlFor="message">Mensaje</label>
                    <textarea
                        id="message"
                        placeholder="Escribe tu mensaje"
                        onChange={onChange}
                        value={data.message}
                        required
                    />

                    <div className="button">
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </main>
    );
}
