function crea_elemento(){
    for(let item of contents){
        const carta = document.createElement('div')
        const immagine = document.createElement('img')
        const nome = document.createElement('p')
        const descriz = document.createElement('p')
        const details = document.createElement('div')
        const bottone_details = document.createElement('p')
        const immagine_details_p = document.createElement('p')
        const preferiti_h = document.createElement('img')

        carta.classList.add('card')
        immagine.classList.add('immagine_artista')
        nome.classList.add('alias')
        descriz.classList.add('descrizione')
        descriz.classList.add('nascondi')
        details.classList.add('dettagli')
        bottone_details.classList.add('mostra_dettagli')
        preferiti_h.classList.add('preferiti')

        immagine.src = item.immagine_artista
        nome.textContent = item.alias
        descriz.textContent = item.descrizione
        bottone_details.textContent = item.mostra_dettagli
        preferiti_h.src = item.preferiti

        if(item.genere === 'rock'){
            const contenitore = document.querySelector('#rock .artisti')
            contenitore.appendChild(carta)
            const genitore = document.querySelector('#rock')
            genitore.classList.remove('nascondi')
        }
        if(item.genere === 'blues'){
            const contenitore = document.querySelector('#blues .artisti')
            contenitore.appendChild(carta)
            const genitore = document.querySelector('#blues')
            genitore.classList.remove('nascondi')
        }
        if(item.genere === 'compositori'){
            const contenitore = document.querySelector('#compositori .artisti')
            contenitore.appendChild(carta)
            const genitore = document.querySelector('#compositori')
            genitore.classList.remove('nascondi')
        }

        carta.appendChild(immagine)
        carta.appendChild(nome)
        carta.appendChild(descriz)
        carta.appendChild(details)
        details.appendChild(bottone_details)
        details.appendChild(immagine_details_p)
        immagine_details_p.appendChild(preferiti_h)

        bottone_details.addEventListener('click', mostra_descrizione)
        preferiti_h.addEventListener('click', aggiungi_preferiti)

    }
}

function mostra_descrizione(event){
    const button = event.currentTarget.parentElement.parentElement.querySelector(".descrizione")
    if(button.classList.contains("nascondi")){
        button.classList.remove("nascondi")
        const cambio_testo = event.currentTarget.parentElement.parentElement.querySelector(".mostra_dettagli")
        cambio_testo.textContent = 'Meno dettagli'
    }
    else {
        button.classList.add("nascondi")
        const cambio_testo = event.currentTarget.parentElement.parentElement.querySelector(".mostra_dettagli")
        cambio_testo.textContent = 'Mostra dettagli'
    }
}

function aggiungi_preferiti(event){
    if(document.querySelector('#preferiti').classList.contains("nascondi")){
        document.querySelector('#preferiti').classList.remove("nascondi")
    }

    if(document.querySelector('#preferiti_sidebar').classList.contains("nascondi")){
        document.querySelector('#preferiti_sidebar').classList.remove("nascondi")
    }

    if(document.querySelectorAll('#cronologia_ricerca a').length !== 0){
        document.querySelector('#separazionePreferitiCronologia').classList.remove('nascondi')
    }

    const carta = document.createElement('div')
    const immagine = document.createElement('img')
    const nome = document.createElement('p')
    const descriz = document.createElement('p')
    const details = document.createElement('div')
    const bottone_details = document.createElement('p')
    const immagine_details_p = document.createElement('p')
    const preferiti_h = document.createElement('img')
    const preferiti_sidebar = document.createElement('p')

    carta.classList.add('card')
    immagine.classList.add('immagine_artista')
    nome.classList.add('alias')
    descriz.classList.add('descrizione')
    descriz.classList.add('nascondi')
    details.classList.add('dettagli')
    bottone_details.classList.add('mostra_dettagli')
    preferiti_h.classList.add('preferiti')

    const contenitore = document.querySelector('#preferiti .artisti')
    const contenitore_sidebar = document.querySelector('#preferiti_sidebar')
    

    immagine.src = event.currentTarget.parentElement.parentElement.parentElement.querySelector(".immagine_artista").src
    nome.textContent = event.currentTarget.parentElement.parentElement.parentElement.querySelector(".alias").textContent
    descriz.textContent = event.currentTarget.parentElement.parentElement.parentElement.querySelector(".descrizione").textContent
    bottone_details.textContent = event.currentTarget.parentElement.parentElement.parentElement.querySelector(".mostra_dettagli").textContent
    preferiti_h.src = 'red_heart.png'
    preferiti_sidebar.textContent = event.currentTarget.parentElement.parentElement.parentElement.querySelector(".alias").textContent
    
    contenitore.appendChild(carta)
    carta.appendChild(immagine)
    carta.appendChild(nome)
    carta.appendChild(descriz)
    carta.appendChild(details)
    details.appendChild(bottone_details)
    details.appendChild(immagine_details_p)
    immagine_details_p.appendChild(preferiti_h)
    contenitore_sidebar.appendChild(preferiti_sidebar)

    const padre_preferiti = event.currentTarget.parentElement.parentElement.querySelector('.preferiti')


    padre_preferiti.removeEventListener('click', aggiungi_preferiti)

    bottone_details.addEventListener('click', mostra_descrizione)
    preferiti_h.addEventListener('click', function() {rimuovi_preferiti(carta, padre_preferiti, preferiti_sidebar)})
}

