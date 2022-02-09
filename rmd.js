
const randomTownFactory = require("./towns/randomTownFactory");
const randomRobotFactory = require("./robots/randomRobotFactory");
const smartRobotFactory = require("./robots/smartRobotFactory");


const roads = [
    "Alice's House-Bob's House",   "Alice's House-Cabin",
    "Alice's House-Post Office",   "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop",          "Marketplace-Farm",
    "Marketplace-Post Office",     "Marketplace-Shop",
    "Marketplace-Town Hall",       "Shop-Town Hall"
];
  
randomTown = randomTownFactory(roads)

const simulateMailJob = function(times, robotFactory, town){
    const doMailJob = function(robot){
        //setup town
        town.createMail(6)
        let mailCount = town.mail.length
        while(robot.deliveriesMade < mailCount ){
        //pickup
        let pickup = town.mail.filter(mail=> mail.from == robot.location )
        pickup.forEach(mail=>{
            let index = town.mail.indexOf(mail)
            town.mail.splice(index,1)
        })
        robot.mailbag.push(...pickup)
        //move
        robot.travel(town.roadGraph)
        //drop off
        let notDelivered = robot.mailbag.filter(mail=> mail.to !== robot.location )
        robot.deliveriesMade += (robot.mailbag.length-notDelivered.length)
        robot.mailbag = notDelivered
        }
        return robot.steps
    }
    let stepsList = []
    for(let i=0; i<times; i++){
        let stepsTaken = doMailJob(robotFactory())
        stepsList.push(stepsTaken)
    }
    const average = stepsList.reduce((a,b)=>a+b)/stepsList.length
    return average
}


console.log(simulateMailJob(1000, randomRobotFactory, randomTown))

