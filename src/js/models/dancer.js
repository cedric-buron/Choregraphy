var Backbone = require('backbone');
var colors = ['red', 'purple', 'green', 'black', 'white'];
var Dancer = Backbone.Model.extend({
    defaults: {
        name: '',
        imgURL: '',
        state: {},
        dancerStreamPort: '',
        dancerStreamURL: '',
        color: colors[Math.floor(Math.random() * colors.length)]
    }
});

module.exports = Dancer;
