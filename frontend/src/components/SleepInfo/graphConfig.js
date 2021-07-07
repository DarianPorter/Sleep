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
    
}

