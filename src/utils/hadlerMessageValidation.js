function HadlerMessageValidation(res) {
  if (res.message) {
    let errMessage = res.message;
    try {
      if (res.validation) {
        errMessage = `${res.message}: ${res.validation.body.message}.`;
      }
    } catch (err) {
      return err;
    }
    return { errMessage, bool: true };
  }
  return { errMessage: '', bool: false };
}

export default HadlerMessageValidation;
