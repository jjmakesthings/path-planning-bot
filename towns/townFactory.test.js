const randomTownFactory = require("./randomTownFactory")

test("random town builds as expected", ()=>{
    let town = randomTownFactory(6)
    let properties = Object.keys(town)
    expect(properties).toStrictEqual(['roadGraph', 'mail'])
})

test.skip("random town creates correct pieces of mail", ()=>{
    let town = randomTownFactory(6)
    expect(town.mail.length).toBe(6)
})



