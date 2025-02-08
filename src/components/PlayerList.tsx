import { Player } from "../types/Player";

type Props = {
    players: Player[];
};

export default function PlayerList({ players }: Props) {
    return (
        <div className="scroller">
            <table>
                <thead>
                    <tr>
                        <th>Nation</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Age</th>
                        <th>Height</th>
                        <th>Weight (lbs)</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((p) => (
                        <tr>
                            <td>{p.nation}</td>
                            <td>{p.name}</td>
                            <td>{p.position}</td>
                            <td>{p.age}</td>
                            <td>{p.height}</td>
                            <td>{p.weightPounds}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
