function config (command, values) {
    
    const random = (min, max) => {
        const randInt = min + Math.random() * (max + 1 - min);
        return Math.floor(randInt)
    }

    var type = []
    var changes = []

    if (command==="eat" | command==='есть') {
        type = ['hunger', 'health', 'fatigue']
        changes = [10, random(-2, 2), random(2, 6)]
    } else if (command==="drink" | command==='пить') {
        type = ['thirst', 'health', 'fatigue']
        changes = [10, random(-1, 1), random(1, 5)]
    } else if (command==="work" | command==='работать') {
        type = ['thirst', 'hunger', 'fatigue', 'health']
        changes = [random(-40, -30), random(-20, -10), random(-30, -20), random(15, 25)]
    } else if (command==="sport" | command==='заняться') {
        type = ['health', 'hunger', 'thirst', 'fatigue']
        changes = [random(-10, -1), -1*Math.floor(values[1]*0.2+random(10, 20)),
                -1*Math.ceil(values[2]*0.3+random(10, 25)), random(-15, -10)]
    }

    return {type, changes}
}

export default config