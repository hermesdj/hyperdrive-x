'use strict';

shipyard = {
	name: 'Starfleet Naval Yard', // Auto generation based on a theme choosen during empire creation
	type: 'N', // N for Naval, C for Commercial
	commander: null, // The commander of the shipyard. It's shipbuilding bonus / 2 is added to construction time and quality
	slipways: [
	           {
	        	   tonnage: 5000, // Max Size the shipyard can produce
	        	   currentTask: null, // The current task : build/refit/scrap/repair...
	        	   currentActivity: null, // The current activity of the slipway (Add tonnage, refit for a class...)
	        	   commander: null, // The commander assigned to the slipway. Must be of a lower rank than the shipyard commander. It's full shipbuilding bonus is added
	           }
	           ]
};


/*

*/