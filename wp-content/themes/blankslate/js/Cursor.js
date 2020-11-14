export default class Cursor {
    origin = { x: 0, y: 0 }
    position = { x: 0, y: 0 }
    isLoading = false;

    // collideWith = false
    radius;

    constructor(top, left, radius, el) {

        this.position = { x: left, y: top };
        this.radius = radius;
        this.origin = this.calcOrigin();
        this.el = el;
        this.isActive = false;
        this.isOpen = false;
        this.inventor = ""
    }

    calcOrigin() {
        let oX = this.position.x + this.radius;
        let oY = this.position.y + this.radius;

        return { x: oX, y: oY }
    }

    moveCursor(x, y) {
        if (!this.isOpen) {
            this.el.style.left = x + "px"
            this.el.style.top = y + "px"
            this.position = { x: x, y: y }
            this.origin = this.calcOrigin();
        }
    }

    // Start - Collision logic 
    collisionHandler(nodes) {
        nodes.forEach(node => {
            let result = Math.sqrt(Math.pow(node.origin.x - this.origin.x, 2) + Math.pow(node.origin.y - this.origin.y, 2))

            if (result < node.radius) {

                if (node.isActive && (this.inventor == node.inventor)) {
                    this.isLoading = true;

                    node.el.querySelector('.text').classList.add('active');
                    this.magneted(node)
                    node.isFocused = true;
                    setTimeout(() => {
                        document.querySelector(`#${node.circle.id}Details`).classList.add('open')
                        this.isOpen = true

                    }, 2000);

                } else {
                    node.isFocused = false;
                    this.magneted(node)
                    // access denied 
                    // this.el.classList.add('wrong')
                }
            }
        })
    }
    // End - Collision logic 
    magneted(node) {

        if (node.isFocused) {
            this.el.classList.add('magnet')

            this.el.style.top = node.origin.y - this.radius + "px"
            this.el.style.left = node.origin.x - this.radius + "px"

        } else {
            this.el.classList.remove('magnet')
        }
    }

    changeColor(inventor) {

        this.el.classList.remove("Tesla")
        this.el.classList.remove("Westinghouse")
        this.el.classList.remove("Edison")
        this.el.classList.add(inventor)

    }

}