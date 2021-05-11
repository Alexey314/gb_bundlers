"use strict";

// import loadScript from "./load.js";
export default class Menu {
    constructor(configArray){
        this._items = [];
        for (let i = 0; i < configArray.length; i++){
            const confItem = configArray[i];
            const menuItem = {};
            menuItem.name = confItem.name;
            menuItem.btnEl = document.getElementById(confItem.btnId);
            menuItem.blockEl = document.getElementById(confItem.elementId);
            let menuItemIndex = i;
            menuItem.btnEl.addEventListener("click", this._componentLoad.bind(this,menuItemIndex) );
            this._items.push(menuItem);
        }
    }

    _componentLoad(itemIndex){
        switch (this._items[itemIndex].name){
            case "datecalc":
                this._btnHandler(itemIndex);
                break;
            case "timer":
                import("./timer-ui.js").then((module) => {
                    this._btnHandler(itemIndex);
                });
                break;
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