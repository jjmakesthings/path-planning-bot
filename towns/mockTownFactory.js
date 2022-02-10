const mockTownFactory = function(mailCount){
    mockTown = {
        roadGraph: {
            "Post Office":["Park"],
            "Park":["Post Office"]
        },
        mail:[
            {to:"Park", from:"Post Office"},
            {to:"Post Office", from:"Park"}
        ]
    }
    return mockTown
}

module.exports = mockTownFactory