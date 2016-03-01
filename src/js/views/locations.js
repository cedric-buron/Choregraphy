var Backbone   = require('backbone');
var $ = require('jquery');
var LocationView = require('./location.js');
var Radio = require('backbone.radio');
var LocationsView = Backbone.View.extend({
    el: "#locations",
    initialize: function () {
        this.$el.html('');
        this.render();
    },
    render: function () {
        if(this.model.length) {
            this.model.each(function (model) {
                var location = new LocationView({
                    model: model
                });
                this.$el.append(location.render().el);
            }.bind(this));
        }
        $("#locations > .location").dragdrop({
            makeClone: true,
            dragClass: "whileDragging",
            didDrop: this.onLocationDropped.bind(this)
        });
        return this;
    },
    onLocationDropped: function ($src, $dst) {
        Radio.trigger('location', 'location:added', this.model.get({'cid': $src.attr("data-id")}));
        //console.log(this.model.get({'cid': $src.attr("data-id")}));
    }
});
module.exports = LocationsView;
