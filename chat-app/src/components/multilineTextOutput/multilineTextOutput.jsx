import React from 'react';

const MultilineTextOutput = (props) => {
    const { tag, value } = props;

    return (
        <div className={props.class}>
            {
                value
                    .replace(/(\\n|\n)+/gm, '\n')
                    .split('\n')
                    .filter(Boolean)
                    .map(function (val, index) {
                        return React.createElement(tag, { key: val + index }, val)
                    })
            }
        </div>
    )
}

MultilineTextOutput.defaultProps = {
    tag: 'p',
    value: '',
}

export { MultilineTextOutput };
export default MultilineTextOutput;