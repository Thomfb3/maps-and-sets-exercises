// Maps and Sets Exercise

//1. Quick Question #1
// What does the following code return?
const newSet = new Set([1,1,2,2,3,4])
//returns a set object with unique items only
const setArr = [...newSet] // array contains [1,2,3,4]


//2. Quick Question #2
// What does the following code return?
const ref = [...new Set("referee")].join("");
// output returns the "referee" string without the duplicate characters = "ref" '\;



//3. Quick Questions #3
// What does the Map m look like after running the following code?
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

//This will create a map object with 2 Entries, Each entry will have an array as a key and boolean as a value
// Map(2) {
//     [1,2,3] => true,
//     [1,2,3] => false
// }


// hasDuplicate
//Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

function hasDuplicate(arr) {
    const newSet = new Set(arr);
    return (arr.length > newSet.size) ? true : false;
}

//More succinct soluction shown in Springboard exercise solution
const hasDuplicateSolution = arr => new Set(arr).size !== arr.length;


// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

function vowelCount(str) {
    str = str.toLowerCase();
    const vowelMap = new Map();

    for(char of str) {
        if('aeiou'.includes(char)) {
            if(!vowelMap.get(char)) {
                vowelMap.set(char, 1);
            } else {
                vowelMap.set(char, vowelMap.get(char) + 1);
            }
        }
    }
    return vowelMap;
}


    