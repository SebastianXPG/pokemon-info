import "./Pokemon.css";

const Pokemon = (props) => {
  const types = props.pokemonTypes;
  return (
    <>
      <div className="pokemon">
        <h3 className="title-pokemon">Resultado : </h3>
        <h3 className="name-pokemon">{props.pokemonName}</h3>
        <img
          src={props.pokemonImg}
          alt={props.pokemonName}
          title={props.pokemonName}
        />
        <p>ALtura : {props.pokemonHeight}</p>
        <>
          Tipo :
          <ul className="list-feature">
            {types.map((type) => (
              <li className="li-result">{type.type.name}</li>
            ))}
          </ul>
        </>
      </div>
    </>
  );
};

export default Pokemon;
