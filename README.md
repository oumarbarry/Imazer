# IMAZER

<b>

`A WebAssembly Vue App Prototype (that converts an image to its grayscale).`

<br>

### Tools:
- For the Web App:
    - [Vue 3](https://vuejs.org), [Vite 3](https://github.com/vitejs/vite), [TypeScript](https://www.typescriptlang.org)
    - [UnoCSS](https://github.com/unocss/unocss#unocss) : the instant on-demand Atomic CSS engine
    - [vite-plugin-rsw](https://github.com/rwasm/vite-plugin-rsw) : the wasm-pack plugin for Vite

<b>

- And for the Rust WebAssembly Crate:
    - [wasm-bindgen](https://crates.io/crates/wasm-bindgen), [web-sys](https://crates.io/crates/web-sys), [base64](https://crates.io/crates/base64) & [image](https://crates.io/crates/image) crates
    - [wasm-pack](https://github.com/rustwasm/wasm-pack) : “your favorite rust -> wasm workflow tool”
    - [rsw](https://github.com/rwasm/rsw-rs) : a command-line tool for automatically rebuilding local changes, based on the `wasm-pack` implementation
