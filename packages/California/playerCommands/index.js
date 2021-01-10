mp.events.addCommand('sethp', (player,_,target, hp)=>{
    if (target == undefined || hp == undefined) return player.outputChatBox(`!{#ffcc00}Ошибка: !{#ffffff}/sethp [player] [hp]`);
    var p = mp.players.at(target);
    if(p == null) return player.outputChatBox(`!{#FFCC00}Ошибка: !{#FFFFFF}Игрок не найден!`);
    p.health=parseInt(hp);
})

mp.events.addCommand('veh',(player,_,vehName) =>{
    if (vehName == undefined) return player.outputChatBox(`!{#ffcc00}Ошибка: !{#FFFFFF}/veh [model]`);
    if (mp.joaat(String(vehName)==null)) return player.outputChatBox(`!{#FFCC00}Ошибка: !{#FFFFFF}Некорректное название автомобиля`);

        // Задаем случайные цвета автомобилю
        let a = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        let c = Math.floor(Math.random() * 255);

    mp.vehicles.new(mp.joaat(String(vehName)),new mp.Vector3(player.position.x-2, player.position.y, player.position.z),{
        engine: true,
        locked: false,
        numberPlate: "ADMIN",
        color: [[parseInt(a), parseInt(b),  parseInt(c)],[parseInt(a), parseInt(b), parseInt(c)]],
        heading: player.heading
    })
})

mp.events.addCommand('createblip',(player, BlipId, color,_,BlipName) =>{
    mp.blips.new(parseInt(BlipId), player.position,{
        color: parseInt(color),
        dimension: player.dimension,
        name: String(BlipName)
    })
    
})

mp.events.addCommand("global", (player, message) => {
    mp.players.broadcast(`!{#a366ff} ${player.name}: !{#FFFFFF}${message}`);


})

mp.events.addCommand("vova", (player) => {
    if (player.socialClub == "vbogachev") {
        player.model = mp.joaat('s_m_y_swat_01');
        player.giveWeapon(mp.joaat('weapon_bullpuprifle_mk2'), 10000);
        player.outputChatBox(`Добро пожаловать на сервер, !{#ffcc00}${player.socialClub}`)
    } else {
        player.outputChatBox(`!{#FF0000}Ошибка: !{#FFFFFF}У Вас нет доступа для использования данной команды!`);
    }
})

mp.events.addCommand("showsocial", (player, _, target) => {
    if (target == undefined) return player.outputChatBox(`!{#ffcc00}Ошибка: !{#ffffff}/showsocial [id]`);
    var p = mp.players.at(target);
    if(p == null) return player.outputChatBox(`!{#FFCC00}Ошибка: !{#FFFFFF}Игрок не найден!`);
    console.log(`[SERVER]: SocialClub: ${p.socialClub}`);
})

mp.events.addCommand('givegun', (player, _,id, weapon, ammo) =>{
    if (id == undefined || weapon == undefined || ammo == undefined) return player.outputChatBox(`!{#ffcc00}Ошибка: !{#ffffff}/givegun [id] [weapon] [ammo]`);
    let target = mp.players.at(id);
    target.giveWeapon(mp.joaat(weapon), parseInt(ammo));
})