function rimuovi_preferiti(carta, padre_preferiti, preferiti_sidebar){
    padre_preferiti.addEventListener('click', aggiungi_preferiti)
    carta.remove()
    preferiti_sidebar.remove()

    if(document.querySelectorAll('#preferiti div.card').length === 0){
        document.querySelector('#preferiti').classList.add('nascondi')
    }

    if(document.querySelectorAll('#preferiti_sidebar p').length === 0){
        document.querySelector('#preferiti_sidebar').classList.add('nascondi')
        document.querySelector('#separazionePreferitiCronologia').classList.add('nascondi')
    }
}

const searchBar = document.getElementById('search')
searchBar.addEventListener('keyup', mostra_vai)

function mostra_vai(event){
    const inserimento = document.querySelector('#search');
    const vai = document.querySelector('#submit')
    const x = document.querySelector('#searchbar img')
    
    if(inserimento === ""){
        vai.classList.add("nascondi")
        x.classList.add('nascondi')
    }
    else {
        vai.classList.remove("nascondi")
        x.classList.remove('nascondi')
    }
}

const x = document.querySelector('#cancella_testo')
x.addEventListener('click', cancella_testo)

function cancella_testo(event){
    const lyrics_box = document.querySelector('#lyrics').innerHTML = ''
    const inserimento = document.querySelector('#search');
    const content = document.querySelector('#contenuti')
    const vai = document.querySelector('#submit')
    const x = document.querySelector('#searchbar img')
    const risultati_ricerca = document.querySelector('#risultati_ricerca')
    const risultati_precedenti = document.querySelectorAll('#risultati_ricerca .card')
    const ricerca_mobile_h1 = document.querySelector('#nav_mobile h1')
    const ricerca_mobile_div = document.querySelector('#nav_mobile div')
    

    inserimento.value = ""
    for(item of risultati_precedenti){
        item.remove()
    }
    content.classList.remove('nascondi')
    vai.classList.add("nascondi")
    x.classList.add('nascondi')
    risultati_ricerca.classList.add('nascondi')
    ricerca_mobile_h1.classList.remove('nascondi')
    ricerca_mobile_div.classList.remove('nascondi')
    document.querySelector('body').classList.remove('max_height')
    document.querySelector('body').style.background = 'linear-gradient(to top, rgba(0,0,0,1) 50%, rgb(95, 28, 39) 100%)'
}

const form = document.querySelector('form');
form.addEventListener('submit', ricerca)

const min = 0
const max = colori.length-1

function ricerca(event){
    event.preventDefault();

    const inserimento = document.querySelector('#search').value.toLowerCase();

    const ricerca = encodeURIComponent(inserimento);

    const content = document.querySelector('#contenuti')
    content.classList.add('nascondi')

    const risultati_ricerca = document.querySelector('#risultati_ricerca')
    risultati_ricerca.classList.remove('nascondi')

    const risultati_precedenti_artista = document.querySelector('#artista .risultati')
    risultati_precedenti_artista.innerHTML = ''
    
    const risultati_precedenti_album = document.querySelector('#album .risultati')
    risultati_precedenti_album.innerHTML = ''

    const risultati_precedenti_brano = document.querySelector('#brano .risultati')
    risultati_precedenti_brano.innerHTML = ''

    const testo_precedente_brano = document.querySelector('#lyrics')
    testo_precedente_brano.classList.add('nascondi')

    const ricerca_mobile_h1 = document.querySelector('#nav_mobile h1')
    ricerca_mobile_h1.classList.add('nascondi')

    const ricerca_mobile_div = document.querySelector('#nav_mobile div')
    ricerca_mobile_div.classList.add('nascondi')

    risultatoArtista(ricerca)
    risultatoAlbum(ricerca)
    risultatoBrano(ricerca)

    const color = randomColore(min, max)

    document.querySelector('body').style.background = colori[color]
}

