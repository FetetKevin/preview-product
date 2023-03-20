import "./App.css";
import mobile from "./assets/images/image-product-mobile.jpg";
import desktop from "./assets/images/image-product-desktop.jpg";

import svg from "./assets/images/icon-cart.svg";

export default function App() {
    return (
        <div className="container">
            <img src={mobile} alt="" className="image_mobile" />
            <img src={desktop} alt="" className="image_full" />
            <div className="infos">
                <h1>Perfume</h1>
                <h2>Gabrielle Essence Eau De Parfum</h2>
                <p>
                    A floral, solar and voluptuous interpretation composed by
                    Oliver Polge, Perfumer-Creator for the House of CHANEL.
                </p>
                <footer>
                    <h3>$149.99</h3>
                    <h4>$169.99</h4>
                </footer>

                <button className="btn" href="">
                    <img src={svg} alt="" className="cart" />
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
