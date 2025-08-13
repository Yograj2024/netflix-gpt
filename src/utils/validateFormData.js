export  const isFormDataValid = (fullName, email, password, confirmPassword, imgURL, isLoginForm) => {
  
    const isEmailValid          =    /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid       =    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isFullNameValid       =    fullName.trim().length >= 3; // at least 3 characters
    const isConfirmPassValid    =    password === confirmPassword;
    const isImgUrlValid         =    !imgURL || (imgURL && /\.(jpe?g|png|gif)$/i.test(imgURL));

    if(!isLoginForm){
        if(!isFullNameValid)     return "fullName"
        if(!isConfirmPassValid)  return "confirmPassword"
        if(!isImgUrlValid)       return "imgURL"
    }
    
    if(!isEmailValid)     return "email"
    if(!isPasswordValid)  return "password"

    return null;
}