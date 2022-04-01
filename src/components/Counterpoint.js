export default class Sequence {
    // constructor receives an array of cantii; those at higher indices will be placed at higher pitch levels
    // Sequence expects that each cantus is the same length
    constructor(cantii) {
        this.sequence = cantii;
        this.sonorities = null;
    }

    getSequence() {
        return this.sequence;
    }

    checkLength() {
        const lens = [];
        for (let cantus of this.sequence) {
            lens.push(cantus.melody.length);
        }
        return lens.reduce((a,b) => (a === b ? true : new Error("Length is not the same")));
    }

    mapLayers() {
        let output = [];
        for (let cantus of this.sequence) {
            output.push(<p>{cantus.returnLetters()}</p>);
        }
        return output;
    }

    getSonorities() {
        // output is an array containing sonorities as raw, inner arrays
        const output = [];
        for (let i = 0; i < this.sequence[0].melody.length; i++) {
            let thing = [];
            for (let each of this.sequence) {
                thing.push(each.melody[i].note);
            }
            output.push(thing);
        }
        console.log(output);
    }

    evaluate() {

    }
}