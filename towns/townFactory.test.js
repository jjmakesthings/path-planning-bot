const randomTownFactory = require("./randomTownFactory")
const createRoadGraph = require("./townFactoryUtils")

test("create road graph happy path", ()=>{
    roads = ["Post Office-Park"]
    roadGraph= {
        "Post Office":["Park"],
        "Park":["Post Office"]
    }
    expect(createRoadGraph(roads)).toStrictEqual(roadGraph)
})

test("random town builds as expected", ()=>{
    let town = randomTownFactory(6)
    let properties = Object.keys(town)
    expect(properties).toStrictEqual(['roadGraph', 'mail'])
})

test("random town creates correct pieces of mail", ()=>{
    let town = randomTownFactory(6)
    expect(town.mail.length).toBe(6)
})



