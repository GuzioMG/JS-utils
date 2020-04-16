//Extracted from: https://github.com/travist/jsencrypt/blob/bd3359741beb5b068fff8df74158fe501194a4b9/README.md

//IMPORTANT!!!!!!!!! YOU'LL NEED A https://github.com/travist/jsencrypt LIBRARY INSTALLED FOR THIS TO WORK!!!!!!
//This is basically a wrapper of that library, where you can run one function to encrypt/decrypt/sign/verify instead of creating an object, etc.

function encrypt(key, text){
    var lib = new JSEncrypt();
    lib.setPublicKey(key);
    return lib.encrypt(text);
}

function decrypt(key, text){
    var lib = new JSEncrypt();
    lib.setPrivateKey(key);
    return lib.decrypt(text);
}