function getTypeNumber(n) {
    if (n > 1 && n <= 1000) {
        console.log('Данные неверны');
    } else {
        //проверка простое ли число
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                console.log('число составное');
                return;
            }
        }
        console.log('число простое');
    }
    
}

getTypeNumber(5);