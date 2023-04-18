import React, { Fragment } from "react";
/*
const Membre = () => {
  const name = "Antho";
  return <h2>Membre de ma famille : {name.toLocaleUpperCase()}</h2>;
};
*/

const Membre = ({ nom, age, children }) => {
  return (
    <Fragment>
      <h2>
        {nom.toLocaleUpperCase()} : {age}
      </h2>
      {children}
    </Fragment>
  );
};

export default Membre;
