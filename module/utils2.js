//모듈내 변수나 상수값을 바로 공유(내보내기)하기 
exports.appName = '노드모듈샘플 어플리케이션';

//모듈내 배열값 변수 내보내기
exports.serviceDomains = ['www.test.co.kr','test.com','test.co.kr'];


//plus함수 정의하기
exports.plus = (a, b) => a + b

//minus 함수 정의하기 
exports.minus = function(a, b){
    return a-b;
}

//HTML태그 제거 함수 정의하기 
exports.removeTags = function fnRemoveTags(contents){
    return contents.replace(/<[^>]+>/g, '');
}

//텍스트 길이 기반 문자열 반환함수 정의 
exports.textConverter = function textConverter(text,length) {
    let resultString = text.substring(0,length);
    if(text.length > length){
        resultString +="..";
    }
    return resultString;
}

//각각 외부로 보낼수도 있음