function wakeDog(dogName, dogBreed) {
    let successMessage = `Wake ${dogName} the ${dogBreed}`;
    console.log(successMessage);
    return successMessage;
}

function leashDog(dogName, dogBreed) {
    let successMessage = `Leash ${dogName} the ${dogBreed}`;
    console.log(successMessage);
    return successMessage;
}

function walkToPark(dogName, dogBreed) {
    let successMessage = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(successMessage);
    return successMessage;
}

function throwFrisbee(dogName, dogBreed) {
    let successMessage = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(successMessage);
    return successMessage;
}

function walkHome(dogName, dogBreed) {
    let successMessage = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(successMessage);
    return successMessage;
}

function unleashDog(dogName, dogBreed) {
    let successMessage = `Unleash ${dogName} the ${dogBreed}`;
    console.log(successMessage);
    return successMessage;
}

const routine = [
    wakeDog, 
    leashDog,
    walkToPark,
    throwFrisbee,
    walkHome,
    unleashDog 
]

function exerciseDog(dogName, dogBreed) {
    let messages = []

    for (let i = 0; i < routine.length; i++) {
        messages.push(routine[i](dogName, dogBreed));
      }

    return messages
}