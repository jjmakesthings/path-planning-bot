
const {stepsToCompleteMailJob, simulateMailJob} = require("./sim")
const mockRobotFactory = require("./robots/mockRobotFactory")
const mockTownFactory = require("./towns/mockTownFactory")

test("Steps to complete mail job runs with positive integers", ()=>{
    expect(stepsToCompleteMailJob(mockRobotFactory, mockTownFactory, 2)).toBe(2)
})


test("simulate mail job runs with positive integers", ()=>{
    expect(simulateMailJob(10, mockRobotFactory, mockTownFactory, 2)).toBe(2)
})


