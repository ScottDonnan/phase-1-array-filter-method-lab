// Code your solution here
const driverNames = ['Scott', 'Jennifer', 'Carol', 'Beth'];
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];


function findMatching (driverArray, driverName) {
    return driverArray.filter(function(name) {
        let lowerCase = driverName.toLowerCase();
        let lowerCaseArray = name.toLowerCase();
        return lowerCaseArray === lowerCase;
    })
}

function fuzzyMatch(driverNameArray, string) {
    return driverNameArray.filter(function (name) {
        return name.includes(string) === true;
    });
}

function matchName(driverObjectArray, string) {
    return driverObjectArray.filter(function(driverObject) {
        return driverObject.name === string;
    });
}