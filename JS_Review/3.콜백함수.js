// 콜백함수란?? 
// 함수의 파라미터로 함수를 넘기는 것

function subject(name,english,math){
    if(name ==="math"){
        math();
    }
    else{
        english();
    }
}

function math(){
    console.log("math입니다.");
}

function english(){
    console.log("English입니다.");
}
subject("math",english,math);