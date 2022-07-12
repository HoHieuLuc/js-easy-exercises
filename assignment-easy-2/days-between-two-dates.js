const daysBetweenTwoDates = (firstDateString = '', secondDateString = '') => {
    const firstDate = new Date(firstDateString);
    const secondDate = new Date(secondDateString);

    const oneDayInMilliseconds = 1000 * 60 * 60 * 24;

    return Math.abs(Math.floor((firstDate.getTime() - secondDate.getTime()) / oneDayInMilliseconds));
};

console.log(
    daysBetweenTwoDates('June 14, 2021', 'June 20, 2021'),
    daysBetweenTwoDates("December 29, 2021", "January 1, 2022"),
    daysBetweenTwoDates("July 20, 2021", "July 30, 2021")
);