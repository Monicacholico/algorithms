const numbers = [1,5,1];

function findMin (numbers) {
    if(!numbers.length) {
        throw new Error ('Should not be an empty array!');
    }

    let currentMinimum = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < currentMinimum) {
            currentMinimum = numbers[i];
        }
    }

    return currentMinimum;
    
}


function getMin2(numbers) {
    if(!numbers.length) {
        throw new Error('Should nob te an empty array!');
    }

   

    for (let i = 0; i < numbers.lenght; i++) {
        let outerElement = numbers[i];
        for ( let j = i + 1; j < numbers.length; j++) {
            let innerElement = numbers[j];
            if (outerElement > innerElement) {

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


const min = getMin2(numbers);
console.log(min);

