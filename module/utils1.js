//모듈내 변수나 상수값을 바로 공유(내보내기)하기
const appName = '노드모듈샘플 어플리케이션';

//모듈내 배열값 변수 내보내기
let serviceDomains = ['www.test.co.kr', 'test.com', 'test.co.kr'];

//plus함수 정의
const plus = (a,b) => a+b

//minus 함수 정의
function fnMinus(a, b){
    return a-b;
}

//HTML태그 제거 함수 정의
function fnRemoveTags(contents){
    return contents.replace(/<[^>]+>/g, '');
}

//텍스트 길이 기반 문자열 반환함수 정의
function textConverter(text,length){
    let resultString = text.substring(0,length);
    if(text.length > length){
        resultString += "..";
    }
    return resultString
}

//utility 모듈내 변수,상수,함수 내보내기
//객체로 정의해서 한번에 외부로 보냄
//주로 이 방법을 사용
module.exports = {
    appName: appName,
    serviceDomains: serviceDomains,
    plus: plus,
    minus: fnMinus,
    removeTags:fnRemoveTags,
    textConverter:textConverter
}