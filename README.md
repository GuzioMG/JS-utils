# JS-utils [![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/GuzioMG/JS-utils) 

## Contributing

Read `.gitpod.yml`, edit code and just submit a PR.

## About

> Exactly what it sounds like.

A set of small tools, that every JS developer may need.

Some Encryption/Decryption functions and `Thread.sleep()` in JS.

## Usage

Just add `<script src="https://github.com/GuzioMG/JS-utils/blob/master/bin/c.js"></script>` to the top of your HTML body.

You may want to add something else, but I'll explain that soon.

## Documentation

### **cryption

We provide 2 functions for that:

Encryption: `encrypt(key, text)`  --> Encrypted text.

Decryption: `decrypt(key, text)`  --> Decrypted text.

> Troubleshooting tip: those are based on https://github.com/travist/jsencrypt library. You'll need it if you want the above functions to work. Your best bet is adding `<script src="https://raw.githubusercontent.com/travist/jsencrypt/ea32a5161cfd79218fa30b4c8f661615d21b40a9/bin/jsencrypt.min.js"></script>` to the top of your HTML body and referencing to any jQuery library (more on https://github.com/travist/jsencrypt).

### Signing

We provide 2 functions for that:

Sign: `sign(key, text)`  --> Signed text.

Verify: `verify(key, text)`  --> Boolean.

> Troubleshooting tip: those are based on https://github.com/travist/jsencrypt library. You'll need it if you want the above functions to work. Your best bet is adding `<script src="https://raw.githubusercontent.com/travist/jsencrypt/ea32a5161cfd79218fa30b4c8f661615d21b40a9/bin/jsencrypt.min.js"></script>` to the top of your HTML body and referencing to any jQuery library (more on https://github.com/travist/jsencrypt).

### `Thread.sleep();`

JS doesn't have it. But it doesn't mean, you can't hack your way into it...

Sleep: `sleep(ms)`  --> (void)
