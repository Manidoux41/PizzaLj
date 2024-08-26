export const validateEmail = (email: string): boolean => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };
  
  export const validatePassword = (password: string): boolean => {
    // Au moins 8 caractères, une majuscule, une minuscule et un chiffre
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return re.test(password);
  };
  
  export const validatePhoneNumber = (phoneNumber: string): boolean => {
    // Format: +33 X XX XX XX XX (numéro français)
    const re = /^\+33\s[1-9]\s\d{2}\s\d{2}\s\d{2}\s\d{2}$/;
    return re.test(phoneNumber);
  };