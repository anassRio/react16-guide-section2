import "./App.css";
import { Fragment, useState } from "react";
import Membre from "./components/Membre";
import Button from "./components/Button";

const famille = {
  membre1: {
    nom: "Zozo",
    age: 33,
  },
  membre2: {
    nom: "Toto",
    age: 29,
  },
  membre3: {
    nom: "Floky",
    age: 1,
  },
};

function App(props) {
  const [state, setState] = useState({ famille });

  const handleClickVieillir = (num) => {
    const famille = { ...state.famille };
    famille.membre1.age += num;
    setState({ famille });
  };

  const handleChangeName = (event) => {
    const famille = { ...state.famille };
    const nom = event.target.value;
    famille.membre1.nom = nom;
    setState({ famille });
  };

  const handelChangeAge = (event) => {
    const famille = { ...state.famille };
    const age = parseInt(event.target.value);
    famille.membre1.age = age;
    setState({ famille });
  };

  return (
    // utilisé le Fragment pour envelopper le HTML a render
    <Fragment>
      <div className="App">
        <h1>{props.title}</h1>

        <input
          value={state.famille.membre1.nom}
          onChange={handleChangeName}
          type="text"
        />

        <input
          value={state.famille.membre1.age}
          onChange={handelChangeAge}
          type="number"
        ></input>
        <Membre
          nom={state.famille.membre1.nom}
          age={state.famille.membre1.age}
        />
        <Membre
          nom={state.famille.membre2.nom}
          age={state.famille.membre2.age}
        />
        <Membre nom={state.famille.membre3.nom} age={state.famille.membre3.age}>
          <p>Je suis un chat</p>
        </Membre>
        <Button vieillir={() => handleClickVieillir(2)}></Button>
      </div>
    </Fragment>
  );
}

export default App;
