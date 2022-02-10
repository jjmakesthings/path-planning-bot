
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
const mailCount = 6
  
const stepsToCompleteMailJob = function(robotFactory, townFactory){
    let town = townFactory(roads, mailCount)
    let robot = robotFactory()

    const pickupMail = function(){
        let pickup = town.mail.filter(parcel=> parcel.from == robot.location )
        pickup.forEach(parcel=>{
            let index = town.mail.indexOf(parcel)
            town.mail.splice(index,1)
        })
        robot.mailbag.push(...pickup)
    }

    const deliverMail = function(){
        let notDelivered = robot.mailbag.filter(parcel=> parcel.to !== robot.location )
        robot.deliveriesMade += (robot.mailbag.length-notDelivered.length)
        robot.mailbag = notDelivered
    }

    while(robot.deliveriesMade < mailCount ){
        pickupMail()
        robot.travel(town.roadGraph)
        deliverMail()
    }
    
    return robot.steps
}

const simulateMailJob = function(times, robotFactory, townFactory){
    let stepsList = []
    for(let i=0; i<times; i++){
        let stepsTaken = stepsToCompleteMailJob(robotFactory, townFactory)
        stepsList.push(stepsTaken)
    }
    const average = stepsList.reduce((a,b)=>a+b)/stepsList.length
    return average
}

console.log(simulateMailJob(1000, smartRobotFactory, randomTownFactory))

