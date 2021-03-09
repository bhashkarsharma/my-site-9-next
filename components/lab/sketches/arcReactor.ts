import p5 from 'p5';
import { Dimensions } from 'types/element';
import { P5Sketch } from 'types/p5';

const HIGHEST_COLOR = 255;

const createDot = (p5: p5) => {
    let radians = p5.random(p5.TWO_PI);
    const angle = p5.TWO_PI / 360;

    let depth = 0;
    let status = 0;

    let count = p5.round(p5.random(10, 20));
    let color = p5.round(p5.random(64, HIGHEST_COLOR));

    const draw = (): void => {
        p5.stroke(0, color, HIGHEST_COLOR);
        p5.push();
        p5.rotate(radians);
        p5.scale(p5.pow(1.1, depth));
        p5.point(25, 0);
        p5.pop();
    };

    const update = (): boolean => {
        if (count-- < 0) {
            count = p5.round(p5.random(10, 20));
            status = status === 0 ? p5.round(p5.random() * 2) * 2 - 1 : 0;
        }

        if (status === 0) {
            depth += 0.1;
            if (depth > 30) return false;
        } else {
            radians += status * angle;
            draw();
            radians += status * angle;
        }

        draw();
        return true;
    };

    return {
        update
    };
};

const arcReactor: P5Sketch = ({ width, height }: Dimensions) => (p5: p5) => {
    const dim = p5.min(width, height);
    const dots = [];

    p5.setup = () => {
        p5.createCanvas(dim, dim);
        p5.strokeWeight(1);
    };

    p5.draw = () => {
        p5.fill(0, 5);
        p5.noStroke();
        p5.rect(0, 0, dim - 1, dim - 1);

        if (p5.frameCount % 3 === 0) {
            dots.push(createDot(p5));
        }

        p5.translate(dim / 2, dim / 2);

        const indicesToRemove: number[] = [];

        dots.forEach((dot, index) => {
            if (!dot.update()) {
                indicesToRemove.push(index);
            }
        });

        for (let i = indicesToRemove.length - 1; i >= 0; i--) {
            dots.splice(indicesToRemove[i], 1);
        }
    };
};

export default arcReactor;
