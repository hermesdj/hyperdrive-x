#SHIPS REQS

## SHIPS REQ01 - Ship name generation
 I want automated regexp to generate starship names. For example NCC-1701 Enterprise A should be a Refit of the NCC-1701 Enterprise
 And NCC is an automated name appended on the starship name and the player can configure it (also the 1701 should be a number taken from
 The global ship number for example. I don't want any Starship001, Starship002 in my game...)

 
## SHIPS REQ02 - Ship design
A ship is designed in it's own window. The player add components he have created to the ship and it will automatically update the ship summary

## SHIPS REQ03 - Ship Commanding Officer
A ship needs a Captain to be able to manoeuver. No captain mean the ship is disabled

### SHIPS REQ03-1 - Starship Bridge Officers
When a ship grow in complexity, it become harder for a captain to command it. Bridge officers will help operate the ship systems. They however must
be of a lower rank than the captain. Bridge officer requirements are based on the components aboard the ship and their number. here is an example :

- 1 Weapon Systems: low-ranking bridge officer is required to operate the weapons at peak efficiency
- 5 Weapon Systems: a better rank bridge officer is required
- 10 Weapon Systems: an even better ranked bridge officer

if we assume the ranks in the fleet are Ensign, Lieutenant, Lieutenant-Commander, Commander and Captain, in order to man a ship
with 10 weapons systems, the ship can be commanded by a Commander and be helped by a Lieutenant Commander.

Some idea for the modules that will require a bridge officer : 

- Weapons systems 1/enseign, 5/lieutenant, 10/lieutenant-commander, 20+/commander
- Research Lab : Depending on the level of the lab. Generate research points during the missions. These points are added to the empire main pool if the vessel is within communication range
- Shields : Depending on the level of protection
- Engines/FTL Drive : Depend on the number of engines or the power of the FTL drive (can be the Pilot)
- Medical Bay : Depend on the level of the medical bay
- Engineering spaces : depend on the number of engineering spaces on the ship
