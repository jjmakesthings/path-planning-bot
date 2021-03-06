const robotStartsAt = require("./robotFactoryUtils")

const smartRobotFactory = function(){
    //when choosing where to travel, robot will choose from least visited locations
    let locationLog = {}
    const logLocation = function(place){
        if (locationLog[place]) {
            locationLog[place]++
        } else {
            locationLog[place] = 1
        }
    }
    const lowestVisitCount = function(places){
        let leastVisits = Infinity
        places.forEach(place=>{
            leastVisits = Math.min(leastVisits, locationLog[place]||0)
        })
        return leastVisits
    }
    const getNextLocation = function(places){
        const lowVisitCount = lowestVisitCount(places)
        const travelOptionsLeastVisited = places.filter(place => (locationLog[place]||0)==lowVisitCount)
        return travelOptionsLeastVisited[Math.floor(Math.random()*travelOptionsLeastVisited.length)]
    }
    const travel = function(roadGraph){
        logLocation(this.location)
        const travelOptions = roadGraph[this.location]
        this.location = getNextLocation(travelOptions)
        this.steps ++
        return this.location
    }
    return Object.assign(robotStartsAt("Post Office"), {travel})
};

module.exports = smartRobotFactory