import Header from "../Organisms/Header/Header";
import Main from "../Organisms/Main/Main";
import Footer from "../Organisms/Footer/Footer";
import "./PokeQuery.css";


const pokemonQuery = () => {
    return (
        <>
        <div className="container">
            <Header />
            <Main />
            <Footer />
        </div>
        </>
    )
}

export default pokemonQuery;