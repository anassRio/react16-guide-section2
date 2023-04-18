import "./App.css";
import { Fragment, useState } from "react";
import Membre from "./components/Membre";

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
  const handleClickViellir = () => {
    const famille = { ...state.famille };
    famille.membre1.age += 1;
    setState({ famille });
  };
  return (
    // utilisé le Fragment pour envelopper le HTML a render
    <Fragment>
      <div className="App">
        <h1>{props.title}</h1>
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

        <button onClick={handleClickViellir}>Viellir</button>
      </div>
    </Fragment>
  );
}

export default App;
