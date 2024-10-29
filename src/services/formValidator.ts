class formValidator {

    static checkEmail(email: string): boolean {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailPattern.test(email)
        return  isValid
    }
}

export default formValidator