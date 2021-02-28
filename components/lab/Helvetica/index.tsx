import classnames from 'classnames';
import { useInterval } from 'hooks/time';
import { useState } from 'react';

const ARRANGEMENT = [
    'ITLISASTIME',
    'ACQUARTERDC',
    'TWENTYFIVEX',
    'HALFBTENFTO',
    'PASTERUNINE',
    'ONESIXTHREE',
    'FOURFIVETWO',
    'EIGHTELEVEN',
    'SEVENTWELVE',
    'TENSEOCLOCK'
];
const NUM_LABELS = [
    'ZERO',
    'ONE',
    'TWO',
    'THREE',
    'FOUR',
    'FIVE',
    'SIX',
    'SEVEN',
    'EIGHT',
    'NINE',
    'TEN',
    'ELEVEN',
    'TWELVE'
];
const MINUTE_LABELS = ['', 'FIVE', 'TEN', 'QUARTER', 'TWENTY', 'TWENTYFIVE', 'HALF'];
const TIME_PREFIX = ['IT', 'IS'];
const TO = 'TO';
const PAST = 'PAST';
const PRECISE = 'OCLOCK';
const MAX_HOURS = 12;
const MAX_MINS = 60;
const ROUND_MINS = 5;

const getUsableHours = (hours: number): number => {
    return hours % MAX_HOURS || hours || MAX_HOURS;
};

const getTimeArrayForDate = (date: Date): string[] => {
    const timeArray = TIME_PREFIX.slice();
    let hours = getUsableHours(date.getHours());
    const minutes = date.getMinutes();
    const roundedMins = Math.floor(minutes / ROUND_MINS) * ROUND_MINS;

    for (let i = 0; i < MINUTE_LABELS.length; i++) {
        const vagueMinutes = i * ROUND_MINS;
        if (vagueMinutes === roundedMins || MAX_MINS - vagueMinutes === roundedMins) {
            timeArray.push(MINUTE_LABELS[i]);
            break;
        }
    }

    if (roundedMins > 0) {
        if (roundedMins > MAX_MINS / 2) {
            timeArray.push(TO);
            hours = getUsableHours(++hours);
        } else {
            timeArray.push(PAST);
        }
    }

    timeArray.push(NUM_LABELS[hours]);

    if (roundedMins === 0) {
        timeArray.push(PRECISE);
    }

    return timeArray.filter((i) => i !== '');
};

const getBlinkState = (timeArray: string[]): boolean[][] => {
    const blinkState = ARRANGEMENT.map((i) => Array.from(i).map(() => false));
    let startX = 0;
    let startY = 0;
    timeArray.forEach((word) => {
        for (let i = startX; i < ARRANGEMENT.length; i++) {
            if (!ARRANGEMENT[i].substring(startY).includes(word)) {
                i++;
            }
            const idx = ARRANGEMENT[i].indexOf(word);
            if (idx !== -1) {
                blinkState[i].splice(idx, word.length, ...Array(word.length).fill(true));
                startX = i;
                startY = idx + word.length;
                break;
            }
            startY = 0;
        }
    });
    return blinkState;
};

const LabHelvetica = () => {
    const [blinkState, setBlinkState] = useState<boolean[][]>(
        ARRANGEMENT.map((i) => Array.from(i).map((_) => false))
    );

    useInterval(() => {
        setBlinkState(getBlinkState(getTimeArrayForDate(new Date())));
    }, 5000);

    return (
        <div className="font-sans text-3xl grid text-center sm:px-32">
            {ARRANGEMENT.map((row, rowKey) => (
                <div className="grid grid-cols-11" key={rowKey}>
                    {Array.from(row).map((letter, letterKey) => (
                        <div
                            className={classnames(
                                blinkState[rowKey][letterKey] ? 'text-gray-600' : 'text-gray-300'
                            )}
                            key={letterKey}>
                            {letter}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default LabHelvetica;
