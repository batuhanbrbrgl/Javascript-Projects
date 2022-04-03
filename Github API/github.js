class Github {
    constructor() {
        this.url = "http://"
    }
    async githubDatagit(username) {
        const kullaniciyaGit = await fetch(this.url + username)
        const kullanicirepo = await fetch(this.url + username + "/repos")
    }
}