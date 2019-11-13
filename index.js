let wakeDog = (dog, breed) => {
  return `Wake ${dog} the ${breed}`
};

let leashDog = (dog, breed) => {
  return `Leash ${dog} the ${breed}`
};

let walkToPark = (dog, breed) => {
  return `Walk to the park with ${dog} the ${breed}`
};

let throwFrisbee = (dog, breed) => {
  return `Throw the frisbee for ${dog} the ${breed}`
};

let walkHome = (dog, breed) => {
  return `Walk home with ${dog} the ${breed}`
};

let unleashDog = (dog, breed) => {
  return `Unleash ${dog} the ${breed}`
};

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

let exerciseDog = (dog, breed) => {
  return routine.map( fn => fn(dog, breed))
}
