;
let initVar = () => {
    process.env.PORT = process.env.PORT || 3001
    process.env.CLIENT = process.env.CLIENT || 'pg'
    process.env.CONNECTION_DB = process.env.CONNECTION_DB || {
        host: '127.0.0.1',
        user: 'jarojas',
        password: 'juan123',
        database: 'Ferre'
    }
}

module.exports = {
    initVar
}