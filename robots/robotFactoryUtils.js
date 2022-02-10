const robotStartsAt = function(startingLocation) {
    return {
        location: startingLocation,
        mailbag: [],
        steps: 0,
        deliveriesMade: 0,
    }
}

module.exports = robotStartsAt