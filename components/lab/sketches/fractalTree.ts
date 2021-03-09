import p5 from 'p5';
import { Dimensions } from 'types/element';
import { P5Sketch } from 'types/p5';

const fractalTree: P5Sketch = ({ width, height }: Dimensions) => (p5: p5) => {
    const dim = p5.min(width, height);

    let counter = 0;
    const graphicDim = 20;
    const petalRadius = 6;
    const innerRadius = 4;
    const petalShift = 4;
    let gfx: p5.Graphics;

    const initFlower = (x, y, renderer = gfx) => {
        renderer.push();
        renderer.fill('#dfd1dd');
        renderer.circle(x + petalShift, y, petalRadius);
        renderer.circle(x - petalShift, y, petalRadius);
        renderer.circle(x, y + petalShift, petalRadius);
        renderer.circle(x, y - petalShift, petalRadius);
        renderer.fill('#b28fa7');
        renderer.circle(x, y, innerRadius);
        renderer.pop();
    };

    const terrain = ({
        color = 'brown',
        granularity = 10,
        variation = 0.05,
        offsetStart = 100,
        offsetEnd = 200
    } = {}) => {
        p5.push();
        p5.fill(color);
        p5.noStroke();
        p5.beginShape();

        let xoff = 0;

        for (let x = 0; x <= width; x += granularity) {
            let y = p5.map(p5.noise(xoff), 0, 1, height - offsetStart, height - offsetEnd);
            p5.vertex(x, y);
            xoff += variation;
        }
        p5.vertex(width, height);
        p5.vertex(0, height);
        p5.endShape(p5.CLOSE);
        p5.pop();
    };

    const sun = (x, y, size = 30) => {
        p5.push();
        p5.noStroke();
        p5.fill('#faed27');
        p5.circle(x, y, size);
        p5.pop();
    };

    const tree = (step: number, x: number, y: number, rad: number, length: number): void => {
        if (step <= 0) return;
        p5.strokeWeight(step * 1.1);
        const angle = 0.3 + p5.map(p5.noise(counter / dim), 0, 1, 0, 0.3);

        const inf = 10 - step;
        const n = p5.noise((x + counter) / dim, (y - counter) / dim) * inf;
        const x2 = x + p5.sin(rad) * length + p5.sin(n) * inf;
        const y2 = y - p5.cos(rad) * length + p5.cos(n) * inf;
        p5.line(x, y, x2, y2);

        if (step < 5) {
            p5.push();
            p5.translate(-graphicDim / 2, -graphicDim / 2);
            p5.image(gfx, x, y);
            p5.image(gfx, (x + x2) / 2, (y + y2) / 2);
            p5.image(gfx, x2, y2);
            p5.pop();
        }

        step--;
        length *= 0.9;
        tree(step, x2, y2, rad + angle, length);
        tree(step, x2, y2, rad - angle, length);
    };

    p5.setup = () => {
        p5.createCanvas(dim, dim);
        p5.stroke('#54161e');
        p5.strokeWeight(4);
        gfx = p5.createGraphics(graphicDim, graphicDim);
        gfx.noStroke();

        initFlower(graphicDim / 2, graphicDim / 2);
    };

    p5.draw = () => {
        counter++;
        p5.background('#2967a8');

        sun(640, 550, 100);

        terrain({
            color: '#788',
            granularity: 8,
            variation: 0.08,
            offsetStart: 300,
            offsetEnd: 400
        });
        terrain({
            color: '#566',
            granularity: 6,
            variation: 0.02,
            offsetStart: 200,
            offsetEnd: 300
        });
        terrain({ color: '#344' });

        tree(8, dim / 2, dim, 0, 50);
    };
};

export default fractalTree;
