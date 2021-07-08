export const radialOptions = {
    chart: {
        type: "radialBar"
    },
    colors: ["#a262f1"],
    plotOptions: {
        radialBar: {
            hollow: {
                margin: 15,
                size: "65%"
            },
            dataLabels: {
                showOn: "always",
                name: {
                    color: "whitesmoke",
                },
                value: {
                    color: "#bb86fc",
                }
            }
        }
    },
    fill: {
        type: "gradient",
        gradient: {
            shade: "dark",
            type: "vertical",
            gradientToColors: ["#b071fd"],
            stops: [0, 100]
        }
        },
    stroke: {
        lineCap: "round",
    },
    labels: ["Sleep Score"]
}
export const lineOptions = {
        chart: {
            toolbar: {
                show: false,
            },
          type: 'line',
        },
        colors:['#b071fd'],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: 'smooth'
        },
        grid: {
          borderColor: 'grey',
          row: {
            colors: ['#f3f3f3', 'transparent'],
            opacity: 0.05
          },
        },
        markers: {
          size: 1
        },
        xaxis: {
            type: 'datetime',
            labels: {
                style: {
                    colors: ['#f5f5f5'],
                }
            }
        },
        yaxis: {
            labels: {
                style: {
                    colors: ['#f5f5f5'],
                }
            }
        },
}   

