function encryptText() {
    const plaintext = document.getElementById('plaintext').value;
    const secretKey = document.getElementById('secretKey').value;

    if (!plaintext || !secretKey) {
        alert('Please enter both plaintext and secret key');
        return;
    }

    const ciphertext = CryptoJS.AES.encrypt(plaintext, secretKey).toString();
    document.getElementById('result').value = ciphertext;
}

function decryptText() {
    const ciphertext = document.getElementById('result').value;
    const secretKey = document.getElementById('secretKey').value;

    if (!ciphertext || !secretKey) {
        alert('Please enter ciphertext and secret key');
        return;
    }

    try {
        const decryptedText = CryptoJS.AES.decrypt(ciphertext, secretKey).toString(CryptoJS.enc.Utf8);
        document.getElementById('result').value = decryptedText;
    } catch (error) {
        alert('Decryption failed. Check your secret key.');
    }
}
