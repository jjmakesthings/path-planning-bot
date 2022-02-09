const randomRobotFactory = function(){
    let location = 'Post Office'
    let mailbag = []
    let steps = 0
    let deliveriesMade = 0
    let travel = function(roadGraph){
        let travelOptions = roadGraph[this.location]
        let travelTo = travelOptions[Math.floor(Math.random()*travelOptions.length)]
        while(travelTo == this.location){
        travelTo = travelOptions[Math.floor(Math.random()*travelOptions.length)]
        }
        this.location = travelTo
        this.steps ++
        return travelTo
    }
    return {location, mailbag, steps, deliveriesMade, travel}
};

module.exports = randomRobotFactory