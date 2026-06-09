// Загрузочный экран
document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loaderScreen');
    const siteContent = document.getElementById('siteContent');
    
    // Через 2.5 секунды (время анимации прогресс-бара) открываем ворота
    setTimeout(function() {
        loader.classList.add('open');
        siteContent.classList.add('visible');
        document.body.classList.add('loaded');
        
        // Удаляем загрузочный экран из DOM после анимации
        setTimeout(function() {
            if (loader) {
                loader.style.display = 'none';
            }
        }, 1200);
    }, 2500);
});

// БАЗА ДАННЫХ ПЕСЕН (заменить ссылки на реальные)
const songsDatabase = {
    '80e': {
        title: '80-с сыллар (80-е годы)',
        songs: [
            { name: 'Күн туһунан ырыа', artist: 'Н. Егоров', url: 'https://example.com/song1.mp3' },
            { name: 'Сардаана', artist: 'В. Ноев', url: 'https://example.com/song2.mp3' },
            { name: 'Тойук', artist: 'И. Алексеев', url: 'https://example.com/song3.mp3' },
            { name: 'Сайын кэлиитэ', artist: 'А. Самсонов', url: 'https://example.com/song4.mp3' }
        ]
    },
    '90e': {
        title: '90-с сыллар (90-е годы)',
        songs: [
            { name: 'Ыра санаа', artist: 'Чолбон', url: 'https://example.com/song90_1.mp3' },
            { name: 'Ахтыы', artist: 'С. Охлопков', url: 'https://example.com/song90_2.mp3' },
            { name: 'Дьол кустуга', artist: 'Айыы Куо', url: 'https://example.com/song90_3.mp3' }
        ]
    },
    '2000e': {
        title: '2000-с сыллар (2000-е годы)',
        songs: [
            { name: 'Мин сахабын', artist: 'Г. Чахов', url: 'https://example.com/song2000_1.mp3' },
            { name: 'Кэрэ алаас', artist: 'Т. Егорова', url: 'https://example.com/song2000_2.mp3' },
            { name: 'Ыһыах', artist: 'Куннэй', url: 'https://example.com/song2000_3.mp3' },
            { name: 'Тойук ырыа', artist: 'Ойуун', url: 'https://example.com/song2000_4.mp3' }
        ]
    },
    '2010e': {
        title: '2010-с сыллар (2010-е годы)',
        songs: [
            { name: 'Кустук', artist: 'Ньургун', url: 'https://example.com/song2010_1.mp3' },
            { name: 'Сир ийэ', artist: 'Саина', url: 'https://example.com/song2010_2.mp3' },
            { name: 'Талбарыы', artist: 'Айхал', url: 'https://example.com/song2010_3.mp3' }
        ]
    },
    '2020e': {
        title: '2020-с сыллар (2020-е годы)',
        songs: [
            { name: 'Күөх тайга', artist: 'М. Попова', url: 'https://example.com/song2020_1.mp3' },
            { name: 'Санаам сардаҥата', artist: 'Айсен', url: 'https://example.com/song2020_2.mp3' },
            { name: 'Тойук 2020', artist: 'Саха Артист', url: 'https://example.com/song2020_3.mp3' }
        ]
    },
    'hity': {
        title: 'Хит ырыалар — Топ (Хиты)',
        songs: [
            { name: 'Сардаана', artist: 'В. Ноев', url: 'https://example.com/hit1.mp3' },
            { name: 'Мин сахабын', artist: 'Г. Чахов', url: 'https://example.com/hit2.mp3' },
            { name: 'Ыһыах ырыата', artist: 'Куннэй', url: 'https://example.com/hit3.mp3' },
            { name: 'Айыы кыыһа', artist: 'Айыы Куо', url: 'https://example.com/hit4.mp3' },
            { name: 'Дьоллаах буол', artist: 'Ньургун', url: 'https://example.com/hit5.mp3' }
        ]
    }
};

// Получаем элементы
const pageMain = document.getElementById('pageMain');
const pageSongs = document.getElementById('pageSongs');
const aboutBlock = document.querySelector('.about-block');  // ДОБАВЛЕНО: блок "Об авторе"
const eraTitle = document.getElementById('eraTitle');
const songList = document.getElementById('songList');
const backBtn = document.getElementById('backBtn');

// Функция открытия страницы с песнями
function openSongsPage(eraKey) {
    const eraData = songsDatabase[eraKey];
    if (!eraData) return;

    // Обновляем заголовок
    eraTitle.textContent = eraData.title;

    // Очищаем и заполняем список песен
    songList.innerHTML = '';
    eraData.songs.forEach(song => {
        const li = document.createElement('li');
        li.className = 'song-item';
        li.innerHTML = `
            <div class="song-info">
                <div class="song-name">${escapeHtml(song.name)}</div>
                <div class="song-artist">${escapeHtml(song.artist)}</div>
            </div>
            <a href="${song.url}" class="download-btn" download>📥 Скачать</a>
        `;
        songList.appendChild(li);
    });

    // Переключаем страницы
    pageMain.style.display = 'none';
    pageSongs.style.display = 'block';
    
    // СКРЫВАЕМ БЛОК "ОБ АВТОРЕ" НА ВТОРОЙ СТРАНИЦЕ
    if (aboutBlock) {
        aboutBlock.style.display = 'none';
    }
    
    // Прокручиваем страницу вверх
    window.scrollTo(0, 0);
}

// Функция возврата на главную
function goToMainPage() {
    pageMain.style.display = 'block';
    pageSongs.style.display = 'none';
    
    // ПОКАЗЫВАЕМ БЛОК "ОБ АВТОРЕ" НА ГЛАВНОЙ
    if (aboutBlock) {
        aboutBlock.style.display = 'block';
    }
    
    window.scrollTo(0, 0);
}

// Защита от XSS
function escapeHtml(str) {
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

// Навешиваем обработчики на карточки
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function(e) {
        e.preventDefault();
        const era = this.getAttribute('data-era');
        openSongsPage(era);
    });
});

// Кнопка "На главную"
backBtn.addEventListener('click', function() {
    goToMainPage();
});

// Показываем главную страницу при загрузке
pageMain.style.display = 'block';
pageSongs.style.display = 'none';

// Убеждаемся, что блок "Об авторе" виден на главной
if (aboutBlock) {
    aboutBlock.style.display = 'block';
}


// Функция возврата на главную с анимацией
function goToMainPage() {
    // Добавляем анимацию исчезновения второй страницы
    pageSongs.style.animation = 'pageSongsDisappear 0.4s ease forwards';
    
    setTimeout(function() {
        pageMain.style.display = 'block';
        pageSongs.style.display = 'none';
        pageSongs.style.animation = ''; // Сбрасываем анимацию
        
        // Показываем блок "Об авторе"
        if (aboutBlock) {
            aboutBlock.style.display = 'block';
        }
        
        window.scrollTo(0, 0);
    }, 400);
}