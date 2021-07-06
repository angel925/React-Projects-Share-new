import { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";

function App() {
  // definir la categoria

  const [categoria, guardarCategoria] = useState("");
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=c7083c02520c4029bbd7329dad94eda5`;

      const respueta = await fetch(url);

      const noticias = await respueta.json();

      guardarNoticias(noticias.articles);
    };

    consultarAPI();
  }, [categoria]);

  return (
    <Fragment>
      <Header titulo="Search News" />

      <div className="container white">
        <Formulario guardarCategoria={guardarCategoria} />

        <ListadoNoticias noticias={noticias} />
      </div>
    </Fragment>
  );
}

export default App;
