const smartRobotFactory = function(){
    //when choosing where to travel, robot will choose from least visited locations
    let location = 'Post Office'
    let mailbag = []
    let steps = 0
    let deliveriesMade = 0
    let locationLog = {}
    const highestVisitCount = function(locations){
        let mostVisits = 0
        locations.forEach(place=>{
        mostVisits = Math.max(mostVisits, locationLog[place]||0)
        })
        return mostVisits
    }
    const lowestVisitCount = function(locations){
        let leastVisits = Infinity
        locations.forEach(place=>{
        leastVisits = Math.min(leastVisits, locationLog[place]||0)
        })
        return leastVisits
    }
    const travel = function(roadGraph){
        if (locationLog[this.location]) {
            locationLog[this.location]++
        } else {
            locationLog[this.location] = 1
        }
        let travelOptions = roadGraph[this.location]
        let travelTo = travelOptions[Math.floor(Math.random()*travelOptions.length)]
        while(
            (0 || locationLog[travelTo]) === highestVisitCount(travelOptions) && 
            lowestVisitCount(travelOptions) !== highestVisitCount(travelOptions)
        ){
            travelTo = travelOptions[Math.floor(Math.random()*travelOptions.length)]
        }
        this.location = travelTo
        this.steps ++
        return travelTo
    }
    return {location, mailbag, steps, deliveriesMade, travel}
};

module.exports = smartRobotFactory