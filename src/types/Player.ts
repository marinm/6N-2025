import { Nation } from "./Nation";
import { Position } from "./Position";

export type Player = {
    nation: Nation;
    name: string;
    position: Position;
    age: number;
    height: string;
    weightPounds: number;
};
