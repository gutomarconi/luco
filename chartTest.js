{
  chart: {
    type: 'bar',
    backgroundColor: '#333333',
    style: {
      fontFamily: 'Arial, sans-serif'
    }
  },
  title: {
    text: 'Test Highcharts',
    style: {
      color: '#ffffff'
    }
  },
  xAxis: {
    allowDecimals: false,
    dateTimeLabelFormats: {
      millisecond: '%H:%M:%S.%L',
      second: '%H:%M:%S',
      minute: '%H:%M',
      hour: '%H:%M',
      day: '%b %e',
      week: '%b %e',
      month: '%B',
      year: '%Y',
    },
    gridLineColor: '#e6e6e6',
    gridLineWidth: 0,
    keepOrder: true,
    labels: {
      enabled: true,
      data: [],
      events: {},
      autoRotationLimit: 150,
      style: {
        cursor: 'default',
        fontSize: '12px',
        textAlign: 'right',
        color: 'inherit',
        textOverflow: 'ellipsis',
      },
      useHTML: true,
    },
    maxPadding: 0.01,
    minPadding: 0.01,
    reversed: true,
    startOfWeek: 1,
    tickLength: 0,
    title: {
      style: {
        color: 'inherit',
      },
      text: 'Created Month',
      useHTML: true,
    },
    type: 'datetime',
    uniqueNames: false,
  },
  yAxis: [
    {
      allowDecimals: false,
      dateTimeLabelFormats: {
        millisecond: '%H:%M:%S.%L',
        second: '%H:%M:%S',
        minute: '%H:%M',
        hour: '%H:%M',
        day: '%b %e',
        week: '%b %e',
        month: '%B',
        year: '%Y',
      },
      endOnTick: false,
      gridLineWidth: 1,
      labels: {
        enabled: true,
        events: {},
        style: {
          color: 'inherit',
          fontSize: '12px',
        },
        useHTML: true,
      },
      maxPadding: 0.01,
      opposite: false,
      plotBands: [],
      plotLines: [],
      reversed: false,
      reversedStacks: false,
      softMax: 0,
      softMin: 0,
      stackLabels: {
        allowOverlap: false,
        enabled: false,
        style: {
          color: '#808080',
          fontSize: '12px',
          fontWeight: 'bold',
          textOutline: 'none',
        },
      },
      startOnTick: false,
      tickPixelInterval: 60,
      title: {
        style: {
          color: 'inherit',
        },
        text: 'Number of Order Items',
        useHTML: true,
      },
      type: 'linear',
      visible: true,
    },
  ],
  plotOptions: {
    bar: {
      colorByPoint: true,
      colors: ['#ffac33', '#ff4d4d', '#5cd65c', '#3399ff', '#cc66ff']
    },
    series: {
      animation: false,
      cursor: 'pointer',
      connectNulls: true,
      turboThreshold: 5000,
    },
  },
  series: [
    {
      color: '#19556B',
      data: [],
      dataLabels: {
        crop: false,
        enabled: false,
        overflow: 'none',
        style: {
          fontSize: '12px',
          fontWeight: 'bold',
          textOutline: 'none',
        },
      },
      events: {},
      id: 'order_items.count',
      index: 0,
      legendIndex: 0,
      name: 'Number of Order Items',
      series: {
        data: [],
        xAxisType: 'datetime',
        yCategories: [],
        result: {},
        config: {},
        type: 'bar',
        id: 'order_items.count',
        field: {},
        index: 0,
        isSilhouetted: false,
        legendIndex: 0,
        numberOfSeries: 1,
        numberOfFields: 1,
      },
      states: {
        inactive: {
          opacity: 1,
        },
      },
      tooltip: {
        followPointer: true,
      },
      type: 'bar',
      visible: true,
      yAxis: 0,
      zIndex: 0,
      zoneAxis: 'y',
      zones: [],
      stickyTracking: true,
      borderWidth: 0,
      groupPadding: 0.05,
      pointPadding: 0,
      hideStackedChartValueLabels: false,
    },
  ],
}
