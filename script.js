// создаю массив данных значений клавиш для клавиатуры
var keyboardArry = [
    {
        keyRu: 'ё',
        keyRuShift: 'Ё',
        keyEn: '`',
        keyEnShift: '~',
        elementClass: 'key-standart',
        keyCode: '192',
        pressing: false
    },
    {
        keyRu: '1',
        keyRuShift: '!',
        keyEn: '1',
        keyEnShift: '!',
        elementClass: 'key-standart',
        keyCode: '49',
        pressing: false
    },
    {
        keyRu: '2',
        keyRuShift: '"',
        keyEn: '2',
        keyEnShift: '@',
        elementClass: 'key-standart',
        keyCode: '50',
        pressing: false
    },
    {
        keyRu: '3',
        keyRuShift: '№',
        keyEn: '3',
        keyEnShift: '#',
        elementClass: 'key-standart',
        keyCode: '51',
        pressing: false
    },
    {
        keyRu: '4',
        keyRuShift: ';',
        keyEn: '4',
        keyEnShift: '$',
        elementClass: 'key-standart',
        keyCode: '52',
        pressing: false
    },
    {
        keyRu: '5',
        keyRuShift: '%',
        keyEn: '5',
        keyEnShift: '%',
        elementClass: 'key-standart',
        keyCode: '53',
        pressing: false
    },
    {
        keyRu: '6',
        keyRuShift: ':',
        keyEn: '6',
        keyEnShift: '^',
        elementClass: 'key-standart',
        keyCode: '54',
        pressing: false
    },
    {
        keyRu: '7',
        keyRuShift: '?',
        keyEn: '7',
        keyEnShift: '&',
        elementClass: 'key-standart',
        keyCode: '55',
        pressing: false
    },
    {
        keyRu: '8',
        keyRuShift: '*',
        keyEn: '8',
        keyEnShift: '*',
        elementClass: 'key-standart',
        keyCode: '56',
        pressing: false
    },
    {
        keyRu: '9',
        keyRuShift: '(',
        keyEn: '9',
        keyEnShift: '(',
        elementClass: 'key-standart',
        keyCode: '57',
        pressing: false
    },
    {
        keyRu: '0',
        keyRuShift: ')',
        keyEn: '0',
        keyEnShift: ')',
        elementClass: 'key-standart',
        keyCode: '48',
        pressing: false
    },
    {
        keyRu: '-',
        keyRuShift: '_',
        keyEn: '-',
        keyEnShift: '',
        elementClass: 'key-standart',
        keyCode: '189',
        pressing: false
    },
    {
        keyRu: '=',
        keyRuShift: '+',
        keyEn: '=',
        keyEnShift: '',
        elementClass: 'key-standart',
        keyCode: '187',
        pressing: false
    },
    {
        keyRu: 'Backspace',
        keyRuShift: 'Backspace',
        keyEn: 'Backspace',
        keyEnShift: 'Backspace',
        elementClass: 'key-length-3',
        keyCode: '8',
        pressing: false
    },
    {
        keyRu: 'Tab',
        keyRuShift: 'Tab',
        keyEn: 'Tab',
        keyEnShift: 'Tab',
        elementClass: 'key-length-1',
        keyCode: '',
        pressing: false
    },
    {
        keyRu: 'й',
        keyRuShift: 'Й',
        keyEn: 'q',
        keyEnShift: 'Q',
        elementClass: 'key-standart',
        keyCode: '',
        pressing: false
    },
    {
        keyRu: 'ц',
        keyRuShift: 'Ц',
        keyEn: 'w',
        keyEnShift: 'W',
        elementClass: 'key-standart',
        keyCode: '',
        pressing: false
    },
    {
        keyRu: 'у',
        keyRuShift: 'У',
        keyEn: 'e',
        keyEnShift: 'E',
        elementClass: 'key-standart',
        keyCode: '',
        pressing: false
    },
    {
        keyRu: 'к',
        keyRuShift: 'К',
        keyEn: 'r',
        keyEnShift: 'R',
        elementClass: 'key-standart',
        keyCode: '',
        pressing: false
    },
    {
        keyRu: 'е',
        keyRuShift: 'Е',
        keyEn: 't',
        keyEnShift: 'T',
        elementClass: 'key-standart',
        keyCode: '',
        pressing: false
    },
    {
        keyRu: 'н',
        keyRuShift: 'Н',
        keyEn: 'y',
        keyEnShift: 'Y',
        elementClass: 'key-standart',
        keyCode: '',
        pressing: false
    },
    {
        keyRu: 'г',
        keyRuShift: 'Г',
        keyEn: 'u',
        keyEnShift: 'U',
        elementClass: 'key-standart',
        keyCode: '',
        pressing: false
    },
    {
        keyRu: 'ш',
        keyRuShift: 'Ш',
        keyEn: 'i',
        keyEnShift: 'I',
        elementClass: 'key-standart',
        keyCode: '',
        pressing: false
    },
    {
        keyRu: 'щ',
        keyRuShift: 'Щ',
        keyEn: 'o',
        keyEnShift: 'O',
        elementClass: 'key-standart',
        keyCode: '',
        pressing: false
    },
    {
        keyRu: 'з',
        keyRuShift: 'З',
        keyEn: 'p',
        keyEnShift: 'P',
        elementClass: 'key-standart',
        keyCode: '',
        pressing: false
    },
    {
        keyRu: 'х',
        keyRuShift: 'Х',
        keyEn: '[',
        keyEnShift: '{',
        elementClass: 'key-standart',
        keyCode: '',
        pressing: false
    },
    {
        keyRu: 'ъ',
        keyRuShift: 'Ъ',
        keyEn: ']',
        keyEnShift: '}',
        elementClass: 'key-standart',
        keyCode: '',
        pressing: false
    },
    {
        keyRu: '\\',
        keyRuShift: '/',
        keyEn: '\\',
        keyEnShift: '||',
        elementClass: 'key-standart',
        keyCode: '',
        pressing: false
    },
    {
        keyRu: 'Del',
        keyRuShift: 'Del',
        keyEn: 'Del',
        keyEnShift: 'Del',
        elementClass: 'key-length-0',
        keyCode: '',
        pressing: false
    },
    {
        keyRu: 'CapsLock',
        keyRuShift: 'CapsLock',
        keyEn: 'CapsLock',
        keyEnShift: 'CapsLock',
        elementClass: 'key-length-3',
        keyCode: '',
        pressing: false
    },
    {
        keyRu: 'ф',
        keyRuShift: 'Ф',
        keyEn: 'a',
        keyEnShift: 'A',
        elementClass: 'key-standart',
        keyCode: '',
        pressing: false
    },
    {
        keyRu: 'ы',
        keyRuShift: 'Ы',
        keyEn: 's',
        keyEnShift: 'S',
        elementClass: 'key-standart',
        keyCode: '',
        pressing: false
    },
    {
        keyRu: 'в',
        keyRuShift: 'В',
        keyEn: 'd',
        keyEnShift: 'D',
        elementClass: 'key-standart',
        keyCode: '',
        pressing: false
    },
    {
        keyRu: 'а',
        keyRuShift: 'А',
        keyEn: 'f',
        keyEnShift: 'F',
        elementClass: 'key-standart',
        keyCode: '',
        pressing: false
    },
    {
        keyRu: 'п',
        keyRuShift: 'П',
        keyEn: 'g',
        keyEnShift: 'G',
        elementClass: 'key-standart',
        keyCode: '',
        pressing: false
    },
    {
        keyRu: 'р',
        keyRuShift: 'Р',
        keyEn: 'h',
        keyEnShift: 'H',
        elementClass: 'key-standart',
        keyCode: '',
        pressing: false
    },
    {
        keyRu: 'о',
        keyRuShift: 'О',
        keyEn: 'j',
        keyEnShift: 'J',
        elementClass: 'key-standart',
        keyCode: '',
        pressing: false
    },
    {
        keyRu: 'л',
        keyRuShift: 'Л',
        keyEn: 'k',
        keyEnShift: 'K',
        elementClass: 'key-standart',
        keyCode: '',
        pressing: false
    },
    {
        keyRu: 'д',
        keyRuShift: 'Д',
        keyEn: 'l',
        keyEnShift: 'L',
        elementClass: 'key-standart',
        keyCode: '',
        pressing: false
    },
    {
        keyRu: 'ж',
        keyRuShift: 'Ж',
        keyEn: ';',
        keyEnShift: ':',
        elementClass: 'key-standart',
        keyCode: '',
        pressing: false
    },
    {
        keyRu: 'э',
        keyRuShift: 'Э',
        keyEn: '\'',
        keyEnShift: '"',
        elementClass: 'key-standart',
        keyCode: '',
        pressing: false
    },
    {
        keyRu: 'Enter',
        keyRuShift: 'Enter',
        keyEn: 'Enter',
        keyEnShift: 'Enter',
        elementClass: 'key-length-2',
        keyCode: '',
        pressing: false
    },
    {
        keyRu: 'Shift',
        keyRuShift: 'Shift',
        keyEn: 'Shift',
        keyEnShift: 'Shift',
        elementClass: 'key-length-3',
        keyCode: '',
        pressing: false
    },
    {
        keyRu: 'я',
        keyRuShift: 'Я',
        keyEn: 'z',
        keyEnShift: 'Z',
        elementClass: 'key-standart',
        keyCode: '',
        pressing: false
    },
    {
        keyRu: 'ч',
        keyRuShift: 'Ч',
        keyEn: 'x',
        keyEnShift: 'X',
        elementClass: 'key-standart',
        keyCode: '',
        pressing: false
    },
    {
        keyRu: 'с',
        keyRuShift: 'С',
        keyEn: 'c',
        keyEnShift: 'C',
        elementClass: 'key-standart',
        keyCode: '',
        pressing: false
    },
    {
        keyRu: 'м',
        keyRuShift: 'М',
        keyEn: 'v',
        keyEnShift: 'V',
        elementClass: 'key-standart',
        keyCode: '',
        pressing: false
    },
    {
        keyRu: 'и',
        keyRuShift: 'И',
        keyEn: 'b',
        keyEnShift: 'B',
        elementClass: 'key-standart',
        keyCode: '',
        pressing: false
    },
    {
        keyRu: 'т',
        keyRuShift: 'Т',
        keyEn: 'n',
        keyEnShift: 'N',
        elementClass: 'key-standart',
        keyCode: '',
        pressing: false
    },
    {
        keyRu: 'ь',
        keyRuShift: 'Ь',
        keyEn: 'm',
        keyEnShift: 'M',
        elementClass: 'key-standart',
        keyCode: '',
        pressing: false
    },
    {
        keyRu: 'б',
        keyRuShift: 'Б',
        keyEn: ',',
        keyEnShift: '<',
        elementClass: 'key-standart',
        keyCode: '',
        pressing: false
    },
    {
        keyRu: 'ю',
        keyRuShift: 'Ю',
        keyEn: '.',
        keyEnShift: '>',
        elementClass: 'key-standart',
        keyCode: '',
        pressing: false
    },
    {
        keyRu: '.',
        keyRuShift: ',',
        keyEn: '/',
        keyEnShift: '?',
        elementClass: 'key-standart',
        keyCode: '',
        pressing: false
    },
    {
        keyRu: '&uarr;',
        keyRuShift: '&uarr;',
        keyEn: '&uarr;',
        keyEnShift: '&uarr;',
        elementClass: 'key-length-0',
        keyCode: '',
        pressing: false
    },
    {
        keyRu: 'Shift',
        keyRuShift: 'Shift',
        keyEn: 'Shift',
        keyEnShift: 'Shift',
        elementClass: 'key-length-2',
        keyCode: '',
        pressing: false
    },
    {
        keyRu: 'Ctrl',
        keyRuShift: 'Ctrl',
        keyEn: 'Ctrl',
        keyEnShift: 'Ctrl',
        elementClass: 'key-length-0',
        keyCode: '',
        pressing: false
    },
    {
        keyRu: 'Win',
        keyRuShift: 'Win',
        keyEn: 'Win',
        keyEnShift: 'Win',
        elementClass: 'key-length-0',
        keyCode: '',
        pressing: false
    },
    {
        keyRu: 'Alt',
        keyRuShift: 'Alt',
        keyEn: 'Alt',
        keyEnShift: 'Alt',
        elementClass: 'key-length-0',
        keyCode: '',
        pressing: false
    },
    {
        keyRu: ' ',
        keyRuShift: ' ',
        keyEn: ' ',
        keyEnShift: ' ',
        elementClass: 'key-space',
        keyCode: '',
        pressing: false
    },
    {
        keyRu: 'Alt',
        keyRuShift: 'Alt',
        keyEn: 'Alt',
        keyEnShift: 'Alt',
        elementClass: 'key-length-0',
        keyCode: '',
        pressing: false
    },
    {
        keyRu: '&larr;',
        keyRuShift: '&larr;',
        keyEn: '&larr;',
        keyEnShift: '&larr;',
        elementClass: 'key-length-0',
        keyCode: '',
        pressing: false
    },
    {
        keyRu: '&darr;',
        keyRuShift: '&darr;',
        keyEn: '&darr;',
        keyEnShift: '&darr;',
        elementClass: 'key-length-0',
        keyCode: '',
        pressing: false
    },
    {
        keyRu: `&rarr;`,
        keyRuShift: '&rarr;',
        keyEn: '&rarr;',
        keyEnShift: '&rarr;',
        elementClass: 'key-length-0',
        keyCode: '',
        pressing: false
    },
    {
        keyRu: 'Ctrl',
        keyRuShift: 'Ctrl',
        keyEn: 'Ctrl',
        keyEnShift: 'Ctrl',
        elementClass: 'key-length-0',
        keyCode: '',
        pressing: false
    },
]

