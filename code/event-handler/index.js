// 커링 테크닉 (고차함수)를 쓰는 이유는, 코드 상에서 store를 입력하는 시점과 이벤트를 받는 시점을 나누기 위함입니다. 가져가고자 하는 구조에 따라 이 테크닉을 쓰지 않아도 무방합니다.
export const handleUserInput = store => e => {
    // 사용자 이벤트를 받아 input 정보를 얻어냅니다.
    const userInput = e.target.value;
    // input 정보로부터 어떻게 model을 바꿀 것인지를 정의합니다.
    const newModelInfo = makeNewModelInfo(userInput);
    // store에 반영합니다
    store.targetModel = newModelInfo;
}

// 예시 select component 에서 선택된 상품을 model에 반영하는 로직
export const handleSelectChange = store => e => {
    const selectedMerchandise = e.target.value;
    store.currentSelectedMerchandise = selectedMerchandise;
}
