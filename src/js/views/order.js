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
    initialize : function() {
        this.$el.html(this.template());
        this.model.on('change', this.render, this);
    },
    appendViewToClassElt: function(view, classElt) {
        this.$el.find(classElt).append(view.render().$el);
    },
    renderDancers: function () {
        this.model.get('dancers').each(function (dancer) {
            var dancerView = new DancerView({model: dancer});
            this.appendViewToClassElt(dancerView,'.order_dancers');
        }.bind(this));
    },
    renderLocation: function () {
        var locationView = new LocationView({model: this.model.get('location')});
        this.appendViewToClassElt(locationView,'.order_location');
    },
    renderActions: function() {
        this.model.get('actions').each(function (action) {
            var actionView = new ActionView({model: action});
            this.appendViewToClassElt(actionView,'.order_actions');
        }.bind(this));
    },
    render: function () {
        this.$el.html('');
        this.renderDancers();
        this.renderLocation();
        this.renderActions();
        this.$el.attr("data-id", this.model.cid);
        return this;
    }

});
module.exports = OrderView;
