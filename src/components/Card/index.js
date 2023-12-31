import { useFavoritoContexto } from "contextos/favoritos";
import styles from "./Card.module.css";
import iconeFavoritar from "./favoritar.png";
import iconeDesfavoritar from "./desfavoritar.png";
import { Link } from "react-router-dom";

function Cards({ id, titulo, capa }) {
  const { favorito, adicionarFavorito } = useFavoritoContexto();
  const ehFavorito = favorito.some((fav) => fav.id === id);
  const icone = !ehFavorito ? iconeFavoritar : iconeDesfavoritar;

  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/${id}`}>
        <img src={capa} alt={titulo} className={styles.capa} />
        <h2>{titulo}</h2>
      </Link>
        <img
          onClick={() => {
            adicionarFavorito({ id, titulo, capa });
          }}
          src={icone}
          alt="Favoritar Filme"
          className={styles.favoritar}
        />
    </div>
  );
}

export default Cards;
