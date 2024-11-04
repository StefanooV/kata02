export function applyInterest(card) {
    card.applyInterest();
    return `Interest: Balance after interest: ${card.balance}`;
}