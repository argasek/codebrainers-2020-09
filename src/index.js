const employeeWorkingHours = [
    ['10:12-12:30', '16:03-22:00'],
    ['7:15-8:30', '11:30-14:30', '16:00-23:59'],
    ['00:00-01:59'],
    ['6:00-23:00'],
    ['9:15-10:58', '11:30-14:30', '16:00-23:59'],
    ['6:00-23:02'],
    ['00:00-08:59'],
];
//zmiana testowa

let timeRange;
const timeRangeToMinutes = (text) => {
    let minutes = 0;
    let x = text.split('-');

    const earlierTimeStamp = x[0];
    const earlierHoursWithMinutes = earlierTimeStamp.split(':')
    const earlierHoursWithMinutesAsInt = [parseInt(earlierHoursWithMinutes[0]), parseInt(earlierHoursWithMinutes[1])];
    const earlierHoursWithMinutesAsIntFromMidnight = (earlierHoursWithMinutesAsInt[0]) * 60 + (earlierHoursWithMinutesAsInt[1]);

    const laterTimeStamp = x[1];
    const laterHoursWithMinutes = laterTimeStamp.split(':');
    const laterHoursWithMinutesAsInt = [parseInt(laterHoursWithMinutes[0]), parseInt(laterHoursWithMinutes[1])];
    const laterHoursWithMinutesAsIntFromMidnight = (laterHoursWithMinutesAsInt[0]) * 60 + (laterHoursWithMinutesAsInt[1]);

    minutes = laterHoursWithMinutesAsIntFromMidnight - earlierHoursWithMinutesAsIntFromMidnight;

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

    dailyMinutes =workingHoursIntList.reduce((a, b)=>a+b);
    dailyMinutesTable.push(dailyMinutes);
    dailyHours = dailyMinutesTable[i]/60;

    // console.log(dailyMinutes);
    console.log(dailyHours);
    // console.log(dailyMinutesTable);
}

let weekTotalMinutes;
weekTotalMinutes = dailyMinutesTable.reduce((a,b)=> a+b);
let weeklyWorkingHours=40;
let overtime;
const getWorkingTimeAnalysis = (givenUnitsOfTime, weeklyWorkingHours = 40) => {
    let days = employeeWorkingHours.length;
    let hours = weekTotalMinutes/60;
    let minutes = dailyMinutesTable.reduce(function (a,b) {return a+b;},0)
    let didWorkOvertime = false;
    overtime = hours - weeklyWorkingHours;

    weeklyWorkingHours < hours ? didWorkOvertime = true :  didWorkOvertime = false;
    return {
        days: days,
        hours: hours,
        minutes: minutes,
        didWorkOvertime: didWorkOvertime,
        overtime: overtime,
    }
};

console.log(getWorkingTimeAnalysis(weekTotalMinutes, 40));

const analysis = getWorkingTimeAnalysis(employeeWorkingHours);
const didWorkOvertime = analysis.didWorkOvertime;

console.log(`The employee spent ${analysis.days} days, ${analysis.hours} hours and ${analysis.minutes} minutes.`);
console.log(`This means that this employee ${didWorkOvertime ? 'did' : 'didn\'t'} overtime`);

console.log(`======================================================================`)
console.log(`Employee working time given in minutes and hours for: `)

for(let i=0; i<employeeWorkingHours.length;i++){
   console.log(`Day ${i+1}: ${dailyMinutesTable[i]} minutes in total, which is ${(dailyMinutesTable[i]/60).toFixed([2])} hours.
   => ${Math.floor(dailyMinutesTable[i]/60)}h and ${dailyMinutesTable[i]%60} minutes`);
};

console.log(`Allowed amount of working hours per week is ${weeklyWorkingHours} hours. The employee worked this week for
${Math.floor(analysis.minutes/60)}h and ${analysis.minutes%60} minutes.
Which gives ${Math.floor(overtime)} hours and ${(overtime*60)%60} minutes of overtime.` )
