import React from "react";

import Card from "./Card";

export default props => {
    return(
        <Card title="Sorteio de números" purple>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{15}</strong>
                </span>
            </div>
        </Card>
    )
}