var fs = require('fs');

mp.events.addCommand('sethp', (player,_,target, hp)=>{
    if (target == undefined || hp == undefined) return player.outputChatBox(`!{#ffcc00}Ошибка: !{#ffffff}/sethp [player] [hp]`);
    var p = mp.players.at(target);
    if(p == null) return player.outputChatBox(`!{#FFCC00}Ошибка: !{#FFFFFF}Игрок не найден!`);
    p.health=parseInt(hp);
});

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
});

mp.events.addCommand('createblip',(player, BlipId, color,_,BlipName) =>{
    mp.blips.new(parseInt(BlipId), player.position,{
        color: parseInt(color),
        dimension: player.dimension,
        name: String(BlipName)
    })
    
});

mp.events.addCommand("global", (player, message) => {
    mp.players.broadcast(`!{#a366ff} ${player.name}: !{#FFFFFF}${message}`);
});

mp.events.addCommand("vova", (player) => {
    if (player.socialClub == "vbogachev") {
        player.model = mp.joaat('s_m_y_swat_01');
        player.giveWeapon(mp.joaat('weapon_bullpuprifle_mk2'), 10000);
        player.outputChatBox(`Добро пожаловать на сервер, !{#ffcc00}${player.socialClub}`)
    } else {
        player.outputChatBox(`!{#FF0000}Ошибка: !{#FFFFFF}У Вас нет доступа для использования данной команды!`);
    }
});

mp.events.addCommand("showsocial", (player, _, target) => {
    if (target == undefined) return player.outputChatBox(`!{#ffcc00}Ошибка: !{#ffffff}/showsocial [id]`);
    var p = mp.players.at(target);
    if(p == null) return player.outputChatBox(`!{#FFCC00}Ошибка: !{#FFFFFF}Игрок не найден!`);
    console.log(`[SERVER]: SocialClub: ${p.socialClub}`);
});

mp.events.addCommand('givegun', (player, _,id, weapon, ammo) =>{
    if (id == undefined || weapon == undefined || ammo == undefined) return player.outputChatBox(`!{#ffcc00}Ошибка: !{#ffffff}/givegun [id] [weapon] [ammo]`);
    let target = mp.players.at(id);
    target.giveWeapon(mp.joaat(weapon), parseInt(ammo));
});

mp.events.addCommand('tp', (player, _, x, y, z) =>{
    if (x == undefined || y == undefined || z == undefined) return player.outputChatBox(`!{#ffcc00}Ошибка: !{#ffffff}/tp [x] [y] [z]`);
    player.position = new mp.Vector3(parseInt(x), parseInt(y), parseInt(z));
});

mp.events.addCommand('create', (player, _, type, size) => {
    if (type == undefined || size == undefined) return player.outputChatBox(`!{#ffcc00}Ошибка: !{#ffffff}/create [type] [size]`);
    if (type < 1 || type > 44) return player.outputChatBox(`!{#ffcc00}Ошибка: !{#ffffff}тип может быть в промежутке от 1 до 44`);
    
    mp.markers.new(parseInt(type), player.position, parseFloat(size), {
        color: [255, 0, 0, 255],
        dimension: player.dimension,
        visible: true
    })

        player.outputChatBox(`Маркер успешно создан на координатах X: ${player.position.x.toFixed(2)}, Y: ${player.position.y.toFixed(2)}, Z: ${player.position.z.toFixed(2)}`);
        player.outputChatBox(`!{#ffcc00}dim=!{#ffffff}${player.dimension}, !{#ffcc00}type=!{#ffffff}${type}`);
});

mp.events.addCommand('h', (player,_) =>{
    player.position = new mp.Vector3(0, 0, 72);
})

mp.events.addCommand('cp', (player,_)=>{
    mp.checkpoints.new(1, player.position, 10,
    {
        direction: new mp.Vector3(0, 0, 75),
        color: [ 255, 255, 255, 255 ],
        visible: true,
        dimension: 0
    });
})

