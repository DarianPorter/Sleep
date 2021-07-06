const controllers = require('./controllers')

module.exports = app => {
    app.get('/sleepData', controllers.fetchSleepData)
}