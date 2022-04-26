export default function Chart({settings}){

    Highcharts.chart('container', {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Vendas por mes:'
        },
        xAxis: {
          categories: settings.categories,
          crosshair: true
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Vendas'
          }
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0
          }
        },
        series: settings.series
      });
    return(
        <div id=""></div>
    )
}