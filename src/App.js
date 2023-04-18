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

  return (
    // utilisé le Fragment pour envelopper le HTML a render
    <Fragment>
      <div className="App">
        <h1>{props.title}</h1>
        <h1>React App</h1>
        <Membre nom={state.famille.membre1.nom} test="test" />
        <Membre
          nom={state.famille.membre2.nom}
          children={state.famille.membre2.age}
        />
        <Membre nom={state.famille.membre3.nom}>
          <h3>Je suis un chat</h3>
        </Membre>
      </div>
    </Fragment>
  );
}

export default App;
