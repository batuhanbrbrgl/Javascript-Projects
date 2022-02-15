function renkdegis(renk) {
    var secim= confirm("Arka plan rengini değiştirmek istiyor musunuz ?");
    if(secim==false)
    return;
    if(renk=='SEC'){
        var renk_adi=prompt("Bir renk giriniz","ORANGE");
        document.body.style.background=renk_adi;
    }
        else{
            document.body.style.background=renk;
        }
    }
