class Validator_Service {
  isUndefined=(value: any)=> {
    try {
      if (value === undefined || value ==''|| value==null) {
        throw new Error(`is undefined !`);
      }
    } catch (exception) {
      throw exception;
    }
  }
}
module.exports = new Validator_Service;