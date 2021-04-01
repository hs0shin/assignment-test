# ES6 Module 
ES6 부터는 브라우저 자체가 Module 을 지원합니다. (IE만 빼고요)

이를 이용해 과제테스트에서는 브라우저 모듈 기능을 이용하여 코드의 분리와 가독성을 높이는 것이 채점 기준이 되곤 합니다.

여기서는 Module을 사용하기 위해서 어떻게 해야 하는지 알아봅니다.

## index.html 수정

```html
<!DOCTYPE html>
<html>
    <head>
        <script type='module' src='./someModule.js'></script>
    ...
    </head>
    <body>
    ...
    </body>
    ...
</html>
```
index.html에서 모듈로 사용할 script를 브라우저가 인식할 수 있도록  ```type='module'``` 로 속성을 추가하여야 합니다. 


## Web Server 설정
이 부분은 과제테스트를 보는 분들이 신경을 쓸 부분은 아닙니다. 다만, 브라우저에서 다음과 같은 에러가 난다면 참고해 주세요
```
Failed to load module script: The server responded with a non-JavaScript MIME type of "text/plain". Strict MIME type checking is enforced for module scripts per HTML spec.
```
### 해결 방법 요약
시험 출제자가 js 파일이 들어갈 폴더 위치를 특정했는지 확인해 보는게 먼저입니다. 문제에서 제공된 프로젝트 폴더 구조를 마음대로 변경하여, script 파일의 위치가 제대로 맞지 않아 발생하는 에러일 가능성이 높습니다.

### 자세한 내용 
처음 브라우저가 index.html을 요청하고 나면, 그 뒤에 index.html을 파싱하여 필요한 js를 웹서버에 요청하여 가져오게 됩니다. 이 때 응답하는 웹서버에서는 js의 MIME 타입을 지정하여 보내주는데 (http에서의 파일 확장자라고 생각하면 됩니다) 이때 파일 경로가 원래 기획한 바와 다르면, 'text/javascript'로 설정을 미처 하지 못하여 'text/plain' 속성으로 보낼 가능성이 있습니다.

이런 경우, 브라우저의 타입 체킹에 의해 모듈로 로드하는것을 막게 됩니다. 

#

모듈에 대한 더 자세한 사항은 [공식문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Modules)를 참조하세요