// Создаю основные блоки 

var body = document.querySelector("body");
var main = document.createElement('main');
var title = document.createElement('h1');
title.textContent = 'RSS Виртуальная клавиатура';
var displayKey = document.createElement('textarea');
var keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
var textOs = document.createElement('p');
textOs.classList.add('text-os');
textOs.textContent = 'Клавиатура создана в операционной системе Linux';
var textLang = document.createElement('p');
textLang.classList.add('text-lang');
textLang.textContent = 'Комбинация для переключения языка: Ctrl + Shift';
body.appendChild(main);
main.appendChild(title);
main.appendChild(displayKey);
main.appendChild(keyboard);
main.appendChild(textOs);
main.appendChild(textLang);

// Индикатор раскладки клавиатуры
var indicationLangText = document.createElement('div');
indicationLangText.classList.add('indication-lang-text');
indicationLangText.textContent = 'Текущий язык клавиатуры -  ';
main.appendChild(indicationLangText);
var indicationLang = document.createElement('div');
indicationLang.classList.add('indication-lang');
indicationLang.textContent = 'RU';
indicationLangText.appendChild(indicationLang);

document.onkeydown = function (e) {
    e = e || window.event;
    if (e.shiftKey && e.keyCode == 17) {
        indicationLang.classList.toggle('indication-lang-EN');
        if (indicationLang.textContent === 'RU') {
            indicationLang.textContent = 'EN';
        } else {
            indicationLang.textContent = 'RU';
        }
    }
    return true;
}

