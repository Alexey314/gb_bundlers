export default class Menu {
    constructor(btnId1, elementId1, btnId2, elementId2){
        this._btn1 = document.getElementById(btnId1);
        this._element1 = document.getElementById(elementId1);        
        this._btn1.addEventListener("click", this._btnHandler1.bind(this));


        this._btn2 = document.getElementById(btnId2);
        this._element2 = document.getElementById(elementId2);
        this._btn2.addEventListener("click", this._btnHandler2.bind(this));
    }

    _btnHandler1() {
        this._element2.style.display = "none";
        this._element1.style.display = "block";
    }

    _btnHandler2() {
        this._element1.style.display = "none";
        this._element2.style.display = "block";
    }    
}