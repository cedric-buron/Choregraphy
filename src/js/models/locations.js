/**
 * Created by cburon on 24/02/2016.
 */
var Backbone = require('backbone');
var Location = require('./location.js');
var Locations = Backbone.Collection.extend({
    model: Location
});
module.exports = Locations;
