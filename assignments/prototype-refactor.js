/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/


 
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

function GameObject(attributes){
    this.createdAt = attributes.createdAt;
    this.name = attributes.name;
    this.dimensions = attributes.dimensions;
  }
  
  GameObject.prototype.destroy = function(){
    console.log(`${this.name} was removed from the game.`)
  }
  
  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  
  function CharacterStats(attributes){
    GameObject.call(this,attributes);
    this.healthPoints = attributes.healthPoints;
  }
  CharacterStats.prototype = Object.create(GameObject.prototype);
  CharacterStats.prototype.takeDamage = function() {
    return `${this.name} took damage.`;
  }
  
  
  
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
  
  function Humanoid(attributes){
    CharacterStats.call(this, attributes);
    this.team = attributes.team;
    this.weapons = attributes.weapons;
    this.language = attributes.language;
  }
  Humanoid.prototype = Object.create(CharacterStats.prototype);
  Humanoid.prototype.greet = function (){return `${this.name} offers a greeting in ${this.language}.`}
  
  
  
   
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!
  function Hero(attributes){
    Humanoid.call(this, attributes);
    this.karma = attributes.karma;
  }
  
  Hero.prototype = Object.create(Humanoid.prototype);
  Hero.prototype.fightInjustice = function (target){
    this.karma += 5;
    target.healthPoints -= 5;
    
    if (target.healthPoints === 0){
      return `${this.name} strikes ${target.name} with ${this.weapons[0]}. ${target.name} has been killed in honorable combat, and in the most heroic way and ${this.name} now has ${this.karma} karma points!`
    } else if (target.healthPoints > 0){
      return `${this.name} strikes ${target.name} with ${this.weapons[0]}. ${target.name} is still alive. Oops.`
    } else {
      return `${this.name} heroically strikes again, but ${target.name} is already dead! You can't kill the dead.`
    }
  };
  
  function Villain(attributes){
    Humanoid.call(this,attributes);
    this.karma = attributes.karma;
  }
  
  Villain.prototype = Object.create(Humanoid.prototype);
  Villain.prototype.fightJustice = function (target){
    this.karma += -5;
    target.healthPoints -= 2000;
    
    if (target.healthPoints === 0){
      return `${this.name} strikes ${target.name} with ${this.weapons[0]}. ${target.name} has been killed in dishonorable combat and in the most dastardly way, and ${this.name} has now only ${this.karma} karma points!`
    } else if (target.healthPoints >0){
      return `${this.name} strikes ${target.name} with ${this.weapons[0]}, but ${target.name} is still alive. Curses!!!`
    } else{
      return `${this.name} strikes with vehemence and venom, but ${target.name} is already dead, you monster!`
    }
  };
  
  
  const Orlando = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 2000,
    name: 'Orlando',
    team: 'The Twelve Peers of Charlemagne',
    weapons: [
      'Durendal',
      'Shield of Hector',
    ],
    language: 'Something Like French',
    karma:500
  });
  
  
  const Morgan = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 5,
    name: 'Morgan Le Fay',
    team: 'The Anti-Round Table',
    weapons: [
      'Staff of Merlin',
      'BFG9000',
    ],
    language: 'The Old Forgotten Tongues',
    karma:-500
  });
  
  console.log(Morgan);
  console.log(Orlando);
  
  //What happens when hero strikes villain/target
  console.log(Orlando.fightInjustice(Morgan));
  
  //What happens when target hitpoints reach zero and hero strikes
  console.log(Orlando.fightInjustice(Morgan));
  
  
  //what happens when villain strikes hero
  console.log(Morgan.fightJustice(Orlando));
  
  //What happens when villain has killed hero
  console.log(Morgan.fightJustice(Orlando));
  