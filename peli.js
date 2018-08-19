let lista = [["&emsp;", "&emsp;", "&emsp;"],
["&emsp;", '<img src="img/player.png" alt="pelaaja" id="pelaaja" />', "&emsp;"],
["&emsp;", "&emsp;", "&emsp;"]];

let rivi = 0;
let paikka = 0;
let kolikkojenLkm = 0;
let pisteet = 0;

document.getElementById("startti").addEventListener('click', aloitus);
document.getElementById("startti").addEventListener('click', ajastinPaalle);
document.getElementById("ylos").addEventListener("click", siirryYlos);
document.getElementById("alas").addEventListener("click", siirryAlas);
document.getElementById("vasemmalle").addEventListener("click", siirryVasemmalle);
document.getElementById("oikealle").addEventListener("click", siirryOikealle);
document.getElementById("pelaajanNimi").addEventListener("click", nimenVaihto);

window.addEventListener("keydown", dealWithKeyboard, false);

function dealWithKeyboard(e) {
    switch(e.keyCode){
        case 38: 
            siirryYlos();
            break;
        case 40: 
            siirryAlas();
            break;
        case 37: 
            siirryVasemmalle();
            break;
        case 39: 
            siirryOikealle();
            break;
        }
}

function arrayTaulukkoon() {

    table = document.getElementById("table");

    for(let i = 0; i < table.rows.length; i++)
    {
      for(let j = 0; j < table.rows[i].cells.length; j++)
      {
          table.rows[i].cells[j].innerHTML = lista[i][j];
      }
    }
    pisteIlmoitus();
    kolikotTauluun();
}

function etsiPelaaja() {
    for (i = 0; i < 3; i++) {
        x = lista[i].indexOf('<img src="img/player.png" alt="pelaaja" id="pelaaja" />');
        if (x != -1) {
            rivi = i;
            paikka = lista[i].indexOf('<img src="img/player.png" alt="pelaaja" id="pelaaja" />');     
        }
    }
}

function kolikotTauluun() {

    while (kolikkojenLkm < 3) {
        let kolikko = 0;
        let arpa = Math.floor(Math.random() * 100);
        if (arpa < 85) {
            kolikko = 1;
        } else {
            kolikko = 2;
        }
        let kolikonRivi = Math.floor(Math.random() * 3);
        let kolikonPaikka = Math.floor(Math.random() * 3);
        etsiPelaaja();
        if (lista[kolikonRivi][kolikonPaikka] != "&emsp;") {
            continue;
        } else if (kolikko == 1) {
            lista[kolikonRivi][kolikonPaikka] = '<img src="img/coin.png" alt="kolikko" />';
            kolikkojenLkm++;    
        } else if (kolikko == 2) {
            lista[kolikonRivi][kolikonPaikka] = '<img src="img/coin1.png" alt="hopea kolikko" />';
            kolikkojenLkm++;  
        }
        arrayTaulukkoon();
    }
}

function siirryYlos() {
    etsiPelaaja();
    if (lista[rivi - 1][paikka] == '<img src="img/coin.png" alt="kolikko" />') {
        pisteet = pisteet + 100;
        kolikkojenLkm = kolikkojenLkm - 1;
    } else if (lista[rivi - 1][paikka] == '<img src="img/coin1.png" alt="hopea kolikko" />') {
        pisteet = pisteet + 200;
        kolikkojenLkm = kolikkojenLkm - 1;
    }
    lista[rivi - 1][paikka] = '<img src="img/player.png" alt="pelaaja" id="pelaaja" />';
    lista[rivi][paikka] = "&emsp;";
    arrayTaulukkoon();
}

function siirryAlas() {
    etsiPelaaja();
    if (lista[rivi + 1][paikka] == '<img src="img/coin.png" alt="kolikko" />') {
        pisteet = pisteet + 100;
        kolikkojenLkm = kolikkojenLkm - 1;
    } else if (lista[rivi + 1][paikka] == '<img src="img/coin1.png" alt="hopea kolikko" />') {
        pisteet = pisteet + 200;
        kolikkojenLkm = kolikkojenLkm - 1;
    }
    lista[rivi + 1][paikka] = '<img src="img/player.png" alt="pelaaja" id="pelaaja" />';
    lista[rivi][paikka] = "&emsp;";
    arrayTaulukkoon();
}

function siirryOikealle() {
    etsiPelaaja();
    if (lista[rivi][paikka + 1] == '<img src="img/coin.png" alt="kolikko" />') {
        pisteet = pisteet + 100;
        kolikkojenLkm = kolikkojenLkm - 1;
    } else if (lista[rivi][paikka + 1] == '<img src="img/coin1.png" alt="hopea kolikko" />') {
        pisteet = pisteet + 200;
        kolikkojenLkm = kolikkojenLkm - 1;
    }
    if (paikka < 2) {
        lista[rivi][paikka + 1] = '<img src="img/player.png" alt="pelaaja" id="pelaaja" />';
        lista[rivi][paikka] = "&emsp;";
        arrayTaulukkoon();
    }
}

function siirryVasemmalle() {
    etsiPelaaja();
    if (lista[rivi][paikka - 1] == '<img src="img/coin.png" alt="kolikko" />') {
        pisteet = pisteet + 100;
        kolikkojenLkm = kolikkojenLkm - 1;
    } else if (lista[rivi][paikka - 1] == '<img src="img/coin1.png" alt="hopea kolikko" />') {
        pisteet = pisteet + 200;
        kolikkojenLkm = kolikkojenLkm - 1;
    }
    if (paikka > 0) {
        lista[rivi][paikka - 1] = '<img src="img/player.png" alt="pelaaja" id="pelaaja" />';
        lista[rivi][paikka] = "&emsp;";
        arrayTaulukkoon();
    }
}

function aloitus() {
    pisteet = 0;
    kolikkojenLkm = 0;
    lista = [["&emsp;", "&emsp;", "&emsp;"],
        ["&emsp;", '<img src="img/player.png" alt="pelaaja" id="pelaaja" />', "&emsp;"],
        ["&emsp;", "&emsp;", "&emsp;"]];
    kolikotTauluun();
}

function pisteIlmoitus() {
    document.getElementById("pisteInfo").innerHTML = "<strong>" + pisteet + "$</strong>";
}

function nimenVaihto() {
    let nimi = prompt("Anna pelaajan nimi");

    if (nimi.length >= 2) {
        document.getElementById("pelaajanNimi").innerHTML = "<strong>" + nimi + "</strong>"
    } else {
        alert("Nimessä pitää olla vähintää 2 merkkiä");
    }    
}

function kolikotPois() {
    while (kolikkojenLkm > 0) {
        for (i = 0; i < 3; i++) {
            x = lista[i].indexOf('<img src="img/coin.png" alt="kolikko" />');
            if (x != -1) {
                rivi = i;
                paikka = lista[i].indexOf('<img src="img/coin.png" alt="kolikko" />');     
                lista[rivi][paikka] = "&emsp;";
                kolikkojenLkm = kolikkojenLkm - 1;
            }
        }
        for (i = 0; i < 3; i++) {
            x = lista[i].indexOf('<img src="img/coin1.png" alt="hopea kolikko" />');
            if (x != -1) {
                rivi = i;
                paikka = lista[i].indexOf('<img src="img/coin1.png" alt="hopea kolikko" />');     
                lista[rivi][paikka] = "&emsp;";
                kolikkojenLkm = kolikkojenLkm - 1;
            }
        }
    
    }
    arrayTaulukkoon();
}

function ajastinPaalle() {
    setInterval(kolikotPois, 8000);
}