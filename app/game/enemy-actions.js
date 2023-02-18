export default class EnemyActions {
	constructor(player, enemies) {
		this.player = player;
		this.enemies = enemies;
	}

	async attackPlayer() {
		this.enemies.map(enemy => enemy.attacks(this.player))
	}
}