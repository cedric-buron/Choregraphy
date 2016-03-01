/**
 * Created by cburon on 24/02/2016.
 */
var Backbone   = require('backbone');
var $ = require('jquery');
var DancerView = require('./dancer.js');
var Radio = require('backbone.radio');
var DancersChannel = Radio.channel('dancers');
var DancersView = Backbone.View.extend({
    el: "#dancers",
    initialize: function () {
        this.$el.html('');
        this.render();
    },
    render: function () {
        if(this.model.length) {
            this.model.each(function (model) {
                var dancer = new DancerView({
                    model: model
                });
                this.$el.append(dancer.render().el);
            }.bind(this));
        }
        $("#dancers > .dancer").dragdrop({
            makeClone: true,
            dragClass: "whileDragging",
            didDrop: this.onDancerDropped.bind(this)

        });
        return this;
    },
    onDancerDropped: function ($src, $dst) {
        Radio.trigger('dancer', 'dancer:added', this.model.get({'cid': $src.attr("data-id")}));
    }
});
module.exports = DancersView;
