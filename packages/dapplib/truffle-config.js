require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture strategy dash spice cluster gown light army giant'; 
let testAccounts = [
"0x5c96d28b8aa994fba9abf6eaf9bd0e71b872b156cab46c90ea863f1ea98ffa02",
"0xf85c60c7fd75643df0c7b2f69077af6e5baa6e73ad3e884ddde3ffce61d99d61",
"0xdf85d3e4f98f2e7e25b85cbcd88b661584aa8c513fa4788d0a2a8ecfbddc38c6",
"0x88f9c67dce577896f4c8bbe63332ab36316ca504cabfe451185b66dbb3e05a41",
"0x10d878d356bbe7f1cbefacb7425561ebeb44798d88f6997ef9d8b231c4002685",
"0xf4893cca54e536a654a82f5578574f6a25da976464f2212a34926ab9f0bbfb80",
"0x3c9fa91740913e35b6dcda8aa9e33879f1faeb3d387ed5b85e18b7d991318473",
"0x641b366a8f0c3dac3b49b68c1c4cbab0f23974b33d963de22ef58c44ce6203e3",
"0x4ca0846c83cb9abd4937161d2d727430aaa47e616da50950774255617d0fe627",
"0xcda4310b46ad642eef02b206aeb6fe8d97bcaf06babaf4620964a243398e8f97"
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
            version: '^0.5.11'
        }
    }
};
