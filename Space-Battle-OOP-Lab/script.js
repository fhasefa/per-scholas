class Ship {
    constructor(name, hull, firepower, accuracy) {
        this.name = name
        this.hull = hull
        this.firepower = firepower
        this.accuracy = accuracy
        this.alienShips = []
    }

    attack(targetShip) {
        if (Math.random() < this.accuracy) {
            targetShip.hull -= this.firepower
            console.log(`${this.name} has successfully hit ${targetShip.name}!`)}
        else {
            console.log(`${this.name} missed ${targetShip.name}!`)
        }
    }

    generateAlienShip(numOfShips) {
        let counter = 0;
            while (counter < numOfShips) {
             const alienShip = new Ship('Alien Ship', Math.floor(Math.random() * (6 - 3) + 3), Math.floor(Math.random() * (4 - 2) + 2), Math.random() * (0.8 - 0.6) + 0.6);
             counter++;
             this.alienShips.push(alienShip)       
        }
    }

}


let ussAssembly = new Ship('USS Assembly', 20, 5, 0.7);
let alienBattleFleet = new Ship
// ***bonus (uncomment line 34 and comment out line 36)
// alienBattleFleet.generateAlienShip(Math.floor(Math.random() * (12 - 6) + 6))

alienBattleFleet.generateAlienShip(6)


// console.log(alienBattleFleet.alienShips)
// console.log(ussAssembly)

function playGame() {
    let start = prompt('Enter "start" to play game...');
    if (start.toLowerCase() === 'start') {
        // loop through each alien ship
        for (let i = 0; i < alienBattleFleet.alienShips.length; i++) {
            //console.log(alienBattleFleet.alienShips[i].name + (i + 1));
            let alien = alienBattleFleet.alienShips[i];
            let nextMove = prompt('"Do you want to attack next ship or retreat?"');
            while (alien.hull > 0 && ussAssembly.hull > 0 && nextMove.toLowerCase() === 'attack') {
                ussAssembly.attack(alien);
                if (alien.hull <= 0) {
                    console.log("Alien ship" + (1+i) + " destroyed!");
                    if (nextMove.toLowerCase() === 'attack') {
                        break;
                    }

                    else if (nextMove.toLowerCase() === 'retreat') {
                        return console.log("USS Assembly retreated! Game Over.");
                    }
                } else {
                    alien.attack(ussAssembly);
                }
            }

            if (nextMove.toLowerCase() === 'retreat') {
                return console.log("USS Assembly retreated! Game Over.");
            }

            if (ussAssembly.hull <= 0) {
                return console.log("USS Assembly destroyed! Game Over.");
            }
        }

        if (ussAssembly.hull > 0) {
            return console.log("All Alien Ships destroyed! You Win!");
        }
    }
}



playGame()