/**
 * Created by cburon on 24/02/2016.
 */
var Backbone = require('backbone');
var Dancer = require('./dancer.js');
var Dancers  = Backbone.Collection.extend({
    model: Dancer
});
module.exports = Dancers;

