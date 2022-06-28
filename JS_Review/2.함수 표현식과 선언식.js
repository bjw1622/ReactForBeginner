// 호이스팅이 되어서 실행이 가능하다
testF();

// 함수 표현식
let test = function(){
    console.log("test");
}
// 함수 선언식
function testF(){
    console.log("testF");
}

let arrow = ()=> "test";
console.log(arrow());