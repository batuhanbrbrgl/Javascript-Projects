function RC4(key) {
    Keystream = PSD(KEY(key))
    return Keystream
}


function KEY(key) {
    key = string_to_byte_array(key)

    let S = [] //durum dizisi
    for (let i = 0; i < 256; i++) { S[i] = i } //0-255

    j = 0 // s dizisindeki işaret
    for (let i = 0; i < 256; i++) {
        j = (j + S[i] + key[i % key.length]) % 256;
        swap(S, i, j)
    }
    return S
}


function* PSD(S) {
    i = 0
    j = 0
    while (true) {
        i = (i + 1) % 256
        j = (j + S[i]) % 256
        swap(S, i, j)
        yield S[(S[i] + S[j]) % 256]
    }
}



function string_to_byte_array(str) {
    arr = [] //dizi tanımlanır
    for (let i = 0; i < str.length; i++) {
        arr[i] = (str.charAt(i).charCodeAt()); //Ondalık asci değerlerine dönüştürdük
    }
    return arr
}

/*
 * S dizisindeki i ve j lerin konumlarını değiştirdik
 */
function swap(s, i, j) {
    x = s[i];
    s[i] = s[j];
    s[j] = x;
}




function* sifrele(generator, text) {
    plaintext = string_to_byte_array(text)
    for (let i = 0; i < plaintext.length; i++) {
        yield(plaintext[i] ^ generator.next().value)
    };
}

//hex cinsinden beklenen çıktı
//BB F3 16 E8 D9 40 AF 0A D3
KS = RC4("Key")
cipher = sifrele(KS, "1234")

//test Key, Plaintext
generator = cipher.next()
let ciphertext = []


while (!generator.done) {
    ciphertext.push(generator.value.toString(16))
    generator = cipher.next()
}


console.log(ciphertext)