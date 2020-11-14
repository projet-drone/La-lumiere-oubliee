export default class Node {
    origin = { x: 0, y: 0 }
    isFocused = false;

    constructor(top, left, radius, el) {

        this.circle = el.querySelector('.circle');
        this.el = el;
        this.position = this.circle.getBoundingClientRect()

        this.radius = radius;
        this.origin = this.calcOrigin();

        this.isActive = false;
        this.inventor = el.getAttribute('inventor');

        this.title = "";
        this.type = "";
        this.id = this.circle.id;
        this.details = document.querySelector(`#${this.id}Details`);

        this.isEnteredOnce = true;

    }

    get orign() {
        return this.calcOrigin();
    }

    calcOrigin() {
        let position = this.circle.getBoundingClientRect()

        let oX = position.left + this.radius / 2;
        let oY = position.top + this.radius / 2;

        return { x: oX, y: oY }
    }

    setTitle() {
        // console.log(this.details.getAttribute('data-title'));
        if (this.details) {
            this.el.querySelector('.text-main').innerHTML = this.details.getAttribute('data-title')
            this.el.querySelector('.text-sub').innerHTML = this.details.getAttribute('data-subtitle')
        }

    }

    selectByInventor(inventor) {
        if (inventor == this.inventor) {
            this.isActive = true;
            this.el.classList.add('active')
        }
    }
}


