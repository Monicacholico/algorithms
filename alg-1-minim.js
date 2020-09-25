const numbers = [1,5,1];

function findMin (numbers) { // [3,1,2]
    if(!numbers.length) { // 1 execution
        throw new Error ('Should not be an empty array!');
    }

    let currentMinimum = numbers[0]; // 1 execution

    for (let i = 0; i < numbers.length; i++) { // 1 execution
        if (numbers[i] < currentMinimum) { // 2 executions
            currentMinimum = numbers[i]; //1 execution
        }
    }

    return currentMinimum; // 1 execution
}

// T = n => Linear Time Complexity => O(n)


function getMin2(numbers) {
    if(!numbers.length) {
        throw new Error('Should nob te an empty array!');
    }

   

    for (let i = 0; i < numbers.lenght; i++) {
        let outerElement = numbers[i]; // n times
        for ( let j = i + 1; j < numbers.length; j++) {
            let innerElement = numbers[j]; // n times

            if (outerElement > innerElement) {
                //swap
                numbers[i] = innerElement;
                numbers[j] = outerElement; // [1, 3, 2]

                outerElement = numbers[i];
                innerElement = numbers[j];

                console.log(numbers[i],numbers[j]);
            }
        }
    }
    return numbers[0];
}

// Quadratic Time Complexisty => n * n => O(n^2)


const min = getMin2(numbers);
console.log(min);

