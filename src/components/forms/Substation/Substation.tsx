import React from 'react'
interface Props {
    handlerValidate: (fieldsRequired: string[], form: { [key: string]: string }) => boolean
}
const Substation = ({ handlerValidate }: Props) => {
    console.log('render sub');

    return (
        <div>Substation</div>
    )
}

export default Substation