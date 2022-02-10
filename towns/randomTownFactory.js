const createRoadGraph = require("./townFactoryUtils");


const randomTownFactory = (function(mailCount){
    const roadGraph = createRoadGraph([
        "Alice's House-Bob's House",   "Alice's House-Cabin",
        "Alice's House-Post Office",   "Bob's House-Town Hall",
        "Daria's House-Ernie's House", "Daria's House-Town Hall",
        "Ernie's House-Grete's House", "Grete's House-Farm",
        "Grete's House-Shop",          "Marketplace-Farm",
        "Marketplace-Post Office",     "Marketplace-Shop",
        "Marketplace-Town Hall",       "Shop-Town Hall"
    ])
    const createMail = function(qty){
        let mail = []
        const roads = Object.keys(roadGraph)
        let createRandomParcel = function(){
            const from = roads[Math.floor(Math.random()*roads.length)]
            let to = roads[Math.floor(Math.random()*roads.length)]
            while(from == to){
                to = roads[Math.floor(Math.random()*roads.length)]
            }
            return {from, to}
        }
        while(mail.length <qty){
            mail.push(createRandomParcel())
        }
        return mail
    }
    let mail = createMail(mailCount)

    return {roadGraph, mail}
})

module.exports = randomTownFactory