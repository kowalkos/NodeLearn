const userName='Wit';
let age=23;
const userHobby=true;
const summarizeUser=(userName,userAge,userHobby)=>{
    return(
        'Name is '+userName
        +', age is '+userAge
        +' and has hobbies: '+ userHobby
    );
};
console.log(summarizeUser(userName,age,userHobby));