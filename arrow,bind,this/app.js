class Request {
    constructor() {
        this.xhr = new XMLHttpRequest();

    }
    get(url) {

        this.xhr.open("GET", url);


        this.xhr.onload = () => {
            if (this.xhr.status === 200) {
                console.log(this.xhr.responseText);
            }


        }

        this.xhr.send();
    }




}
const request = new Request();

request.get("https://jsonplaceholder.typicode.com/albums/")