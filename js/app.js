 'use strict';
// (function () {
//     function init() {
//         var router = new Router([
//             new Route('teams', 'teams.html', true),
//             new Route('chennai-super-kings', 'team.html'),
//             new Route('delhi-capitals', 'team.html'),
//             new Route('kings-xi-punjab', 'team.html'),
//             new Route('kolkata-knight-riders', 'team.html'),
//             new Route('mumbai-indians', 'team.html'),
//             new Route('rajasthan-royals', 'team.html'),
//             new Route('royal-challengers-bangalore', 'team.html'),
//             new Route('sunrisers-hyderabad', 'team.html')
//         ]);
//     }
//     init();
// }());

function Route(name, htmlName, defaultRoute) {
    try {
        if(!name || !htmlName) {
            throw 'error: name and htmlName params are mandatories';
        }
        this.constructor(name, htmlName, defaultRoute);
    } catch (e) {
        console.error(e);
    }
}

Route.prototype = {
    name: undefined,
    htmlName: undefined,
    default: undefined,
    constructor: function (name, htmlName, defaultRoute) {
        this.name = name;
        this.htmlName = htmlName;
        this.default = defaultRoute;
    },
    isActiveRoute: function (hashedPath) {
        // console.log("HashedPath: "+hashedPath)
        return hashedPath.replace('#', '') === this.name; 
    }
}

class App{  
    constructor(routes){
        this.router = new Router(routes);
    }
}

const routes = [
    new Route('teams', 'teams.html', true),
    new Route('chennai-super-kings', 'chennai-super-kings.html'),
    new Route('delhi-capitals', 'delhi-capitals.html'),
    new Route('kings-xi-punjab', 'kings-xi-punjab.html'),
    new Route('kolkata-knight-riders', 'kolkata-knight-riders.html'),
    new Route('mumbai-indians', 'mumbai-indians.html'),
    new Route('rajasthan-royals', 'rajasthan-royals.html'),
    new Route('royal-challengers-bangalore', 'royal-challengers-bangalore.html'),
    new Route('sunrisers-hyderabad', 'sunrisers-hyderabad.html'),

];

document.addEventListener('DOMContentLoaded', function(event){
   var app = new App(routes);
});
