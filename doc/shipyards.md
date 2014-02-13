#SHIPYARD REQS

##SHIPYARD Code

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

##SHIPYARD REQ01 - Slipways Basics
	Each slipway is independent from each other, but a slipway can have a task assigned to another slipway task to accelerate the shipbuilding
	process. However, the more slipway added to a construction, the less efficient the bonus will be and will have event negative effect if 
	too many slipways are added to the building (worker conflicts). can be reduced by the shipyard commander attributes.


##SHIPYARD REQ02 - Slipways building
	A shipyard can create new slipways, but it is expensive. 
	REG02-1 : The time to build a new slipway is based on technology and on the commander attributes 
