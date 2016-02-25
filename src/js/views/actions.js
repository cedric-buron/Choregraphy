/**
 * Created by cburon on 24/02/2016.
 */
var Backbone   = require('backbone');
var $ = require('jquery');
var ActionView = require('./action.js');
var ActionsView = Backbone.View.extend({
    el: "#actions",
    initialize: function () {
        this.$el.html('');
        this.render();
    },
    render: function () {
        this.model.each(function (model) {
            var action = new ActionView({
                model: model
            });
            this.$el.append(action.render().el);
        }.bind(this));
        $("#actions > .action").dragdrop({
            makeClone: true,
            dragClass: "whileDragging",
            didDrop: this.onActionDropped.bind(this)
        });
        return this;
    },
    onActionDropped: function ($src, $dst) {
        window.alert("action dropped");
        console.log($src, $dst);
    }
});
module.exports = ActionsView;
