// 객체(Non-Primitive Type) - 비 원시 
// 한번에 여러 개 값을 가짐

let person = {
    key : "value", //property (객체 프로퍼티)
    key1 : "value2",
    key2 : "value3",
}; //객체 리터럴 방식
// 객체 생성자 방식 : let person = new Object();

// 객체 접근 방법
console.log(person.key);
console.log(person["key1"]); //괄호표기법의 값은 key의 문자열 형태로 넣어줘야한다.

function getPropertyValue(key){
    console.log(person[key])
}
getPropertyValue("key2");

// 프로퍼티 추가 방법
person.key3 = "value4";
person["key4"] = "value5";
person.key = "test";
person["key1"] = "test2";

// 프로퍼티 삭제 방법
// delete를 이용하여 삭제해도 스택에서 값은 삭제 되지 않기에 메모리 낭비가 발생
delete person.key;
delete person["key2"];
// null을 이용한다면 값이 삭제된거와 같은 효과와 메모리에서 날림. => 추천
person.key3 = null;

console.log(person);

// 객체에 key가 존재하는지 확인 하는 방법
console.log("key4" in person);
console.log("key3" in person);
