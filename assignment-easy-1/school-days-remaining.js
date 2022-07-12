const _eight = () => {
    const currentDate = new Date();
    const lastDayOfSchool = new Date(currentDate.getFullYear(), 9, 31);

    const daysRemaining = lastDayOfSchool.getTime() - currentDate.getTime();

    const days = Math.floor(daysRemaining / (1000 * 60 * 60 * 24));
    
    console.log(`Current date = ${currentDate.toLocaleDateString('vi-VN')}, last day of school = ${lastDayOfSchool.toLocaleDateString('vi-VN')}. The days left until the end of school = ${days} days.`);
};

_eight();