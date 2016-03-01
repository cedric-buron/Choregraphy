/**
 * Created by cburon on 24/02/2016.
 */
var Backbone = require('backbone');
var Dancers  = require('./dancers.js');
var Actions  = require('./actions.js');
var Location = require('./location.js');
var Speed    = require('./speed.js');

var Order      = Backbone.Model.extend({
    speed:new Speed({
        name: 'medium'
    }),
    dancers:new Dancers(),
    actions:new Actions(),
    location:new Location(),
    addDancer: function (dancer) {
        this.dancers.add(dancer);
    },
    addAction: function (action) {
        console.log(this);
        this.actions.add(action);
    },
    changeLocation : function(location) {
        this.location = location;
    },
    changeSpeed : function (speed) {
        this.speed = speed;
    }
});
module.exports = Order;
