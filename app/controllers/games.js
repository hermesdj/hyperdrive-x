'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Games = mongoose.model('Games');


/**
 * Create a new game
 */
exports.create = function(req, res){
	var game = new Games(req.body);
	game.user = req.user;
	
	game.save(function(err){
		if(err){
			return res.send('users/signup', {
				errors: err.errors,
				game: game
			});
		}else{
			res.jsonp(game);
		}
	});
};

/**
 * Retrieve an article by id
 */
exports.get = function(req, res, next, id){
	Games.load(id, function(err, game){
		if(err) return next(err);
		if(!game) return next(new Error('Failed to load article ' + id));
		req.game = game;
		next();
	});
};

/**
 * Show an article
 */
exports.show = function(req, res){
	res.jsonp(req.article);
};

/**
 * Delete a game
 */
exports.destroy = function(req, res){
	var game = req.game;
	
	game.remove(function(err){
		 if (err) {
	            return res.send('users/signup', {
	                errors: err.errors,
	                game: game
	            });
	        } else {
	            res.jsonp(game);
	        }
	});
}

/**
 * List of Games
 */
exports.all = function(req, res) {
    Game.find().sort('-created').populate('user', 'name username').exec(function(err, games) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(games);
        }
    });
};