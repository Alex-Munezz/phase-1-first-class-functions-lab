const returnFirstTwoDrivers = ['mainDriver', 'secondDriver', 'thirdDriver']
console.log(returnFirstTwoDrivers)

for(let index = 0;index<=returnFirstTwoDrivers.length-2; index++)
console.log(returnFirstTwoDrivers[index])



const returnLastTwoDrivers = ['mainDriver', 'secondDriver', 'thirdDriver']
console.log(returnLastTwoDrivers)


for(let index = 0;index<=secondDriver.length-1; index++)
console.log(returnLastTwoDrivers[index])

function createFareMultiplier(int) {
    return function(fare=5) {
        return fare * int;
    }
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(driversArray, fn) {
    return fn(driversArray);
}

