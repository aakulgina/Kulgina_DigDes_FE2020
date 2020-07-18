function valueConfig (command, stats) {
    
    var values = []

    switch(command) {
        case 'есть':
        case 'eat':
            values = [stats.hunger, stats.health, stats.fatigue]
            break
        case 'пить':
        case 'drink':
            values = [stats.thirst, stats.health, stats.fatigue]
            break
        case 'работать':
        case 'work':
            values = [stats.thirst, stats.hunger, stats.fatigue, stats.health]
            break
        case 'упражняться':
        case 'sport':
            values = [stats.health, stats.hunger, stats.thirst, stats.fatigue]
            break
        default:
            alert(`Тамагочи не знает, что такое "${command}" :( Попробуйте другую команду!`)
    }

    return {values}
}

export default valueConfig