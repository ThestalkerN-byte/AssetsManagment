import React from 'react'
interface Props {
    handlerValidate: (fieldsRequired: string[], form: { [key: string]: string }) => boolean
}
const Trafo = ({ handlerValidate }: Props) => {
    console.log('render trafo');

    return (
        <div>Trafo</div>
    )
}

export default Trafo