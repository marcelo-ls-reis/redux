import React from "react";
import './App.css'

import Intervalo from "./components/Intervalo";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <h1>Projeto-Redux</h1>

      <div className="linha">
        <Intervalo></Intervalo>
      </div>

      <div className="linha">
      <Card title="Card 2" green>Teste 2</Card>
      <Card title="Card 3" blue>Teste 3</Card>
      <Card title="Card 4" purple>Teste 4</Card>
      </div>

    </div>
  )
}

export default App;
