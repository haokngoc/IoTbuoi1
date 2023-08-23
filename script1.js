const labels = ['Hai','Ba', 'Tư', 'Năm', 'Sáu', 'Bảy', 'CN']


const dataTem = {
    labels:labels,
    datasets: [
        {
            label: 'Nhiệt độ',
            backgroundColor: 'red',
            boderColor: 'blue',
            data: [26,30,28,34,36,37,30],
            tension: 0.4,
        },
    ],
}
const dataHum = {
    labels:labels,
    datasets: [
        {
            label: 'Độ ẩm',
            backgroundColor: 'blue',
            boderColor: 'blue',
            data: [61, 60, 62, 63, 61 ,65 ,70],
            tension: 0.4,
        },
    ],
}
const dataLight = {
    labels:labels,
    datasets: [
        {
            label: 'Ánh sáng',
            backgroundColor: 'Yellow',
            boderColor: 'blue',
            data: [200,300,250,338,356,237,430],
            tension: 0.4,
        },
    ],
}
const configTem = {
    type: 'line',
    data: dataTem,
}

const configHumi = {
    type: 'line',
    data: dataHum,
}

const configLight = {
    type: 'line',
    data: dataLight,
}

const canvasTem = document.getElementById('tem')
const chartTem = new Chart(canvasTem, configTem)

const canvasHumi = document.getElementById('humi')
const chartHumi = new Chart(canvasHumi, configHumi)

const canvasLight = document.getElementById('lgh')
const chartLight = new Chart(canvasLight, configLight)