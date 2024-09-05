import "../common/hexagons.css";
import hexagons from "../common/hexagons.json";

const Hexagons = () => {

  return (
    <ul id="hexGrid">
      {hexagons.map((hexagon) => (
        <li key={hexagon.id} className="hex">
          <div className="hexIn">
            <span className="hexLink">
              <img src={hexagon.image} alt={hexagon.title} />
              <h1>{hexagon.title}</h1>
              <p>{hexagon.description}</p>
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Hexagons;
