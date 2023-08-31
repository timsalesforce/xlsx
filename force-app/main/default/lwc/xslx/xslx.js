import { LightningElement } from "lwc";
import { loadScript } from "lightning/platformResourceLoader";
import XLSXJS from '@salesforce/resourceUrl/XLSXJS';
export default class XSLX extends LightningElement {
  connectedCallback() {
    loadScript(this, XLSXJS).then(() => {
        debugger;
        const utils = window.XLSX.utils;
        console.log(`========= utils is: ${utils}`);
    });
  }
}