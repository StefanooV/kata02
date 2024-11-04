export function applyTransaction(card, amount) {
    card.applyTransaction(amount);
    return `Transaction: Balance ${card.balance}, Points ${card.points}`
}