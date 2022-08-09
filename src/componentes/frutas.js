
import Api from "./api";
import React, { useEffect, useState } from "react";
import Carrinho from "./carrinho";
import Checkout from "./checkout";

export default function Call() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    Api.get("api/fruit/all")
      .then((response) =>
        setUser(
          response.data.map((fruit) => {
            return {
              name: fruit.name,
              nutritions: Object.entries(fruit.nutritions)
            };
          })
        )
      )

      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div className="App">
      {/* Componente para renderizar a fruta: */}
      {user.map((fruta) => (
        <div>
          <h1>
            {fruta.name} <Carrinho /> <Checkout name={fruta.name} />
          </h1>
          <ul>
            {fruta.nutritions.map((nutri) => (
              <li>
                {nutri[0]}: {nutri[1]}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}