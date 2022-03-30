class Request {
    constructor() {
        this.xhr = new XMLHttpRequest();

    }
    get(url) {

        this.xhr.open("GET", url);


        this.xhr.onload = () => {
            if (this.xhr.status === 200) {
                console.log(this.xhr.responseText);
            } else {
                callback("Herhangi bir hata oluştu", null)
            }


        }

        this.xhr.send();
    }

    delete(url, callback) {
        this.xhr.open("DELETE", url);
        this.xhr.setRequestHeader("Content-Type", "application/json")
        this.xhr.onload = () => {
            if (this.xhr.status == 200) {
                callback(null, "Veri Silme İşlemi Başarılı")
            } else {
                callback("Hata oluştu", "Veri silinemedi")
            }
        }

        this.xhr.send()
    }




}
const request = new Request();

// request.get("https://jsonplaceholder.typicode.com/albums/")

// request.post("https://jsonplaceholder.typicode.com/albums", { userId: 2, title: "Thriller" }, function(err, album) {
//     if (err === null) {
//         console.log(album)
//     } else {
//         console.log(err)
//     }

// })
// request.put("https://jsonplaceholder.typicode.com/albums/10", { userId: 134, title: "Batuhan List" }, function(err, album) {
//     if (err === null) {
//         console.log(album)
//     } else {
//         console.log(err)
//     }

// })

request.delete("https://jsonplaceholder.typicode.com/albums/10", function(err, response) {
    if (err === null) {
        // Başarılı
        console.log(response);
    } else {
        // Hata
        console.log(err);
    }

});