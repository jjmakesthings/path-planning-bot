const randomRobotFactory = require("./randomRobotFactory")
const smartRobotFactory = require("./smartRobotFactory")

test("random robot builds as expected", ()=>{
    let robot = randomRobotFactory()
    let properties = Object.keys(robot)
    expect(properties).toStrictEqual(['location', 'mailbag', 'steps', 'deliveriesMade', 'travel'])
})

test("random robot travel goes to Park from Post Office", ()=>{
    let robot = randomRobotFactory()
    let roadGraph= {
        "Post Office":["Park"],
        "Park":["Post Office"]
    }
    expect(robot.travel(roadGraph)).toBe("Park")
})



test("smart robot builds as expected", ()=>{
    let robot = smartRobotFactory()
    let properties = Object.keys(robot)
    expect(properties).toStrictEqual(['location', 'mailbag', 'steps', 'deliveriesMade', 'travel'])
})

test("smart robot travel goes to Park from Post Office", ()=>{
    let robot = randomRobotFactory()
    let roadGraph= {
        "Post Office":["Park"],
        "Park":["Post Office"]
    }
    expect(robot.travel(roadGraph)).toBe("Park")
})