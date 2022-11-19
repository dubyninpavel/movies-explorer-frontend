import { useState, useCallback } from 'react';
import { validationMessageTextFormatName, validationMessageTextFormatEmail } from '../constants/constants';

function useFormInputs(valueInputDefault) {
  const [valueInput, setValueInput] = useState({ search: valueInputDefault });

  function handleChangeInputs(evt) {
    const { name, value } = evt.target;
    setValueInput((previousValues) => ({
      ...previousValues,
      [name]: value,
    }));
  }

  return [
    valueInput, handleChangeInputs,
  ];
}

function useFormWithValidation() {
  const [valueInput, setValueInput] = useState({});
  const [errorsInput, setErrorsInput] = useState({});
  const [isValid, setIsValid] = useState(false);

  function handleChangeInputs(evt) {
    const { name, value } = evt.target;

    setValueInput((previousValues) => ({
      ...previousValues,
      [name]: value,
    }));

    setErrorsInput((previousValues) => ({
      ...previousValues,
      [name]: `${evt.target.validationMessage} ${evt.target.validationMessage === 'Введите данные в указанном формате.' ? (name === 'email' && validationMessageTextFormatEmail) || (name === 'name' && validationMessageTextFormatName) : ''}`,
    }));

    setIsValid(evt.target.closest('form').checkValidity());
  }

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValueInput(newValues);
      setErrorsInput(newErrors);
      setIsValid(newIsValid);
    },
    [setValueInput, setErrorsInput, setIsValid],
  );

  return [
    valueInput, handleChangeInputs, errorsInput, isValid, resetForm, setValueInput,
  ];
}

export {
  useFormInputs,
  useFormWithValidation,
};
