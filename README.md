# JS-utils [![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/GuzioMG/JS-utils) 

## Contributing

Read `.gitpod.yml`, edit code and just submit a PR.

## About

> Exactly what it sounds like.

A set of small tools, that every JS developer may need.

Some Encryption/Decryption functions and `Thread.sleep()` in JS.

## Usage

If you're running it from the browser *(which is an intended use scenario, btw)*, just
download the "bin/c.js" file, which stands for "compressed.js",
put it in the same folder as your script and
add `<script src="./c.js"></script>` to the top of your HTML body.

If you're running it from the `node.js`,
add a Git reference to this library
and add a `require();` to "bin/node.js".

> Troubleshooting tip: If you're using `node.js`, type e.g. `jsu.sleep(200)` instead of just `sleep(200)`.

You may want to add something else, but I'll explain that soon.

## Documentation

### **cryption

We provide 2 functions for that:

Encryption: `encrypt(key, text)`  --> Encrypted text.

Decryption: `decrypt(key, text)`  --> Decrypted text.

> Troubleshooting tip: those are based on https://github.com/travist/jsencrypt library. You'll need it if you want the above functions to work. Instructions in README.md from https://github.com/travist/jsencrypt repo.

### Signing

We provide 2 functions for that:

Sign: `sign(key, text)`  --> Signed text.

Verify: `verify(key, text)`  --> Boolean.

> Troubleshooting tip: those are based on https://github.com/travist/jsencrypt library. You'll need it if you want the above functions to work. Instructions in README.md from https://github.com/travist/jsencrypt repo.

### `Thread.sleep();`

JS doesn't have it. But it doesn't mean, you can't hack your way into it...

Sleep: `sleep(ms)`  --> (void)

> Troubleshooting tip: refer to sleeper.js for more info