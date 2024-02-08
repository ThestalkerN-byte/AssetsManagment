import React from 'react'
import Line from '../Line/Line'
import Trafo from '../Trafo/Trafo'
import Substation from '../Substation/Substation'

const Managment = ({ typeAsset }: { typeAsset: string }) => {
  const handlerValidate = (fieldsRequired: string[], form: { [key: string]: string }) => {
    let isValid = false;
    for (let field = 0; field < fieldsRequired.length; field++) {
      console.log(form[fieldsRequired[field]], 'value');
      if (!form[fieldsRequired[field]]) {
        isValid = false;
        break;
      } else {
        console.log('entro al else ');
        isValid = true;
      }
    }
    return isValid;
  }
  const handlerManagmentForm = () => {
    type Form = {
      [key: string]: JSX.Element
    }
    const forms: Form = {
      '001': <Line handlerValidate={handlerValidate} />,
      '002': <Trafo handlerValidate={handlerValidate} />,
      '003': <Substation handlerValidate={handlerValidate} />
    }
    return forms[typeAsset]
  }
  console.log('render managment');

  return (
    <>
      {handlerManagmentForm()}
    </>
  )
}

export default Managment