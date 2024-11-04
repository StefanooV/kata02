import SilverCard from "./models/extensions/SilverCard.js";
import GoldCard from "./models/extensions/GoldCard.js";

import { applyInterest } from "./actions/applyInterest.js";
import { applyPayment } from "./actions/applyPayment.js";
import { applyPenalty } from "./actions/applyPenalty.js";
import { applyTransaction } from "./actions/applyTransaction.js";

const output = document.getElementById("output");

const silverCard = new SilverCard(1000);
const goldCard = new GoldCard(5000);

output.textContent += `Silver Card ${applyTransaction(silverCard, 200)}\n`;
output.textContent += `Silver Card ${applyPayment(silverCard, 50)}\n`;
output.textContent += `Silver Card ${applyInterest(silverCard)}\n`;
output.textContent += `Silver Card ${applyPenalty(silverCard)}\n`;

output.textContent += `Gold Card ${applyTransaction(goldCard, 1000)}\n`;
output.textContent += `Gold Card ${applyPayment(goldCard, 200)}\n`;
output.textContent += `Gold Card ${applyInterest(goldCard)}\n`;
output.textContent += `Gold Card ${applyPenalty(goldCard)}\n`;
