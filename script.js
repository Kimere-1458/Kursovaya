// БАЗА ДАННЫХ ВСЕХ ПЕСЕН (БЕЗ ДУБЛИКАТОВ)
const allSongs = [
    // 80-е
    { name: 'Сардааналыын көрсүһүү', artist: 'В. Ноев', era: '80-с', url: '80_sullar/Valerij_Noev_-_Sardaanalyyn_k_rs.mp3' },
    { name: 'Сүтүк', artist: 'С. Осипова', era: '80-с', url: '80_sullar/Sardaana_Osipova_-_S_t_k_.mp3' },
    // 90-е
    { name: 'Ыра санаа', artist: 'Чолбон', era: '90-с', url: '90_sullar/' },
    { name: 'Ахтыы', artist: 'С. Охлопков', era: '90-с', url: '90_sullar/' },
    { name: 'Дьол кустуга', artist: 'Айыы Куо', era: '90-с', url: '90_sullar/' },
{ name: 'Кэтэhэ5ин кэлиэ диэннин', artist: 'Айыы Уола', era: '90-с', url: '90_sullar/Айыы Уола - Кэтэhэ5ин кэлиэ диэннин (Ketehe5in kelie diennin).mp3' },
{ name: 'Эhиэхэ аныыбын', artist: 'Айыы Уола', era: '90-с', url: '90_sullar/Айыы Уола - Эһиэхэ аныыбын (Echiekhe anyybyn).mp3' },
{ name: 'Билбэт кыысчааммар', artist: 'Айыы Уола', era: '90-с', url: '90_sullar/Айыы Уола - Билбэт кыысчааммар (Bilbet kyyschaammar).mp3' },
{ name: 'Бэлэхтээ', artist: 'Айыы Уола', era: '90-с', url: '90_sullar/Айыы Уола - Бэлэхтээ (Belekhtee).mp3' },
{ name: 'Ыллаа гитарам', artist: 'Айыы Уола', era: '90-с', url: '90_sullar/Айыы Уола - Ыллаа гитарам (Yllaa gitaram).mp3' },
{ name: 'Ийэҕэ махтал', artist: 'Айыы Уола', era: '90-с', url: '90_sullar/Айыы Уола - Ийэ5э махтал (Iye5e makhtal).mp3' },
    // 2000-е
    { name: 'Мин сахабын', artist: 'Г. Чахов', era: '2000-с', url: 'https://example.com/song2000_1.mp3' },
    { name: 'Кэрэ алаас', artist: 'Т. Егорова', era: '2000-с', url: 'https://example.com/song2000_2.mp3' },
    { name: 'Ыһыах', artist: 'Куннэй', era: '2000-с', url: 'https://example.com/song2000_3.mp3' },
    { name: 'Тойук ырыа', artist: 'Ойуун', era: '2000-с', url: 'https://example.com/song2000_4.mp3' },
    // 2010-е
    { name: 'Кустук', artist: 'Ньургун', era: '2010-с', url: 'https://example.com/song2010_1.mp3' },
    { name: 'Сир ийэ', artist: 'Саина', era: '2010-с', url: 'https://example.com/song2010_2.mp3' },
    { name: 'Талбарыы', artist: 'Айхал', era: '2010-с', url: 'https://example.com/song2010_3.mp3' },
    // 2020-е
    { name: 'Күөх тайга', artist: 'М. Попова', era: '2020-с', url: 'https://example.com/song2020_1.mp3' },
    { name: 'Санаам сардаҥата', artist: 'Айсен', era: '2020-с', url: 'https://example.com/song2020_2.mp3' },
    { name: 'Тойук 2020', artist: 'Саха Артист', era: '2020-с', url: 'https://example.com/song2020_3.mp3' },
    // Хиты (только уникальные песни, которых нет в других эпохах)
    { name: 'Ыһыах ырыата', artist: 'Куннэй', era: 'Хит', url: 'https://example.com/hit3.mp3' },
    { name: 'Айыы кыыһа', artist: 'Айыы Куо', era: 'Хит', url: 'https://example.com/hit4.mp3' },
    { name: 'Дьоллоох буол', artist: 'Ньургун', era: 'Хит', url: 'https://example.com/hit5.mp3' }
];

