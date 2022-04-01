import Cantus from "./Melody";
import Sequence from "./Counterpoint";
import { cantusHelper } from "../util/util";

const cantusPitches = cantusHelper([3,6,5,3,8,6,10,8,6,5,3]);
export const cantusFirmus = new Cantus(cantusPitches);

const solutionPitches = cantusHelper([10,10,8,10,12,1,1,12,3,2,3])
export const cantusSolution = new Cantus(solutionPitches);

export const mySequence = new Sequence([cantusFirmus, cantusSolution]);
