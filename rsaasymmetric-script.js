let crypt = new JSEncrypt({default_key_size: 2048});

function generateKeys() {
    crypt.getKey();
    document.getElementById('publicKey').value = crypt.getPublicKey();
    document.getElementById('privateKey').value = crypt.getPrivateKey();
}

function encryptWithPublicKey() {
    const plaintext = document.getElementById('plaintext').value;
    const publicKey = document.getElementById('publicKey').value;

    if (!plaintext || !publicKey) {
        alert('Please generate keys and enter plaintext');
        return;
    }

    crypt.setPublicKey(publicKey);
    const encryptedText = crypt.encrypt(plaintext);
    document.getElementById('result').value = encryptedText;
}

function decryptWithPrivateKey() {
    const encryptedText = document.getElementById('result').value;
    const privateKey = document.getElementById('privateKey').value;

    if (!encryptedText || !privateKey) {
        alert('Please encrypt text first and ensure private key is present');
        return;
    }

    crypt.setPrivateKey(privateKey);
    const decryptedText = crypt.decrypt(encryptedText);
    document.getElementById('result').value = decryptedText;
}

// Generate initial key pair on page load
generateKeys();