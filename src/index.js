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
    const earlierHoursWithMinutes= earlierTimeStamp.split(':')
    const earlierHoursWithMinutesAsInt = [parseInt(earlierHoursWithMinutes[0]), parseInt(earlierHoursWithMinutes[1])];
    const earlierHoursWithMinutesAsIntFormMidnight = (earlierHoursWithMinutesAsInt[0])* 60 + (earlierHoursWithMinutesAsInt[1]);

    const laterTimeStamp = x[1];
    const laterHoursWithMinutes= laterTimeStamp.split(':');
    const laterHoursWithMinutesAsInt = [parseInt(laterHoursWithMinutes[0]), parseInt(laterHoursWithMinutes[1])];
    const laterHoursWithMinutesAsIntFormMidnight = (laterHoursWithMinutesAsInt[0])* 60 + (laterHoursWithMinutesAsInt[1]);

    minutes = laterHoursWithMinutesAsIntFormMidnight - earlierHoursWithMinutesAsIntFormMidnight;

    return minutes;

};

const timeRange = timeRangeToMinutes(employeeWorkingHours[0][1]);
console.log(timeRange);













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

