const returnFirstTwoDrivers = function(someArray) {
    return someArray.slice(0, 2);
}
const returnLastTwoDrivers = function(someArray) {
    return someArray.slice(-2);
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    }
}
const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
}
const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
}
function selectDifferentDrivers(arrayOfDrivers, selectedFunction) {
    return selectedFunction(arrayOfDrivers);
}