/**
 * Created by cburon on 24/02/2016.
 */
var Backbone   = require('backbone');
var $ = require('jquery');
var SpeedView = require('./speed.js');
var Radio = require('backbone.radio');
var SpeedsView = Backbone.View.extend({
    el: "#speeds",
    initialize: function () {
        this.$el.html('');
        this.render();
    },
    render: function () {
        this.model.each(function (model) {
            var speed = new SpeedView({
                model: model
            });
            this.$el.append(speed.render().el);
        }.bind(this));
        $("#speeds > .speed").dragdrop({
            makeClone: true,
            dragClass: "whileDragging",
            didDrop: this.onSpeedDropped.bind(this)
        });
        return this;
    },
    onSpeedDropped: function ($src, $dst) {
        Radio.trigger('speed', 'speed:added', this.model.get({'cid': $src.attr("data-id")}));
        //console.log(this.model.get({'cid': $src.attr("data-id")}));
    }
});
module.exports = SpeedsView;
