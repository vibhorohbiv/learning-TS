/////////// Variables
// In typescript let can only be defined of the same type as the one during initialization 
var hello = 'world';
hello = 'world1';
///////////// Functions 
var getFullName = function (name, surname) {
    return name + " " + surname;
};
var user1 = {
    name: 'Jack',
    age: 23,
    getMessage: function () {
        return "Hello" + name;
    }
};
// this would give error saying that user2 does not have age field but since it is not mandatory it wont
// const user2: User = {
//     name : 'Jhon'
// }  
////////////// Union and Type Alias
//  Union Tyype (|) when more than one data type can be assigned 
// Union is operator to combine data types 
var pageName = 1;
var errorMessage = null;
var user = null;
var popularTags = ['dragon', 'coffe'];
/////////////////// Any/ void/ Never/ Unknown
// because this function does not return anything it returns void 
var doSomething = function () {
    console.log('hello');
    //  return 1; // this will throw error 
};
///////////// Type assertion (as)
// Converting one data type to another 
var number1 = '1';
// which needs to be converted to number 
// so for that we will first have to convert number1 to unknown and then to number 
var number2 = number1;
//////////////// Working with DOM 
var someElement = document.querySelector('.foo');
