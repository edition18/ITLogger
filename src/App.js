import "./App.css";
import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

const App = () => {
  useEffect(() => {
    //init materialize JS automatically so that
    // we can access modals etc
    M.AutoInit();
  });

  return <div className="App">myapp</div>;
};

export default App;
