var tasks = require('../controllers/tasks.js');

module.exports = function Route(app, server) {
    app.get('/tasks', function (req, res) {
        tasks.show(req, res)
    });

    app.get('/tasks/:id', function(req, res){
        tasks.display(req, res)
    });

    app.post('/tasks/:title', function (req, res){
        tasks.new(req, res)
    });

    app.delete('/tasks/:id', function (req, res){
        tasks.delete(req, res)
    });

    app.put('/tasks/:id/:title/:description', function(req, res){
        tasks.update(req, res)
    });
};