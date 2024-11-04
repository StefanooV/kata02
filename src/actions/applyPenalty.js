export function applyPenalty(card) {
    card.applyPenalty();
    return `Penalty: Balance after penalty: ${card.balance}`;
}