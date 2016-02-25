/**
 * Created by cburon on 24/02/2016.
 */
var Backbone = require('backbone');
var Speed = require('./speed.js');
var Speeds = Backbone.Collection.extend({
    model: Speed
});
module.exports = Speeds;
