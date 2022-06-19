//https://www.youtube.com/watch?v=eyTKJmN-I2o&ab_channel=carloscdev
//npm install chart.js  (https://www.npmjs.com/package/chart.js) npm ci
export const renderChart = (labels, data, canvas) => {

};


const context = document.getElementById('myChart')
const types = ['Fuego', 'Agua',]
const percen = [20,10]

//dentro de la constante myChart se instancia un objeto de clase chart, el cual recibe dos parámetros: 1. el contexto (donde se captura el ID de la etiqueta canvas) 2. configuración de los gráficos

const myChart = new Chart(context, {
    type: 'pie',
    data: {
        labels: types, 
        datasets: [{
            label: 'Porcentaje por Tipo de Pokémon',
            data: percen,
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
            ],

            borderColor: [
                'rgba(255, 99, 132,1)',
                'rgba(54, 162, 235,1)', 
            ],
            borderWidth: 1.5,

        }]
    }

})
