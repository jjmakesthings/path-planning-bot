const randomTownFactory = require("./towns/randomTownFactory");
const randomRobotFactory = require("./robots/randomRobotFactory");
const smartRobotFactory = require("./robots/smartRobotFactory");


const stepsToCompleteMailJob = function(robotFactory, townFactory, mailCount){
    let town = townFactory(mailCount)
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

const simulateMailJob = function(times, robotFactory, townFactory, mailCount){
    let stepsList = []
    for(let i=0; i<times; i++){
        let stepsTaken = stepsToCompleteMailJob(robotFactory, townFactory, mailCount)
        stepsList.push(stepsTaken)
    }
    const average = stepsList.reduce((a,b)=>a+b)/stepsList.length
    return average
}

console.log(simulateMailJob(1000, smartRobotFactory, randomTownFactory, 6))


module.exports = {stepsToCompleteMailJob, simulateMailJob}