class School {
  constructor(name = '', level = '', numberOfStudents = 0, averageTestScores = 0, schoolOverview = ''){
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
    this._averageTestScores = averageTestScores;
    this._schoolOverview = schoolOverview;
  }

  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  get averageTestScores() {
    return this._averageTestScores;
  }

  get schoolOverview() {
    return this._schoolOverview;
  }

  set averageTestScores(meanScores = 0) {
    if (typeof meanScores === "number") {
      this._averageTestScores = meanScores;
    }
    else {
      throw new Error('The average score must be a numerical value between 0 - 100!');
    }
  }

  set schoolOverview(text = '') {
    if (typeof text === "string") {
      this._schoolOverview = text;
    }
    else {
      throw new Error('School Overview must contain texts.');
    }
  }

  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} level.`);
  }

  static pickSubstituteTeacher(substituteTeachers = []) {
    return Math.floor(Math.random() * substituteTeachers.length);
  }

  set numberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudents === "number") {
      this._numberOfStudents = newNumberOfStudents;
    }
    else {
      throw new Error("Invalid input: numberOfStudents must be set to a Number.");
    }
  }
}

class PrimarySchool extends School {
  constructor(name = '', numberOfStudents = 0, pickupPolicy = '', averageTestScores = 0, schoolOverview = ''){
    super(name, 'primary', numberOfStudents, averageTestScores, schoolOverview);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class MiddleSchool extends School {
  constructor(name = '', numberOfStudents = 0, afterSchoolActivites = [], averageTestScores = 0, schoolOverview = ''){
    super(name, 'middle', numberOfStudents, averageTestScores, schoolOverview);
    this._afterSchoolActivites = afterSchoolActivites;
  }

  get afterSchoolActivites() {
    return this._afterSchoolActivites;
  }
}

class HighSchool extends School {
  constructor(name = '', numberOfStudents = 0, sportsTeams = [], averageTestScores = 0, schoolOverview = ''){
    super(name, 'high', numberOfStudents, averageTestScores, schoolOverview);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams() {
    return this._sportsTeams;
  }
}

class SchoolCatalog {
  constructor(school = []) {
    this._school = school;
  }

  get school() {
    return this._school;
  }

  set addSchool(schoolName = []) {
    this._school = schoolName;
  }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J.R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
lorraineHansbury.averageTestScores = 75;
lorraineHansbury.schoolOverview = 'This school is named after Professor Lorraine Hansbury, our founder.';

const otisMaples = new MiddleSchool('Otis Maples', 500, ['Home economics', 'Games', 'Foreign Languages', 'Volunteering', 'Recycling']);
otisMaples.averageTestScores = 90;
otisMaples.schoolOverview = 'This school was founded by a passionate group of parents who value education as well as academia.';

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
alSmith.averageTestScores = 80;
alSmith.schoolOverview = 'This is a co-educational school founded by Dr Al E. Smith, who was passionate about science and technology.';

const schoolCatalogue = new SchoolCatalog();
schoolCatalogue.addSchool = [lorraineHansbury, otisMaples, alSmith];
console.log(schoolCatalogue.school);