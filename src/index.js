const employeeWorkingHours = [
    [ '11:30-12:30', '16:00-22:00' ],
    [ '7:15-8:30', '11:30-14:30', '16:00-23:59' ],
    [ '00:00-01:59' ],
    [ '6:00-23:00' ],
    [ '9:15-10:58', '11:30-14:30', '16:00-23:59' ],
    [ '6:00-23:00' ],
    [ '00:00-06:59' ],
];

const toMinutes = hours => hours * 60;

const timestampToMinutes = timestamp => timestamp
    .split(':')
    .map(x => parseInt(x))
    .reduce((acc, next) => toMinutes(acc) + next);

const timestampRangeToMinutes = timestampRange => timestampRange
    .split('-')
    .map(timestampToMinutes)
    .reduce((a, b) => b - a);

const businessDayMapReducer = businessDay => businessDay
    .map(timestampRangeToMinutes)
    .reduce((businessDayMinutes, timeRange) => businessDayMinutes + timeRange, 0)

const getWorkingTimeAnalysis = (businessDays, weeklyWorkingHours = 40) => {
    const totalMinutes = businessDays
        .map(businessDayMapReducer)
        .reduce((result, businessDayMinutes) => result + businessDayMinutes);

    const minutesInAnHour = 60;
    const minutesInOneDay = 24 * minutesInAnHour;

    const maximumMinutes = weeklyWorkingHours * minutesInAnHour;

    const didWorkOvertime = totalMinutes > maximumMinutes;

    const days = Math.floor(totalMinutes / minutesInOneDay);
    const hours = Math.floor((totalMinutes % minutesInOneDay) / minutesInAnHour);
    const minutes = (totalMinutes % minutesInOneDay) % minutesInAnHour;

    return {
        days: days,
        hours: hours,
        minutes: minutes,
        didWorkOvertime: didWorkOvertime,
    };
};


const analysis = getWorkingTimeAnalysis(employeeWorkingHours);
const didWorkOvertime = analysis.didWorkOvertime;

console.log(`The employee spent ${ analysis.days } days, ${ analysis.hours } hours and ${ analysis.minutes } minutes.`);
console.log(`This means that this employee ${ didWorkOvertime ? 'did' : 'didn\'t' } overtime`);

