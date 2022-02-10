const mockRobotFactory = function(){
    mockRobot = {
        location: "Post Office",
        mailbag: [],
        steps: 0,
        deliveriesMade: 0,
        travel(roadGraph){
            this.location = roadGraph[this.location][0]
            this.steps ++
            return this.location
        }
    }
    return mockRobot
}

module.exports = mockRobotFactory