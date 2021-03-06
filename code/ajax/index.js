/**
 * @param {string} method 'GET', 'DELETE'
 * @param {string} url 서버의 url 입력
 * @description 사용할때는 getRequest(param).then().catch() 혹은 await getReqeust(param).catch() 로 사용할것 - 아래 참조
 */
export const ajax = method => (url, json = null) => new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200 || xhr.status === 201) resolve(JSON.parse(xhr.responseText));
            else reject(xhr.responseText);
        }
    }
    if (method === 'DELETE' || method === 'GET') {
        xhr.open(method, url, true);
        xhr.send(null);
    } else if (method === 'POST' || method === 'PUT') {
        xhr.open(method, url);
        xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        xhr.send(JSON.stringify(json));
    }
});

// promise
let requestUsingPromise = ajax('GET')(url).then(resp => console.log(resp)).catch();
// await - 지원되는 브라우저에서만 쓰세요 
let requestUsingAwait = await ajax('POST')(url, json).catch(err => console.log(err));
