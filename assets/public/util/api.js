var qwest = require('qwest');

var ajax = function(type, url, data) {
    var promise = new Promise((resolve, reject) => {
        qwest.map(type, url, data, { withCredentials: true }).then((res, data) => {
            if (res.status !== 200) return reject(data);
            if (data.ok) { 
                resolve(data);
            } else { 
                reject(data);
            }
        })
    });
    
    return promise;
};

var api = {
    register: data => ajax('POST', 'http://10.10.1.38:8123/register/', data),
    login: data => ajax('POST', 'http://10.10.1.38:8123/login/', data)
};

module.exports = api;