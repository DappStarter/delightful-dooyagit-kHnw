require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom solution mansion creek stick mad good kiwi tattoo security'; 
let testAccounts = [
"0x1197d787fa69867154ba3bc1d7644e0cd293ff1f95922012b447bb76cfc77d50",
"0x05fb115781bab7fd6e943723ca616d78698c856fad24cd9d8a2c4dccd96e5b70",
"0xfe96d020c97062bea80a7e30a92ed790f58937a66bbab401b493587231311108",
"0x6a69585f7e36820cb00540d0429d2091bad1abd5b40703b338c1d15237513281",
"0xca7d74fd8c4f4d8e6638f00d39a00cc5bea4a79260d7771af5a2c5e73bc6f191",
"0x52d97d37110a7a2d390988307344162d3309abb07068f35ffa80a6106db9550b",
"0xb83fb0b489f0bb301dfadac41fa993e8255fa349b42e9546696ae649557ca9a8",
"0x6bf464fe552d015eefe4c17f1f93e1223854717c21ca797191d9172ce9f8e59f",
"0xde3c09c3a9d275ffa3a11127db8fcfe964e851069fa62d8bf4474f7b15976aed",
"0x5c7f2c5c6badbe2236aa843ca2626abd9b7a5799197c7667ba5016bd34f0c1e3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

