import p5 from 'p5';

export interface P5SketchProps {
    width: number;
    height: number;
}

export type P5Sketch = (props: P5SketchProps) => (p5: p5) => void;
