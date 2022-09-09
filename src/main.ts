import { doGame, doRound } from "./helpers";
import { Knight } from "./knight.interface";

console.log("hello knights");

const k1 = new Knight("Heinz");
const k2 = new Knight("Arthur");
const k3 = new Knight("Lenni");
const k4 = new Knight("Helmut");
const k5 = new Knight("Knut");

const knights = [k1, k2, k3, k4, k5];

const newNights = doGame(knights);
