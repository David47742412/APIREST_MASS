module.exports = {
    database: {
        host: process.env.HOST,
        user: process.env.USER,
        port: process.env.PORT,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    },
    semilla: process.env.SEMILLA
}