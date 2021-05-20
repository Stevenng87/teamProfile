
class employee {
    constructor(name, id, email, role, officeNumber, github, school) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}

getName(){
    return this.name;
}

getId(){
    return this.id;
}

getEmail(){
    return this.email;
}

getRole(){
    return this.role;
}