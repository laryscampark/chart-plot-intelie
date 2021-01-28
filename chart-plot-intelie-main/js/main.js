linux = document.getElementById("linux");
mac = document.getElementById("mac");
windows = document.getElementById('windows');
total = document.getElementById('totalInput');

console.log(total)

function myFunction() {
  total_value = 0;
  total_value = parseFloat(linux.value) + parseFloat(mac.value) + parseFloat(windows.value);
  console.log(total_value);

  total.value = total_value;
  total.innerHTML = total.value;
  console.log(total.innerHTML);


}
const linux_var = document.querySelector('.crs-input');
const mac_var = document.querySelector('.moth-input');
const windows_var = document.querySelector('.browser-input');

const ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {

  type: 'pie',
  data: {

    labels: ['Linux', 'Mac', 'Microsoft'],
    datasets: [
      {

        label: '# of votes',
        data: [0, 0, 0],
        backgroundColor: ['#2adece', '#dd3b79', '#ff766b'],
        borderWidth: 1
      }
    ]

  }

});


const updateChartValue = (input, dataOrder) => {

  input.addEventListener('change', e => {
    myChart.data.datasets[0].data[dataOrder] = e.target.value;
    myChart.update();
  });

};

updateChartValue(linux_var, 0);
updateChartValue(mac_var, 1);
updateChartValue(windows_var, 2);