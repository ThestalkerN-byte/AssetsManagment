'use client '
import React, { ChangeEvent } from 'react'

const GeneralInputs = (setState: any) => {
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setState(e.target.value)
    }
    return (
        <>
            <div>input 1</div>
            <div>input 2</div>
            <div>input 3</div>

        </>

    )
}

export default GeneralInputs