import { someComponent } from '../component/index.js';

export const mutationHandler = store => {
    // Model 정보를 store 에서 가져옵니다
    const sourceModel = store.someField;
    // Model 정보에 따라 변화될 View를 가져옵니다
    const targetDiv = document.getElementById('targetId');
    // View를 갱신합니다.
    targetDiv.innerHTML = someComponent(sourceModel);
};

// 예시: '상품 리스트' 모델로부터 select 컴포넌트의 view를 갱신하는 경우
export const renderSelect = ({ merchandiseList }) => {
    const targetDiv = document.getElementById('merchandiseListDiv');
    targetDiv.innerHTML = renderSelect(merchandiseList);
}