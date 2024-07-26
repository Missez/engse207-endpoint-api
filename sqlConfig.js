var dbconfig = {
    web_labDB: {
        server: '192.168.1.12',
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
            instancename:  '192.168.1.12'  // SQL Server instance name
        }
    },

};
module.exports = dbconfig;
