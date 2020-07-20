import { random } from './config'

function valueConfig (command, stats) {
    
    var values = []
    var log = ''
    var out = ''

    const outOpts = [
        ['кашу', 'яблоко', 'печеньку', 'бургер'],
        ['чаю', 'кофе', 'воды', 'сидр'],
        ['сходили на работу', 'съездили в командировку', 'сделали все дела', 'спасли мир']
    ]

    let index = random(0, 3)

    switch(command) {
        case 'есть':
        case 'eat':
            values = [stats.hunger, stats.health, stats.fatigue]
            log = 'Я покушал.'
            out = `Вы съели ${outOpts[0][index]}`
            break
        case 'пить':
        case 'drink':
            values = [stats.thirst, stats.health, stats.fatigue]
            log = 'Я попил.'
            out = `Вы выпили ${outOpts[1][index]}`
            break
        case 'работать':
        case 'work':
            values = [stats.thirst, stats.hunger, stats.fatigue, stats.health]
            log = 'Люблю работать!'
            out = `Вы ${outOpts[2][index]}`
            break
        case 'упражняться':
        case 'sport':
            values = [stats.health, stats.hunger, stats.thirst, stats.fatigue]
            log = 'Спорт -- это жизнь!'
            out = `Вы пробежали ${random(1, 10)} км.`
            break
        default:
            log = 'Иногда полезно ничего не делать :)'
            alert(`Тамагочи не знает, что такое "${command}" :( Попробуйте другую команду!`)
    }

    return {values, log, out}
}

export default valueConfig