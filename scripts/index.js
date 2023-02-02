const barChart = document.querySelector('.bar-chart');

fetch('data.json')
    .then((response) => response.json())
    .then((json) => {
        json.forEach((datum) => {
            let bar = document.createElement('div');
            bar.classList.add('bar');
            bar.style.height = `${datum.amount*2.2}px`;
            bar.setAttribute('data-hover', `$${datum.amount}`)
            barChart.appendChild(bar);
        });

        json.forEach((datum) => {
            let day = document.createElement('p');
            day.classList.add('label');
            day.textContent = datum.day;
            barChart.appendChild(day);
        })
    });






