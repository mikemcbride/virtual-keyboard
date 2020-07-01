// This file exports a config that maps a bunch of info about the keyboard.
// It exports an array of rows for the keyboard.
// Each row contains an array of keys.
// Keys have a label and a shiftLabel to govern how the key will display in the UI.
// It has info about the keyCode that maps to the key.
export default [
  // function keys
  [
    {
      label: 'esc',
      size: 1.4,
      keyCode: 27,
      location: 0
    },
    {
      label: 'F1',
      size: 1,
      keyCode: 112,
      location: 0
    },
    {
      label: 'F2',
      size: 1,
      keyCode: 113,
      location: 0
    },
    {
      label: 'F3',
      size: 1,
      keyCode: 114,
      location: 0
    },
    {
      label: 'F4',
      size: 1,
      keyCode: 115,
      location: 0
    },
    {
      label: 'F5',
      size: 1,
      keyCode: 116,
      location: 0
    },
    {
      label: 'F6',
      size: 1,
      keyCode: 117,
      location: 0
    },
    {
      label: 'F7',
      size: 1,
      keyCode: 118,
      location: 0
    },
    {
      label: 'F8',
      size: 1,
      keyCode: 119,
      location: 0
    },
    {
      label: 'F9',
      size: 1,
      keyCode: 120,
      location: 0
    },
    {
      label: 'F10',
      size: 1,
      keyCode: 121,
      location: 0
    },
    {
      label: 'F11',
      size: 1,
      keyCode: 122,
      location: 0
    },
    {
      label: 'F12',
      size: 1,
      keyCode: 123,
      location: 0
    }
  ],
  // numeric keys
  [
    {
      label: '`',
      size: 1,
      keyCode: 192,
      location: 0
    },
    {
      label: '1',
      size: 1,
      keyCode: 49,
      location: 0
    },
    {
      label: '2',
      size: 1,
      keyCode: 50,
      location: 0
    },
    {
      label: '3',
      size: 1,
      keyCode: 51,
      location: 0
    },
    {
      label: '4',
      size: 1,
      keyCode: 52,
      location: 0
    },
    {
      label: '5',
      size: 1,
      keyCode: 53,
      location: 0
    },
    {
      label: '6',
      size: 1,
      keyCode: 54,
      location: 0
    },
    {
      label: '7',
      size: 1,
      keyCode: 55,
      location: 0
    },
    {
      label: '8',
      size: 1,
      keyCode: 56,
      location: 0
    },
    {
      label: '9',
      size: 1,
      keyCode: 57,
      location: 0
    },
    {
      label: '0',
      size: 1,
      keyCode: 48,
      location: 0
    },
    {
      label: '-',
      size: 1,
      keyCode: 173,
      location: 0
    },
    {
      label: '=',
      size: 1,
      keyCode: 61,
      location: 0
    },
    {
      label: 'delete',
      size: 1.7,
      keyCode: 8,
      location: 0
    },
  ],
  // qwerty
  [
    {
      label: 'tab',
      size: 1.6,
      keyCode: 9,
      location: 0
    },
    {
      label: 'q',
      size: 1,
      keyCode: 81,
      location: 0
    },
    {
      label: 'w',
      size: 1,
      keyCode: 87,
      location: 0
    },
    {
      label: 'e',
      size: 1,
      keyCode: 69,
      location: 0
    },
    {
      label: 'r',
      size: 1,
      keyCode: 82,
      location: 0
    },
    {
      label: 't',
      size: 1,
      keyCode: 84,
      location: 0
    },
    {
      label: 'y',
      size: 1,
      keyCode: 89,
      location: 0
    },
    {
      label: 'u',
      size: 1,
      keyCode: 85,
      location: 0
    },
    {
      label: 'i',
      size: 1,
      keyCode: 73,
      location: 0
    },
    {
      label: 'o',
      size: 1,
      keyCode: 79,
      location: 0
    },
    {
      label: 'p',
      size: 1,
      keyCode: 80,
      location: 0
    },
    {
      label: '[',
      size: 1,
      keyCode: 219,
      location: 0
    },
    {
      label: ']',
      size: 1,
      keyCode: 221,
      location: 0
    },
    {
      label: '\\',
      size: 1,
      keyCode: 220,
      location: 0
    },
  ],
  // home row
  [
    {
      label: 'caps lock',
      size: 1.9,
      keyCode: 224,
      location: 1
    },
    {
      label: 'a',
      size: 1,
      keyCode: 65,
      location: 0
    },
    {
      label: 's',
      size: 1,
      keyCode: 83,
      location: 0
    },
    {
      label: 'd',
      size: 1,
      keyCode: 68,
      location: 0
    },
    {
      label: 'f',
      size: 1,
      keyCode: 70,
      location: 0
    },
    {
      label: 'g',
      size: 1,
      keyCode: 71,
      location: 0
    },
    {
      label: 'h',
      size: 1,
      keyCode: 72,
      location: 0
    },
    {
      label: 'j',
      size: 1,
      keyCode: 74,
      location: 0
    },
    {
      label: 'k',
      size: 1,
      keyCode: 75,
      location: 0
    },
    {
      label: 'l',
      size: 1,
      keyCode: 76,
      location: 0
    },
    {
      label: ';',
      size: 1,
      keyCode: 59,
      location: 0
    },
    {
      label: `'`,
      size: 1,
      keyCode: 222,
      location: 0
    },
    {
      label: 'return',
      size: 2.2,
      keyCode: 13,
      location: 0
    },
  ],
  // zxcvb
  [
    {
      label: 'shift',
      size: 2.25,
      keyCode: 16,
      location: 1
    },
    {
      label: 'z',
      size: 1,
      keyCode: 90,
      location: 0
    },
    {
      label: 'x',
      size: 1,
      keyCode: 88,
      location: 0
    },
    {
      label: 'c',
      size: 1,
      keyCode: 67,
      location: 0
    },
    {
      label: 'v',
      size: 1,
      keyCode: 86,
      location: 0
    },
    {
      label: 'b',
      size: 1,
      keyCode: 66,
      location: 0
    },
    {
      label: 'n',
      size: 1,
      keyCode: 78,
      location: 0
    },
    {
      label: 'm',
      size: 1,
      keyCode: 77,
      location: 0
    },
    {
      label: ',',
      size: 1,
      keyCode: 188,
      location: 0
    },
    {
      label: '.',
      size: 1,
      keyCode: 190,
      location: 0
    },
    {
      label: 'shift',
      size: 2.3,
      keyCode: 16,
      location: 2
    },
  ],
  // bottom row
  [
    {
      label: 'fn',
      size: .8,
      keyCode: null,
      location: 0
    },
    {
      label: 'control',
      size: .8,
      keyCode: 17,
      location: 1
    },
    {
      label: 'option',
      size: 1,
      keyCode: 18,
      location: 1
    },
    {
      label: 'command',
      size: 1.2,
      keyCode: 224,
      location: 1
    },
    {
      label: '',
      size: 6.5,
      keyCode: 32,
      location: 0
    },
    {
      label: 'command',
      size: 1.2,
      keyCode: 224,
      location: 2
    },
    {
      label: 'option',
      size: 1,
      keyCode: 18,
      location: 2
    },
    {
      label: '◀',
      size: .8,
      keyCode: 37,
      location: 0
    },
    {
      label: '▲',
      size: .4,
      keyCode: 38,
      location: 0
    },
    {
      label: '▼',
      size: .4,
      keyCode: 40,
      location: 0
    },
    {
      label: '▶',
      size: .8,
      keyCode: 39,
      location: 0
    },
  ]
]