/**
 * Created by hu_koala on 26/02/16.
 */
/**
 * Created by cburon on 24/02/2016.
 */
/**
 * Created by cburon on 24/02/2016.
 */
var Backbone = require('backbone');
var _ = require('underscore');
var Dancers  = require('./dancers.js');
var Actions  = require('./actions.js');
var Location = require('./location.js');
var Speed    = require('./speed.js');
var DropSpaceView = Backbone.View.extend({

    className: 'drop',

    initialize : function() {
        this.model.on('change', this.render, this);
    },
    appendViewToClassElt: function(view, classElt) {
        this.$el.find(classElt).append(view.render().$el);
    },
    render: function () {
        this.$el.html('');
        return this;
    }

});
module.exports = OrderView;

module.exports = DropSpaceView;