// Создаю функции для создания элементов клавиатуры
var createKey = function (elemClass, _textKey) {
    var elementsKeyboard = document.createElement('div');
    elementsKeyboard.classList.add('key');
    elementsKeyboard.classList.add(elemClass);
    elementsKeyboard.textContent = _textKey;
    return elementsKeyboard;
}

var keyBoardElem = function (_keys) {
    var keyText = _keys.keyRu;
    if (indicationLang.classList.contains('indication-lang-EN')) {
        keyText = _keys.keyEn;
    }
    var keyElements = createKey(_keys.elementClass, keyText);
    return keyElements;
}

for (var i = 0; i < keyboardArry.length; i++) {
    var key = keyBoardElem(keyboardArry[i]);
    keyboard.appendChild(key);
}

// Добавляю анимацию при клике на клавиши клавиатуры и вывод символов на экран
var keyElems = document.querySelectorAll('.key');
var textarea = document.querySelector('textarea');
for (let keyElem of keyElems) {
    keyElem.onclick = function () {
        keyElem.classList.add('key-transform');
        if (keyElem.textContent === 'Backspace') {
            textarea.textContent = textarea.value.substring(0, textarea.value.length - 1);
        }
        if (keyElem.classList.contains('key-standart') || keyElem.classList.contains('key-space')) {
            textarea.textContent += keyElem.textContent;
        }

        // функция задержки удаления класса трансформации клавиши
        function removeTransform() {
            keyElem.classList.remove('key-transform');
        }
        setTimeout(removeTransform, 150);
    };
};

//var keyText = function (_keys) {
    //     var text = _keys.keyRu;
    //     document.addEventListener('keydown', function (evt) {
    //         // Проверяем, что код клавиши равен 8
    //         if (evt.keyCode === 8) {
    //             text = _keys.keyRuShift;
    //         }
    //     });
    //     return text;
    // }
