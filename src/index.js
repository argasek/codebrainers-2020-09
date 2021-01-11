const employeeWorkingHours = [
    ['11:30-12:30', '16:00-22:00'],
    ['7:15-8:30', '11:30-14:30', '16:00-23:59'],
    ['00:00-01:59'],
    ['6:00-23:00'],
    ['9:15-10:58', '11:30-14:30', '16:00-23:59'],
    ['6:00-23:00'],
    ['00:00-06:59'],
];

const hourInMinutes = 60;

const timeRangeToMinutes = (text) => {
    let minutes = 0;
    let x = text.split('-');

    let hoursWithMinutes = [];
    let minutesTimeStamp = [];

    const beginPeriodOfTime = 0;
    const endPeriodOfTime = 1;

    for (let i = 0; i < x.length; i++) {
        hoursWithMinutes[i] = x[i].split(':')
            .map(item => parseInt(item));

        const hoursPosition = 0;
        const minutesPosition = 1;

        minutesTimeStamp[i] = hoursWithMinutes[i][hoursPosition] * hourInMinutes
            + hoursWithMinutes[i][minutesPosition];
    }
    ;
    minutes = minutesTimeStamp[endPeriodOfTime] - minutesTimeStamp[beginPeriodOfTime];
    return minutes;
};

const fullWeekWorkingMinutes = (employeeWeekHours) => {
    let dayHours = [];
    let sumOfWorkingMinutes = 0;

    for (let iWeek = 0; iWeek < employeeWeekHours.length; iWeek++) {
        dayHours = employeeWeekHours[iWeek];

        for (let iDay = 0; iDay < dayHours.length; iDay++) {
            sumOfWorkingMinutes += timeRangeToMinutes(dayHours[iDay]);
        }
        ;
    }
    ;
    console.log(`Sum of working minutes in the week: ${sumOfWorkingMinutes}`);
    return sumOfWorkingMinutes;
};

const weekTimeRange = fullWeekWorkingMinutes(employeeWorkingHours);

const getWorkingTimeAnalysis = (workingMinutes, weeklyWorkingHours = 40) => {
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let didWorkOvertime = false;

    const workingDayMinutes = 480;

    days = parseInt(workingMinutes / workingDayMinutes);
    hours = parseInt(workingMinutes % workingDayMinutes / hourInMinutes);
    minutes = parseInt(workingMinutes % workingDayMinutes % hourInMinutes);

    if ((workingMinutes / hourInMinutes) > weeklyWorkingHours) {
        didWorkOvertime = true;
    }

    return {
        days: days,
        hours: hours,
        minutes: minutes,
        didWorkOvertime: didWorkOvertime,
    }
};

const analysis = getWorkingTimeAnalysis(weekTimeRange);
const didWorkOvertime = analysis.didWorkOvertime;

console.log(`The employee spent ${analysis.days} days, ${analysis.hours} hours
            and ${analysis.minutes} minutes.`);
console.log(`This means that this employee ${didWorkOvertime ? 'did' : 'didn\'t'} overtime`);
