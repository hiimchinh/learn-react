class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
        console.log('this', this);
    }

    rgb() {
        return `rgb(${this.r}, ${this.g}, ${this.b})`
    }
}

const color = new Color(255, 255, 255, 'white');
console.log('color rgb: ' + color.rgb());