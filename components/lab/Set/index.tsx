import classnames from 'classnames';
import { useEffect, useState } from 'react';
import { Card, GameState, MessageType } from 'types/set';
import { getDeckWithValidHand, getValidSets, initDeck, isValidSet } from 'util/set';
import CardView from './Card';
import styles from './index.module.scss';

const DRAW_COUNT = 12;
const MESSAGE_DISPLAY_DURATION = 800;

const LabSet = () => {
    const [deck, setDeck] = useState<Card[]>([]);
    const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
    const [messageType, setMessageType] = useState<MessageType>(MessageType.NONE);
    const [gameState, setGameState] = useState<GameState>(GameState.STARTED);

    const hand = deck.slice(0, DRAW_COUNT);

    // need to do it in an effect to avoid server render mismatch
    useEffect(() => setDeck(initDeck(DRAW_COUNT)), []);

    useEffect(() => {
        if (hand.length === 0) return;

        if (getValidSets(hand).length === 0) {
            setDeck(getDeckWithValidHand(deck, DRAW_COUNT));
        }

        if (deck.length <= 12) {
            setGameState(GameState.FINISHED);
        }
    }, [deck]);

    useEffect(() => {
        if (selectedIndices.length > 3) {
            deselectAll();
            return;
        }

        if (selectedIndices.length === 3) {
            const selectedCards = deck.filter((c, i) => selectedIndices.includes(i));

            if (isValidSet(selectedCards)) {
                setMessageType(MessageType.SUCCESS);

                setTimeout(() => {
                    handleValidSet(selectedIndices);
                }, MESSAGE_DISPLAY_DURATION);
            } else {
                setMessageType(MessageType.ERROR);

                setTimeout(() => {
                    handleInvalidSet();
                }, MESSAGE_DISPLAY_DURATION);
            }
        }
    }, [selectedIndices]);

    const handleCardSelect = (selectedIndex: number): void => {
        if (selectedIndices.includes(selectedIndex)) {
            setSelectedIndices(selectedIndices.filter((i) => i !== selectedIndex));
        } else {
            setSelectedIndices([...selectedIndices, selectedIndex].sort());
        }
    };

    const handleValidSet = (indices: number[]) => {
        let updated = [...deck];
        indices.forEach((index) => {
            const replacement = updated.pop();

            if (replacement) {
                updated[index] = replacement;
            }
        });

        setDeck(updated);
        deselectAll();
    };

    const handleInvalidSet = () => {
        deselectAll();
    };

    const deselectAll = (delay = MESSAGE_DISPLAY_DURATION): void => {
        setTimeout(() => {
            setSelectedIndices([]);
            setMessageType(MessageType.NONE);
        }, delay);
    };

    return (
        <div className="h-full relative">
            <div className="grid grid-rows-4 grid-cols-3 gap-2 h-full">
                {hand.map((card, index) => {
                    const isSelected = selectedIndices.includes(index);

                    return (
                        <CardView
                            key={index}
                            card={card}
                            selected={isSelected}
                            className={classnames({
                                [styles.shake]: messageType === MessageType.ERROR && isSelected,
                                'opacity-0 scale-120':
                                    messageType === MessageType.SUCCESS && isSelected
                            })}
                            onSelect={() => handleCardSelect(index)}
                        />
                    );
                })}
            </div>

            <div
                className={classnames(
                    `absolute top-0 left-0 w-full h-full flex justify-center items-center`,
                    `bg-green-400 bg-opacity-60`,
                    'transform transition-all duration-150 ease-out scale-0',
                    {
                        'scale-100': messageType === MessageType.SUCCESS,
                        'bg-opacity-100': gameState === GameState.FINISHED
                    }
                )}>
                <div className="text-4xl font-black text-white">
                    {gameState === GameState.FINISHED ? (
                        <>You Win!</>
                    ) : (
                        <>Nice move! {deck.length} cards to go.</>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LabSet;
