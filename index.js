const drivers = ["Erick", "Lion", "Mark", "Alex"];

function returnFirstTwoDrivers() {

  const newDrivers = drivers.slice(0, 2);

  return newDrivers;

}

function returnLastTwoDrivers() {

  const lastTwo = drivers.slice(2);

  return lastTwo;

}

function returnFirstTwoDrivers(drivers) {

    return drivers.slice(0, 2);

  }




  function returnLastTwoDrivers(drivers) {

    return drivers.slice(-2);

  }




  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {

    return function fareMultipler(fare){

        return fare*multiplier;

    }

}

function fareDoubler(fare) {

    return fare *2

}

function fareTripler(fare) {

return fare*3;

}

function selectDifferentDrivers(arrayOfDrivers, driverSelector) {

    return driverSelector(arrayOfDrivers);

  }
