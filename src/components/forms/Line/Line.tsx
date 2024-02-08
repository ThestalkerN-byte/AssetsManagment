import React from 'react'
interface Props {
    handlerValidate: (fieldsRequired: string[], form: { [key: string]: string }) => boolean
}
const Line = ({ handlerValidate }: Props) => {
    console.log('render line');

    return (
        <div>Line</div>
    )
}

export default Line