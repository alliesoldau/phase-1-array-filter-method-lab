function findMatching(names, comparator) {
    let matchingList = names.filter(element => element.toLowerCase() === comparator.toLowerCase())
    return matchingList
  }

function fuzzyMatch(driver, letters) {
    let letterLength = letters.length
    let letterMatches = driver.filter(function(name) {
        return (name.slice(0, letterLength) === letters) // use slice to grab just the part of the drivers name that is the length of the letters
    })
    return letterMatches
}

function matchName(driver, string) {
    return driver.filter(info => info.name === string)
}