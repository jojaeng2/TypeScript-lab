interface Bird {
    fly() : void;
    layEggs() : void;
}

interface Fish {
    swim() : void;
    layEggs() : void;
}

declare function getSmallPet(): Fish | Bird;

let pet = getSmallPet();
pet.layEggs();

// pet.swim();