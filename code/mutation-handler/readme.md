# Mutation Handler

이 부분은 [app-data](https://github.com/dev-mish-mash/assignment-test/tree/main/code/component)가 변경되었을 경우에, [component](https://github.com/dev-mish-mash/assignment-test/tree/main/code/app-data)를 갱신하는 로직을 담당합니다.

MVC 패턴에 비유하자면 Model이 View를 변경시키는 이벤트이며,

Flux 패턴으로 비유하자면 Store의 각 속성들이 변했을 때 View를 변경시키는 이벤트라고 보면 되고, Observer pattern으로 구성되었다고 볼 수도 있습니다.
