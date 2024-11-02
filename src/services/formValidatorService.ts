class formValidatorService {

    static checkEmail(email: string): boolean {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailPattern.test(email)
        return  isValid
    }

    static checkFullname(fullname: string) {
        const fullNamePattern = /^[a-zA-Z]+ [a-zA-Z]+$/
        const isValid = fullNamePattern.test(fullname);
        return isValid;
    }
}

export default formValidatorService