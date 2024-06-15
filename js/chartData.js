const fullCtx = document.getElementById('results-full-chart');
const liteCtx = document.getElementById('results-lite-chart');

const opacity = '0.4';
const acrColor = `rgba(200, 30, 0, ${opacity})`;
const acrPrivateColor = `rgba(200, 10, 0, ${opacity})`;
const sweAgentColor = `rgba(128, 159, 64, ${opacity})`;
const devinColor = `rgba(75, 192, 192, ${opacity})`;
const openDevinColor = `rgba(82, 256, 192, ${opacity})`;
const amazonQColor = `rgba(255, 153, 0, ${opacity})`;
const colorGrid = 'rgba(138,138,142, 0.4)';

const scales = {
    x: {
        beginAtZero: true,
        title: {
            display: true,
            text: 'Success Rate(%)',
            font: {
                size: (c) => { if (window.innerWidth < 500) return '8ch'; else if (window.innerWidth < 1000) { return '10vw'; } else {return '20vw'};   } ,
                family: 'Inter',
                weight: 'bold'
            }
        },
        ticks: {
            font: {
                size: (c) => { if (window.innerWidth < 500) return '8ch'; else if (window.innerWidth < 1000) { return '10vw'; } else {return '20vw'};   }  // You can adjust this value to the desired tick size
            }
        },
        grid: {
            color: colorGrid,
        }
    },
    y: {
        beginAtZero: true,
        title: {
            display: false,
            text: 'Tool',
            font: {
                size: (c) => { if (window.innerWidth < 500) return '8ch'; else if (window.innerWidth < 1000) { return '10vw'; } else {return '20vw'};   } ,
                family: 'Inter',
                weight: 'bold'
            }
        },
        ticks: {
            font: {
                size: (c) => { if (window.innerWidth < 500) return '8ch'; else if (window.innerWidth < 1000) { return '10vw'; } else {return '14vw'};   }  , // You can adjust this value to the desired tick size
                family: 'Inter',
                weight: (c) => { if (c.type == "tick" && c.tick.label.indexOf("Auto Code Rover") !== -1) { return 'bold' }; return undefined; }
            },
        },
        grid: {
            color: colorGrid,
        }
    },
};

const fullData = {
    labels: ['SWE-bench Full'],
    datasets: [
        {
            label: ["Auto Code Rover(private)"],
            data: [undefined],
            backgroundColor: acrPrivateColor,
            borderColor: acrPrivateColor.replace(opacity, '1.0'),
            borderWidth: 1,
            categoryPercentage: 0.8, // Controls the width of the bars in the group
            barPercentage: 0.9 // Controls the width of each bar within its category
        },
        {
            label: ["Auto Code Rover"],
            data: [15.95],
            backgroundColor: acrColor,
            borderColor: acrColor.replace(opacity, '1.0'),
            borderWidth: 1,
            categoryPercentage: 0.8, // Controls the width of the bars in the group
            barPercentage: 0.9 // Controls the width of each bar within its category
        },
        {
            label: ["SWE-Agent"],
            data: [12.29],
            backgroundColor: sweAgentColor,
            borderColor: sweAgentColor.replace(opacity, '1.0'),
            borderWidth: 1,
            categoryPercentage: 0.8, // Controls the width of the bars in the group
            barPercentage: 0.9 // Controls the width of each bar within its category
        },
        {
            label: ["Amazon Q Dev"],
            data: [13.82],
            backgroundColor: amazonQColor,
            borderColor: amazonQColor.replace(opacity, '1.0'),
            borderWidth: 1,
            categoryPercentage: 0.8, // Controls the width of the bars in the group
            barPercentage: 0.9 // Controls the width of each bar within its category
        },
        {
            label: ["OpenDevin"],
            data: [undefined],
            backgroundColor: openDevinColor,
            borderColor: openDevinColor.replace(opacity, '1.0'),
            borderWidth: 1,
            categoryPercentage: 0.8, // Controls the width of the bars in the group
            barPercentage: 0.9 // Controls the width of each bar within its category
        },
    ]
};

const liteData = {
    labels: ['Auto Code Rover*', 'OpenDevin', 'Amazon Q Dev', 'SWE-Agent'],
    datasets: [
        {
            data: [30.0, 25.0, 20.33, 18.00],
            backgroundColor: [acrColor, openDevinColor, amazonQColor, sweAgentColor],
            borderColor: [acrColor, openDevinColor, amazonQColor, sweAgentColor].map(x => x.replace(opacity, '1.0')),
            borderWidth: 1,
            categoryPercentage: 0.8, // Controls the width of the bars in the group
            barPercentage: 0.9 // Controls the width of each bar within its category
        },
    ]
};


// new Chart(fullCtx, {
//     type: 'bar',
//     data: fullData,
//     options: {
//         responsive: true,
//         plugins: {
//             legend: {
//                 display: true,
//                 position: 'right',
//                 labels: {
//                     boxWidth: 20,
//                     padding: 20
//                 }
//             }
//         },
//         scales: scales
//     }
// });

new Chart(liteCtx, {
    type: 'bar',
    data: liteData,
    options: {
        indexAxis: 'y',
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: 'right',
                labels: {
                    boxWidth: '20vw',
                    padding: '10vw'
                }
            },
        },
        scales: scales
    },
});