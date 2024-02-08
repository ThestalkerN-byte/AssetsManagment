import React from 'react'
import GeneralInputs from '../GeneralInputs/GeneralInputs';
interface Props {
    handlerValidate: (fieldsRequired: string[], form: { [key: string]: string }) => boolean
    dependencies: boolean
}
const Trafo = ({ handlerValidate, dependencies }: Props) => {
    console.log('render trafo');

    return (
        <>
            {!dependencies ?
                <>
                    <GeneralInputs />
                    <div>Trafo</div>
                </>
                : <div>dependencies trafo</div>
            }

        </>
    )
}

export default Trafo