export const searchStatus = (number) => {
    const lastNumber = Number(number.toString().slice(-1));
    if (lastNumber === 1) return 'Человек тусанёт'
    if (number > 4 && number < 15) return 'Человек тусанёт'
    if ([2,3,4].indexOf(lastNumber) >= 0) return 'Человека тусанут'
    return 'Человек тусанёт'
}

