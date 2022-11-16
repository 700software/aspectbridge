const alephbeth = {
    aleph: {
        uni: '\u05D0',
        char: 'א'
    },
    beth: {
        uni: '\u05D1'
    },
    gimel: {
        uni: '\u05D2'
    },
    daleth: {
        uni: '\u05D3'
    },
    hey: {
        uni: '\u05D4'
    },
    vav: {
        uni: '\u05D5'
    },
    zain: {
        uni: '\u05D6'
    },
    keth: {
        uni: '\u05D7'
    },
    teth: {
        uni: '\u05D8'
    },
    yod: {
        uni: '\u05D9'
    },
    caph_suph: {
        uni: '\u05DA'
    },
    caph: {
        uni: '\u05DB'
    },
    lamed: {
        uni: '\u05DC'
    },
    mem_suph: {
        uni: '\u05DD'
    },
    mem: {
        uni: '\u05DE'
    },
    nun_suph: {
        uni: '\u05DF'
    },
    nun: {
        uni: '\u05E0'
    },
    samec: {
        uni: '\u05E1'
    },
    ain: {
        uni: '\u05E2'
    },
    pe_suph: {
        uni: '\u05E3'
    },
    pe: {
        uni: '\u05E4'
    },
    tzadi_suph: {
        uni: '\u05E5'
    },
    tzadi: {
        uni: '\u05E6'
    },
    qoph: {
        uni: '\u05E7'
    },
    resh: {
        uni: '\u05E8'
    },
    shin: {
        uni: '\u05E9'
    },
    tav: {
        uni: '\u05EA'
    }
}
const grammar = {
    pre: {
        exown: 'i',
    },
    suf: {
        enown: 'i',
        mplural: 'im',
        fplural: 'ot',
    }
}
function translit(str){
    let s = str.toLowerCase();

    if (s.charAt(0)==='a'){s = s.replace('a',alephbeth.aleph.uni);}
    else if (s.charAt(0)=='e'){s = s.replace('e',alephbeth.aleph.uni);}
    else if ((s.charAt(0)=='g') && (s.charAt(1)=='a')){
        s = s.replace('g',alephbeth.ain.uni);
        s = s.replace('a', '');
    }
    s = s.replaceAll('a',alephbeth.aleph.uni);
    s = s.replaceAll('e','');
    s = s.replaceAll('b',alephbeth.beth.uni);
    s = s.replaceAll('g',alephbeth.gimel.uni);

    s = s.replaceAll('d',alephbeth.daleth.uni);
    s = s.replaceAll('h',alephbeth.hey.uni);
    s = s.replaceAll('v',alephbeth.vav.uni);
    s = s.replaceAll('u',alephbeth.vav.uni);
    s = s.replaceAll('w',alephbeth.vav.uni);
    s = s.replaceAll('z',alephbeth.zain.uni);
    s = s.replaceAll('k',alephbeth.keth.uni);
    //s = s.replaceAll('t',alephbeth.teth.uni);
    s = s.replaceAll('y',alephbeth.yod.uni);
    s = s.replaceAll('i',alephbeth.yod.uni);
    s = s.replaceAll('j',alephbeth.yod.uni);
    s = s.replaceAll('c',alephbeth.caph.uni);
    s = s.replaceAll('l',alephbeth.lamed.uni);
    s = s.replaceAll('m',alephbeth.mem.uni);
    s = s.replaceAll('n',alephbeth.nun.uni);
    //s = s.replaceAll('s',alephbeth.samec.uni);
    s = s.replaceAll('o',alephbeth.ain.uni);
    s = s.replaceAll('p',alephbeth.pe.uni);
    //s = s.replaceAll('s',alephbeth.tzadi.uni);
    s = s.replaceAll('q',alephbeth.qoph.uni);
    s = s.replaceAll('r',alephbeth.resh.uni);
    s = s.replaceAll('s',alephbeth.shin.uni);
    s = s.replaceAll('t',alephbeth.tav.uni);
    return s;
}