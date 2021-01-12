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
    
    //Правый берег, колонка 1
    "ZONE_01": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
           /* "x": 781.565, 
            "y": -1430.115,
            "z": 19.485
            134*/
            "x": 781.5,
            "y": -1430.5,
            "z": 19.5
        }
    },

    "ZONE_02": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 781.5,
            "y": -1570.5,
            "z": 19.5
        }
    },

    "ZONE_03": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 781.5,
            "y": -1710.5,
            "z": 19.5
        }
    },

    "ZONE_04": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 781.5,
            "y": -1850.5,
            "z": 19.5
        }
    },

    "ZONE_05": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 781.5,
            "y": -1990.5,
            "z": 19.5
        }
    },

    "ZONE_06": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 781.5,
            "y": -2130.5,
            "z": 19.5
        }
    },

    "ZONE_07": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 781.5,
            "y": -2270.5,
            "z": 19.5
        }
    },

    "ZONE_08": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 781.5,
            "y": -2410.5,
            "z": 19.5
        }
    },

    // Правый берег, 2 колонка
    "ZONE_09": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
           /* "x": 781.565, 
            "y": -1430.115,
            "z": 19.485
            134*/
            "x": 921.5,
            "y": -1430.5,
            "z": 19.5
        }
    },

    "ZONE_10": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 921.5,
            "y": -1570.5,
            "z": 19.5
        }
    },

    "ZONE_11": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 921.5,
            "y": -1710.5,
            "z": 19.5
        }
    },

    "ZONE_12": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 921.5,
            "y": -1850.5,
            "z": 19.5
        }
    },

    "ZONE_13": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 921.5,
            "y": -1990.5,
            "z": 19.5
        }
    },

    "ZONE_14": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 921.5,
            "y": -2130.5,
            "z": 19.5
        }
    },

    "ZONE_15": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 921.5,
            "y": -2270.5,
            "z": 19.5
        }
    },

    "ZONE_16": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 921.5,
            "y": -2410.5,
            "z": 19.5
        }
    },

    // Правый берег, 3 колонка
    "ZONE_17": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 1061.5,
            "y": -1850.5,
            "z": 19.5
        }
    },

    "ZONE_18": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 1061.5,
            "y": -1990.5,
            "z": 19.5
        }
    },

    "ZONE_19": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 1061.5,
            "y": -2130.5,
            "z": 19.5
        }
    },

    "ZONE_20": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 1061.5,
            "y": -2270.5,
            "z": 19.5
        }
    },

    "ZONE_21": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 1061.5,
            "y": -2410.5,
            "z": 19.5
        }
    },

    // Правый берег, 4 колонка

    "ZONE_22": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 1201.5,
            "y": -1570.5,
            "z": 19.5
        }
    },

    "ZONE_23": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 1201.5,
            "y": -1710.5,
            "z": 19.5
        }
    },

    "ZONE_24": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 1201.5,
            "y": -1850.5,
            "z": 19.5
        }
    },

    "ZONE_25": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 1201.5,
            "y": -1990.5,
            "z": 19.5
        }
    },

    "ZONE_26": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 1201.5,
            "y": -2130.5,
            "z": 19.5
        }
    },

    "ZONE_27": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 1201.5,
            "y": -2270.5,
            "z": 19.5
        }
    },

    "ZONE_28": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 1201.5,
            "y": -2410.5,
            "z": 19.5
        }
    },

    // Правый берег, колонка 5

    "ZONE_29": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 1341.5,
            "y": -1570.5,
            "z": 19.5
        }
    },

    "ZONE_30": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 1341.5,
            "y": -1710.5,
            "z": 19.5
        }
    },

    "ZONE_31": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 1341.5,
            "y": -1850.5,
            "z": 19.5
        }
    },

    "ZONE_32": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 1341.5,
            "y": -1990.5,
            "z": 19.5
        }
    },

    // Правый берег, колонка 6
    "ZONE_33": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 1481.5,
            "y": -1430.5,
            "z": 19.5
        }
    },

    "ZONE_34": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 1481.5,
            "y": -1570.5,
            "z": 19.5
        }
    },

    "ZONE_35": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 1481.5,
            "y": -1710.5,
            "z": 19.5
        }
    },

    //Левый берег, колонка 1 (справа)
    "ZONE_36": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 533.5,
            "y": -1290.5,
            "z": 19.5
        }
    },
    
    "ZONE_37": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 533.5,
            "y": -1430.5,
            "z": 19.5
        }
    },

    "ZONE_38": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 533.5,
            "y": -1570.5,
            "z": 19.5
        }
    },

    "ZONE_39": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 533.5,
            "y": -1710.5,
            "z": 19.5
        }
    },

    "ZONE_40": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 533.5,
            "y": -1850.5,
            "z": 19.5
        }
    },

    "ZONE_41": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 533.5,
            "y": -1990.5,
            "z": 19.5
        }
    },

     //Левый берег, колонка 2 (справа)
     "ZONE_42": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 393.5,
            "y": -1290.5,
            "z": 19.5
        }
    },
    
    "ZONE_43": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 393.5,
            "y": -1430.5,
            "z": 19.5
        }
    },

    "ZONE_44": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 393.5,
            "y": -1570.5,
            "z": 19.5
        }
    },

    "ZONE_45": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 393.5,
            "y": -1710.5,
            "z": 19.5
        }
    },

    "ZONE_46": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 393.5,
            "y": -1850.5,
            "z": 19.5
        }
    },

    "ZONE_47": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 393.5,
            "y": -1990.5,
            "z": 19.5
        }
    },

    "ZONE_48": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 393.5,
            "y": -2130.5,
            "z": 19.5
        }
    },

    // Левый берег, колонка 3 (справа)
    "ZONE_49": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 253.5,
            "y": -1430.5,
            "z": 19.5
        }
    },

    "ZONE_50": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 253.5,
            "y": -1570.5,
            "z": 19.5
        }
    },

    "ZONE_51": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 253.5,
            "y": -1710.5,
            "z": 19.5
        }
    },

    "ZONE_52": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 253.5,
            "y": -1850.5,
            "z": 19.5
        }
    },

    "ZONE_53": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 253.5,
            "y": -1990.5,
            "z": 19.5
        }
    },

    "ZONE_54": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 253.5,
            "y": -2130.5,
            "z": 19.5
        }
    },

    // Левый берег, колонка 4 (справа)
    "ZONE_55": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 113.5,
            "y": -1430.5,
            "z": 19.5
        }
    },

    "ZONE_56": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 113.5,
            "y": -1570.5,
            "z": 19.5
        }
    },

    "ZONE_57": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 113.5,
            "y": -1710.5,
            "z": 19.5
        }
    },

    "ZONE_58": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 113.5,
            "y": -1850.5,
            "z": 19.5
        }
    },

    "ZONE_59": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 113.5,
            "y": -1990.5,
            "z": 19.5
        }
    },

    "ZONE_60": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": 113.5,
            "y": -2130.5,
            "z": 19.5
        }
    },

    // Левый берег, колонка 5 (справа)
    "ZONE_61": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": -26.5,
            "y": -1430.5,
            "z": 19.5
        }
    },

    "ZONE_62": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": -26.5,
            "y": -1570.5,
            "z": 19.5
        }
    },

    "ZONE_63": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": -26.5,
            "y": -1710.5,
            "z": 19.5
        }
    },

    "ZONE_64": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": -26.5,
            "y": -1850.5,
            "z": 19.5
        }
    },

    // Левый берег, колонка 6 (справа)
    "ZONE_65": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": -166.5,
            "y": -1430.5,
            "z": 19.5
        }
    },

    "ZONE_66": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": -166.5,
            "y": -1570.5,
            "z": 19.5
        }
    },

    "ZONE_67": {
        "BlipColor": Math.floor(Math.random() * (85 - 1)) + 1,
        "zone": undefined,
        "Checkpoint": {
            "x": -166.5,
            "y": -1710.5,
            "z": 19.5
        }
    }

}

clearBlips();

for (let point in pointsData) {
    pos = pointsData[point].Checkpoint
    pointsData[point].zone = mp.game.ui.addBlipForRadius(pos.x, pos.y, 0, 70);
    natives.SET_BLIP_SPRITE(pointsData[point].zone, 5);
    natives.SET_BLIP_ALPHA(pointsData[point].zone, 100);
    natives.SET_BLIP_ROTATION(pointsData[point].zone, 90);
    natives.SET_BLIP_COLOUR(pointsData[point].zone, pointsData[point].BlipColor);
}
