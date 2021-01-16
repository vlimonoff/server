let spawnPoints = require('./spawn_points.json').SpawnPoints;

mp.events.add('playerDeath', (player) => {
    player.spawn(spawnPoints[Math.floor(Math.random() * spawnPoints.length)]);
    player.health = 100;
    console.log(`Игрок ${player.name} заспавнился (SocialClub: ${player.socialClub})`);
});

function playerEnterVehicleHandler(player, vehicle, seat) {
	player.outputChatBox(`${player.name} got into the car with ID: ${vehicle.id}. Seat: ${seat}`);
}
 
mp.events.add("playerEnterVehicle", playerEnterVehicleHandler);

mp.events.add('playerJoin', (player) => {
    console.log(`[SERVER]: ${player.name} присоединился к серверу (SocialClub: ${player.socialClub})!`);
    player.name = player.socialClub;
});

