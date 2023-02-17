export default class GameLoop {

	constructor(player, enemies) {
		this.player = player;
		this.enemies = enemies;
	}

	gamePlay() {
		
	}

	isStillOngoing() {
		while (
			this.isPlayerAlive(this.player) && 
			this.areEnemiesLeft(this.enemies)
			) {
			this.gamePlay();
		}
	}

	isPlayerAlive(player) {
		if (this.player.lifePoints > 0) {
			return true;
		}
	}
	
	areEnemiesLeft(enemies) {
		if (this.enemies.length > 0) {
			return true;
		}
	}
}
