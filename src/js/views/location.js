var Backbone   = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var LocationView = Backbone.View.extend({
    className: 'location',
    template: _.template($('#location_template').html()),
    render: function () {
        this.$el.html(this.template(this.model.attributes));
        this.$el.attr("id", "location-" + this.model.get('name'));
        this.$el.attr("data-id", this.model.cid);
        return this;
    }

});
module.exports = LocationView;
