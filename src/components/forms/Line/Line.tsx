'use client'
import React, { useState, ChangeEvent, useEffect } from 'react'
import GeneralInputs from '../GeneralInputs/GeneralInputs'
interface Props {
    handlerValidate: (fieldsRequired: string[], form: { [key: string]: string }) => boolean
    onSubmit: () => void
    asset: any
    dependencies: boolean
}
const Line = ({ handlerValidate, onSubmit, asset, dependencies }: Props) => {

    const [formData, setFormData] = useState({
        name: ''
    })
    const [dependenciesForm, setDependencies] = useState({

    })

    useEffect(() => {
        if (asset) {
            setFormData(asset)
        }
    }, [asset])

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setFormData((prevstate) => ({
            ...prevstate,
            [e.target.name]: e.target.value
        }))
    }
    handlerValidate(['name', 'subAssetName'], { ...formData, ...dependenciesForm })
    return (
        <div>
            {
                !dependencies ?
                    <>
                        <GeneralInputs />
                        <form>
                            <input type="text" value={formData.name} />
                        </form>
                    </>
                    : <div>dependencies line</div>

            }
        </div>
    )
}

export default Line