function getType() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, NaN, 'str', null];

    let even = 0,
        odd = 0,
        zero = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            if (arr[i] % 2 === 0) {
                even++;
            } else {
                odd++;
            }
            if (arr[i] === 0) {
                zero++;
            }
        }
    }

    console.log(`Количество нулей: ${zero}, Количество нечетных элементов: ${odd}, Количество четных элементов: ${even}`);
}

getType()