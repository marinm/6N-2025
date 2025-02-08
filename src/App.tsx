import { useState } from "react";
import "./App.css";

function App() {
    const [nation, setNation] = useState<string>("france");

    return (
        <div>
            <div className="flag-icons">
                <button
                    className="flag-icon"
                    onClick={() => setNation("italy")}
                >
                    🇮🇹
                </button>
                <button
                    className="flag-icon"
                    onClick={() => setNation("wales")}
                >
                    🏴󠁧󠁢󠁷󠁬󠁳󠁿
                </button>
                <button
                    className="flag-icon"
                    onClick={() => setNation("france")}
                >
                    🇫🇷
                </button>
                <button
                    className="flag-icon"
                    onClick={() => setNation("england")}
                >
                    🏴󠁧󠁢󠁥󠁮󠁧󠁿
                </button>
                <button
                    className="flag-icon"
                    onClick={() => setNation("scotland")}
                >
                    🏴󠁧󠁢󠁳󠁣󠁴󠁿
                </button>
                <button
                    className="flag-icon"
                    onClick={() => setNation("ireland")}
                >
                    🇮🇪
                </button>
            </div>
            <div className="scroller">
                {nation === "italy" ? "Italy players" : ""}
                {nation === "wales" ? "Wales players" : ""}
                {nation === "france" ? "France players" : ""}
                {nation === "england" ? "England players" : ""}
                {nation === "scotland" ? "Scotland players" : ""}
                {nation === "ireland" ? "Ireland players" : ""}
            </div>
        </div>
    );
}

export default App;
