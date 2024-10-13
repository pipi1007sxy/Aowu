import { userData } from './data.js'

export function clearCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}


export function setSession(name, value, days, kind) {
    if(kind==='n'){
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // 计算到期时间
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }else{
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // 计算到期时间
        const expires = "expires=" + date.toUTCString();
        const originalUserDataCookie = getCookie(name);
        if (originalUserDataCookie) {
            const newCookieValue = originalUserDataCookie + "~~" +  value;
            document.cookie = 'userdata=' + newCookieValue +";"+ expires + ";path=/";
            return 200
        }else{
            document.cookie = 'userdata=' + value +";"+ expires + ";path=/";
            return 200
        }
    }
}

export function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // 如果找到与给定名称匹配的 cookie，则返回其值
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1);
      }
    }
    // 如果没有找到匹配的 cookie，则返回空字符串
    return '';
}

export function authenticateUser(username, password) {
    const user = userData.find(user => user.id === username);
    if (!user) {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            const [name, value] = cookie.trim().split('=');
            if (name === 'userdata') {
                const arr = value.split('~~');
                const jsonObj = [];
                arr.forEach(item => {
                    const pair = item.split(',');
                    const obj = {};
                    pair.forEach(pairItem => {
                        const [key, value] = pairItem.split(':');
                        obj[key] = value;
                    });
                    jsonObj.push(obj);
                });
                console.log(jsonObj);
                const user = jsonObj.find(user => user.username === username);
                if (user&&user.password === password) {
                    return 200; // 用户存在
                }else{
                    if (user.pwd !== password) {
                        return 400; // 密码不匹配
                    }
                }
            }
        }
        return 404; // 用户不存在
    }
    if (user.pwd !== password) {
        return 400; // 密码不匹配
    }
    return 200; // 验证成功
  }