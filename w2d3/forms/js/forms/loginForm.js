class LoginForm {
    constructor(email, password, url, checkbox) {
        this.email = email;
        this.password = password;
        this.url = url;
        this.checkbox = checkbox;
    };

    validate() {
        return isEmpty(this.email) || isEmpty(this.password) || isEmpty(this.url) ? false : true;
    }

    submit() {
        console.log(`Email: ${this.email} | Password:${this.password} | URL: ${this.url} | Check me out: ${this.checkbox}`);
    }
}

function isEmpty(value) {
    return undefined === value || '' === value;
}