$      = require('jquery');// jshint ignore:line
jQuery = require('jquery');// jshint ignore:line
require('./vendor/jquery.drag-drop.plugin.min.js');// jshint ignore:line
var Radio = require('backbone.radio');
var Dancer        = require('./models/dancer.js');
var Dancers       = require('./models/dancers.js');
var Action        = require('./models/action.js');
var Actions       = require('./models/actions.js');
var Location      = require('./models/location.js');
var Locations     = require('./models/locations.js');
var Speed         = require('./models/speed.js');
var Speeds        = require('./models/speeds.js');
var Order         = require('./models/order.js');
//var Orders        = require('./models/orders.js');
var DancersView   = require('./views/dancers.js');
var ActionsView   = require('./views/actions.js');
var LocationsView = require('./views/locations.js');
var SpeedsView    = require('./views/speeds.js');
var OrderView    = require('./views/order.js');
//var OrdersView    = require('./views/orders.js');

var APP = {};

APP.DancersChannel = Radio.channel('dancer');
APP.LocationChannel = Radio.channel('location');
APP.ActionsChannel = Radio.channel('action');
APP.SpeedsChannel  = Radio.channel('speed');



var slow = new Speed({
    name: 'slow'
});

var medium = new Speed({
    name: 'medium'
});

var fast = new Speed({
    name: 'fast'
});

APP.allDancers   = new Dancers();
APP.allActions   = new Actions();
APP.allLocations = new Locations();
APP.allSpeeds    = new Speeds();

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

APP.allLocations.add(location1);
APP.allLocations.add(location2);
APP.allLocations.add(location3);
APP.allLocations.add(location4);
APP.allLocations.add(location5);


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

APP.allActions.add(action1);
APP.allActions.add(action2);
APP.allActions.add(action3);
APP.allActions.add(action4);
APP.allActions.add(action5);

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

APP.allDancers.add(dancer1);
APP.allDancers.add(dancer2);
APP.allDancers.add(dancer3);
APP.allDancers.add(dancer4);

APP.allSpeeds.add(slow);
APP.allSpeeds.add(medium);
APP.allSpeeds.add(fast);



APP.dancerView    = new DancersView({
    model: APP.allDancers
});
APP.actionView    = new ActionsView({
    model: APP.allActions
});
APP.locationsView = new LocationsView({
    model: APP.allLocations
});
APP.speedView     = new SpeedsView({
    model: APP.allSpeeds
});

var orderModel = new Order();
//orderModel.initialize();
var orderView = new OrderView({model:orderModel});
console.log(orderModel);

APP.LocationChannel.on('location:added', function (location) {
    orderModel.changeLocation(location);
    console.log(orderView.render().el);
    $('.preview').append(orderView.render().el);
});
APP.ActionsChannel.on('action:added', function (action) {
    orderModel.addAction(action);
    $('.preview').append(orderView.render().el);
});
APP.DancersChannel.on('dancer:added', function (dancer) {
    orderModel.addDancer(dancer);
    $('.preview').append(orderView.render().el);
});
APP.SpeedsChannel.on('speed:added', function (speed) {
    orderModel.changeSpeed(speed);
    $('.preview').append(orderView.render().el);
});

//add speed playing between action
//groupe de dancer preselection
// couleur/trame par dancer/groupe
//url image dancer

//TODO STREAMING :
//PURE DATA
//NODE
