/**
 * Created by cburon on 24/02/2016.
 */
var Backbone = require('backbone');
var _ = require('underscore');
var OrderView = require('./order.js');
var OrdersView = Backbone.View.extend({

    el: "#orders",
    initialize: function () {
        this.$el.html('');
        this.render();
    },
    render: function () {
        this.model.each(function (model) {
            var orderView = new OrderView({model: model});
            this.$el.append(orderView.render().el);
        }.bind(this));
        return this;
    }

});

module.exports = OrdersView;
