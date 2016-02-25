/**
 * Created by cburon on 24/02/2016.
 */
var Backbone = require('backbone');
var Location = Backbone.Model.extend({
    defaults: {
        name: '',
        wavURL: 'undefined.wav'
    }
});
module.exports = Location;
