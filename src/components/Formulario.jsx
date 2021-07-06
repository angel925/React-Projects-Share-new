import styles from "./Formulario.module.css";
import useSelect from "../Hooks/useSelect";
import PropTypes from 'prop-types'


const Formulario = ({guardarCategoria}) => {
  const OPCIONES = [
    { value: "general", label: "General" },
    { value: "business", label: "Negocios" },
    { value: "entertainment", label: "Entretenimiento" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "sports", label: "Deportes" },
    { value: "technology", label: "Tecnología" },
  ];

  const [categoria, SelectNoticias] = useSelect("general", OPCIONES);
  
  //sumit al form pasar categoria a app.js
  const buscarNoticias = e => {
    e.preventDefault();

    guardarCategoria(categoria)

  }
  
  
  return (
    <div className={`${styles.buscador} row`}>
      <div className="col s12 m8 offset-m2">
        <form
        
        onSubmit = {buscarNoticias}
        
        >
          <h2 className={styles.heading}>Encuentra Noticias por Categoria</h2>

          <SelectNoticias 
          />

          {/* c7083c02520c4029bbd7329dad94eda5 */}

          <div className="input-field col s12">
            <input
              type="submit"
              className={`${styles.btn_block} btn-large black-text teal accent-2`}
              value="Buscar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

Formulario.propTypes = {
  guardarCategoria : PropTypes.func.isRequired
}

export default Formulario;
