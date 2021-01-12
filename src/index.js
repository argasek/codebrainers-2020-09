const employeeWorkingHours = [
    ['11:30-12:30', '16:00-22:00'],
    ['7:15-8:30', '11:30-14:30', '16:00-23:59'],
    ['00:00-01:59'],
    ['6:00-23:00'],
    ['9:15-10:58', '11:30-14:30', '16:00-23:59'],
    ['6:00-23:00'],
    ['00:00-06:59'],
];

let timeRange;

const timeRangeToMinutes = (text) => {
    let minutes = 0;
    let x = text.split('-');

    const earlierTimeStamp = x[0];
    const laterTimeStamp = x[1];

    const earlierHoursWithMinutes = earlierTimeStamp.split(':');
    const laterHoursWithMinutes = laterTimeStamp.split(':');

    const earlierTimeInt = [
        parseInt(earlierHoursWithMinutes[0]),
        parseInt(earlierHoursWithMinutes[1])
    ];
    const laterTimeInt = [
        parseInt(laterHoursWithMinutes[0]),
        parseInt(laterHoursWithMinutes[1])
    ];

    const earlierTimeFromMidnight = (earlierTimeInt[0]) * 60 + (earlierTimeInt[1]);
    const laterTimeFromMidnight = (laterTimeInt[0]) * 60 + (laterTimeInt[1]);

    console.log(earlierTimeInt);
    console.log(laterTimeInt);

    minutes = laterTimeFromMidnight - earlierTimeFromMidnight;

    return minutes;
};

let minutesPerDayArr = [],
    minutesPerDay,
    hoursPerDay;

for (let i = 0; i < employeeWorkingHours.length; i++) {
    let workingHours = [];
    for (let y = 0; y < employeeWorkingHours[i].length; y++) {
        let realWorkHours;
        realWorkHours = employeeWorkingHours[i][y];
        timeRange = timeRangeToMinutes(realWorkHours);
        console.log(realWorkHours);
        workingHours.push(timeRange);
    }
    minutesPerDay = workingHours.reduce((a, b) => a + b);
    console.log(minutesPerDay);
    minutesPerDayArr.push(minutesPerDay);
    hoursPerDay = Math.floor(minutesPerDayArr[i] / 60);
    console.log(hoursPerDay);
}
console.log(minutesPerDayArr);

let weeklyWorkingMinutes = (minutesPerDayArr.reduce((a, b) => a + b));
console.log(weeklyWorkingMinutes);
let weeklyWorkHours = Math.floor(weeklyWorkingMinutes / 60);
console.log(weeklyWorkHours);


const getWorkingTimeAnalysis = (workingHours, weeklyWorkingHours = 40) => {
    // let days = employeeWorkingHours.length;
    let days = Math.floor(weeklyWorkHours / 24);
    let hours = weeklyWorkHours % 24;
    let minutes = weeklyWorkingMinutes % 60;
    let didWorkOvertime = false;
    if (weeklyWorkHours > weeklyWorkingHours) {
        didWorkOvertime = true;
    }


    return {
        days: days,
        hours: hours,
        minutes: minutes,
        didWorkOvertime: didWorkOvertime,
    }
};


const analysis = getWorkingTimeAnalysis(employeeWorkingHours)
const didWorkOvertime = analysis.didWorkOvertime;

console.log(`The employee spent ${analysis.days} days, ${analysis.hours} hours and ${analysis.minutes} minutes.`);
console.log(`This means that this employee ${didWorkOvertime ? 'did' : 'didn\'t'} overtime`);

