const employeeWorkingHours = [
    ['10:12-12:30', '16:03-22:00'],
    ['7:15-8:30', '11:30-14:30', '16:00-23:59'],
    ['00:00-01:59'],
    ['6:00-23:00'],
    ['9:15-10:58', '11:30-14:30', '16:00-23:59'],
    ['6:00-23:02'],
    ['00:00-08:59'],
];


// for (let i = 0; i < employeeWorkingHours.length; i++) {
//     for (let y = 0; y < employeeWorkingHours[i].length; y++) {

// let listOf = [];


// console.log(dataArguments);
let timeRange;
const timeRangeToMinutes = (text) => {
    let minutes = 0;
    let x = text.split('-');

    const earlierTimeStamp = x[0];
    const earlierHoursWithMinutes = earlierTimeStamp.split(':')
    const earlierHoursWithMinutesAsInt = [parseInt(earlierHoursWithMinutes[0]), parseInt(earlierHoursWithMinutes[1])];
    const earlierHoursWithMinutesAsIntFormMidnight = (earlierHoursWithMinutesAsInt[0]) * 60 + (earlierHoursWithMinutesAsInt[1]);

    const laterTimeStamp = x[1];
    const laterHoursWithMinutes = laterTimeStamp.split(':');
    const laterHoursWithMinutesAsInt = [parseInt(laterHoursWithMinutes[0]), parseInt(laterHoursWithMinutes[1])];
    const laterHoursWithMinutesAsIntFormMidnight = (laterHoursWithMinutesAsInt[0]) * 60 + (laterHoursWithMinutesAsInt[1]);

    minutes = laterHoursWithMinutesAsIntFormMidnight - earlierHoursWithMinutesAsIntFormMidnight;

    return minutes;

};
let dailyMinutesTable =[];
let dailyMinutes;
let dailyHours;
for (let i = 0; i < employeeWorkingHours.length; i++) {
    let workingHoursIntList = [];
    for (let y = 0; y < employeeWorkingHours[i].length; y++) {
        let dataArguments;
        dataArguments = employeeWorkingHours[i][y];
        timeRange = timeRangeToMinutes(dataArguments);
        workingHoursIntList.push(timeRange);
    }
    console.log(workingHoursIntList);

    dailyMinutes =workingHoursIntList.reduce(function(a, b){
        return a+b;
    },0 );
    dailyMinutesTable.push(dailyMinutes);

    dailyHours = dailyMinutes/60;

    console.log(dailyMinutes);
    console.log(dailyHours);
    console.log(dailyMinutesTable);
}

let weekTotalMinutes;
weekTotalMinutes = dailyMinutesTable.reduce(function (a,b) {
    return a+b;

},0);
console.log(weekTotalMinutes);

let weekTotalHours;
weekTotalHours = (weekTotalMinutes/60).toFixed([2]);
console.log(weekTotalHours);

let numberOfDays;
numberOfDays = employeeWorkingHours.length;
console.log(numberOfDays);

const getWorkingTimeAnalysis = (givenUnitsOfTime, weeklyWorkingHours = 40) => {
    let days = numberOfDays;
    let hours = weekTotalHours;
    let minutes = weekTotalMinutes;
    let didWorkOvertime = false;
    if(weeklyWorkingHours < weekTotalHours){
        didWorkOvertime = true;
    } else{
       didWorkOvertime = false;
    }

    return {
        days: days,
        hours: hours,
        minutes: minutes,
        didWorkOvertime: didWorkOvertime,
    }
};

console.log(getWorkingTimeAnalysis(weekTotalMinutes, 100))

const analysis = getWorkingTimeAnalysis(employeeWorkingHours)
const didWorkOvertime = analysis.didWorkOvertime;

console.log(`The employee spent ${analysis.days} days, ${analysis.hours} hours and ${analysis.minutes} minutes.`);
console.log(`This means that this employee ${didWorkOvertime ? 'did' : 'didn\'t'} overtime`);

