import { createContext, useContext, useState } from "react";

export const favoritosContext = createContext();
favoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({ children }) {
  const [favorito, setFavorito] = useState([]);

  return (
    <favoritosContext.Provider value={{ favorito, setFavorito }}>
      {children}
    </favoritosContext.Provider>
  );
}

export function useFavoritoContexto(){
  const {favorito, setFavorito} = useContext(favoritosContext);

  function adicionarFavorito(novoFavorito) {
    const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id)

    let novaLista = [...favorito];

    if(!favoritoRepetido) {
      novaLista.push(novoFavorito);
      return setFavorito(novaLista)
    }

    novaLista = favorito.filter((fav) => fav.id !== novoFavorito.id);
    return setFavorito(novaLista)
  }

  return {
    favorito,
    adicionarFavorito
  }
}

