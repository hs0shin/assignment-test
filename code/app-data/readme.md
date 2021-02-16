# app-data

이 부분은 다음과 같은 앱 전체 상태를 저장합니다.

* ajax로 받아온 사용자 데이터

* 현재 사이트에서 사용자가 이용한 데이터 (e.g. 쇼핑 장바구니 상태)

## 렌더링 갱신의 시작점
Component가 [View를 담당한다면]() 이 부분은 Model을 담당합니다. 여기에 [mutation handler](https://github.com/dev-mish-mash/assignment-test/tree/main/code/mutation-handler)를 부착하여 app-data의 정보가 바뀌면 그에 따른 component의 렌더가 시작되도록 해야합니다. 

코드 예제에서는 ES6의 [Proxy](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy)를 사용합니다. 





