import { Player } from "../types/Player";

type Props = {
    players: Player[];
};

export default function PlayerList({ players }: Props) {
    return (
        <div className="scroller">
            {players.map((p) => (
                <div>
                    {p.nation} - {p.name} [{p.position}] ({p.age}, {p.height},{" "}
                    {p.weightPounds} lbs)
                </div>
            ))}
        </div>
    );
}
