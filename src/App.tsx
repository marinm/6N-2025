import { useState } from "react";
import "./App.css";
import PlayerList from "./components/PlayerList";
import { Nation } from "./types/Nation";
import TeamFrance from "./data/TeamFrance";
import TeamItaly from "./data/TeamItaly";
import TeamWales from "./data/TeamWales";
import TeamEngland from "./data/TeamEngland";
import TeamScotland from "./data/TeamScotland";
import TeamIreland from "./data/TeamIreland";
import EnglandFlag from "./assets/flags/england.png";
import FranceFlag from "./assets/flags/france.png";
import IrelandFlag from "./assets/flags/ireland.png";
import ItalyFlag from "./assets/flags/italy.png";
import ScotlandFlag from "./assets/flags/scotland.png";
import WalesFlag from "./assets/flags/wales.png";

const DEFAULT_NATION: Nation = "France";

function App() {
    const [nation, setNation] = useState<Nation>(DEFAULT_NATION);

    const players =
        {
            England: TeamEngland,
            France: TeamFrance,
            Ireland: TeamIreland,
            Italy: TeamItaly,
            Scotland: TeamScotland,
            Wales: TeamWales,
        }[nation] ?? DEFAULT_NATION;

    return (
        <div>
            <div className="flag-icons">
                <button
                    className="flag-icon"
                    onClick={() => setNation("Italy")}
                >
                    <img src={ItalyFlag} />
                </button>
                <button
                    className="flag-icon"
                    onClick={() => setNation("Wales")}
                >
                    <img src={WalesFlag} />
                </button>
                <button
                    className="flag-icon"
                    onClick={() => setNation("France")}
                >
                    <img src={FranceFlag} />
                </button>
                <button
                    className="flag-icon"
                    onClick={() => setNation("England")}
                >
                    <img src={EnglandFlag} />
                </button>
                <button
                    className="flag-icon"
                    onClick={() => setNation("Scotland")}
                >
                    <img src={ScotlandFlag} />
                </button>
                <button
                    className="flag-icon"
                    onClick={() => setNation("Ireland")}
                >
                    <img src={IrelandFlag} />
                </button>
            </div>
            {nation}
            <PlayerList players={players} />
        </div>
    );
}

export default App;
