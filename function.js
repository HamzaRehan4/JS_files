//finding max element in an array
const MaxNum = (Input_array) => {
    let max = 0;
    //es6 for loop
    for (const numbers in Input_array){
        if (max < Input_array[numbers])
        {
            max = Input_array[numbers];
        }
    }
    return max;
}
console.log(MaxNum([3, 4, 5, 10]));

//----------------------------------------------------------------//
const maxNum1 = (array) => {
    let maximum = 0;
    //conventional for loop
    for (let i = 0; i < array.length; i++)
    {
        if (maximum < array[i])
        {
            maximum = array[i];
        }
    }
    return maximum;
}

console.log(maxNum1([1, 6, 99, 3]));

//--------------------------------------------------------------//
//claculating the frequency of each element in an array
const calcFrequency = (array) => {
    //creating an object
    let frequency = {};
    for (const numbers of array){
        if (numbers in frequency){
            frequency[numbers] = frequency[numbers]+1;
        }
        else {
            frequency[numbers] = 1;
        }
    }
    return frequency;
}
console.log(calcFrequency([5,5,5,5,5,5]));

//-------------------------------------------------------------//

//calculating the frequncy of characters in a string
const countOccurence = (str) => {
    //creating an object
    let frequency = {};
    
    for (const character of str){
        //prints all the characters in the array
        console.log(character);
        //checks if 
        if (character in frequency){
            frequency[character] += 1;
        }
        else {
            frequency[character] = 1;
        }
    }
    return frequency;
}

console.log(countOccurence('hello! how are you?'))

//-----------------------------------------------------------//

//calculating the frequency of words in a string/line.
const countWord = (line) => {
    let count = {};
    //splits the words in the line on the basis of spaces
    words = line.split(' ');
        console.log(words);
        
        //returns the no.of words in the string
        for(words in words){
          console.log(words);
        }
        
        console.log(typeof(words));
return count;
}
console.log(countWord('hi my name is hamza. i am 22 years old.'));