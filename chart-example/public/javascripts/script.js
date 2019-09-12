const drawCharts = (labels, values) => {
  const ctx = document.getElementById("myChart").getContext("2d");

  new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          label: "Stock chart",
          data: values
        }
      ]
    }
  });
};

axios
  .get(
    "https://cloud.iexapis.com/v1/stock/apc/chart?token=pk_a1e1e222130a4dc19368b57f2a8340fb"
  )
  .then(response => {
    const labels = response.data.map(el => {
      return el.label;
    });

    const values = response.data.map(el => {
      return el.close;
    });

    drawCharts(labels, values);
  });
