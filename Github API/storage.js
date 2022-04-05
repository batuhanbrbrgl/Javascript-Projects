class Storage {

    static arananlarıDepodanAl() {

        let users

        if (localStorage.getItem("searched") === null) {
            users = []

        } else {
            users = JSON.parse(localStorage.getItem("searched"));
        }
        return users

    }
    static arananKullanıcıyıekle(username) {
        let users = this.arananlarıDepodanAl();

        if (users.indexOf(username) === -1) {
            users.push(username);

        }
        localStorage.setItem("searched", JSON.stringify(users))

    }

    static arananKullanıcılarıSil() {
        localStorage.removeItem("searched")

    }
}