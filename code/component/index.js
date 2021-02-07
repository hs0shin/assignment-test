/**
 * 
 * @param {string} tag 'div', 'button' 등 html 엘리먼트의 태그 
 * @param {string} className 
 * @param {string} parent 부모 DOM element
 * @param {string} innerHTML 내부 children html 
 * @param {string} event 'click', 'change' 에 해당하는 이벤트 이름
 * @param {function} eventCallback 해당 이벤트가 생겼을 때 불릴 함수 
 * 간단한 컴포넌트를 만들때 돔 조작을 wrapping하기 위한 코드
 */
export const baseComp = (
    tag,
    className = null,
    parent = null,
    innerHTML = '',
    eventName = null,
    eventCallback = null,
) => {
    let el = document.createElement(tag);
    className && (() => { el.className = className })();
    innerHTML && el.innerHTML;
    eventName && el.addEventHandler(eventName, eventCallback);
    parent && parent.appendChild(el);
    return el;
}

// 사용 예시 

// 1. Select component
// options model을 바탕으로 options view를 구성한다
/**
 * @param {array} options [{val:'someVal', label:'someLabel'}]
 */
export const selectComp = ({
    options,
    className,
    eventName,
    eventCallback
}) => baseComp('select', className, null,
    options.map(option => `<option value=${option.val}>${option.label}</option>`).join(''),
    eventName,
    eventCallback
).outerHTML;


// 2. label-input component 

/**
 * @param {arr} modelArr [{label: 'someLabel', inputId:'someId'}]
 */
export const labelInputs = ({
    modelArr,
    className,
    className1,
}) => modelArr.map(model => `
<div className=${className}>
    <h3>${model.someLabel}</h3>
    <input id=${model.inputId} className=${className1}/>
</div>
`).join('');