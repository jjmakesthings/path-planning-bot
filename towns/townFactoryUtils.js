const createRoadGraph = function(arr){
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
}

module.exports = createRoadGraph