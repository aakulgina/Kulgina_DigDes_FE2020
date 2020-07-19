function valueConfig (command, stats) {
    
    var values = []
    var log = ''

    switch(command) {
        case 'есть':
        case 'eat':
            values = [stats.hunger, stats.health, stats.fatigue]
            log = 'Я покушал.'
            break
        case 'пить':
        case 'drink':
            values = [stats.thirst, stats.health, stats.fatigue]
            log = 'Я попил.'
            break
        case 'работать':
        case 'work':
            values = [stats.thirst, stats.hunger, stats.fatigue, stats.health]
            log = 'Люблю работать!'
            break
        case 'упражняться':
        case 'sport':
            values = [stats.health, stats.hunger, stats.thirst, stats.fatigue]
            log = 'Спорт -- это жизнь!'
            break
        default:
            alert(`Тамагочи не знает, что такое "${command}" :( Попробуйте другую команду!`)
    }

    return {values, log}
}

export default valueConfig