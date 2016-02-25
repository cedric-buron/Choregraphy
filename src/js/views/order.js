/**
 * Created by cburon on 24/02/2016.
 */
/**
 * Created by cburon on 24/02/2016.
 */
var Backbone = require('backbone');
var _ = require('underscore');
var DancerView = require('./dancer.js');
var ActionView = require('./action.js');
var LocationView = require('./location.js');
//var Speed    = require('./speed.js');
var OrderView = Backbone.View.extend({

    className: 'order',

    template: _.template($('#order_template').html()),
    render: function () {
        this.$el.html(this.template());
        this.model.get('dancers').each(function (dancer) {
            var dancerView = new DancerView({model: dancer});
            this.$el.find('.order_dancers').append(dancerView.render().el);
            console.log(this.$el[0]);
        }.bind(this));
        var locationView = new LocationView({model: this.model.get('location')});
        this.$el.find('.order_locations').append(locationView.render().el);
        this.model.get('actions').each(function (action) {
            var actionView = new ActionView({model: action});
            this.$el.find('.order_actions').append(actionView.render().el);
        }.bind(this));
        var bloc = this.template(this.model.attributes);
        this.$el.html(bloc);

        this.$el.attr("data-id", this.model.cid);
        return this;
    }

});
module.exports = OrderView;