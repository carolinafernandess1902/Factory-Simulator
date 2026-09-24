const button = document.getElementById("simulate");

button.addEventListener("click", function() {
    const machines = document.getElementById("machines").value;
    const workers = document.getElementById("workers").value;
    const hours = document.getElementById("hours").value;
    const productionRate = document.getElementById("productionRate").value;
    const workerCost = document.getElementById("workerCost").value;
    const sellingPrice = document.getElementById("sellingPrice").value;
    const demand = Number(document.getElementById("demand").value);
    const materialCost = Number(document.getElementById("materialCost").value);
    const machineCost = Number(document.getElementById("machineCost").value);

let efficiency;

if (workers == 1) {
    efficiency = 0.60;
} else if (workers == 2) {
    efficiency = 0.80;
} else if (workers == 3) {
    efficiency = 0.90;
} else {
    efficiency = 1.00;
}

const production = machines * productionRate * hours * efficiency;
const unitsSold = Math.min(production, demand);
const totalWorkerCost = workers * workerCost;
const totalMaterialCost = unitsSold * materialCost;
const revenue = unitsSold * sellingPrice;
const profit = revenue - totalWorkerCost - totalMaterialCost - machineCost;
const contributionMargin = sellingPrice - materialCost;

let breakEvenUnits;

if (contributionMargin <= 0) {
    breakEvenUnits = null;
} else {
    breakEvenUnits = (totalWorkerCost + machineCost) / contributionMargin;
}
if (breakEvenUnits === null) {
    document.getElementById("breakEvenResult").textContent =
        "Not achievable";
} else {
    document.getElementById("breakEvenResult").textContent =
        Math.ceil(breakEvenUnits) + " units/day";
}

    document.getElementById("production").textContent =
    "Production: " + production + " units per day";
    document.getElementById("unitsSold").textContent =
    "Sold: " + unitsSold + " units per day";
    document.getElementById("workerCostResult").textContent =
    "Worker Cost: $" + totalWorkerCost + " per day";
    document.getElementById("materialCostResult").textContent =
    "Material cost: $" + totalMaterialCost + " per day";
    document.getElementById("revenueResult").textContent =
    "Revenue: $" + revenue + " per day";
    document.getElementById("profitResult").textContent =
    "Profit: $" + profit + " per day";

});

const optimizeButton = document.getElementById("optimize");

optimizeButton.addEventListener("click", function() {
    const machines = Number(document.getElementById("machines").value);
    const hours = Number(document.getElementById("hours").value);
    const productionRate = Number(document.getElementById("productionRate").value);
    const workerCost = Number(document.getElementById("workerCost").value);
    const sellingPrice = Number(document.getElementById("sellingPrice").value);
    const demand = Number(document.getElementById("demand").value);
    const materialCost = Number(document.getElementById("materialCost").value);
    const machineCost = Number(document.getElementById("machineCost").value);

    let bestWorkers = 0;
    let bestProfit = -Infinity;
    let profitData = [];

    for (let workers = 1; workers <= 10; workers++) {

        let efficiency;

        if (workers == 1) {
            efficiency = 0.60;
        } else if (workers == 2) {
            efficiency = 0.80;
        } else if (workers == 3) {
            efficiency = 0.90;
        } else {
            efficiency = 1.00;
        }

    const production =
    machines * productionRate * hours * efficiency;

const unitsSold = Math.min(production, demand);

const revenue = unitsSold * sellingPrice;

const totalWorkerCost = workers * workerCost;

const totalMaterialCost = unitsSold * materialCost;

const profit = revenue - totalWorkerCost - totalMaterialCost - machineCost;

        profitData.push({
            workers: workers,
            profit: profit
        });

        if (profit > bestProfit) {
            bestProfit = profit;
            bestWorkers = workers;
        }
    }

    const chart = document.getElementById("chart");

    chart.innerHTML = "";

    profitData.forEach(function(data) {

        const bar = document.createElement("div");

        bar.className = "profit-bar";

        bar.style.height = (data.profit / bestProfit * 200) + "px";

        bar.textContent = data.workers + " workers\n$" + data.profit;

        if (data.workers === bestWorkers) {
            bar.classList.add("best");
        }

        chart.appendChild(bar);
    });

   let workerText;

if (bestWorkers === 1) {
    workerText = "worker";
} else {
    workerText = "workers";
}

document.getElementById("optimizationResult").textContent =
    "The most profitable workforce is " +
    bestWorkers +
    " " +
    workerText +
    ", with a profit of $" +
    bestProfit +
    " per day.";

});

