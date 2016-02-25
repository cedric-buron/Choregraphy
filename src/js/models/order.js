/**
 * Created by cburon on 24/02/2016.
 */
var Backbone = require('backbone');
var Dancers  = require('./dancers.js');
var Actions  = require('./actions.js');
var Location = require('./location.js');
var Speed    = require('./speed.js');

var Order      = Backbone.Model.extend({
    default: {
        speed: new Speed({
            name: 'medium'
        }),
        dancers: new Dancers(),
        actions: new Actions(),
        location: new Location()
    }
});
module.exports = Order;
