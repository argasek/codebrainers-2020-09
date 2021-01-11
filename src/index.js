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

    let hoursAndMinutes = [];
    let minutesTimeStamp = [];


    for (let i = 0; i < x.length; i++) {
        hoursAndMinutes[i] = x[i].split(':')
            .map(item => parseInt(item));

        minutesTimeStamp[i] = hoursAndMinutes[i][0] * 60
            + hoursAndMinutes[i][1];
    }
    ;
    minutes = minutesTimeStamp[1] - minutesTimeStamp[0];
    return minutes;
};

const WeekWorkingMinutes = (WeekHours) => {
    let dayHours = [];
    let sumOfWorkingMinutes = 0;

    for (let i = 0; i < WeekHours.length; i++) {
        dayHours = WeekHours[i];

        for (let y = 0; y < dayHours.length; y++) {
            sumOfWorkingMinutes += timeRangeToMinutes(dayHours[y]);
        }

    }
    ;
    console.log(`Sum of working minutes in the week: ${sumOfWorkingMinutes}`);
    return sumOfWorkingMinutes;
};

const weekTimeRange = WeekWorkingMinutes(employeeWorkingHours);

const getWorkingTimeAnalysis = (workingMinutes, weeklyWorkingHours = 40) => {
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let didWorkOvertime = false;

    const workingDayMinutes = 480;

    days = parseInt(workingMinutes / workingDayMinutes);
    hours = parseInt(workingMinutes % workingDayMinutes / 60);
    minutes = parseInt(workingMinutes % workingDayMinutes * 60);

    if ((workingMinutes / 60) > weeklyWorkingHours) {
        didWorkOvertime = true;
    }

    return {
        days: days,
        hours: hours,
        minutes: minutes,
        didWorkOvertime: didWorkOvertime,
    }
};

const analizeOfTime = getWorkingTimeAnalysis(weekTimeRange);
const didWorkOvertime = analizeOfTime.didWorkOvertime;

console.log(`This employee works ${analizeOfTime.days} days, ${analizeOfTime.hours} hours
            and ${analizeOfTime.minutes} minutes.`);
console.log(`Means, ${didWorkOvertime ? 'did' : 'didn\'t'} overtime`);

    // const earlierHoursWithMinutes = earlierTimeStamp.split(':');
    // let earlierHoursForMinutes = [parseInt(earlierHoursWithMinutes[0]),parseInt(earlierHoursWithMinutes[1])]
    // let sumOfEarlierMinutes = earlierHoursForMinutes[0] * 60 + earlierHoursForMinutes[1];
    // console.log(sumOfEarlierMinutes);
    //
    // const laterTimeStamp = x[1];
    // const laterHoursWithMinutes = laterTimeStamp.split(':');
    // let laterHoursForMinutes = [parseInt(laterHoursWithMinutes[0]),parseInt(laterHoursWithMinutes[1])];
    // let sumOfLaterMinutes = laterHoursForMinutes[0] * 60 + laterHoursForMinutes[1];
    // console.log(sumOfLaterMinutes)

    // console.log(earlierHoursForMinutes);
    // console.log(laterTimeStamp)
    // console.log(earlierHoursWithMinutes);
    // console.log(laterHoursWithMinutes);

    // minutes = sumOfLaterMinutes - sumOfEarlierMinutes;
    // return minutes;


