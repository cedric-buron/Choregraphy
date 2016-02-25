$      = require('jquery');// jshint ignore:line
jQuery = require('jquery');// jshint ignore:line
require('./vendor/jquery.drag-drop.plugin.min.js');// jshint ignore:line
var Dancer        = require('./models/dancer.js');
var Dancers       = require('./models/dancers.js');
var Action        = require('./models/action.js');
var Actions       = require('./models/actions.js');
var Location      = require('./models/location.js');
var Locations     = require('./models/locations.js');
var Speed         = require('./models/speed.js');
var Speeds        = require('./models/speeds.js');
var Order         = require('./models/order.js');
var Orders        = require('./models/orders.js');
var DancersView   = require('./views/dancers.js');
var ActionsView   = require('./views/actions.js');
var LocationsView = require('./views/locations.js');
var SpeedsView    = require('./views/speeds.js');
var OrdersView    = require('./views/orders.js');

var slow = new Speed({
    name: 'slow'
});

var medium = new Speed({
    name: 'medium'
});

var fast = new Speed({
    name: 'fast'
});

var allDancers   = new Dancers();
var allActions   = new Actions();
var allLocations = new Locations();
var allSpeeds    = new Speeds();

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

allSpeeds.add(slow);
allSpeeds.add(medium);
allSpeeds.add(fast);

var dancerView    = new DancersView({
    model: allDancers
});
var actionView    = new ActionsView({
    model: allActions
});
var locationsView = new LocationsView({
    model: allLocations
});
var speedView     = new SpeedsView({
    model: allSpeeds
});

var order = new Order({
    dancers:allDancers,
    actions:allActions,
    location:location1
});
order.set('dancers',allDancers);
order.set('actions',allActions);
order.set('location',location1);
var orders =new Orders();
orders.add(order);
var orderView     = new OrdersView({ model: orders });

dancerView.initialize();
actionView.initialize();
locationsView.initialize();
speedView.initialize();
orderView.initialize();


//add speed playing between action
//groupe de dancer preselection
// couleur/trame par dancer/groupe
//url image dancer

//TODO STREAMING :
//PURE DATA
//NODE
