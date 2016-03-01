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
var SpeedView    = require('./speed.js');
var OrderView = Backbone.View.extend({

    className: 'order',

    template: _.template($('#order_template').html()),
    initialize: function () {
        this.$el.html(this.template());
        this.model.on('change', this.render, this);
    },
    appendViewToClassElt: function (view, classElt) {
        console.log(view.render().$el);
        this.$el.find(classElt).append(view.render().$el);
    },
    renderDancers: function () {

        this.$el.find('.order_dancers').html('');
        if (this.model.dancers.length) {
            this.model.dancers.each(function (dancer) {
                var dancerView = new DancerView({model: dancer});
                this.appendViewToClassElt(dancerView, '.order_dancers');
            }.bind(this));
        } else {
            console.log("no dancers")
        }

    },
    renderLocation: function () {
        this.$el.find('.order_location').html('');
        if (this.model.location) {
            var locationView = new LocationView({model: this.model.location});
            this.appendViewToClassElt(locationView, '.order_location');
        } else {
            console.log("no location")
        }
    },
    renderSpeed: function () {
        this.$el.find('.order_speed').html('');
        if (this.model.speed) {
            var speedView = new SpeedView({model: this.model.speed});
            this.appendViewToClassElt(speedView, '.order_speed');
        } else {
            console.log("no speed")
        }
    },
    renderActions: function () {
        console.log(this.model.actions.length);
        this.$el.find('.order_actions').html('');
        if (this.model.actions.length) {
            this.model.actions.each(function (action) {
                var actionView = new ActionView({model: action});
                this.appendViewToClassElt(actionView, '.order_actions');
            }.bind(this));
        } else {
            console.log("no actions")
        }

    },
    render: function () {
        console.log('changed',this.el);
        this.renderDancers();
        this.renderLocation();
        this.renderActions();
        this.renderSpeed();
        this.$el.attr("data-id", this.model.cid);
        return this;
    }

});
module.exports = OrderView;
