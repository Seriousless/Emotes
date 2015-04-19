/**
 *  Seriousless Emotes
 *  Copyright (C) 2015 Sindastra
 */

function h(e) {
    var t, n = e.split(" "),
        i = [],
        s = function(t) {
            i.push('<i class="' + t + ' sprite"> </i>')
        }
    for (t = 0; t < n.length; t++) switch (n[t]) {
        // Default ones
        case ':P':
        case ':p':
            s('tongue');
            break;
        case ':)':
            s('smile');
            break;
        case ':(':
            s('sad');
            break;
        case ':o':
        case ':O':
            s('surprised');
            break;
        case '&lt;3':
            s('heart');
            break;
        case ':hat:':
            s('hat');
            break;
        case ':D':
            s('happyd');
            break;
        case ':-p':
            s('evil');
            break;

        // Added even later
        case ':codger:':
            s('codger');
            break;
        case ':J':
            s('j');
            break;
        case ':yush:':
            s('yush');
            break;
        case ':omgomg:':
            s('omgomg');
            break;
        case ':wave:':
            s('wave');
            break;
        case ':mad:':
            s('mad');
            break;
        case 'xD':
        case 'XD':
            s('xd');
            break;
        case ':omg:':
            s('omg');
            break;
        case ':mono:':
            s('mono');
            break;
        case ':awesomed:':
            s('awesomed');
            break;
        case ':daisy:':
            s('daisy');
            break;  

        // Requests by Seriousless community
        case ':cheers:':
            s('cheers');
            break;
        case ':xanj:':
            s('xanj');
            break;
        case ':up:':
            s('up');
            break;
        case ':yarr:':
            s('yarr');
            break;
        case ':bwah:':
            s('bwah');
            break;
        case ':jugglin:':
            s('jugglin');
            break;
        case ':tardrave:':
            s('tardrave');
            break;
        case ':X.':
            s('angry');
            break;
        case ':fury:':
            s('fury');
            break;
        case ':amaze:':
            s('amazed');
            break;
        case ':surp:':
            s('surprised');
            break;
        case ':valo:':
            s('darkvalo');
            break;
        case ':rave:':
            s('rave');
            break;
        case ':fist:':
            s('fist');
            break;
        case ':D.':
            s('happy');
            break;
        case ':intrigued:':
            s('intrigued');
            break;
        case ':sherlock:':
            s('sherlock');
            break;
        case ':DD':
            s('grin');
            break;
        case ':guzzyoshallruletheworld:':
            s('king');
            break;
        case ':hugs:':
            s('hugs');
            break;
        case ':evilmonkey:':
            s('evilkingmonkey');
            break;

        // ADDED LATER
        case ':shrug:':
            s('shrug');
            break;
        case ':bhug:':
            s('hugs');
            break;
        case ':facepalm:':
            s('facepalm');
            break;
        case ':zzz:':
            s('zzz');
            break;
        case ':plot:':
            s('plot');
            break;
        // Minecraft
        // Heads
        case ':steve:':
            s('head-perspective-steve');
            break;
        case ':creeper:':
            s('head-perspective-creeper');
            break;
        case ':skelleton:':
            s('head-perspective-skelleton');
            break;
        case ':zombie:':
            s('head-perspective-zombie');
            break;
        case ':wither:':
            s('head-perspective-wither')
            break;
        // Tools and Weapons
        case ':pickaxe:':
            s('diamond-pickaxe');
            break;
        case ':sword:':
            s('diamond-sword');
            break;
        case ':shovel:':
            s('stone-shovel');
            break;
        case ':axe:':
            s('iron-axe');
            break;
        case ':fishing:':
            s('fishing-rod');
            break;
        // Misc
        case ':torch:':
            s('torch');
            break;
        case ':tnt:':
            s('tnt');
            break;
        // Nature
        case ':poppy:':
            s('poppy');
            break;
        case ':flower:':
            s('dandelion');
            break;
        case ':cocoa:':
            s('cocoa-plant');
            break;
        case ':vines:':
            s('vines');
            break;
        case ':grass:':
            s('tall-grass');
            break;
        case ':sugarcane:':
            s('sugar-canes');
            break;
        case ':lilypad:':
            s('lily-pad');
            break;
        case ':leaves:':
            s('leaves');
            break;
        case ':deadbush:':
            s('dead-bush');
            break;
        case ':cactus:':
            s('cactus');
            break;
        case ':pumpkin:':
            s('pumpkin');
            break;
        case ':melonblock:':
            s('melon-block');
            break;
        default:
            i.push(n[t])
    }
    return i.join(" ")
}