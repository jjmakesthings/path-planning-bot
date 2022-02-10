const robotStartsAt = require("./robotFactoryUtils")

const randomRobotFactory = function(){
    const getNextLocation = function(travelOptions){
        return travelOptions[Math.floor(Math.random()*travelOptions.length)]
    }
    const travel = function(roadGraph){
        const travelOptions = roadGraph[this.location]
        this.location = getNextLocation(travelOptions)
        this.steps ++
        return this.location
    }
    return Object.assign(robotStartsAt("Post Office"), {travel})
};

module.exports = randomRobotFactory

