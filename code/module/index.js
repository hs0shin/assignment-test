// es6의 import, export 구문을 활용한다.
// 브라우저 자체의 import 기능을 활용할 경우, 확장자 .js를 붙여야 한다.
import defaultModule, { someModule1, someMoudle2 } from '../someDirectory/someModule.js';
// export 는 원래 쓰던 그대로 진행하면 된다.
export default testModule;
export { testModule1, testModule2 }