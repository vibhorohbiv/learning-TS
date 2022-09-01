
/////////// Variables
// In typescript let can only be defined of the same type as the one during initialization 

let hello:string = 'world'

hello = 'world1'


///////////// Functions 

const getFullName = (name:string, surname:string): string => {
    return `${name} ${surname}`
 }


//////////// Interfaace 

interface User {
    name: string;
    age?: number;  // age is not mandatory
    getMessage(): string;
}
const user1: User = {
    name: 'Jack',
    age: 23,
    getMessage() {
        return "Hello" + name;
    }
}


// this would give error saying that user2 does not have age field but since it is not mandatory it wont
// const user2: User = {
//     name : 'Jhon'
// }  

////////////// Union and Type Alias
//  Union Tyype (|) when more than one data type can be assigned 
// Union is operator to combine data types 

let pageName: string | number = 1

let errorMessage: string | null = null

let user: User | null = null;

type PopularTag = string
type MaybePopularTag = PopularTag | null

const popularTags: PopularTag[] = ['dragon','coffe']

/////////////////// Any/ void/ Never/ Unknown

// because this function does not return anything it returns void 
const doSomething = ():void => {
    console.log('hello')
    //  return 1; // this will throw error 
}

///////////// Type assertion (as)
// Converting one data type to another 

let number1: string = '1'

// which needs to be converted to number 
// so for that we will first have to convert number1 to unknown and then to number 

let number2: number = (number1 as unknown) as number


//////////////// Working with DOM 
const someElement = document.querySelector('.foo')