// БАЗА ДАННЫХ ПО ЭПОХАМ (для карточек)
const songsDatabase = {
    '80e': {
        title: '80-с сыллар (80-е годы)',
        songs: allSongs.filter(s => s.era === '80-с')
    },
    '90e': {
        title: '90-с сыллар (90-е годы)',
        songs: allSongs.filter(s => s.era === '90-с')
    },
    '2000e': {
        title: '2000-с сыллар (2000-е годы)',
        songs: allSongs.filter(s => s.era === '2000-с')
    },
    '2010e': {
        title: '2010-с сыллар (2010-е годы)',
        songs: allSongs.filter(s => s.era === '2010-с')
    },
    '2020e': {
        title: '2020-с сыллар (2020-е годы)',
        songs: allSongs.filter(s => s.era === '2020-с')
    },
    'hity': {
        title: 'Хит ырыалар — Топ (Хиты)',
        songs: allSongs.filter(s => s.era === 'Хит')
    }
};

// ===== ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ =====
let currentSongs = [...allSongs];
let currentFilter = 'all';
let currentLetter = 'all';

// ===== ПОЛУЧАЕМ ЭЛЕМЕНТЫ =====
const pageMain = document.getElementById('pageMain');
const pageSongs = document.getElementById('pageSongs');
const aboutBlock = document.querySelector('.about-block');
const songsSection = document.getElementById('songsSection');
const eraTitle = document.getElementById('eraTitle');
const songList = document.getElementById('songList');
const backBtn = document.getElementById('backBtn');

// ===== ЗАГРУЗОЧНЫЙ ЭКРАН =====
document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loaderScreen');
    const siteContent = document.getElementById('siteContent');
    
    setTimeout(function() {
        if (loader) {
            loader.classList.add('open');
            document.body.classList.add('loaded');
            
            setTimeout(function() {
                if (loader) {
                    loader.style.display = 'none';
                }
            }, 1200);
        }
        if (siteContent) {
            siteContent.classList.add('visible');
        }
        // Инициализируем поиск на первой странице
        initSearch();
    }, 2500);
});

// ===== ИНИЦИАЛИЗАЦИЯ ПОИСКА НА ПЕРВОЙ СТРАНИЦЕ =====
function initSearch() {
    const eraTitleEl = document.getElementById('eraTitle');
    if (eraTitleEl) {
        eraTitleEl.textContent = 'Бары ырыалар';
    }
    updateArtists(currentSongs);
    updateAlphabet(currentSongs);
    renderSongs(currentSongs);
}

// ===== ОБНОВЛЕНИЕ ИСПОЛНИТЕЛЕЙ =====
function updateArtists(songs) {
    const artistList = document.getElementById('artistList');
    if (!artistList) return;
    
    const artists = [...new Set(songs.map(s => s.artist))].sort();
    
    artistList.innerHTML = `
        <div class="artist-tag active" data-artist="all">Бары</div>
    `;
    
    artists.forEach(artist => {
        const tag = document.createElement('div');
        tag.className = 'artist-tag';
        tag.dataset.artist = artist;
        tag.textContent = artist;
        artistList.appendChild(tag);
    });
    
    document.querySelectorAll('.artist-tag').forEach(tag => {
        tag.addEventListener('click', function() {
            document.querySelectorAll('.artist-tag').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.artist;
            applyFilters();
        });
    });
}

// ===== ОБНОВЛЕНИЕ АЛФАВИТА =====
function updateAlphabet(songs) {
    const alphabetGrid = document.getElementById('alphabetGrid');
    if (!alphabetGrid) return;
    
    const letters = [...new Set(songs.map(s => s.artist.charAt(0).toUpperCase()))].sort();
    
    alphabetGrid.innerHTML = `
        <div class="alphabet-letter active" data-letter="all">#</div>
    `;
    
    letters.forEach(letter => {
        const el = document.createElement('div');
        el.className = 'alphabet-letter';
        el.dataset.letter = letter;
        el.textContent = letter;
        alphabetGrid.appendChild(el);
    });
    
    document.querySelectorAll('.alphabet-letter').forEach(el => {
        el.addEventListener('click', function() {
            document.querySelectorAll('.alphabet-letter').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            currentLetter = this.dataset.letter;
            applyFilters();
        });
    });
}

