const failPassAverages = (array = []) => {
    const faillingMarks = array.filter(value => value < 50);
    const passingMarks = array.filter(value => value >= 50);

    const averageFailMark = faillingMarks.reduce(
        (sum, curr) => sum + curr, 0
    ) / faillingMarks.length;

    const averagePassMark = passingMarks.reduce(
        (sum, curr) => sum + curr, 0
    ) / passingMarks.length;

    return [
        isNaN(averageFailMark) ? -1 : Math.round(averageFailMark),
        isNaN(averagePassMark) ? -1 : Math.round(averagePassMark)
    ];

};

console.log(
    failPassAverages([63, 65, 33]),
    failPassAverages([63, 62, 100, 100]),
    failPassAverages([33, 42, 20, 10])
);