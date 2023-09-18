import "./Home.css";

const shoes = [
    {
        name: "Baleta",
        url: "https://i.ytimg.com/vi/wbTdnZU4M-c/maxresdefault.jpg",
        price: "200.000",
    },
    {
        name: "Sandalia",
        url: "https://i.pinimg.com/236x/24/5a/79/245a79ba54ecba5f72178f1364f8ba79.jpg",
        price: "200.000",
    },
    {
        name: "Sandalia en plataforma",
        url: "https://i.pinimg.com/originals/3c/af/a0/3cafa04d91adc1426f903d29f7cf7dd4.jpg",
        price: "200.000",
    },
    {
        name: "Zapatillas",
        url: "https://i.pinimg.com/474x/31/f2/7d/31f27d176d8f8ab9a7c187d937c37d48.jpg",
        price: "200.000",
    },
    {
        name: "Botas Cortas",
        url: "https://i.pinimg.com/1200x/af/3e/8e/af3e8e6a635b85e9c20240693e997660.jpg",
        price: "200.000",
    },
    {
        name: "Botas Altas",
        url: "https://i.pinimg.com/550x/c9/9b/0e/c99b0ebebbda05310c4cfb48d67b246c.jpg",
        price: "200.000",
    },
];

export function Home() {
    return (
        <main className="lzdla__home">
            <h1>Catálogo</h1>

            <div className="lzdla__home__container">
                {shoes.map((shoe) => (
                    <div
                        key={shoe.name}
                        className="lzdla__home__container__card"
                    >
                        <img src={shoe.url} alt="shoe" />
                        <h3>{shoe.name}</h3>
                        <p>$ {shoe.price}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}
