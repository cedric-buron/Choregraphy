/**
 * Created by cburon on 24/02/2016.
 */
var Backbone = require('backbone');
var _ = require('underscore');
var DancerView  = require('./dancers.js');
var ActionView  = require('./actions.js');
var LocationView = require('./location.js');
//var Speed    = require('./speed.js');
var OrderView = Backbone.View.extend({

    el: "#orders",
    initialize: function () {
        this.$el.html('');
        this.render();
    },
    template: _.template($('#order_template').html()),
    render: function () {
        this.$el.html(this.template());
        console.log(this.model);
        console.log(this.model);

        this.model.each(function (model) {
            /*
            console.log(model);
            model.get('dancers').each(function (dancer) {
                console.log(dancer);
                var dancerView = new DancerView(dancer);
                this.$el.find('.order_dancers').append(dancerView.render());
            }.bind(this));

            model.get('locations').each(function (location) {
                console.log(location);
                var locationView = new LocationView(location);
                this.$el.find('.order_locations').append(locationView.render());
            });
            model.get('actions').each(function (action) {
                console.log(action)
                var actionView = new ActionView(action);
                this.$el.find('.order_actions').append(actionView.render());
            });
            */
        }.bind(this));

        this.$el.html(this.template(this.model.attributes));
        this.$el.attr("data-id", this.model.cid);
        return this;
    }

});

module.exports = OrderView;
