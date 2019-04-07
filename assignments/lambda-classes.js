// CODE here for your Lambda Classes
/* 
## `lambda-classes` - We need a roster of Lambda School personnel. Build it!
* We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
* Lambda personnel can be broken down into three different types of `people`.
  * **Instructors** - extensions of Person
  * **Students** - extensions of Person
  * **Project Managers** - extensions of Instructors
```js
const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});
```
*/


/*
#### Person
* First we need a Person class. This will be our `base-class`
* Person receives `name` `age` `location` `gender` all as props
* Person receives `speak` as a method.
* This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props
*/

class Person {
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak(){
        console.log(`Hello, my name is ${this.name}. I am from ${this.location}.`)
    }
}

const Sam = new Person({
    name:"Sam Winchester",
    age:40,
    location:"America", 
    gender:"male"});


const Dean = new Person({
    name:"Dean Winchester",
    age:45,
    location:"America", 
    gender:"male"});

Sam.speak();
Dean.speak();

/*
#### Instructor
* Now that we have a Person as our base class, we'll build our Instructor class.
* Instructor uses the same attributes that have been set up by Person
* Instructor has the following unique props:
  * `specialty` what the Instructor is good at i.e. 'redux'
  * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
  * `catchPhrase` i.e. `Don't forget the homies`
* Instructor has the following methods:
  * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
  * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'
  * 
*/

class Instructor extends Person{
    constructor(attributes){
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(studentObj, subject){
        console.log(`${studentObj.name} receives a perfect score on ${subject}.`);
    }
    //* Stretch Goal 2: build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
    //IF I add the method to Instructor, it should be available by 
    tabulatePoints(studentObj){
        studentObj.grade = studentObj.grade - getRandomInt(100)
        console.log(`${this.name} adjusted ${studentObj.name}'s grade; it's now: ${studentObj.grade}`)
    }
    
}

//For Stretch Goal 2, I created a getRandomInt function that use Math.random to get a random int (either positive or negative)
function getRandomInt(max) {
    let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    return plusOrMinus * Math.floor(Math.random() * Math.floor(max));
}
  

const Moriarty = new Instructor({
    name: 'James Moriarty',
    location: 'London',
    age: 100,
    gender: 'male',
    favLanguage: 'Mathematics',
    specialty: 'Organized Crime',
    catchPhrase: 'Do not inconvenience me!'
});

console.log("Test 1 of Instructor Prototype");
Moriarty.demo("Criminal Schemes");
Moriarty.grade(Dean,"Heroics");


const Guido = new Instructor({
    name: 'Guido Van Rossum',
    location: 'San Francisco',
    age: 100,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Python',
    catchPhrase: 'I am the benevolent dictator for life!'
});

console.log("Test 2 of Instructor Prototype");
Guido.demo("List comprehensions");
Guido.grade(Sam,"Lambda functions");

/*
#### Student
* Now we need some students!
* Student uses the same attributes that have been set up by Person
* Student has the following unique props:
  * `previousBackground` i.e. what the Student used to do before Lambda School
  * `className` i.e. CS132
  * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
* Student has the following methods:
  * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
  * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
  * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`
*/

class Student extends Person {
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;

        //Stretch Goal 1: Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
        this.grade = attributes.grade;
    }
    listsSubjects(){
        console.log(`These are the favorite subjects of ${this.name}:`)
        this.favSubjects.forEach((subject)=>console.log(subject));
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    }
    /* Stetch Goal 3:
    * Add a graduate method to a student.
    * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
    * If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
    */ 
    graduate(){
        if(this.grade > 70){
            console.log(`This student can graduate; ${this.name} has ${this.grade}%`)
        } else(
            console.log(`This student cannot graduate; ${this.name} has only ${this.grade}%`)
        )
    }

    
}

const Hermione = new Student ({
    name: 'Hermione Granger',
    location: 'London',
    age:30,
    gender:'female',
    previousBackground:'Witch',
    className:'WEBPT5',
    favSubjects: ["Binary Trees", "Functional Programming", "Hoisting"],
    grade:100
});

console.log("Test 1 of Student Class")
Hermione.listsSubjects();
Hermione.PRAssignment("React");
Hermione.sprintChallenge("Applied JavaScript");


const Anakin = new Student ({
    name: 'Anakin Skywalker',
    location: 'Coruscant',
    age: 30,
    gender: 'male',
    previousBackground:'Failed Jedi',
    className:'WEBPT5',
    favSubjects: ["Explicit binding", "Functional programming", "TDD"],
    grade:75
});

console.log("Test 2 of Student Class")
Anakin.listsSubjects();
Anakin.PRAssignment("React");
Anakin.sprintChallenge("Applied JavaScript");

/*
#### Project Manager
* Now that we have instructors and students, we'd be nowhere without our PM's
* ProjectManagers are extensions of Instructors
* ProjectManagers have the following unique props:
  * `gradClassName`: i.e. CS1
  * `favInstructor`: i.e. Sean
* ProjectManagers have the following Methods:
  * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
  * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`
  * 
*/

class ProjectManager extends (Instructor){
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(studentObj, subject){
        console.log(`${this.name} debugs ${studentObj.name}'s code on ${subject}`);
    }
}

const Jay = new ProjectManager({
    name: 'Jay Landsman',
    location: 'Baltimore',
    age: 50,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Micro-managing',
    catchPhrase: "Good work!",
    gradClassName: 'WEBPT5',
    favInstructor: 'Cam Pope'
})
console.log("Test 1 of ProjectManager:")
Jay.standUp("webpt5-help");
Jay.debugsCode(Anakin,"Advanced CSS");



const Nate = new ProjectManager({
    name: 'Nathan Boyette',
    location: 'Oakland',
    age: 25,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Functional programming',
    catchPhrase: "Cool",
    gradClassName: 'WEBPT5',
    favInstructor: 'Cam Pope'
});

console.log("Test 2 of ProjectManager:");
Nate.standUp("webpt-5-sprint03");
Nate.debugsCode(Hermione,"Advanced JavaScript");


/*
#### Stretch Problem

* Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.

/*
* Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
*/
console.log("Test of tabulate Method: Instructor");
Moriarty.tabulatePoints(Hermione);

console.log("Test of tabulatePoints method: PM")
Nate.tabulatePoints(Anakin);

/*
* Add a graduate method to a student.
* This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
* If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
*/
console.log("Test of graduate method");
Hermione.graduate();
Anakin.graduate();





