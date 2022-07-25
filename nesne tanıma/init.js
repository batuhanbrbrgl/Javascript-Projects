function setup() {
    let video = document.getElementById("video");
    let canvas = document.getElementById("canvas");
    let pre = document.getElementById("tahminler");
    let model = null;

    async function startCamera() {
        let stream = await navigator.mediaDevices.getUserMedia({ video: true }); //kamera izni isteyelim
        video.srcObject = stream; //<video> tag'i içerisine kaynağımızı kamera olarak tanımladık
        await video.play(); //asenkron olarak kameramızın görüntüsünü bu tag içerisinde görüntüleyelim

        setInterval(() => takeSnapshot(), 1000); //her 1 saniyede bir görüntü çekip canvas'a göndereceğiz
    }

    function takeSnapshot() {
        let context = canvas.getContext("2d"),
            width = video.videoWidth,
            height = video.videoHeight; //canvas'ı videomuzdan çekilen genişlik ve yüksekliğe uygun olarak oluşturuyoruz.

        if (width && height) {
            canvas.width = width;
            canvas.height = height;

            context.drawImage(video, 0, 0, width, height); //canvas içerisine kameradan çekilen görüntüyü işliyoruz.

            classifyImage(); //MobileNet yardımıyla resim sınıflandırması yapılacak
        }
    }

    async function classifyImage() {
        predictions = await model.(canvas); //sınıflandırmalar için kullanılan method
        displayPredictions(predictions); //elde edilen tahminleri gösterecek fonksiyon
    }

    function displayPredictions(predictions) {
        let val = ""; //boş tahmin tanımalaöa

        for (prediction of predictions) {
            let perc = (prediction.probability * 100).toFixed(2); // tanımlanan nesne olasılığını hesaplama
            val += `${perc}% | ${prediction.className}\n`; //olasılığı hesaplanan nesneyi ve olasılık değerini ekleme
        }
        pre.innerHTML = val; //elde edilen değerleri tahminler içerisine yazdırma
    }

    async function main() {
        model = await mobilenet.load();
        await startCamera();
    }
    main();
}