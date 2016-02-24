var Backbone = require('backbone');
var _ = require('underscore');
$ = require('jquery');// jshint ignore:line
jQuery = require('jquery');// jshint ignore:line
var dragdropPlugin = require('./vendor/jquery.drag-drop.plugin.min.js');// jshint ignore:line

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
var Action = Backbone.Model.extend({
    defaults: {
        name: '',
        wavURL: 'undefined.wav'
    }
});
var Location = Backbone.Model.extend({
    defaults: {
        name: '',
        wavURL: 'undefined.wav'
    }
});
var Speed = Backbone.Model.extend({
    defaults: {
        name :'',
        wavURL:'undefined.wav'
    }
});

var Dancers = Backbone.Collection.extend({
    model: Dancer
});

var Actions = Backbone.Collection.extend({
    model: Action
});
var Locations = Backbone.Collection.extend({
    model: Location
});
var Speeds = Backbone.Collection.extend({
    model:Speed
});

var allDancers = new Dancers();
var allActions = new Actions();
var allLocations = new Locations();
var allSpeeds = new Speeds();

var location1 = new Location({
    name: 'table'
});
var location2 = new Location({
    name: 'nord'
});
var location3 = new Location({
    name: 'sud'
});
var location4 = new Location({
    name: 'est'
});
var location5 = new Location({
    name: 'ouest'
});

allLocations.add(location1);
allLocations.add(location2);
allLocations.add(location3);
allLocations.add(location4);
allLocations.add(location5);


var action1 = new Action({
    name: 'leve main droite',
    wavURL: 'notDefined.mp3'
});

var action2 = new Action({
    name: 'bois verre d\'eau',
    wavURL: 'notDefined.mp3'
});
var action3 = new Action({
    name: 'Saute 3 fois',
    wavURL: 'notDefined.mp3'
});
var action4 = new Action({
    name: 'Courbe Avant',
    wavURL: 'notDefined.mp3'
});
var action5 = new Action({
    name: 'Saute 10 pas',
    wavURL: 'notDefined.mp3'
});

allActions.add(action1);
allActions.add(action2);
allActions.add(action3);
allActions.add(action4);
allActions.add(action5);

var dancer1 = new Dancer({
    name: 'elise',
    imgURL: 'img/profil_1.jpg',
    state: {},
    color: 'red'
});
var dancer2 = new Dancer({
    name: 'lucien',
    imgURL: 'img/profil_2.jpg',
    state: {},
    color: 'blue'
});
var dancer3 = new Dancer({
    name: 'bernard',
    imgURL: 'img/profil_3.jpg',
    state: {},
    color: 'green'
});
var dancer4 = new Dancer({
    name: 'claire',
    imgURL: 'img/profil_4.jpg',
    state: {},
    color: 'yellow'
});

allDancers.add(dancer1);
allDancers.add(dancer2);
allDancers.add(dancer3);
allDancers.add(dancer4);

var speed1 = new Speed({
    name:'slow'
});

var speed2 = new Speed({
    name:'medium'
});

var speed3 = new Speed({
    name:'fast'
});

allSpeeds.add(speed1);
allSpeeds.add(speed2);
allSpeeds.add(speed3);

//
//VIEW
//
var SpeedView = Backbone.View.extend({

    className: 'speed',

    template: _.template($('#speed_template').html()),
    render: function () {
        this.$el.html(this.template(this.model.attributes));
        this.$el.attr("data-id", this.model.cid);
        return this;
    }

});
var SpeedsView = Backbone.View.extend({
    el: "#speeds",
    initialize: function () {
        this.$el.html('');
        this.render();
    },
    render: function () {
        allSpeeds.each(function (model) {
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
        window.alert("speed dropped");
        console.log($src, $dst);
    }
});
var ActionView = Backbone.View.extend({

    className: 'action',

    template: _.template($('#action_template').html()),
    render: function () {
        this.$el.html(this.template(this.model.attributes));
        this.$el.attr("data-id", this.model.cid);
        return this;
    }

});
var ActionsView = Backbone.View.extend({
    el: "#actions",
    initialize: function () {
        this.$el.html('');
        this.render();
    },
    render: function () {
        allActions.each(function (model) {
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
var LocationsView = Backbone.View.extend({
    el: "#locations",
    initialize: function () {
        this.$el.html('');
        this.render();
    },
    render: function () {
        allLocations.each(function (model) {
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

var DancersView = Backbone.View.extend({
    el: "#dancers",
    initialize: function () {
        this.$el.html('');
        this.render();
    },
    render: function () {
        allDancers.each(function (model) {
            var dancer = new DancerView({
                model: model
            });
            this.$el.append(dancer.render().el);
        }.bind(this));
        $("#dancers > .dancer").dragdrop({
            makeClone: true,
            dragClass: "whileDragging",
            didDrop: this.onDancerDropped.bind(this)

        });
        return this;
    },
    onDancerDropped: function ($src, $dst) {
        window.alert("dancer dropped");
        console.log($src, $dst);
        console.log(allDancers.get({'cid': $src.attr("data-id")}));
    }
});

var dancerView = new DancersView();
var actionView = new ActionsView();
var locationsView = new LocationsView();
var speedsView = new SpeedsView();
dancerView.initialize();
actionView.initialize();
locationsView.initialize();
speedsView.initialize();


//add speed playing between action
//groupe de dancer preselection
// couleur/trame par dancer/groupe
//url image dancer

//TODO STREAMING :
//PURE DATA
//NODE