function randomColore(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min //Il max è escluso e il min è incluso
  }

function risultatoArtista(ricerca){
    fetch("https://api.spotify.com/v1/search?q=" + ricerca + "&type=artist&market=IT&offset=0&limit=6", {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
    ).then(onResponse).then(onJsonArtista)
}

function risultatoAlbum(ricerca){
    fetch("https://api.spotify.com/v1/search?q=" + ricerca + "&type=album&market=IT&offset=0&limit=6", {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
    ).then(onResponse).then(onJsonAlbum)
}

function risultatoBrano(ricerca){
    fetch("https://api.spotify.com/v1/search?q=" + ricerca + "&type=track&market=IT&offset=0&limit=6", {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
    ).then(onResponse).then(onJsonTrack)   
}

function onResponse(promise){
    return promise.json()
}

function onJsonArtista(json){
    creazioneCardRicerca(json.artists.items)
}

function onJsonAlbum(json){
    creazioneCardRicerca(json.albums.items)
}

function onJsonTrack(json){
    creazioneCardRicerca(json.tracks.items)
}

function creazioneCardRicerca(json){
    for(item of json){
        const card = document.createElement('div')
        const immagine = document.createElement('img')
        const descrizione_card_ricerca = document.createElement('div')
        const nome = document.createElement('p')
        const a = document.createElement('a')
        const icona = document.createElement('img')

        card.classList.add('card')
        descrizione_card_ricerca.classList.add('descrizione_card_ricerca')
        nome.classList.add('name_ricerca')

        if(item.type !== 'track'){
            immagine.src = item.images[0].url
            icona.src = 'Spotify_Icon_RGB_Green.png'
            a.setAttribute("href", item.external_urls['spotify'])
            a.setAttribute("target", "_blank")
            a.addEventListener('click', cronologia_ricerca)
        }
        else{
            immagine.src = item.album.images[0].url
            icona.src = 'senutia_link.png'
            card.setAttribute("data-titolo", item.name)
            card.setAttribute("data-autore", item.artists[0].name)
            card.setAttribute("data-album", item.album.name)
            card.setAttribute("data-pubblicazione", item.album.release_date)
            icona.addEventListener('click', mostra_testo)
        }
        nome.textContent = item.name

        if(item.type === 'artist'){
            const contenitore = document.querySelector('#artista .risultati')
            contenitore.appendChild(card)
        }

        if(item.type === 'album'){
            const contenitore = document.querySelector('#album .risultati')
            contenitore.appendChild(card)
        }

        if(item.type === 'track'){
            const contenitore = document.querySelector('#brano .risultati')
            contenitore.appendChild(card)
        }
        card.appendChild(immagine)
        card.appendChild(descrizione_card_ricerca)
        descrizione_card_ricerca.appendChild(nome)
        descrizione_card_ricerca.appendChild(a)
        a.appendChild(icona)
    }

    const assenza_artisti = document.querySelectorAll('#artista .risultati .card')
    const assenza_album = document.querySelectorAll('#album .risultati .card')
    const assenza_brani = document.querySelectorAll('#brano .risultati .card')


    if(assenza_artisti.length === 0 && assenza_album.length === 0 && assenza_brani.length === 0){
        document.querySelector('body').classList.add('max_height')
    }
    else{
        document.querySelector('body').classList.remove('max_height')
    }

}

function cronologia_ricerca(event){

    if(document.querySelectorAll('#preferiti_sidebar p').length !== 0){
        document.querySelector('#separazionePreferitiCronologia').classList.remove('nascondi')
    }

    const numero_paragrafi = document.querySelectorAll('#cronologia_ricerca a')
    
    if(numero_paragrafi.length === 0){
        document.querySelector('#cronologia_ricerca').classList.add('nascondi')
    }

    if(numero_paragrafi.length > 4){
        document.querySelector('#cronologia_ricerca div').innerHTML = ''
    }

    const titolo = event.currentTarget.parentElement.querySelector('p')
    const href_genitore = event.currentTarget.parentElement.querySelector('a')

    const cronologia_sidebar = document.querySelector('#cronologia_ricerca')
    cronologia_sidebar.classList.remove('nascondi')

    const div_paragrafo = document.querySelector('#elementi_cercati')
    const paragrafo = document.createElement('a')

    paragrafo.textContent = titolo.textContent
    paragrafo.setAttribute("href", href_genitore.href)
    paragrafo.setAttribute("target", "_blank")

    div_paragrafo.appendChild(paragrafo)
}

function mostra_testo(event){
    scroll(0,0)
    const lyrics_box = document.querySelector('#lyrics')
    lyrics_box.innerHTML = ''
    lyrics_box.classList.remove('nascondi')

    const autore = encodeURIComponent(event.currentTarget.parentElement.parentElement.parentElement.dataset.autore)

    const contenitore = document.querySelector('#lyrics')
    const div_test = document.createElement('pre')
    const linea_top = document.createElement('div')
    const linea_bottom = document.createElement('div')
    const descrizione_track = document.createElement('div')
    const contenitore_immagine = document.createElement('div')
    const immagine_copertina = document.createElement('img')
    const contenitore_paragrafi = document.createElement('div')
    const titolo_brano = document.createElement('p')
    const autore_brano = document.createElement('p')
    const album = document.createElement('p')
    const data_rilascio = document.createElement('p')


    linea_top.classList.add('linea')
    linea_bottom.classList.add('linea')
    descrizione_track.classList.add('descrizione_track')
    immagine_copertina.classList.add('immagine_copertina')
    contenitore_paragrafi.classList.add('contenitore_paragrafi')
    titolo_brano.classList.add('titolo_brano')

    contenitore.appendChild(linea_top)
    contenitore.appendChild(descrizione_track)
    descrizione_track.appendChild(contenitore_immagine)
    descrizione_track.appendChild(contenitore_paragrafi)
    contenitore_immagine.appendChild(immagine_copertina)
    contenitore_paragrafi.appendChild(titolo_brano)
    contenitore_paragrafi.appendChild(autore_brano)
    contenitore_paragrafi.appendChild(album)
    contenitore_paragrafi.appendChild(data_rilascio)
    contenitore.appendChild(linea_bottom)
    contenitore.appendChild(div_test)

    immagine_copertina.src = event.currentTarget.parentElement.parentElement.parentElement.querySelector('img').src
    titolo_brano.innerText = event.currentTarget.parentElement.parentElement.parentElement.dataset.titolo
    autore_brano.innerText = 'Autore: ' + event.currentTarget.parentElement.parentElement.parentElement.dataset.autore
    album.innerText = 'Album: ' + event.currentTarget.parentElement.parentElement.parentElement.dataset.album
    data_rilascio.innerText = 'Data pubblicazione: ' + event.currentTarget.parentElement.parentElement.parentElement.dataset.pubblicazione

    const str = event.currentTarget.parentElement.parentElement.parentElement.dataset.titolo.split('-', 1)
    const titolo = encodeURIComponent(str[0])

    fetch("https://api.lyrics.ovh/v1/" + autore + "/" + titolo,
    {
        method: 'get',
        headers: {
            'Content-Type' : 'application/json'
        }
    }
    ).then(onLyricsResponse).then(onLyricsText)
}

function onLyricsResponse(promise){
    if(!promise.ok){
        alert('Testo non disponibile!')
        const lyrics_box = document.querySelector('#lyrics')
        lyrics_box.innerHTML = ''
        lyrics_box.classList.add('nascondi')
        const risultati_ricerca = document.querySelector('#risultati_ricerca')
        risultati_ricerca.classList.remove('nascondi')
    }
    return promise.json()
}

function onLyricsText(json){
    const contenitore = document.querySelector('pre')
    const contenitore_credits = document.querySelector('#lyrics')

    const testo = document.createElement('p')
    const credits_div = document.createElement('div')
    const credits_div_contents = document.createElement('div')
    const credits_p = document.createElement('p')
    const credits_img = document.createElement('img')

    testo.classList.add('lyrics_style')
    credits_div.setAttribute('id', 'info_lyrics');

    testo.textContent = json.lyrics

    credits_p.textContent = "Lyrics by lyrics.ovh"
    credits_img.src = 'lyrics.ovh_api.png'

    contenitore.appendChild(testo)
    contenitore_credits.appendChild(credits_div)
    credits_div.appendChild(credits_div_contents)
    credits_div_contents.appendChild(credits_p)
    credits_div_contents.appendChild(credits_img)

    document.querySelector('#risultati_ricerca').classList.add('nascondi')

}

const client_id = 'a68eeeab630945549b8256bd1a84af98'
const client_secret = '16b77034fd4c4fd392fdf275e679e2fe'

let token;

fetch("https://accounts.spotify.com/api/token", 
{
    method: 'post',
    body: 'grant_type=client_credentials',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
    }
}
).then(onTokenReceive).then(onTokenValue)

function onTokenReceive(promise){
    return promise.json()
}

function onTokenValue(json){
    token = json.access_token;
}

crea_elemento();