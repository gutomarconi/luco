Highcharts.chart('container', {
  chart: {
    type: 'pie',
    backgroundColor: '#333333',
    style: {
      fontFamily: 'Arial, sans-serif'
    }
  },
  title: {
    text: 'World\'s Top 5 Car Manufacturers',
    style: {
      color: '#ffffff'
    }
  },
  plotOptions: {
    pie: {
      innerSize: '70%',
      depth: 45,
      colors: ['#ffac33', '#ff4d4d', '#5cd65c', '#3399ff', '#cc66ff'],
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f}%',
        style: {
          color: '#ffffff'
        }
      }
    }
  },
  series: [{
    name: 'Market Share',
    data: [
      ['Toyota', 15.2],
      ['Volkswagen', 11.8],
      ['General Motors', 9.4],
      ['Hyundai', 8.1],
      ['Ford', 7.2]
    ]
  }]
});
