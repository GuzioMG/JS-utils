/*Paste c.js content here:*/ function encrypt(e,n){var t=new JSEncrypt;return t.setPublicKey(e),t.encrypt(n)}function decrypt(e,n){var t=new JSEncrypt;return t.setPrivateKey(e),t.decrypt(n)}function sign(e,n){var t=new JSEncrypt;return t.setPrivateKey(e),t.sign(n)}function verify(e,n){var t=new JSEncrypt;return t.setPublicKey(e),t.verify(n)}function sleep(e){const n=Date.now();let t=null;do{t=Date.now()}while(t-n<e)}

module.exports = {
    encrypt,
    decrypt,
    sign,
    verify,
    sleep
}