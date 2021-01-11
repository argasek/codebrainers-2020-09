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
    const x = text.split('-');

    const earlierTimeStamp = x[0];
    const laterTimeStamp = x[1];

    const earlierHoursWithMinutes = earlierTimeStamp.split(':');
    const laterHoursWithMinutes = laterTimeStamp.split(':');

    const earlierHoursMin = [parseInt(earlierHoursWithMinutes[0]), parseInt(earlierHoursWithMinutes[1])];
    const laterHoursMin = [parseInt(laterHoursWithMinutes[0]), parseInt(laterHoursWithMinutes[1])];
    const minutesInHour = 60;

    const earlierTime = earlierHoursMin[0] * minutesInHour + earlierHoursMin[1];
    const laterTime = laterHoursMin[0] * minutesInHour + laterHoursMin[1];

    minutes = laterTime - earlierTime

    return minutes;

};
//  timeRanges.reduce((hours,min) => hours * 60 + min);

const minutes = (workingTime) => {
    let tableOfHours = [];
    let minutes = 0;

    for (let i = 0; i < workingTime.length; i++) {
        tableOfHours = workingTime[i];

        for (let i = 0; i < tableOfHours.length; i++) {
            minutes += timeRangeToMinutes(tableOfHours[i]);
        }
        ;
    }
    ;
    return minutes;
};


//const timeRange = timeRangeToMinutes('11:30-12:32');

const timeRange = minutes(employeeWorkingHours);

const getWorkingTimeAnalysis = (workingMinutes, weeklyWorkingHours = 40) => {


    let days = employeeWorkingHours.length;
    let hours = workingMinutes % 480 / 60;
    let minutes = workingMinutes % 480 % 60;
    let didWorkOvertime = false;
    if (workingMinutes / 60 > weeklyWorkingHours ) {
        didWorkOvertime = true;
    }

    return {
        days: days,
        hours: hours,
        minutes: minutes,
        didWorkOvertime: didWorkOvertime,
    }
    ;

};


const analysis = getWorkingTimeAnalysis(timeRange)
const didWorkOvertime = analysis.didWorkOvertime;
console.log(analysis);
console.log(`The employee spent ${analysis.days} days, ${analysis.hours} hours and ${analysis.minutes} minutes.`);
console.log(`This means that this employee ${didWorkOvertime ? 'did' : 'didn\'t'} overtime`);

