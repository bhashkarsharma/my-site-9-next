const jumble = (original: string): string =>
    original
        .split('')
        .sort(() => 0.5 - Math.random())
        .join('');

export default jumble;
