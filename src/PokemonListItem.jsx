const PokemonListItem = (props) => {
  return (
    <div className="pokemon">
      <img src={props.imageUrl} />
      <p>{props.name}</p>
      <p>number: {props.number}</p>
    </div>
  );
};

export default PokemonListItem;
