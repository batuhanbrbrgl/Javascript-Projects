class Github {
    constructor() {
        this.url = "https://api.github.com/users/";
    }
    async githubDatagit(username) {
        const kullaniciyaGit = await fetch(this.url + username)
        const kullanicirepo = await fetch(this.url + username + "/repos")

        const userdata = await kullaniciyaGit.json()
        const repodata = await kullanicirepo.json()

        return {
            user: userdata,
            repo: repodata
        }
    }
}