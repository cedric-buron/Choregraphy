/**
 * Created by cburon on 24/02/2016.
 */
var Backbone = require('backbone');
var Order = require('./order.js');
var Orders = Backbone.Collection.extend({
    model:Order
});
module.exports = Orders;
