import Typed from "typed.js";

export default class TypedController {
    /**
     *
     */
    constructor() {
        this.DOM = {
            typed: "#js-typed",
            typedStrings: "#js-typed-strings",
        };

        this.typed = document.querySelector(this.DOM.typed);
        this.typedStrings = document.querySelector(this.DOM.typed);
    }

    init() {
        console.log("TypedController init()");

        if (this.typed !== null) {
            this.initTyped();
        } else {
            console.error(`${this.DOM.typed} does not exist in the DOM!`);
        }
    }

    initTyped() {
        new Typed(this.DOM.typed, {
            stringsElement: this.DOM.typedStrings,
            typeSpeed: 80,
            backSpeed: 40,
            backDelay: 600,
            startDelay: 200,
            cursorChar: "_",
        });
    }
}
