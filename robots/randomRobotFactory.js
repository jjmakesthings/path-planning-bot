const randomRobotFactory = function(){
    let location = 'Post Office'
    let mailbag = []
    let steps = 0
    let deliveriesMade = 0

    const getNextLocation = function(travelOptions){
        return travelOptions[Math.floor(Math.random()*travelOptions.length)]
    }
    const travel = function(roadGraph){
        const travelOptions = roadGraph[this.location]
        this.location = getNextLocation(travelOptions)
        this.steps ++
        return this.location
    }
    return {location, mailbag, steps, deliveriesMade, travel}
};

module.exports = randomRobotFactory

