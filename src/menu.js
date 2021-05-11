"use strict";

import loadScript from "./load.js";
export default class Menu {
    constructor(configArray){
        this._items = [];
        for (let i = 0; i < configArray.length; i++){
            const confItem = configArray[i];
            const menuItem = {};
            menuItem.btnEl = document.getElementById(confItem.btnId);
            menuItem.blockEl = document.getElementById(confItem.elementId);
            menuItem.scripts = confItem.scripts;
            let menuItemIndex = i;
            menuItem.btnEl.addEventListener("click", () => loadScript(confItem.scripts, this._btnHandler.bind(this,menuItemIndex)) );
            this._items.push(menuItem);
        }
    }

    _btnHandler(itemIndex) {
        const menuItem = this._items[itemIndex];
        for (let item of this._items){
            item.blockEl.style.display = "none";
        }
        menuItem.blockEl.style.display = "block";
    }
}