const resultsCtx = document.getElementById('results-chart');
const costCtx = document.getElementById('cost-chart');


const opacity = '0.4';
const acrColor = `rgba(200, 30, 0, ${opacity})`;
const coderColor = `rgba(128, 159, 64, ${opacity})`;
const devinColor = `rgba(75, 192, 192, ${opacity})`;
const masaiColor = `rgba(32, 192, 128, ${opacity})`;
const ibmColor = `rgba(0, 45, 156, ${opacity})`;
const sweAgentColor = `rgba(128, 153, 0, ${opacity})`;
const amazonQColor = `rgba(255, 153, 0, ${opacity})`;

const colorGrid = `rgba(138,138,142, ${opacity})`;

const scaleFontCheck = (c) => { if (window.innerWidth < 500) return '8ch'; else if (window.innerWidth < 1200) { return '8ch'; } else { return '12ch' }; };

const scales = {
    x: {
        beginAtZero: true,
        title: {
            display: true,
            text: 'Success Rate(%)',
            font: {
                size: scaleFontCheck,
                family: 'Inter',
                weight: 'bold'
            }
        },
        ticks: {
            font: {
                size: scaleFontCheck
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
                size: scaleFontCheck,
                family: 'Inter',
                weight: 'bold'
            }
        },
        ticks: {
            font: {
                size: (c) => { if (window.innerWidth < 500) return '8ch'; else if (window.innerWidth < 1200) { return '6ch'; } else { return '12ch' }; }, // You can adjust this value to the desired tick size
                family: 'Inter',
                weight: (c) => { if (c.type == "tick" && c.tick.label.indexOf("Auto Code Rover") !== -1) { return 'bold' }; return undefined; }
            },
        },
        grid: {
            color: colorGrid,
        }
    },
};

const scaleCostFontCheck = (c) => { if (window.innerWidth < 500) return '7ch'; else if (window.innerWidth < 1200) { return '8ch'; } else { return '8ch' }; };

const scalesCost = {
    x: {
        beginAtZero: true,
        title: {
            display: true,
            text: 'Average Cost($)',
            font: {
                size: scaleCostFontCheck,
                family: 'Inter',
                weight: 'bold'
            }
        },
        ticks: {
            font: {
                size: scaleCostFontCheck
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
                size: scaleCostFontCheck,
                family: 'Inter',
                weight: 'bold'
            }
        },
        ticks: {
            font: {
                size: scaleCostFontCheck, // You can adjust this value to the desired tick size
                family: 'Inter',
                weight: (c) => { if (c.type == "tick" && c.tick.label.indexOf("Auto Code Rover") !== -1) { return 'bold' }; return undefined; }
            },
        },
        grid: {
            color: colorGrid,
        }
    },
};

const liteData = {
    labels: ['AutoCodeRover*', 'CodeR', 'MASAI', 'IBM Resarch Agent', 'Amazon Q Dev'],
    datasets: [
        {
            data: [30.67, 28.33, 28.00, 26.67, 26.33, 25.33, 20.33],
            backgroundColor: [acrColor, coderColor, masaiColor, ibmColor, amazonQColor],
            borderColor: [acrColor, coderColor, masaiColor, ibmColor, amazonQColor].map(x => x.replace(opacity, '1.0')),
            borderWidth: 1,
            categoryPercentage: 0.8, // Controls the width of the bars in the group
            barPercentage: 0.9 // Controls the width of each bar within its category
        },
    ]
};

const fullData = {
    labels: ['AutoCodeRover*', 'Factory Code Droid', 'AppMap Navie', 'Amazon Q Dev'],
    datasets: [
        {
            data: [18.83, 19.27, 14.60, 13.82],
            backgroundColor: [acrColor, coderColor, masaiColor, amazonQColor],
            borderColor: [acrColor, coderColor, masaiColor, amazonQColor].map(x => x.replace(opacity, '1.0')),
            borderWidth: 1,
            categoryPercentage: 0.8, // Controls the width of the bars in the group
            barPercentage: 0.9 // Controls the width of each bar within its category
        },
    ]
};

const cost = {
    labels: ['AutoCodeRover*', 'SWE-agent', 'MASAI', 'CodeR'],
    datasets: [
        {
            data: [0.68, 1.67, 1.96, 3.09],
            backgroundColor: [acrColor, sweAgentColor, masaiColor, coderColor],
            borderColor: [acrColor, sweAgentColor, masaiColor, coderColor,].map(x => x.replace(opacity, '1.0')),
            borderWidth: 1,
            categoryPercentage: 0.8, // Controls the width of the bars in the group
            barPercentage: 1 // Controls the width of each bar within its category
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

new Chart(resultsCtx, {
    type: 'bar',
    data: fullData,
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

new Chart(costCtx, {
    type: 'bar',
    data: cost,
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
        scales: scalesCost
    },
});