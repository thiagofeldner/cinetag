import Banner from "components/Banner";
import styles from "./Favorito.module.css";
import Titulo from "components/Titulo";
import Cards from "components/Card";
import { useFavoritoContexto } from "contextos/favoritos";

function Favoritos() {
  const { favorito } = useFavoritoContexto();
  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo><h1>Meus Favoritos</h1></Titulo>
      <section className={styles.container}>
        { favorito.map((fav) => {
          return <Cards {...fav} key={fav.id} />
        })}
      </section>
    </>
  );
}

export default Favoritos;
