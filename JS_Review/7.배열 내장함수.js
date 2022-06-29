const arr = [1,2,3,4,5];

// forEach는 원본 배열을 변경하지 않고, 반환 값은 언제나 undefined이다.
const arrD = arr.forEach((arr)=>{
    console.log(arr*2);
})

// map은 원본 배열을 변경하지 않고, 반환 값은 배열형태로
const newArr = arr.map((arr)=>{
    return arr*3;
});
console.log(newArr);

let number = 3;
// arr.forEach((arr)=>{
//     if(arr === number) console.log(true);
//     else{
//         console.log(false);
//     }
// });

// 배열에 값이 존재 하는지 안 하는지                
console.log(arr.includes(number));

// 배열에 값이 존재한다면 index반환 없으면 -1반환
console.log(arr.indexOf(number));

// 배열에 객체가 있을때 찾기위해선 findIndex 활용
const color = [
    {color:"red"},
    {color:"black"},
    {color:"blue"},
    {color:"white"},
    {color:"blue"},
];

console.log(color.findIndex((ele)=>{
    return ele.color === "black"}));

console.log(color.find((ele)=>{
    return ele.color === "blue"}));

// 조건을 만족하는 값을 배열로 반환 받고 싶다!
console.log(color.filter((ele)=>{
    return ele.color === "blue";
}));

const color1 = [
    {color:"red"},
    {color:"black"},
    {color:"blue"},
    {color:"white"},
    {color:"blue"},
];

const color2 = [
    {color:"red"},
];

console.log(color1.concat(color2));

// sort는 원본 배열을 바꿈
let num = [213,532,21,12,4,51,213,34,125];
console.log(num.sort((a,b)=>{return b-a}));