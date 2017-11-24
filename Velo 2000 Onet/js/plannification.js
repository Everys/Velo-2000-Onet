$(document).ready(function() {
		
		$('#plannification').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'Plannification',
				right: 'month,agendaWeek,agendaDay'
			},
			navLinks: false	, // can click day/week names to navigate views
			selectable: false,
			selectHelper: false,
			editable: false,
			eventLimit: true, // allow "more" link when too many events
			firstDay: 1,
			defaultDate: '2017-09-01',
			events: [
			
				{
					id: 'ppo',
					title: 'ppo',
					start: '2017-09-04',
					end: '2017-11-04',
					color: 'green',
				},
				
				{
					id: 'qa',
					title: 'qualite aerobique',
					start: '2017-09-04',
					end: '2017-10-02',
					color: 'blue'
				},
				
				{
					id: 'pa',
					title: 'PA',
					start: '2017-10-02',
					end: '2017-10-30',
					color: 'blue'
					
				},
				
				{
					id: 'pa',
					title: 'PA',
					start: '2017-10-30',
					end: '2017-11-27',
					color: 'blue'
					
				},
				
				{
					id : 'micro1',
					title: 'micro 1',
					start: '2017-09-04',
					end: '2017-09-11',
					color : 'gray'
				},
				
				{
					id: 'micro 2',
					title: 'micro 2',
					start: '2017-09-11',
					end: '2017-09-18',
					color: 'gray'
				},
				
				{
					id: 'micro 3',
					title: 'micro 3',
					start: '2017-09-18',
					end: '2017-09-25',
					color: 'gray'
				},
				
				{
					id: 'micro 4',
					title: 'micro 4',
					start: '2017-09-25',
					end: '2017-10-02',
					color: 'gray'
				},
				
				{
					title: 'Castonetoise',
					start: '2017-09-25',
					color: 'purple'
				},
				
				{
					title: 'voir séance',
					url : 'seanceJour.html',
					start: '2017-09-05',
					color: 'lightblue'
				},
				
				
			]
		});
		
	});