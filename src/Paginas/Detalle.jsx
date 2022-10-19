import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context/Context";
import icono from "../Components/assets/Img/icono-pizza.png";

export default function Detalle() {
  const { id } = useParams();
  const { dato } = useContext(Context);
  const x = dato.findIndex((x) => x.id === id);
  console.log(dato);
  return (
    <>
      {dato[x] ? (
        <div className="padre  row">
          <div className="col ">
            <div className="imagen-carta">
              <img src={dato[x].img} alt="" width="300" height="300" />
            </div>
            <div
              className="texto-detalle "
              style={{ display: "flex", flexDirection: "column" }}
            >
              <h1>{dato[x].name}</h1>
              <hr></hr>
              <p>{dato[x].desc}</p>
              <h4>Ingredientes:</h4>
              {dato[x].ingredients.map((ingredient, i) => (
                <p key={i} className="">
                  <img src={icono} alt="" height="20" width="20" /> {ingredient}
                </p>
              ))}
              <h2> precio:${dato[x].price}</h2>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
