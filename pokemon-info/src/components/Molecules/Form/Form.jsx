import "./Form.css";
import InputTx from "../../Atoms/InputTx";

const Form = (props) => {
  return (
    <>
      <form {...props}>
        <label>Nombre del Pokemon :</label>
        <InputTx
          title="Nombre del Pokemon"
          placeholder="Ingrese el Nombre del Pokemon a consultar"
        />
        <button type="submit" {...props}>
          Buscar...
        </button>
      </form>
    </>
  );
};

export default Form;
