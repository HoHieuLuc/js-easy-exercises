const _six = (grade) => {
    let letterGrade = '';
    if (grade >= 90) {
        letterGrade = 'A+';
    }
    else if (grade >= 85) {
        letterGrade = 'A';
    }
    else if (grade >= 80) {
        letterGrade = 'A';
    }
    else if (grade >= 76) {
        letterGrade = 'B+';
    }
    else if (grade >= 73) {
        letterGrade = 'B';
    }
    else if (grade >= 70) {
        letterGrade = 'B-';
    }
    else if (grade >= 66) {
        letterGrade = 'C+';
    }
    else if (grade >= 63) {
        letterGrade = 'C';
    }
    else if (grade >= 60) {
        letterGrade = 'C-';
    }
    else if (grade >= 56) {
        letterGrade = 'D+';
    }
    else if (grade >= 53) {
        letterGrade = 'D';
    }
    else if (grade >= 50) {
        letterGrade = 'D-';
    }
    else {
        letterGrade = 'F';
    }

    if (grade >= 50) {
        console.log(`Congratulations, you passed the course. Your final grade is grade = '${letterGrade}'`);
    } else {
        console.log(`Unfortunately, you did not meet the minimum requirement to pass the course. your final grade is: grade = '${letterGrade}'`);
    }
};

_six(93);
_six(39);