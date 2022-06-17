//  import { computeStats } from "./data.js";

const ctx = document.getElementById("myChart");
const tipos = ["fuego", "aire", "agua", "tierra"]; //names
const cantidad = [2, 50, 30, 20]; 

//https://www.youtube.com/watch?v=eyTKJmN-I2o
// dentro de la const chart se instancia un objeto de clase chart, que recibe 2 parámetros: 1. el contexto donde capturo el id y 2. la configuración de los gráficos

const myChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: tipos,
    datasets: [
      {
        label: "CANTIDAD DE POKEMON",
        data: cantidad,
        backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(155, 102, 205)',
                
              ],
        borderColor: "rgb(255, 99, 132)",
      },
    ],
  },
});
