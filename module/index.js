//모듈을 단일 객체변수/상수로 받아와 변수/상수의 속성명을 호출하는 방식
const utils = require('./utils1.js');

console.log('앱이름 확인:', utils.appName);
console.log('도메인주소 목록 확인:', utils.serviceDomains);
console.log('plus함수 호출하기:',utils.plus(10,20));
console.log('minus함수 호출하기:',utils.minus(50,20));
console.log('removeTags함수 호출하기:',utils.removeTags("<div><h3>회사소개</h3> 안녕하세요.</div>"));
console.log('textConverter 함수 호출하기:',utils.textConverter("안녕하세요.",2));

//모듈을 비구조화 할당 방식으로 필요한  속성만 정의해서 사용하는 방법
const {appName,serviceDomains,plus,minus,removeTags,textConverter} = require('./utils2.js');

console.log('앱이름 확인:',appName);
console.log('도메인주소 목록 확인:',serviceDomains);
console.log('plus함수 호출하기:',plus(10,20));
console.log('minus 함수 호출하기:',minus(50,20));
console.log('fnRemoveHtmlTag 함수 호출하기:',removeTags("<div><h3>회사소개</h3> 안녕하세요.</div>"));
console.log('textConverter 함수 호출하기:',textConverter("안녕하세요.",2));