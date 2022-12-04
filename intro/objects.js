const person={
    name:'Wit',
    age:23,
    greet(){
        console.log('Hi i am '+this.name);
    }
}
// person.greet();
// const hobbies=['sports','cooking'];
// console.log(hobbies.map(hobby=> 'Hobby: '+hobby));
// hobbies.push('programming');
// console.log(hobbies);
// const coppiedArray=[...hobbies];
// console.log(coppiedArray)
// const coppiedPerson={...person};
// console.log(coppiedPerson);
// const toArray=(...arg)=>{
//     return arg
// }
// console.log(toArray(1,2,3,4));
const printName=({name})=>{
    console.log(name)      
}
printName(person)
