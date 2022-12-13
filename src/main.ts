import P5 from "p5";

//Component
type Transform = {
    x: number,
    y: number
}
//System
const drawCircle = (transform: Transform, p: P5) => {
    p.circle(transform.x, transform.y, 100)
}
//Entity-Component
const circle1_transform: Transform = {
    x: 200,
    y: 300
}

const sketch = (p: P5) => {

    p.setup = () => {
        p.createCanvas(400, 400)
    }
    p.draw = () => {
        p.background(240)
        drawCircle(circle1_transform, p)
    }
}
new P5(sketch)