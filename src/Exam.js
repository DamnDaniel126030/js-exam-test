export class Exam{
  #points;

  constructor(){
    this.#points = [];
  };

  addPoint(value){
    if (value < -1 || value > 100 || value == null || value == ""){
      throw new Error("The point can't be outside the [-1, 100] interval");
    }
    else if (isNaN(value)){
      throw new Error("The point can't be outside the [-1, 100] interval");
    }
    else{
      this.#points.push(value)
      return true;
    }
  };

  allParticipated(){
    if (this.#points.length == 0){
      return null;
    };

    allParticipatedInExam = true;

    this.#points.forEach(score => {
      if (score == -1){
        allParticipatedInExam = false;
      }
    });

    return allParticipatedInExam;
  };

  numberOfFails(){
    if (this.#points.length == 0){
      return null;
    };

    numOfFails = 0;

    this.#points.forEach(score => {
      if (score != -1 && score < 50){
        numOfFails++;
      };
    });

    return numOfFails;
  };

  numberOfSufficients(){
    if (this.#points.length == 0){
      return null;
    };

    numOfSufficients = 0;

    this.#points.forEach(score => {
      if (score != -1 && score >= 50 && score <= 60){
        numOfSufficients++;
      };
    });

    return numOfSufficients;
  };

  numberOfAvarages(){
    if (this.#points.length == 0){
      return null;
    };

    numOfAvarages = 0;

    this.#points.forEach(score => {
      if (score != -1 && score >= 61 && score <= 70){
        numOfAvarages++;
      };
    });

    return numOfAvarages;
  };

  numberOfGoods(){
    if (this.#points.length == 0){
      return null;
    };

    numOfGoods = 0;

    this.#points.forEach(score => {
      if (score != -1 && score >= 71 && score <= 80){
        numOfGoods++;
      };
    });

    return numOfGoods;
  };

  numberOfExcellents(){
    if (this.#points.length == 0){
      return null;
    };

    numOfExcellents = 0;

    this.#points.forEach(score => {
      if (score != -1 && score >= 81){
        numOfExcellents++;
      };
    });

    return numOfExcellents;
  };

  suspicious(excellentStudents){
    if (this.#points.length == 0){
      return null;
    };

    numOfExcellents = 0;

    this.#points.forEach(score => {
      if (score != -1 && score >= 81){
        numOfExcellents++;
      };
    });

    if (numOfExcellents > excellentStudents){
      return true;
    }
    else{
      return false;
    }
  };

  invalidExam(){
    if (this.#points.length == 0){
      return null;
    };
    
    numOfNonParticipants = 0;

    this.#points.forEach(score => {
      if (score == -1){
        numOfNonParticipants++
      };
    });

    if(numOfNonParticipants >= this.#points.length / 2){
      return true;
    }
    else{
      return false;
    };
  };
}