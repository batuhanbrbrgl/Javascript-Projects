<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        function hesapla() {
            let uzunKenar = document.querySelector("#uzunKenar").value;
            let kisaKenar = document.querySelector("#kisaKenar").value;
            let sonuc = uzunKenar * kisaKenar;
            console.log(sonuc);
        }

    </script>
</head>

<body>
    <span>Uzun Kenarı Giriniz :</span>
    <input type="number" id="uzunKenar" value=""><br>
    <span>Kısa Kenarı Giriniz :</span>
    <input type="number" id="kisaKenar" value=""><br>
    <button value="hesapla" onclick="hesapla()">Gönder</button>
</body>

</html>