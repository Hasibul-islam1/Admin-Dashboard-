const ctx = document.getElementById('myChart');
  new Chart(ctx, {
    type: 'polarArea',
    data: {
      labels: ['Facebook', 'Youtube', 'Amazon', 'Instagram', 'Website', 'twitter'],
      datasets: [{
        label: 'Traffic Source',
        data: [4780, 1978, 3324, 3577,2224,2345],
        backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 205, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(201, 203, 207, 1)'
          ],
        // borderWidth: 1  
      }]
    },
    options: {
        responsive:true,
    }
  });

//   money chart 
const myMoney = document.getElementById('myMoney');
new Chart(myMoney, {
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June','July','August','September','October','November','December'],
      datasets: [{
        label: 'Earning',
        data: [1200, 1900, 3000, 1005, 2600, 3300,1210, 1900, 6003, 5005, 2220, 3100],
        backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 205, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(201, 203, 207, 1)',
            'rgba(120, 99, 135, 1)',
            'rgba(205, 159, 156, 1)',
            'rgba(255, 205, 146, 1)',
            'rgba(175, 255, 190, 1)',
            'rgba(254, 162, 265, 1)',
          ],
        borderWidth: 1
      }]
    },
    options: {
      responsive:true,
    }
  });