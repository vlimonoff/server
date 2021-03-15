let spawnPoints = require('./spawn_points.json').SpawnPoints;

mp.events.add('playerDeath', (player) => {
    player.spawn(spawnPoints[Math.floor(Math.random() * spawnPoints.length)]);
    player.health = 100;
    console.log(`Игрок ${player.name} заспавнился (SocialClub: ${player.socialClub})`);
});

mp.events.add("playerDamage", (player, healthLoss, armorLoss) => {
    mp.players.broadcast(`!{#FFCC00}${player.socialClub} !{#FFFFFF}потерял !{#FFCC00}${healthLoss} hp!{#FFFFFF}, и !{#FFCC00}${armorLoss} !{#FFFFFF}брони.`);
});

function playerEnterVehicleHandler(player, vehicle, seat) {
	player.outputChatBox(`${player.name} got into the car with ID: ${vehicle.id}. Seat: ${seat}`);
}
 
mp.events.add("playerEnterVehicle", playerEnterVehicleHandler);

mp.events.add('playerJoin', (player) => {
    console.log(`[SERVER]: ${player.name} присоединился к серверу (SocialClub: ${player.socialClub})!`);
    player.name = player.socialClub;
});

