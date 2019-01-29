// Code your solution in this file
function findMatching(drivers, string) {
    filteredDrivers = []
    for (driver of drivers) {
        if (driver.toLowerCase() === string.toLowerCase()) {
            filteredDrivers.push(driver)
        }
    }
    return filteredDrivers
}

function fuzzyMatch(drivers, string) {
    filteredDrivers = []
    for (driver of drivers) {
        if (driver[0] + driver[1] === string) {
            filteredDrivers.push(driver)
        }
    }
    return filteredDrivers
}

function matchName(drivers, string) {
    return drivers.filter(function (driver) {
        return driver["name"] === string
    })
}


