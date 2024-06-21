const fullCtx = document.getElementById('results-full-chart');
const liteCtx = document.getElementById('results-lite-chart');

const opacity = '0.4';
const acrColor = `rgba(200, 30, 0, ${opacity})`;
const coderColor = `rgba(128, 159, 64, ${opacity})`;
const devinColor = `rgba(75, 192, 192, ${opacity})`;
const masaiColor = `rgba(32, 192, 128, ${opacity})`;
const ibmColor = `rgba(0, 45, 156, ${opacity})`;
const amazonQColor = `rgba(255, 153, 0, ${opacity})`;

const colorGrid = `rgba(138,138,142, ${opacity})`;

const scales = {
    x: {
        beginAtZero: true,
        title: {
            display: true,
            text: 'Success Rate(%)',
            font: {
                size: (c) => { if (window.innerWidth < 500) return '8ch'; else if (window.innerWidth < 1000) { return '10vw'; } else { return '20vw' }; },
                family: 'Inter',
                weight: 'bold'
            }
        },
        ticks: {
            font: {
                size: (c) => { if (window.innerWidth < 500) return '8ch'; else if (window.innerWidth < 1000) { return '10vw'; } else { return '20vw' }; }  // You can adjust this value to the desired tick size
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
                size: (c) => { if (window.innerWidth < 500) return '8ch'; else if (window.innerWidth < 1000) { return '10vw'; } else { return '20vw' }; },
                family: 'Inter',
                weight: 'bold'
            }
        },
        ticks: {
            font: {
                size: (c) => { if (window.innerWidth < 500) return '8ch'; else if (window.innerWidth < 1000) { return '10vw'; } else { return '12vw' }; }, // You can adjust this value to the desired tick size
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