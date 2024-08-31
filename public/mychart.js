const bar = document.getElementById("myChart");

new Chart(bar, {
  type: "bar",
  data: {
    labels: ["  Rent", "Travels", "Food"],
    datasets: [
      {
        label: "My First Dataset",
        data: [2500, 5500, 1000],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const ctx = document.getElementById("myStackedBarChart").getContext("2d");

// Sample data for four bars
const data = {
  labels: ["Budget 1", "Budget 2", "Budget 3", "Budget 4"], // Labels for the four bars
  datasets: [
    {
      label: "Income",
      data: [5000, 4500, 6000, 4000], // Replace with dynamic data for each bar
      backgroundColor: "blue",
      barThickness: 20, // Make the bars very slim
    },
    {
      label: "Expense",
      data: [3000, 3500, 2500, 3700], // Replace with dynamic data for each bar
      backgroundColor: "orange",
      barThickness: 20, // Make the bars very slim
    },
  ],
};

const options = {
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false, // Optionally remove gridlines for a cleaner look
      },
    },
    y: {
      stacked: true,
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      display: true,
      position: "top",
    },
  },
  barPercentage: 0.2, // Adjust the space between bars, making them slimmer
  categoryPercentage: 0.5, // Adjusts the width of the entire category
};

const myStackedBarChart = new Chart(ctx, {
  type: "bar",
  data: data,
  options: options,
});
s;
