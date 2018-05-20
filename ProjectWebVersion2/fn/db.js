var mysql = require('mysql');

exports.load = sql => {
    return new Promise((resolve, reject) => {
        var cn = mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: 'nguyen131197',
            database: 'MobileN'
        });

        cn.connect();

        cn.query(sql, function(error, rows, fields) {
            if (error) {
                reject(error);
            } else {
                resolve(rows);
            }
            cn.end();
        });
    });
}

exports.save = sql => {
    return new Promise((resolve, reject) => {
        var cn = mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: 'nguyen131197',
            database: 'MobileN'
        });

        cn.connect();

        cn.query(sql, function(error, value) {
            if (error) {
                reject(error);
            } else {
                resolve(value);
            }

            cn.end();
        });
    });

    exports.check = sql => {
        return new Promise((resolve, reject) => {
            var cn = mysql.createConnection({
                host: 'localhost',
                port: 3306,
                user: 'root',
                password: '12345678a',
                database: 'mobilen'
            });
    
            cn.connect();
    
            cn.query(sql, function(error, value) {
                if (error) {
                    reject(error);
                } else {
                    resolve(value);
                }
                cn.end();
            });
        });
    }
}