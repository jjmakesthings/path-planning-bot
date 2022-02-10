const randomTownFactory = (function(roads, mailCount){
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