import React from 'react'
import GeneralInputs from '../GeneralInputs/GeneralInputs';
interface Props {
    handlerValidate: (fieldsRequired: string[], form: { [key: string]: string }) => boolean
    dependencies: boolean
}
const Substation = ({ handlerValidate, dependencies }: Props) => {
    console.log('render sub');

    return (
        <>
            {
                !dependencies ?
                    <>
                        <GeneralInputs />
                        <div>Substation</div>
                    </>
                    :
                    <div>
                        dependencies sub
                    </div>
            }
        </>
    )
}


export default Substation