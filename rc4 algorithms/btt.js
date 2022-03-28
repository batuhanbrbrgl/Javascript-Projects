function RC4(key) {
    Keystream = PRGA(KSA(key))
    return Keystream
}

/*
 * KSA: Key-scheduling algorithm
 * @param string key - secret key for encryption/decryption
 * @return int array - Array of size 256 with values between 0-255
 */
function KSA(key) {
    key = string_to_byte_array(key)

    let S = [] //state array
    for (let i = 0; i < 256; i++) { S[i] = i } //0-255

    j = 0 // pointer in array s
    for (let i = 0; i < 256; i++) {
        j = (j + S[i] + key[i % key.length]) % 256;
        swap(S, i, j)
    }
    return S
}

/*
 * PRGA: Pseudo-random generation algorithm
 * @param Array S - Output of KSA, functions as secret internal state
 * @return int Generator - Generates values in the range between 0-255 (0 to 2^8). 
 */
function* PRGA(S) {
    i = 0
    j = 0
    while (true) {
        i = (i + 1) % 256
        j = (j + S[i]) % 256
        swap(S, i, j)
        yield S[(S[i] + S[j]) % 256]
    }
}


/*
 * String to Bytes[]. Transforms each char of the string to its decimal ASCII value
 * @param string str - text to transform
 * @return array - array of size str.length
 */
function string_to_byte_array(str) {
    arr = [] //key as array
    for (let i = 0; i < str.length; i++) {
        arr[i] = (str.charAt(i).charCodeAt()); //convert character to decimal ascii values
    }
    return arr
}

/*
 * Swap. swapps values at positions i and j of array S. 
 * @param array s - array gets modified
 * @param int i - pointer in s
 * @param int j - pointer in s
 */
function swap(s, i, j) {
    x = s[i];
    s[i] = s[j];
    s[j] = x;
}


//Encryption example, using generators. 
//test vector from https://en.wikipedia.org/wiki/RC4#Test_vectors 
function* encrypt(generator, text) {
    plaintext = string_to_byte_array(text)
    for (let i = 0; i < plaintext.length; i++) {
        yield(plaintext[i] ^ generator.next().value)
    };
}

//expected output in hex
//BB F3 16 E8 D9 40 AF 0A D3
KS = RC4("Key")
cipher = encrypt(KS, "batuhan")

//test Key, Plaintext
generator = cipher.next()
let ciphertext = []


while (!generator.done) {
    ciphertext.push(generator.value.toString(16))
    generator = cipher.next()
}


console.log(ciphertext)