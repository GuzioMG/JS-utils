//Put all files, you've edited, below. Then, use a JS minimizer tool to "compile" the script and put your results in "c.sj" file.
//Please, maintain 4-enter space between each file.




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




//Extracted from: https://github.com/travist/jsencrypt/blob/bd3359741beb5b068fff8df74158fe501194a4b9/README.md

//IMPORTANT!!!!!!!!! YOU'LL NEED A https://github.com/travist/jsencrypt LIBRARY INSTALLED FOR THIS TO WORK!!!!!!
//This is basically a wrapper of that library, where you can run one function to encrypt/decrypt/sign/verify instead of creating an object, etc.

function sign(key, text){
    var lib = new JSEncrypt();
    lib.setPrivateKey(key);
    return lib.sign(text);
}

function verify(key, text){
    var lib = new JSEncrypt();
    lib.setPublicKey(key);
    return lib.verify(text);
}




//Extracted from: https://www.sitepoint.com/delay-sleep-pause-wait/

//WARNING!!! CALLING THIS FUNCTION IS VERY UNSAFE, AS IT BLOCKS THE THREAD AND MAY POTENTIALLY LEAD EVERYTHING TO CRASH!!!
//If you don't know you're doing, use an alternative method described at https://www.sitepoint.com/delay-sleep-pause-wait/ below this one.

function sleep(ms) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < ms);
}