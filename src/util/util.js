import Pitch from '../components/Pitch';

export const cantusHelper = (arr) => {
    let mappedArray = [];
    for (let each of arr) {
        mappedArray.push(new Pitch(each));
    }
    return mappedArray;
}

export const letterNames = {
    0: 'B',
    1: 'C',
    2: 'C-sharp',
    3: 'D',
    4: 'D-sharp',
    5: 'E',
    6: 'F',
    7: 'F-sharp',
    8: 'G',
    9: 'G-sharp',
    10: 'A',
    11: 'A-sharp',
}

export const harmony = {
    0: 'perfect',
    1: 'dissonance',
    2: 'imperfect',
    3: 'imperfect',
    4: 'imperfect',
    5: 'perfect',
    6: 'dissonance',
    7: 'perfect',
    8: 'imperfect',
    9: 'imperfect',
    10: 'imperfect',
    11: 'dissonance'
}

export const handleTranspose = (cantus, amount) => {
    let newFirmus = [];
    for (let pitch of cantus) {
      const thing = new Pitch(pitch.getNote() + amount);
      newFirmus.push(thing);
    }
    console.log(newFirmus);
    return newFirmus;
}