const uniqueArray = (array = []) => {
    const newArray = array.filter((value, index) => {
        const indexOfValueInOriginalArray = array.findIndex(
            (v, i) => v === value && i !== index
        );

        return indexOfValueInOriginalArray === -1;
    });

    console.log(newArray);
};

uniqueArray([33]);
uniqueArray([33, 33, 1, 4]);
uniqueArray([33, 33, 1, 4, 1]);