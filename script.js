function calculateCost() {
  const userText = document.getElementById("userText").value;
  const charCount = userText.length;
  const pricePerThousand = 3.7; // Цена за 1000 знаков
  const totalCost = (charCount / 1000) * pricePerThousand;

  document.getElementById("charCount").textContent = charCount;
  document.getElementById("totalCost").textContent = totalCost.toFixed(2) + " долларов";
}
