let person = {
    name : "Jay",
    age: "26",
    living : "chunan",
}

// 객체의 key들을 array로 반환
const personKeys = Object.keys(person);
const personValues = Object.values(person);
console.log(personKeys);
console.log(personValues);

for(let i = 0; i <Object.keys(person).length; i++){
    console.log(`${Object.keys(person)[i]} : ${Object.values(person)[i]}`);
}
