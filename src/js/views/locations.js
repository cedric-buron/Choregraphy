var Backbone   = require('backbone');
var $ = require('jquery');
var LocationView = require('./location.js')
var LocationsView = Backbone.View.extend({
    el: "#locations",
    initialize: function () {
        this.$el.html('');
        this.render();
    },
    render: function () {
        this.model.each(function (model) {
            var location = new LocationView({
                model: model
            });
            this.$el.append(location.render().el);
        }.bind(this));
        $("#locations > .location").dragdrop({
            makeClone: true,
            dragClass: "whileDragging",
            didDrop: this.onLocationDropped.bind(this)
        });
        return this;
    },
    onLocationDropped: function ($src, $dst) {
        window.alert("location dropped");
        console.log($src, $dst);
    }
});
module.exports = LocationsView;
