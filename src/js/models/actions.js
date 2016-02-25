/**
 * Created by cburon on 24/02/2016.
 */
var Backbone = require('backbone');
var Action = require('./action.js');
var Actions = Backbone.Collection.extend({
    model: Action
});
module.exports = Actions
