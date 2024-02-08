import React from 'react'
import Line from '../Line/Line'
import Trafo from '../Trafo/Trafo'
import Substation from '../Substation/Substation'

const Managment = ({ typeAsset }: { typeAsset: string }) => {
  const handlerValidate = (fieldsRequired: string[], form: { [key: string]: string }) => {
    let isValid = false;
    for (let field = 0; field < fieldsRequired.length; field++) {
      if (!form[fieldsRequired[field]]) {
        isValid = false;
        break;
      } else {
        isValid = true;
      }
    }
    return isValid;
  }
  const asset = {
    name: 'lucas'
  }

  const handlerManagmentForm = (dependencies: boolean = false) => {
    type Form = {
      [key: string]: JSX.Element
    }
    const forms: Form = {
      '001': <Line handlerValidate={handlerValidate} onSubmit={onSubmit} asset={asset} dependencies={dependencies} />,
      '002': <Trafo handlerValidate={handlerValidate} dependencies={dependencies} />,
      '003': <Substation handlerValidate={handlerValidate} dependencies={dependencies} />
    }
    return forms[typeAsset]
  }
  const onSubmit = () => {

  }
  return (
    <>
      <div className='general'>
        {handlerManagmentForm()}
      </div>
      {/* <div className='dependencies'>
        {handlerManagmentForm(true)}
      </div> */}
    </>
  )
}

export default Managment