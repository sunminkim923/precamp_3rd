document.write(1+1)

console.log("안녕하세요")

let aaa = "철수"
console.log(aaa)

// let aaa = "영희" => 에러가 나는 상황
aaa= "영희"
console.log(aaa)

const bbb = 8
// 숫자에는 따움표를 붙이지 않는다 따움표를 붙일경우 문자로 인식하여 계산이 불가함
console.log(bbb)

// bbb = 5  => 에러. 상수는 바꿀 수 없음
// console.log(bbb)

const myMoney = 2000   // 두가지 이상의 이름을 붙여쓸때는 사이에 대문자를 넣는다. camel 방식
console.log(myMoney)
const classmates = ["철수", "영희", "훈이"]
//undefined
classmates.length
//3
const ages = [8, 9, 10]
//undefined
classmates.push("맹구")
//4
classmates
//(4) ["철수", "영희", "훈이", "맹구"]
classmates.pop("영희")
//"맹구"
classmates
//(3) ["철수", "영희", "훈이"]
classmates.includes("철수")
// true
classmates.includes("맹구")
// false