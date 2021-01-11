const employeeWorkingHours = [
    ['11:30-12:30', '16:00-22:00'],
    ['7:15-8:30', '11:30-14:30', '16:00-23:59'],
    ['00:00-01:59'],
    ['6:00-23:00'],
    ['9:15-10:58', '11:30-14:30', '16:00-23:59'],
    ['6:00-23:00'],
    ['00:00-06:59'],
];


const timeRangeToMinutes = (text) => {
    let minutes = 0;
    let x = text.split('-');
    const earlierTimeStamp = x[0];

    const earlierHoursWithMinutes = earlierTimeStamp.split(':');
    let earlierHoursForMinutes = [parseInt(earlierHoursWithMinutes[0]),parseInt(earlierHoursWithMinutes[1])]
    let sumOfEarlierMinutes = earlierHoursForMinutes[0] * 60 + earlierHoursForMinutes[1];
    console.log(sumOfEarlierMinutes);

    const laterTimeStamp = x[1];
    const laterHoursWithMinutes = laterTimeStamp.split(':');
    let laterHoursForMinutes = [parseInt(laterHoursWithMinutes[0]),parseInt(laterHoursWithMinutes[1])];
    let sumOfLaterMinutes = laterHoursForMinutes[0] * 60 + laterHoursForMinutes[1];
    console.log(sumOfLaterMinutes)

    // console.log(earlierHoursForMinutes);
    // console.log(laterTimeStamp)
    // console.log(earlierHoursWithMinutes);
    // console.log(laterHoursWithMinutes);

    minutes = sumOfLaterMinutes - sumOfEarlierMinutes;
    return minutes;

};
// console.log(employeeWorkingHours)



const getWorkingTimeAnalysis = (workingHours, weeklyWorkingHours = 40) => {
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let didWorkOvertime = false;

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

