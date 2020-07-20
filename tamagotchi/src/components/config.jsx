const random = (min, max) => {
    const randInt = min + Math.random() * (max + 1 - min)
    return Math.floor(randInt)
}

function config (command, values) {

    var type = []
    var changes = []

    switch(command) {
        case 'есть':
        case 'eat':
            type = ['hunger', 'health', 'fatigue']
            changes = [10, random(-2, 2), random(2, 6)]
            break
        case 'пить':
        case 'drink':
            type = ['thirst', 'health', 'fatigue']
            changes = [10, random(-1, 1), random(1, 5)]
            break
        case 'работать':
        case 'work':
            type = ['thirst', 'hunger', 'fatigue', 'health']
            changes = [random(-40, -30), random(-20, -10), random(-30, -20), random(15, 25)]
            break
        case 'упражняться':
        case 'sport':
            type = ['health', 'hunger', 'thirst', 'fatigue']
            changes = [random(-10, -1), -1*Math.floor(values[1]*0.2+random(10, 20)),
                -1*Math.ceil(values[2]*0.3+random(10, 25)), random(-15, -10)]
            break
        default: ; // Невыполнимые команды ловятся в valueConfig, поэтому тут просто пустой дефолт
    }

    return {type, changes}
}

export {config, random}