// 내장 객체
/*
console
process
exports
*/

// process 객체
console.log(process.version,       //  version: 현재 사용 node 버전 => v14.17.5
    process.platform,             // 운영체제 종류
    process.arch);               // 프로세서 아키텍처

// # window, MacOS, 리눅스 등 다양한 운영체제에서 코드 분기 시 중요하다.

console.log(process.verisons);  // 종속된 프로그램의 버전들
console.log(process.env);       // 환경 정보

// Global 변수
console.log(__dirname);    // 현재 모듈의 디렉터리
console.log(__filename);   // 현재 모듈의 파일명

// 모듈로부터 개별 객체 불러오기
// const  add = require("./modules/test_module1").add;  // # 모듈 불러올 시 js파일명 생략함.
// const square = require("./modules/test_module1").square;

// 전개 연산을 이용한 require
const { add, square } = require("./modules/test_module1");    
// * 파일 내부의 객체를 외부의 객체로 내보낼 때 함수명이 일치해야함
// require로 불러온 것과 {}의 내용과 일치해야 성립함
const area = require("./modules/test_module2");
console.log(add(10,20));    // 불러온 객체 사용
console.log(square(30));

console.log(area.square(40));
console.log(area.rectangle(10, 20));
console.log(area.circle(30));

// # node.js에서는 require 사용, ES6에서는 import를 사용하여 데이터를 내보낸다.