mp.events.addCommand('save', player => {
    fs.appendFile(__dirname + `/positions-${player.socialClub}.txt`, `\r\n${player.position.x.toFixed(2)}, ${player.position.y.toFixed(2)}, ${player.position.z.toFixed(2)}`, function(err){
        if(err)throw err;
    
        console.log('Координаты точки записаны в файл'); // выведем сообщение когда запись будет завершена
    });
    player.outputChatBox(`Точка успешно сохранена: !{#ffcc00}${player.position.x.toFixed(2)} ${player.position.y.toFixed(2)} ${player.position.z.toFixed(2)}!{#ffffff}.`);
})

mp.events.addCommand('fcomm', (player,_,textmessage) => {
    fs.appendFile(__dirname + `/positions-${player.socialClub}.txt`, `\r\n${textmessage}`, function(err){
        if(err)throw err;
    
        console.log(`${player.socialClub} записал сообщение: ${textmessage}`); // выведем сообщение когда запись будет завершена
    });
    player.outputChatBox(`Сообщение записано: !{#ffcc00}${textmessage}!{#ffffff}.`);
})

mp.events.addCommand("pm", (player, _, target, text) => {
    let p = mp.players.at(target);
    player.outputChatBox(`Вы отправили сообщение ${p.name}`);
    p.outputChatBox(`Сообщение от ${player.name}: ${text}`);
});

mp.events.addCommand("gethere", (player, target) => {
    if (target == undefined) return player.outputChatBox(`!{#ffcc00}Ошибка: !{#ffffff}/gethere [id]`);
    var p = mp.players.at(target);
    if(p == null) return player.outputChatBox(`!{#FFCC00}Ошибка: !{#FFFFFF}Игрок не найден!`);
    p.position = new mp.Vector3(player.position.x+2, player.position.y, player.position.z);
    mp.players.broadcast(`Игрок !{#ffcc00}${p.socialClub}[${p.id}] !{#ffffff}телепортировал к себе игрока !{#ffcc00}${player.socialClub}[${player.id}]!{#ffffff}.`)
})

mp.events.addCommand("goto", (player,target) => {
    if (target == undefined) return player.outputChatBox(`!{#ffcc00}Ошибка: !{#ffffff}/goto [id]`);
    var p = mp.players.at(target);
    if(p == null) return player.outputChatBox(`!{#FFCC00}Ошибка: !{#FFFFFF}Игрок не найден!`);
    player.position = new mp.Vector3(p.position.x+2, p.position.y, p.position.z);
    mp.players.broadcast(`Игрок !{#ffcc00}${player.socialClub}[${player.id}] !{#ffffff}телепортировался к игроку !{#ffcc00}${p.socialClub}[${p.id}]!{#ffffff}.`);
})

mp.events.addCommand('setname', (player, _, target, newname) => {
    if (target == undefined || newname == undefined) return player.outputChatBox(`!{#ffcc00}Ошибка: !{#ffffff}/setname [id] [name]`);
    var p = mp.players.at(target);
    if (p == null) return player.outputChatBox(`!{#ffcc00}Ошибка: !{#ffffff}Игрок не найден`);
    p.name = newname;
    mp.players.broadcast(`${player.socialClub} изменил имя игроку ${p.socialClub} на ${newname}`);

})

mp.events.addCommand('vino', (player) => {
    player.position = new mp.Vector3(-1918.59, 2072.15, 140.12);
})

mp.events.addCommand('settime', (player, time) => {
    if (time == undefined) return player.outputChatBox(`!{#ffcc00}Ошибка: !{#ffffff}/settime [часы]`);
    mp.world.time.hour = parseInt(time);
})

mp.events.addCommand('beard', (player, _, value, color1, color2) => {
    let firstColor = 0;
    let secondColor = 0;
    player.outputChatBox(`value = ${value}, color1 = ${color1}, color2 = ${color2}`);
    if (isNaN(value) || isNaN (color1) || isNaN(color2)) return player.outputChatBox(`Введены некорректные значения!`);
    
    firstColor = parseInt(color1);
    secondColor = parseInt(color2);

    player.setHeadOverlay(1, [parseInt(value), 1, firstColor, secondColor]);
})
