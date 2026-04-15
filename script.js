document.addEventListener("DOMContentLoaded", () => {
  // ========== LISTA COMPLETA DE CANCIONES (TODAS LAS 14) ==========
  const songs = [
    {
      title: "Si No Estás",
      artist: "Iñigo Quintero",
      album: "Balada • 2023",
      cover: "Fotos/1200x1200bf-60.jpg",
      audioSrc: "Canciones/Si No Estás – Iñigo Quintero.m4a",
      lyrics: `Quiero ver tu otra mitad,<br>alejarme de esta ciudad,<br>y contagiarme de tu forma de pensar.<br><br>Miro al cielo al recordar,<br>me doy cuenta otra vez más<br>que no hay momento que pase sin dejarte de pensar.`
    },
    {
      title: "¿A caso no te has dado cuenta?",
      artist: "Unknown Artist",
      album: "Reguetón • 2024",
      cover: "Fotos/maxresdefault.jpg",
      audioSrc: "Canciones/_¿Acaso_no_te_has_dado_cuenta_de_lo_bien_que_me_complementas_Letra (mp3cut.net).m4a",
      lyrics: `¿A caso no te has dado cuenta?<br>De lo bien que me complementas<br>Si quieres te invito un helado y te explico lo chido que haces que me sienta<br><br>Contigo estoy high sin avión<br>Me haces perder la razón<br>Estoy todo el día pensándote con mariposas en el corazón<br><br>Y tú (y tú-uh)<br>Me pones todo de cabeza<br>Tú (y tú-uh)<br>Eras esa última pieza<br>Tú (tú-uh)<br>Eres tan diferente<br>Y no hay nadie que me vuele así la mente como lo haces tú`
    },
    {
      title: "Mi niña",
      artist: "Wisin, Myke Towers",
      album: "Urban • 2023",
      cover: "Fotos/OIP (3).webp",
      audioSrc: "Canciones/Wisin,_Myke_Towers,_Los_Legendarios_Mi_Niña_Letra_Lyrics (mp3cut.net).m4a",
      lyrics: `Yo quiero viajar el mundo contigo de compañía (tú sabe' ya)<br>Ninguna mujer me comprendía<br>Cierra los ojos y dime en qué lugar es que estaría (ajá)<br>Que voy a pedir una estadía<br><br>A ella le cogen cosa' porque está conmigo<br>El que te falte el respeto se convierte en mi enemigo<br>Hay muchas envidiosa', dicen que es prohibido<br>Siempre está en mi mente, yo nunca la olvido<br>Porque es mi niña (oh-oh-oh-oh)`
    },
    {
      title: "Rara vez",
      artist: "Milo J, Taiu",
      album: "Trap • 2023",
      cover: "Fotos/OIP (4).webp",
      audioSrc: "Canciones/Taiu, Milo j - Rara Vez (mp3cut.net).m4a",
      lyrics: `Sos lo que me da paz<br>Lo que andaba buscando<br>Y esa felicidad<br>Que hace que ande sonriendo<br><br>Quiero verte feliz<br>Mejor si es al lado de mí<br>Love incondicional<br>Como perro a su amo, te sigo amando<br><br>Dama con fama 'e cama alta gama y corazón partido<br>Fono lleno 'e fanes que llaman y solo atiende el mío<br>Vamo a vernos con frío o calor, picnic, Netflix, voy en tren<br>En ten o fifteen estoy, y siendo honesto, baby`
    },
    {
      title: "Pareja del año",
      artist: "Sebastián Yatra, Myke Towers",
      album: "Pop • 2021",
      cover: "Fotos/OIP (5).webp",
      audioSrc: "Canciones/Sebastián_Yatra,_Myke_Towers_Pareja_del_Año_Official_Performance (mp3cut.net).m4a",
      lyrics: `Qué tan loco sería si yo fuera<br>El dueño de tu corazón por solo un día<br>Si nos gana la alegría, yo por fin te besaría<br>¿Qué pasaría?<br><br>Si me dieran solo veinticuatro horas, yo las aprovecho<br>Juro que yo voy a hacerte cosas que nunca te han hecho<br>Ya yo me cansé de ser amigos con derecho'<br>Yo tal vez no te merezco<br>Pero no hay ni que decirlo<br>Si nos juntamos, seríamos la pareja del siglo`
    },
    {
      title: "¿A dónde vamos?",
      artist: "Morat",
      album: "Pop • 2022",
      cover: "Fotos/OIP (6).webp",
      audioSrc: "Canciones/Morat - A Dónde Vamos (Letra) _ Albert & Maricheli (mp3cut.net).m4a",
      lyrics: `Que siendo un extraño, te dije: "te amo"<br>Te he estado buscando por más de mil años"<br>Y tú respondiste: "¿a dónde vamos?"<br>Contra las apuestas, aquí nos quedamos<br><br>Viviendo de fiesta después del verano en el que respondiste<br>"¿A dónde vamos?"<br>Y aunque la historia no estaba prevista<br>Somos la prueba de que existe amor a primera vista<br>No dejo de mirarte ni un segundo<br>Cuando tú estás desaparece el mundo<br>Mejores noches yo no creo que existan.`
    },
    {
      title: "Cuando te vi",
      artist: "Trueno, Maria Becerra",
      album: "Urban • 2022",
      cover: "Fotos/923cf890949406f52539a8ed4d16a352.1000x1000x1.png",
      audioSrc: "Canciones/Maria Becerra, Trueno, Big One - Cuando Te Vi _ CROSSOVER #5 (mp3cut.net).m4a",
      lyrics: `Aunque todavía no soy rico, te puedo dar amor como de chico<br>Cosquillas en la panza, como antes del primer pico<br>O poder agarrarte de la mano una tarde de verano<br>Momentos que se vuelven infinitos<br><br>Y por favor, no le pongas precio ni valor a mi honor<br>Que sin idealizaciones, no hay dolor<br>Y eso es bueno para mí, que no ando en busca del amor<br>Ando en busca de una turra y si es de zona sur, mejor`
    },
    {
      title: "Todo de Ti",
      artist: "Rauw Alejandro",
      album: "Reguetón • 2021",
      cover: "Fotos/OIP (7).webp",
      audioSrc: "Canciones/Rauw Alejandro - Todo de Ti (Video Oficial).m4a",
      lyrics: `El viento soba tu cabello<br>Me matan esos ojos bellos<br>Me gusta tu olor, de tu piel, el color<br>Y como me haces sentir<br><br>Me gusta tu boquita, ese labial rosita<br>Y cómo me besas a mí<br>Contigo quiero despertar<br>Hacerlo después de fumar<br>Ya no tengo na' que buscar<br>Algo fuera de aquí`
    },
    {
      title: "Loco Enamorado",
      artist: "Abraham Mateo, Farruko",
      album: "Pop • 2020",
      cover: "Fotos/f53f05470b4146d4a202cf5df55b4ead.1000x1000x1.png",
      audioSrc: "Canciones/Loco_Enamorado,_de_Abraham_Mateo_Ft_Farruko_&_Christian_Daniel_Letra.m4a",
      lyrics: `Te confieso llevo un rato idealizándote<br>Toda una vida yo buscándote<br>No sé que hacer, te ves muy bien<br>Me acercaré<br><br>Te confieso que lo mío no es realmente hablar<br>Soy algo tímido, como verás<br>Pero, esta vez<br>Me atreveré, te lo diré<br><br>Ya me tienes como un loco enamorado<br>Baby, la verdad es que tú me gustas demasiado<br>Ven que lo demás yo te lo digo bailando<br>Pégate, y-eh, y-eh`
    },
    {
      title: "Bailando",
      artist: "Enrique Iglesias",
      album: "Latino • 2014",
      cover: "Fotos/R (1).png",
      audioSrc: "Canciones/Enrique_Iglesias_–_Bailando_Lyrics_feat_Descemer_Bueno,_Gente_De.m4a",
      lyrics: `Yo te miro y se me corta la respiración<br>Cuando tú me miras, se me sube el corazón<br>Y en un silencio tu mirada dice mil palabras<br>La noche en la que te suplico que no salga el sol<br><br>Bailando<br>Tu cuerpo y el mío llenando el vacío<br>Subiendo y bajando<br>Bailando<br>Ese fuego por dentro me va enloqueciendo<br>Me va saturando`
    },
    {
      title: "La Plena",
      artist: "Beéle, Westcol",
      album: "Urban • 2023",
      cover: "Fotos/ab67616d0000b2734740100d84f3667f1eae6870.jpeg",
      audioSrc: "Canciones/Beéle, Westcol, Ovy On The Drums - LA PLENA (W Sound 05).m4a",
      lyrics: `Eres la niña de mis ojos tú<br>Eres todo lo que quiero yo<br>¿Una cerveza pa calmar la sed?, no<br>Mejor ser besado por su boquita, amor<br><br>Las tentaciones así como tú<br>Merecen pecados como yo<br>Ay, si tú quieres, solo da la lu'<br>Tú sabes que no vo'a a decir que no`
    },
    {
      title: "Tacones Rojos",
      artist: "Sebastián Yatra",
      album: "Pop • 2021",
      cover: "Fotos/OIP (8).webp",
      audioSrc: "Canciones/Sebastián Yatra - Tacones Rojos (Official Video) (1).m4a",
      lyrics: `Hay un rayo de luz<br>Que entró por mi ventana<br>Y me ha devuelto las ganas<br>Me quita el dolor<br><br>Tu amor es uno de esos<br>Que te cambian con un beso<br>Y te pone a volar<br>Mi pedazo de sol<br>La niña de mis ojos<br>Tenía una colección<br>De corazones rotos`
    },
    {
      title: "Cosas Que No Te Dije",
      artist: "Saiko",
      album: "Urban • 2023",
      cover: "Fotos/ab67616d0000b273fb045f7dda9773e266437bc6.jpeg",
      audioSrc: "Canciones/Saiko - COSAS QUE NO TE DIJE (Official Video).m4a",
      lyrics: `Dime si te gustaría<br>Vamos a escribir nuestras iniciales juntas<br>La verdad que tú me gusta'<br>En invierno y en verano<br><br>Si te hago la pregunta<br>El horóscopo dice que somos compatible'<br>Y eso que yo no creía<br>Pero habrá que hacerle caso<br>Y yo te aviso, como subas otra foto en la playa, te caso`
    },
    {
      title: "Indeciso",
      artist: "Reik, J Balvin, Lalo Ebratt",
      album: "Reguetón • 2020",
      cover: "Fotos/R (3).jpeg",
      audioSrc: "Canciones/Reik, J Balvin, Lalo Ebratt - Indeciso (Letra).m4a",
      lyrics: `Siempre que ella baila así<br>A mí me daña la cabeza<br>El día que la conocí<br>Tomaba tequila y cerveza<br><br>Y ahora yo me la pasó buscando<br>Una razón pa' verte bailando<br>Me robó el corazón sin permiso<br>Su movimiento me tiene indeciso<br><br>Por esas caderas yo estoy indeciso<br>Su movimiento me tiene indeciso`
    }
  ];

  // ========== ELEMENTOS DOM ==========
  const audio = document.getElementById("audioPlayer");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const playIcon = document.querySelector(".play-icon");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const volumeSlider = document.getElementById("volumeSlider");
  const volumeIcon = document.getElementById("volumeIcon");
  const progressBar = document.getElementById("progressBar");
  const progressFill = document.getElementById("progressFill");
  const currentTimeSpan = document.getElementById("currentTime");
  const durationSpan = document.getElementById("duration");
  const currentCover = document.getElementById("currentCover");
  const currentSongSpan = document.getElementById("currentSong");
  const currentArtistSpan = document.getElementById("currentArtist");
  const currentAlbumSpan = document.getElementById("currentAlbum");
  const lyricsContainer = document.getElementById("lyricsContainer");
  const snippetsList = document.getElementById("snippetsList");

  let currentSongIndex = 0;
  let isPlaying = false;
  let currentLyricsLines = [];

  // ========== FUNCIÓN PARA CARGAR CANCIÓN ==========
  function loadSong(index) {
    const song = songs[index];
    if (!song) return;
    
    if (isPlaying) {
      audio.pause();
      isPlaying = false;
      playIcon.textContent = "▶";
    }
    
    audio.src = song.audioSrc;
    currentCover.src = song.cover;
    currentSongSpan.textContent = song.title;
    currentArtistSpan.textContent = song.artist;
    currentAlbumSpan.textContent = song.album;
    
    const rawLyrics = song.lyrics;
    currentLyricsLines = rawLyrics.split(/<br>/);
    lyricsContainer.innerHTML = '<div class="lyrics-placeholder">▶ Presiona play para ver la letra</div>';
    
    progressFill.style.width = "0%";
    currentTimeSpan.textContent = "0:00";
    
    audio.load();
    
    // Actualizar clase activa en snippets
    document.querySelectorAll(".snippet-card").forEach((card, i) => {
      if (i === index) card.classList.add("active-snippet");
      else card.classList.remove("active-snippet");
    });
  }
  
  // ========== ANIMACIÓN DE ESCRITURA ==========
  let typingInterval = null;
  let currentLineIndex = 0;
  
  function startLyricsTyping() {
    if (typingInterval) clearInterval(typingInterval);
    
    lyricsContainer.innerHTML = "";
    currentLineIndex = 0;
    
    function typeNextLine() {
      if (currentLineIndex >= currentLyricsLines.length) return;
      
      const lineDiv = document.createElement("div");
      lineDiv.className = "lyric-line";
      lyricsContainer.appendChild(lineDiv);
      
      const lineText = currentLyricsLines[currentLineIndex];
      let charIndex = 0;
      lineDiv.innerHTML = "";
      
      const typeInterval = setInterval(() => {
        if (charIndex < lineText.length) {
          lineDiv.innerHTML += lineText[charIndex];
          charIndex++;
          lineDiv.scrollIntoView({ behavior: "smooth", block: "nearest" });
        } else {
          clearInterval(typeInterval);
          currentLineIndex++;
          setTimeout(typeNextLine, 300);
        }
      }, 30);
    }
    
    typeNextLine();
  }
  
  function resetLyrics() {
    if (typingInterval) clearInterval(typingInterval);
    lyricsContainer.innerHTML = '<div class="lyrics-placeholder">🎵 Pausado — presiona play para ver la letra</div>';
  }
  
  // ========== CONTROLES ==========
  function togglePlay() {
    if (audio.src === "" || audio.src === window.location.href) {
      loadSong(currentSongIndex);
    }
    
    if (isPlaying) {
      audio.pause();
      playIcon.textContent = "▶";
      isPlaying = false;
      resetLyrics();
    } else {
      audio.play();
      playIcon.textContent = "⏸";
      isPlaying = true;
      startLyricsTyping();
    }
  }
  
  function playNext() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    if (isPlaying) {
      audio.play();
      startLyricsTyping();
    }
  }
  
  function playPrev() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    if (isPlaying) {
      audio.play();
      startLyricsTyping();
    }
  }
  
  // ========== PROGRESO ==========
  function updateProgress() {
    if (audio.duration && !isNaN(audio.duration)) {
      const percent = (audio.currentTime / audio.duration) * 100;
      progressFill.style.width = `${percent}%`;
      
      const currentMin = Math.floor(audio.currentTime / 60);
      const currentSec = Math.floor(audio.currentTime % 60);
      currentTimeSpan.textContent = `${currentMin}:${currentSec.toString().padStart(2, '0')}`;
    }
  }
  
  function setProgress(e) {
    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const percent = clickX / width;
    if (audio.duration) {
      audio.currentTime = percent * audio.duration;
    }
  }
  
  function updateDuration() {
    if (audio.duration && !isNaN(audio.duration)) {
      const min = Math.floor(audio.duration / 60);
      const sec = Math.floor(audio.duration % 60);
      durationSpan.textContent = `${min}:${sec.toString().padStart(2, '0')}`;
    }
  }
  
  // ========== VOLUMEN ==========
  function setVolume() {
    audio.volume = volumeSlider.value;
    if (audio.volume === 0) volumeIcon.textContent = "🔇";
    else if (audio.volume < 0.5) volumeIcon.textContent = "🔉";
    else volumeIcon.textContent = "🔊";
  }
  
  function toggleMute() {
    if (audio.volume > 0) {
      audio.volume = 0;
      volumeSlider.value = 0;
    } else {
      audio.volume = 0.7;
      volumeSlider.value = 0.7;
    }
    setVolume();
  }
  
  // ========== CARGAR LISTA DE CANCIONES ==========
  function loadSnippets() {
    snippetsList.innerHTML = "";
    songs.forEach((song, idx) => {
      const card = document.createElement("div");
      card.className = "snippet-card";
      if (idx === currentSongIndex) card.classList.add("active-snippet");
      card.innerHTML = `
        <img src="${song.cover}" alt="${song.title}" class="snippet-img">
        <div class="snippet-info">
          <h4>${song.title}</h4>
          <p>${song.artist}</p>
        </div>
        <div class="mini-play">▶</div>
      `;
      card.addEventListener("click", () => {
        currentSongIndex = idx;
        loadSong(currentSongIndex);
        if (isPlaying) {
          audio.play();
          startLyricsTyping();
        }
      });
      snippetsList.appendChild(card);
    });
  }
  
  // ========== EVENTOS ==========
  playPauseBtn.addEventListener("click", togglePlay);
  nextBtn.addEventListener("click", playNext);
  prevBtn.addEventListener("click", playPrev);
  volumeSlider.addEventListener("input", setVolume);
  volumeIcon.addEventListener("click", toggleMute);
  progressBar.addEventListener("click", setProgress);
  audio.addEventListener("timeupdate", updateProgress);
  audio.addEventListener("loadedmetadata", updateDuration);
  audio.addEventListener("ended", () => { playNext(); });
  audio.addEventListener("pause", () => { resetLyrics(); });
  
  // ========== INICIALIZAR ==========
  loadSong(0);
  loadSnippets();
  setVolume();
});