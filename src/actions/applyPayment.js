export function applyPayment(card, amount) {
    card.applyPayment(amount);
    return `Payment: Balance after payment: ${card.balance}`
}