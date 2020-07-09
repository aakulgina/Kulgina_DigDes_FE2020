function valueConfig (command, stats) {
    
    var values = []

    if (command==='есть') {
        values = [stats.hunger, stats.health, stats.fatigue]
    } else if (command==='пить') {
        values = [stats.thirst, stats.health, stats.fatigue]
    } else if (command==='работать' | command==='work') {
        values = [stats.thirst, stats.hunger, stats.fatigue, stats.health]
    } else if (command==='заняться') {
        values = [stats.health, stats.hunger, stats.thirst, stats.fatigue]
    }

    return {values}
}

export default valueConfig