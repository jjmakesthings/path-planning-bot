const randomTownFactory = (function(roads){
    let mail = []
    const roadGraph = (function(arr){
            const graph = arr.reduce((obj, road)=>{
            let [from, to] = road.split("-")
            if (!obj[from]){
                obj[from] = [to]
            } else {
                obj[from].push(to)
            }
            if (!obj[to]){
                obj[to] = [from]
            } else {
                obj[to].push(from)
            }
            return obj
        },{})
        return graph
    }(roads))

    let createMail = function(qty, graph=roadGraph){
        let mail = []
        let createRandomParcel = function(graph){
            const roads = Object.keys(graph)
            const from = roads[Math.floor(Math.random()*roads.length)]
            let to = roads[Math.floor(Math.random()*roads.length)]
            while(from == to){
                to = roads[Math.floor(Math.random()*roads.length)]
            }
            return {from, to}
        }
        while(mail.length <qty){
            mail.push(createRandomParcel(graph))
        }
        this.mail = mail
    }
    return {roadGraph, createMail, mail}
})

module.exports = randomTownFactory