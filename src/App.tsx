import { useState } from "react";
import "./App.css";
import PlayerList from "./components/PlayerList";
import { Nation } from "./types/Nation";
import TeamFrance from "./data/TeamFrance";
import TeamItaly from "./data/TeamItaly";
import TeamWales from "./data/TeamWales";
import TeamEngland from "./data/TeamEngland";
import TeamScotland from "./data/TeamScotland";

const DEFAULT_NATION: Nation = "France";

function App() {
    const [nation, setNation] = useState<Nation>(DEFAULT_NATION);

    const players =
        {
            England: TeamEngland,
            France: TeamFrance,
            Ireland: [],
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
                    🇮🇹
                </button>
                <button
                    className="flag-icon"
                    onClick={() => setNation("Wales")}
                >
                    🏴󠁧󠁢󠁷󠁬󠁳󠁿
                </button>
                <button
                    className="flag-icon"
                    onClick={() => setNation("France")}
                >
                    🇫🇷
                </button>
                <button
                    className="flag-icon"
                    onClick={() => setNation("England")}
                >
                    🏴󠁧󠁢󠁥󠁮󠁧󠁿
                </button>
                <button
                    className="flag-icon"
                    onClick={() => setNation("Scotland")}
                >
                    🏴󠁧󠁢󠁳󠁣󠁴󠁿
                </button>
                <button
                    className="flag-icon"
                    onClick={() => setNation("Ireland")}
                >
                    🇮🇪
                </button>
            </div>
            {nation}
            <PlayerList players={players} />
        </div>
    );
}

export default App;
