function generateEnergy() {
  const wasteGrams = Number(document.getElementById("wasteGrams").value);
  if (wasteGrams <= 0) {
    alert("Please enter a valid waste amount");
    return;
  }

  const wasteKg = wasteGrams / 1000;
  const energy = wasteKg * 0.5;

  document.getElementById("powerOutput").innerText =
    energy.toFixed(2) + " kWh";

  document.getElementById("backupTime").innerText =
    (energy * 2).toFixed(1) + " hrs";

  document.getElementById("solarVoltage").innerText =
    (18 + Math.random() * 6).toFixed(1) + " V";

  document.getElementById("batteryPercent").innerText =
    Math.min(100, wasteKg * 10) + " %";

  const devices = [];
  if (energy >= 0.01) devices.push("📱 Mobile Phone");
  if (energy >= 0.05) devices.push("💡 LED Bulb");
  if (energy >= 0.2) devices.push("💻 Laptop");
  if (energy >= 5) devices.push("🏠 Home Lighting System");

  document.getElementById("deviceList").innerHTML =
    devices.length ? devices.join("<br>") : "Insufficient energy";

  const MAX_MONITOR_KWH = 20;
  let normalized = Math.min(energy / MAX_MONITOR_KWH, 1);

  const angle = -90 + normalized * 180;
  document.getElementById("gaugeNeedle").style.transform =
    `rotate(${angle}deg)`;
}
