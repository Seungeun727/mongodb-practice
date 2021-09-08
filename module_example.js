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