// ===== ПРИМЕНЕНИЕ ФИЛЬТРОВ =====
function applyFilters() {
    let filtered = [...currentSongs];
    
    if (currentFilter !== 'all') {
        filtered = filtered.filter(s => s.artist === currentFilter);
    }
    
    if (currentLetter !== 'all') {
        filtered = filtered.filter(s => s.artist.charAt(0).toUpperCase() === currentLetter);
    }
    
    renderSongs(filtered);
}

// ===== ПОИСК ПЕСЕН =====
function searchSongs(query) {
    const q = query.toLowerCase().trim();
    if (!q) {
        applyFilters();
        return;
    }
    
    const filtered = currentSongs.filter(s => 
        s.name.toLowerCase().includes(q) || 
        s.artist.toLowerCase().includes(q)
    );
    
    renderSongs(filtered);
}

// ===== ОТРИСОВКА СПИСКА (ДЛЯ ПЕРВОЙ СТРАНИЦЫ) =====
function renderSongs(songs) {
    const songList = document.getElementById('songList');
    if (!songList) return;
    
    songList.innerHTML = '';
    
    if (songs.length === 0) {
        songList.innerHTML = `
            <li class="song-item" style="justify-content:center; color: #8b694a;">
                🎵 Ырыа көстүбэтэ
            </li>
        `;
        return;
    }
    
    songs.forEach((song, index) => {
        const li = document.createElement('li');
        li.className = 'song-item';
        li.innerHTML = `
            <div class="song-info">
                <div class="song-name">${escapeHtml(song.name)}</div>
                <div class="song-artist">${escapeHtml(song.artist)} • ${song.era}</div>
                <!-- АУДИОПЛЕЕР -->
                <audio class="song-player" controls controlslist="nodownload" id="player_${index}">
                    <source src="${song.url}" type="audio/mpeg">
                    Ваш браузер не поддерживает аудио
                </audio>
            </div>
            <button class="download-btn" onclick="downloadSong('${song.url}', '${escapeHtml(song.name)}')">⬇ Скачать</button>
        `;
        songList.appendChild(li);
    });
}



// ===== ЗАЩИТА ОТ XSS =====
function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// ===== ОБРАБОТЧИКИ ПОИСКА =====
document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            searchSongs(searchInput ? searchInput.value : '');
        });
    }
    
    if (searchInput) {
        searchInput.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                searchSongs(this.value);
            }
        });
        
        searchInput.addEventListener('input', function() {
            if (this.value === '') {
                applyFilters();
            }
        });
    }
});

// ===== ФУНКЦИЯ ОТКРЫТИЯ СТРАНИЦЫ С ПЕСНЯМИ (ПО КАРТОЧКЕ) =====
function openSongsPage(eraKey) {
    const eraData = songsDatabase[eraKey];
    if (!eraData) {
        console.error('Эпоха не найдена:', eraKey);
        return;
    }

    console.log('Открываем:', eraKey, eraData.title);

    // Скрываем первую страницу и показываем вторую
    pageMain.style.display = 'none';
    if (songsSection) {
        songsSection.style.display = 'none';
    }
    pageSongs.style.display = 'block';
    
    // Скрываем блок "Об авторе"
    if (aboutBlock) {
        aboutBlock.style.display = 'none';
    }
    
    // Обновляем заголовок на второй странице
    const eraTitlePage2 = document.getElementById('eraTitlePage2');
    if (eraTitlePage2) {
        eraTitlePage2.textContent = eraData.title;
    }
    
    // Отображаем песни на второй странице
    renderSongsPage2(eraData.songs);
    
    // Прокручиваем страницу вверх
    window.scrollTo(0, 0);
}

