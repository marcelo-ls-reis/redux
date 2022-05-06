import "./Intervalo.css";
import React from "react";

import Card from "./Card";

export default props => { 
    return (
        <Card title="Intervalo de Números" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={1}/>
                </span>
                <span>Máximo:</span>
                <input type="number" value={50} />

            </div>
        </Card>
    )
    }    