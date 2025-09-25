// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

//console.log(returnRandBase());
//console.log(mockUpStrand());
const pAequorFactory = (num, arr) => {
  return {
    specimenNum: num,
    dna: arr,
    mutate(){
      //console.log(arr);
      let randBaseResult = Math.floor(Math.random() * arr.length);
      //console.log(randBaseResult);
      //randBaseResult = arr[randBaseResult];
      //console.log(randBaseResult);
      if (arr[randBaseResult] === 'T'){
          let replaceBasesOne = ['A', 'C', 'G'];
          replaceBasesOne = replaceBasesOne[Math.floor(Math.random() * 3)];
          arr[randBaseResult] = replaceBasesOne;
        }
        if (arr[randBaseResult] === 'A'){
          let replaceBasesTwo = ['T', 'C', 'G'];
          replaceBasesTwo = replaceBasesTwo[Math.floor(Math.random() * 3)];
          arr[randBaseResult] = replaceBasesTwo;
        }
        if (arr[randBaseResult] === 'C'){
          let replaceBasesThree = ['T', 'A', 'G'];
          replaceBasesThree = replaceBasesThree[Math.floor(Math.random() * 3)];
          arr[randBaseResult] = replaceBasesThree;
        }
        if (arr[randBaseResult] === 'G'){
          let replaceBasesFour = ['T', 'A', 'C'];
          replaceBasesFour = replaceBasesFour[Math.floor(Math.random() * 3)];
          arr[randBaseResult] = replaceBasesFour;
        }
        //console.log(arr);
    },

    //Calculate percentages of how many bases in each DNA are in common
    compareDNA(pAequor){
      let dnaOne = this.dna;
      let dnaTwo = pAequor.dna;
      let count = 0;
      for (let i = 0; i < dnaOne.length; i++){
        if (dnaOne[i] === dnaTwo[i]){
          count++;
        }
      }
      let percentage = Math.ceil((count / dnaOne.length) * 100);
      console.log(`Specimen #1 and Specimen #2 have ${percentage}% DNA in common (rounded up).`);
    },
    willLikelySurvive(){
      dnaStrand = this.dna;
      countC = 0;
      countG = 0;
      for (let i = 0; i < dnaStrand.length; i++){
        if (dnaStrand[i] === 'C'){
          countC++;
        }
        if (dnaStrand[i] === 'G'){
          countG++;
        }
      }
      let totalCAndG = countC + countG;
      //console.log(totalCAndG);
      //60 % of 15 based is 9
      if (totalCAndG >= 9){
        return true;
      }
      else {
        return false;
      }
    }
  };
}

//Generate an array of 30 DNAs
let pAequorCollection = [];
let counter = 1;

while (pAequorCollection.length < 30){
  let newOrganism = pAequorFactory(counter, mockUpStrand());
  if(newOrganism.willLikelySurvive() === true){
    pAequorCollection.push(newOrganism);
    counter++;
  }
}
return pAequorCollection;

/*
Calling functions for testing
pAequorFactory(1, mockUpStrand()).mutate();
pAequorFactory(2, mockUpStrand()).compareDNA(pAequorFactory(3, mockUpStrand()));
console.log(pAequorFactory(3, mockUpStrand()).willLikelySurvive());
*/