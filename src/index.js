const employeeWorkingHours = [
    ['11:30-12:30', '16:00-22:00'],
    ['7:15-8:30', '11:30-14:30', '16:00-23:59'],
    ['00:00-01:59'],
    ['6:00-23:00'],
    ['9:15-10:58', '11:30-14:30', '16:00-23:59'],
    ['6:00-23:00'],
    ['00:00-06:59'],
];

let splitter = (text, splitChar) => {
    return text.split(splitChar);
};

let timeIntervalToMinutes = timeInterval => {
    let startTimestamp = (splitter(timeInterval, '-')[0]);
    let endTimestamp = (splitter(timeInterval, '-')[1]);
    let startTimeMinutes = parseInt(splitter(startTimestamp, ':')[0]) * 60 + parseInt(splitter(startTimestamp, ':')[1]);
    let endTimeMinutes = parseInt(splitter(endTimestamp, ':')[0]) * 60 + parseInt(splitter(endTimestamp, ':')[1]);
    return endTimeMinutes - startTimeMinutes;
};

let weekWorkingTimestampsQuantity = employeeWorkingHours.length;
let dayWorkingMinutes = 0;

for (let j = 0; j < weekWorkingTimestampsQuantity; j++) {
    let dayWorkingTimestamps = employeeWorkingHours[j];
    let dayWorkingTimestampsQuantity = dayWorkingTimestamps.length;

    for (let i = 0; i < dayWorkingTimestampsQuantity; i++) {
        dayWorkingMinutes += timeIntervalToMinutes(dayWorkingTimestamps[i]);
        console.log(i, dayWorkingMinutes);
    }
    console.log(j, dayWorkingMinutes);
}


//
// const getWorkingTimeAnalysis = (workingHours, weeklyWorkingHours = 40) => {
//     let days = 0;
//     let hours = 0;
//     let minutes = 0;
//     let didWorkOvertime = false;
//
//     return {
//         days: days,
//         hours: hours,
//         minutes: minutes,
//         didWorkOvertime: didWorkOvertime,
//     }
// };
//
//
// const analysis = getWorkingTimeAnalysis(employeeWorkingHours)
// const didWorkOvertime = analysis.didWorkOvertime;
//
// console.log(`The employee spent ${analysis.days} days, ${analysis.hours} hours and ${analysis.minutes} minutes.`);
// console.log(`This means that this employee ${didWorkOvertime ? 'did' : 'didn\'t'} overtime`);
//
