import "./App.css";
import { Fragment } from "react";
import Membre from "./components/Membre";

function App(props) {
  return (
    // utilisé le Fragment pour envelopper le HTML a render
    <Fragment>
      <div className="App">
        <h1>{props.title}</h1>
        <h1>React App</h1>
        <Membre nom="Anass" test="test" />
        <Membre nom="Hajar" children="Je suis la Femme" />
        <Membre nom="Floky">
          <h3>Je suis un chat</h3>
        </Membre>
      </div>
    </Fragment>
  );
}

export default App;
