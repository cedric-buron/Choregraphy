/**
 * Created by cburon on 24/02/2016.
 */
var _ = require('underscore');
var Backbone   = require('backbone');
var $ = require('jquery');
var ActionView = Backbone.View.extend({

    className: 'action',

    template: _.template($('#action_template').html()),
    render: function () {
        this.$el.html(this.template(this.model.attributes));
        this.$el.attr("data-id", this.model.cid);
        return this;
    }

});

module.exports = ActionView;
