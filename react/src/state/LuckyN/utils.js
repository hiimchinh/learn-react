export function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

export function getRolls(n) {
    return Array.from({ length: n }, () => rollDice());
}
export function sumDice(dice) {
    return dice.reduce((sum, current) => sum + current);
}
