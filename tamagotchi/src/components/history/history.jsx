import React from 'react'

function History(props) {
    var log = props.log.split('_')
    return (
        <div>{props.id}) {log[0]}<br/>{log[1]}</div>
    )
}

export default History