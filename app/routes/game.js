'use strict';

var games = require('../controllers/games');
var authorization = require('./middlewares/authorization');

//Game authorization helpers
var hasAuthorization = function(req, res, next) {
	if (req.game.user.id !== req.user.id) {
        return res.send(401, 'User is not authorized');
    }
    next();
};

module.exports = function(app){
	app.get('/game', games.all);
	app.post('/game', authorization.requiresLogin, games.create);
	app.get('/game/:gameId', games.show);
	app.del('/game/:gameId', authorization.requiresLogin, hasAuthorization, games.destroy);

	// Finish with setting up the articleId param
    app.param('gameId', games.get);
}