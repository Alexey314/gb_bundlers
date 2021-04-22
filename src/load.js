"use strict";

export default function loadScript(url, callback) {
    let _url = url;

    if (typeof url == "function"){
        _url = url();
    }

    const scriptElColl = document.getElementsByTagName("script");

    const isAlreadyLoaded = (url) => {
        for (let i=0; i < scriptElColl.length; i++){
            const script = scriptElColl.item(i);
            if (script.src.endsWith(url.replace(/^\./,""))) {
                return true;
            }
        }
        return false;
    };

    const _load = (url, cb) => {
        if (isAlreadyLoaded(url)) {
            cb();
        }
        else {
            const element = document.createElement("script");
            element.type = "text/javascript";
            element.src = url;
            element.onload = cb;
            document.body.appendChild(element);
        }
    };

    if (Array.isArray(_url)){
        let loaded = 0;
        const chainedLoad = ()=>{
            // console.log("loaded: ", loaded, " of ", _url.length);
            if (loaded == _url.length){
                callback();
            }
            else {
                _load(_url[loaded], () => {
                    ++loaded;
                    chainedLoad();
                });
            }
        };
        chainedLoad();
    }
    else if ( _url ) {
        _load(_url, callback);
    }
    else {
        callback();
    }
}