
var xValues = ["  US Bonds", "US Stocks", "International Stocks", "cash", "401K"];
var yValues = [55, 49, 44, 24, 20];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Investment"
    }
  }
});
