window = global
document = {
    createElement: function (ele) {
        return {
            attachShadow: function () {
                return {}
            }
        }
    },
    addEventListener: function (e) {

    },
    getElementById: function (e) {
        return {
            attachShadow: function () {

            }
        }
    }
}
screen = {
    "availHeight":
        824,
    "availLeft":
        0,
    "availTop":
        0,
    "availWidth":
        1536,
    "colorDepth":
        24,
    "height":
        864,
    "isExtended":
        true
}
navigator = {
    "appCodeName":
        "Mozilla",
    "appName":
        "Netscape",
    "appVersion":
        "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
    "userAgent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36'
}
history = {
    "length": 3,
    "scrollRestoration": "auto",
    "state": "null"
}
location = {
    "ancestorOrigins": {},
    "href": "https://www.mashangpa.com/problem-detail/18/",
    "origin": "https://www.mashangpa.com",
    "protocol": "https:",
    "host": "www.mashangpa.com",
    "hostname": "www.mashangpa.com",
    "port": "",
    "pathname": "/problem-detail/18/",
    "search": "",
    "hash": ""
}
localStorage = {}
HTMLElement = {
    attachShadow: function () {

    }
}
Element = {
    prototype: {
        attachShadow: function () {

        }
    }
}

function setProxyArr(proxyObjArr) {
    for (let i = 0; i < proxyObjArr.length; i++) {
        const handler = {
            get: function (target, property, receiver) {
                if (property != 'Math') {
                    console.log(`方法：get  对象：${proxyObjArr[i]}  属性：${property}，属性类型：`, typeof property, '，属性值：', target[property], '，属性值类型：', typeof target[property]);
                }
                return target[property];
            },
            set: function (target, property, value, receiver) {
                console.log(`方法：set  对象：${proxyObjArr[i]}  属性：${property}，属性类型：`, typeof property, '，属性值：', value, '，属性值类型：', typeof value, '，原值类型：', typeof target[property]);
                return Reflect.set(...arguments);
            }
        };

        eval(`try {
            ${proxyObjArr[i]};
            ${proxyObjArr[i]} = new Proxy(${proxyObjArr[i]}, handler);
        } catch (e) {
            ${proxyObjArr[i]} = {};
            ${proxyObjArr[i]} = new Proxy(${proxyObjArr[i]}, handler);
        }`);
    }
}

// setProxyArr(['window', 'document', 'localStorage', 'navigator', 'location'])


// delete global
// delete Buffer