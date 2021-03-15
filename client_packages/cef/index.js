let browser = null;
mp.gui.cursor.show(true, true);
mp.gui.cursor.visible = true;

mp.keys.bind(0x71, true, function() {   // F2
    if(mp.gui.cursor.visible == true)
    {
        mp.gui.cursor.visible = false;
    } else {
        mp.gui.cursor.visible = true;
    }
});

mp.keys.bind(0x72, true, function () {
    mp.gui.chat.show(false);
    mp.gui.chat.activate(false);
})

mp.keys.bind(0x4D, false, function() {
    if(!mp.players.local.isTypingInTextChat)
    {
        if (!browser){
            browser = mp.browsers.new("package://cef/main-menu.html");
            mp.gui.cursor.visible = true;
        } else {
            browser.destroy();
            browser = null;
            mp.gui.cursor.visible = false;
        }
    }
})

mp.keys.bind(0x73, false, function(){
    if (!browser){
        browser = mp.browsers.new("package://cef/shop/shop.html");
        mp.gui.cursor.visible = true;
    } else {
        browser.destroy();
        browser = null;
        mp.gui.cursor.visible = false;
    }
})

mp.keys.bind(0x78, false, function(){
    if (!browser){
        browser = mp.browsers.new("package://cef/hud/hud.html");
    } else {
        browser.destroy();
        browser = null;
    }
})
