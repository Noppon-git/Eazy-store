        window.onload = function() {
        line_Chart();
        };

		function showGraph(){
			var user_Click = document.getElementById("select_graph").value;
			console.log(user_Click);
			if(user_Click == "Bar Chart"){
				bar_Chart()
			}else if(user_Click == "Line Chart"){
				line_Chart()
			}
		}
		function line_Chart(){
		var xValues = [100,200,300,400,500,600,700,800,900,1000];
		new Chart("myChart", {
		type: "line",
		data: {
			labels: xValues,
			datasets: [{ 
			data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
			borderColor: "red",
			fill: false
			}, { 
			data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
			borderColor: "green",
			fill: false
			}, { 
			data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
			borderColor: "blue",
			fill: false
			}]
		},
		options: {
			legend: {display: false}
		}
		});
		}
		function bar_Chart(){
			const myChart = new Chart("myChart", {
				type: 'bar',
				data: {
					labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
					datasets: [{
						label: '# of Votes',
						data: [12, 19, 3, 5, 2, 3],
						backgroundColor: [
							'rgba(255, 99, 132, 0.2)',
							'rgba(54, 162, 235, 0.2)',
							'rgba(255, 206, 86, 0.2)',
							'rgba(75, 192, 192, 0.2)',
							'rgba(153, 102, 255, 0.2)',
							'rgba(255, 159, 64, 0.2)'
						],
						borderColor: [
							'rgba(255, 99, 132, 1)',
							'rgba(54, 162, 235, 1)',
							'rgba(255, 206, 86, 1)',
							'rgba(75, 192, 192, 1)',
							'rgba(153, 102, 255, 1)',
							'rgba(255, 159, 64, 1)'
						],
						borderWidth: 1
					}]
				},
				options: {
					scales: {
						y: {
							beginAtZero: true
						}
					}
				}
			});
		}

