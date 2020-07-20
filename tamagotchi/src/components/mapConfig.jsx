const buttonsDisabled = [
    {name: 'eat', child: 'ЕСТЬ'},
    {name: 'drink', child: 'ПИТЬ'},
    {name: 'sport', child: 'ЗАНЯТЬСЯ СПОРТОМ'},
    {name: 'work', child: 'РАБОТАТЬ'}
]

const buttonsEnabled = [
    {name: 'eat', command: 'есть', child: 'ЕСТЬ'},
    {name: 'drink', command: 'пить', child: 'ПИТЬ'},
    {name: 'sport', command: 'упражняться', child: 'ЗАНЯТЬСЯ СПОРТОМ'},
    {name: 'work', command: 'работать', child: 'РАБОТАТЬ'}
]

const statsOngoing = [
    {name: 'health', child: 'Здоровье'},
    {name: 'thirst', child: 'Жажда'},
    {name: 'hunger', child: 'Голод'},
    {name: 'fatigue', child: 'Усталость'}
]

export {buttonsDisabled, buttonsEnabled, statsOngoing}