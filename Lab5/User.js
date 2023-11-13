module.exports = class User {
    constructor(email, password, name, group, phone, address) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.group = group;
        this.phone =  phone;
        this.address = address;
        this.isAdmin = false;
    }
}