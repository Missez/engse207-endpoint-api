var dbconfig = {
    development: {
        server: '192.168.246.228',
        database:'team3_web_labDB',
        user:'sa',
        password:'Missez_1234',
        port: 1433,
        options:{
            encript: true,
            setTimeout: 12000,
            enableArithAbort: true,
            trustServerCertificate: true,
            trustedconnection:  true,
            instancename:  '192.168.246.228'  // SQL Server instance name
        }
    },
    production: {
        server: '10.21.43.203',
        database:'team3_web_labDB',
        user:'sa',
        password:'P@ssw0rd',
        port: 1433,
        options:{
            encript: true,
            setTimeout: 12000,
            enableArithAbort: true,
            trustServerCertificate: true,
            trustedconnection:  true,
            instancename:  '10.21.43.203'  // SQL Server instance name
        }
    },


};
module.exports = dbconfig;
