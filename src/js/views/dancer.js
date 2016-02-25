/**
 * Created by cburon on 24/02/2016.
 */
var _ = require('underscore');
var Backbone   = require('backbone');
var $ = require('jquery');
var DancerView = Backbone.View.extend({
    className: 'dancer',
    template: _.template($('#dancer_template').html()),
    render: function () {
        this.$el.html(this.template(this.model.attributes));
        this.$el.attr("id", "dancer-" + this.model.get('name'));
        this.$el.attr("data-id", this.model.cid);
        return this;
    }

});
module.exports = DancerView;
