function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},l={},o={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in l)return l[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return l[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=n);var r=n("eWCmQ");const u={formEll:document.querySelector(".form"),delayEll:document.querySelector('[name="delay" ]'),stepEll:document.querySelector('[name="step"]'),amountEll:document.querySelector('[name="amount"]'),btnEll:document.querySelector('[type="submit"]')};u.formEll.addEventListener("submit",(t=>{t.preventDefault();const l=Number(u.amountEll.value);let o=Number(u.delayEll.value);const n=Number(u.stepEll.value);u.formEll.reset();for(let t=1;t<=l;t+=1)i(t,o).then((({position:t,delay:l})=>{e(r).Notify.success(`✅ Fulfilled promise ${t} in ${l}ms`)})).catch((({position:t,delay:l})=>{e(r).Notify.failure(`❌ Rejected promise ${t} in ${l}ms`)})),o+=n}));const i=(e,t)=>{const l=Math.random()>.3;return new Promise(((o,n)=>{setTimeout((()=>{l?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))};
//# sourceMappingURL=03-promises.1101b5b2.js.map