// ===== ОТРИСОВКА СПИСКА ДЛЯ ВТОРОЙ СТРАНИЦЫ =====
function renderSongsPage2(songs) {
    const songListPage2 = document.getElementById('songListPage2');
    if (!songListPage2) {
        console.error('songListPage2 не найден');
        return;
    }
    
    songListPage2.innerHTML = '';
    
    if (songs.length === 0) {
        songListPage2.innerHTML = `
            <li class="song-item" style="justify-content:center; color: #8b694a;">
                🎵 Ырыа көстүбэтэ
            </li>
        `;
        return;
    }
    
    songs.forEach((song, index) => {
        const li = document.createElement('li');
        li.className = 'song-item';
        li.innerHTML = `
            <div class="song-info">
                <div class="song-name">${escapeHtml(song.name)}</div>
                <div class="song-artist">${escapeHtml(song.artist)}</div>
                <!-- АУДИОПЛЕЕР -->
                <audio class="song-player" controls controlslist="nodownload" id="player2_${index}">
                    <source src="${song.url}" type="audio/mpeg">
                    Ваш браузер не поддерживает аудио
                </audio>
            </div>
            <button class="download-btn" onclick="downloadSong('${song.url}', '${escapeHtml(song.name)}')">⬇ Скачать</button>
        `;
        songListPage2.appendChild(li);
    });
}



// ===== ФУНКЦИЯ ВОЗВРАТА НА ГЛАВНУЮ =====
function goToMainPage() {
    // Добавляем анимацию исчезновения
    if (pageSongs) {
        pageSongs.style.animation = 'pageSongsDisappear 0.4s ease forwards';
    }
    
    setTimeout(function() {
        pageMain.style.display = 'block';
        if (songsSection) {
            songsSection.style.display = 'block';
        }
        pageSongs.style.display = 'none';
        if (pageSongs) {
            pageSongs.style.animation = '';
        }
        
        // Показываем блок "Об авторе"
        if (aboutBlock) {
            aboutBlock.style.display = 'block';
        }
        
        window.scrollTo(0, 0);
    }, 400);
}

// ===== НАВЕШИВАЕМ ОБРАБОТЧИКИ НА КАРТОЧКИ =====
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function(e) {
        e.preventDefault();
        const era = this.getAttribute('data-era');
        console.log('Клик по карточке:', era);
        openSongsPage(era);
    });
});

// ===== КНОПКА "НА ГЛАВНУЮ" =====
if (backBtn) {
    backBtn.addEventListener('click', function() {
        goToMainPage();
    });
}

// ===== ПОКАЗЫВАЕМ ГЛАВНУЮ ПРИ ЗАГРУЗКЕ =====
pageMain.style.display = 'block';
if (songsSection) {
    songsSection.style.display = 'block';
}
pageSongs.style.display = 'none';
if (aboutBlock) {
    aboutBlock.style.display = 'block';
}




function downloadSong(url, name) {
    // Убираем пробелы из имени
    const cleanName = name.replace(/[^a-zA-Zа-яА-Я0-9]/g, '_');
    
    // Создаём ссылку
    const link = document.createElement('a');
    link.href = url;
    link.download = cleanName + '.mp3';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    
    // Удаляем ссылку
    setTimeout(() => {
        document.body.removeChild(link);
    }, 100);
}


function playSong(url, name, artist) {
    // Создаём модальное окно с плеером
    const modal = document.createElement('div');
    modal.className = 'audio-modal';
    modal.id = 'audioModal';
    modal.innerHTML = `
        <div class="audio-modal-content">
            <button class="audio-modal-close" onclick="closeAudioModal()">✕</button>
            <h3>${escapeHtml(name)}</h3>
            <p>${escapeHtml(artist)}</p>
            <audio controls autoplay id="modalAudioPlayer">
                <source src="${url}" type="audio/mpeg">
                Ваш браузер не поддерживает аудио
            </audio>
            <div style="display:flex; gap:0.5rem; margin-top:0.5rem;">
                <button class="download-btn" onclick="downloadSong('${url}', '${escapeHtml(name)}')" style="flex:1; justify-content:center;">⬇ Скачать</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    // Закрытие по клику вне окна
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeAudioModal();
        }
    });
}
