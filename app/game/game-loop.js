export default class GameLoop {

	gamePlay(player, enemies) {
		
	}

	isStillOngoing(player, enemies) {
		while (
			this.isPlayerAlive(player) && 
			this.areEnemiesLeft(enemies)
			) {
			this.gamePlay(player, enemies);
		}
	}

	isPlayerAlive(player) {
		if (player.lifePoints > 0) {
			return true;
		}
	}
	areEnemiesLeft(enemies) {
		if (enemies.length > 0) {
			return true;
		}
	}
}
