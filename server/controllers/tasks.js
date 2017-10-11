var mongoose = require('mongoose');
var Task = mongoose.model('Task');

module.exports = {
    show: function(req, res){
        Task.find({}, function(err, task){
            if (err){
                console.log(`This is the error: ${err}`);
            }
            else{
                res.json(task);
            }
        })
    },
    display: function(req, res){
        Task.find({_id: req.params.id}, function(err){
            if(err){
                console.log("There was an error!");
            }
            else{
                console.log("Found task!")
                res.json(result);
            }
        })
    },
    new: function(req, res){
        var task = new Task({ title: req.params.title });
        task.save(function (err) {
            if (err) {
                console.log('something went wrong in add task');
            } else {
                console.log('successfully added a task!');
                res.redirect('/tasks');
            }
        });
    },
    delete: function(req, res){
        Task.remove({_id: req.params.id}, function(err){
            if(err){
                console.log("Did not delete record!");
            }
            else{
                console.log("Successfully deleted task!");
                res.redirect('/tasks');
            }
        })
    },
    update: function(req, res){
        Task.update({_id: req.params.id}, {title: req.params.title, description: req.params.description}, function(err){
            if(err){
                console.log("something went wrong in edit task");
            }
            else{
                console.log('successfully edited a task!');
                res.redirect('/tasks');
            }
        });
    }
}