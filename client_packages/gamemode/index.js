mp.events.add('render', () => {
    mp.game.graphics.drawText(`X: ${mp.players.local.position.x.toFixed(2)}   Y: ${mp.players.local.position.y.toFixed(2)}   Z: ${mp.players.local.position.z.toFixed(2)}`, [0.5, 0.03],
    {
        font: 7,
        color: [255, 255, 255, 255],
        scale: [0.3, 0.3],
        outline: true
    })
})

let natives = {}

mp.game.graphics.clearDrawOrigin = () => mp.game.invoke('0xFF0B610F6BE0D7AF'); // 26.07.2018 // GTA 1.44

natives.SET_BLIP_SPRITE = (blip, sprite) => mp.game.invoke("0xDF735600A4696DAF", blip, sprite); // SET_BLIP_SPRITE
natives.SET_BLIP_ALPHA = (blip, a) => mp.game.invoke("0x45FF974EEE1C8734", blip, a); // SET_BLIP_ALPHA
natives.SET_BLIP_COLOUR = (blip, c) => mp.game.invoke("0x03D7FB09E75D6B7E", blip, c); // SET_BLIP_COLOUR
natives.SET_BLIP_ROTATION = (blip, r) => mp.game.invoke("0xF87683CDF73C3F6E", blip, r); // SET_BLIP_ROTATION
natives.SET_BLIP_FLASHES = (blip, f) => mp.game.invoke("0xB14552383D39CE3E", blip, f); // SET_BLIP_FLASHES
natives.SET_BLIP_FLASH_TIMER = (blip, t) => mp.game.invoke("0xD3CD6FD297AE87CC", blip, t); // SET_BLIP_FLASH_TIMER
natives.SET_BLIP_COORDS = (blip, x, y, z) => mp.game.invoke("0xAE2AF67E9D9AF65D", blip, x, y, z); // SET_BLIP_COORDS
natives.SET_THIS_SCRIPT_CAN_REMOVE_BLIPS_CREATED_BY_ANY_SCRIPT = (toggle) => mp.game.invoke("0xB98236CAAECEF897", toggle); // SET_THIS_SCRIPT_CAN_REMOVE_BLIPS_CREATED_BY_ANY_SCRIPT
natives.GET_FIRST_BLIP_INFO_ID = (i) => mp.game.invoke("0x1BEDE233E6CD2A1F", i); // GET_FIRST_BLIP_INFO_ID
natives.GET_NEXT_BLIP_INFO_ID = (i) => mp.game.invoke("0x14F96AA50D6FBEA7", i); // GET_NEXT_BLIP_INFO_ID
natives.DOES_BLIP_EXIST = (blip) => mp.game.invoke("0xA6DB27D19ECBB7DA", blip); // DOES_BLIP_EXIST
natives.GET_NUMBER_OF_ACTIVE_BLIPS = () => mp.game.invoke("0x9A3FF3DE163034E8"); // GET_NUMBER_OF_ACTIVE_BLIPS
natives.SET_BLIP_SCALE = (blip,scale) => mp.game.invoke("0xD38744167B2FA257",blip,scale); // SET_BLIP_SCALE
natives.SET_ENTITY_NO_COLLISION_ENTITY = (entity1, entity2, collision) => mp.game.invoke("0xA53ED5520C07654A", entity1.handle, entity2.handle, collision); // SET_ENTITY_NO_COLLISION_ENTITY



function clearBlips() {
    natives.SET_THIS_SCRIPT_CAN_REMOVE_BLIPS_CREATED_BY_ANY_SCRIPT(true)
    let last_blip = natives.GET_FIRST_BLIP_INFO_ID(5)
    while (natives.DOES_BLIP_EXIST(last_blip)) {
        mp.game.ui.removeBlip(last_blip)
        last_blip = natives.GET_NEXT_BLIP_INFO_ID(5)
    }
    mp.game.wait(50)
}
let pointsData = {
    "ZONE_01": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 781.565,
            "y": -1430.115,
            "z": 19.485
        }
    },

    "ZONE_02": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 781.565,
            "y": -1564.425,
            "z": 19.485
        }
    },

    "ZONE_03": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 781.565,
            "y": -1698.735,
            "z": 19.485
        }
    },

    "ZONE_04": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 781.565,
            "y": -1833.045,
            "z": 19.485
        }
    },

    "ZONE_05": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 781.565,
            "y": -1967.355,
            "z": 19.485
        }
    },

    "ZONE_06": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 781.565,
            "y": -2101.665,
            "z": 19.485
        }
    },

    "ZONE_07": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 781.565,
            "y": -2235.975,
            "z": 19.485
        }
    },

    "ZONE_08": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 781.565,
            "y": -2370.285,
            "z": 19.485
        }
    },

}

clearBlips()
for (let point in pointsData) {
    pos = pointsData[point].Checkpoint
    pointsData[point].zone = mp.game.ui.addBlipForRadius(pos.x, pos.y, 0, 67.155);
    natives.SET_BLIP_SPRITE(pointsData[point].zone, 5);
    natives.SET_BLIP_ALPHA(pointsData[point].zone, 100);
    natives.SET_BLIP_ROTATION(pointsData[point].zone, 90)
    natives.SET_BLIP_COLOUR(pointsData[point].zone, pointsData[point].BlipColor)
}
