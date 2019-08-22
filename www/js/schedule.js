function CourseTabClick(event) {
	// получаем выбранную вкладку, и если она уже активна, то выходим
	let obj = event.target
	let obj_classes = obj.classList
	if (obj_classes.contains('schedule__course_tab_active')) {
		return
	}

	// все вкладки делаем неактивными, потом выбранную делаем активной
	let active_tabs = document.getElementsByClassName('schedule__course_tab_active')
	for (let i = 0; i < active_tabs.length; i ++) {
		active_tabs[i].classList.remove('schedule__course_tab_active')
	}
	obj_classes.add('schedule__course_tab_active')

	// делаем все дивы с описанием курсов неактивными; див, соответствующий выбранной вкладке, делаем активным
	let tab_data_id = obj.getAttribute('data-id')
	let tab_id = tab_data_id.slice(tab_data_id.indexOf('_') + 1)
	let course_bodies = document.getElementsByClassName('schedule__course_body')
	for (let i = 0; i < course_bodies.length; i ++) {
		let body = course_bodies[i]

		let body_classes = body.classList
		if (body_classes.contains('schedule__course_body_active')) {
			body_classes.remove('schedule__course_body_active')
		}

		let body_data_id = body.getAttribute('data-id')
		let body_id = body_data_id.slice(body_data_id.indexOf('_') + 1)
		if (body_id === tab_id) {
			body_classes.add('schedule__course_body_active')
		}
	}

	// сворачиваем все уроки
	ReduceLessons()
}

function LessonClick(event) {
	// получаем див урока (событие могло возникнуть не на нём, а на его потомке)
	let obj = event.target
	while (!obj.classList.contains('schedule__lesson')) {
		obj = obj.parentElement
	}

	// если урок активен, делаем его неактивным, иначе делаем активным, сделав неактивными все остальные
	let obj_classes = obj.classList
	if (obj_classes.contains('schedule__lesson_active')) {
		obj_classes.remove('schedule__lesson_active')
		obj.getElementsByClassName('schedule__lesson_body')[0].style.display = 'none'
	}
	else {
		ReduceLessons()
		obj.classList.add('schedule__lesson_active')
		obj.getElementsByClassName('schedule__lesson_body')[0].style.display = 'block'
	}
}

function ReduceLessons() {
	// перекрашиваем все уроки в неактивный цвет
	let lessons = document.getElementsByClassName('schedule__lesson')
	for (let i = 0; i < lessons.length; i ++) {
		lessons[i].classList.remove('schedule__lesson_active')
	}

	// сворачиваем содержимое всех уроков
	let lessons_bodies = document.getElementsByClassName('schedule__lesson_body')
	for (let i = 0; i < lessons_bodies.length; i ++) {
		lessons_bodies[i].style.display = 'none'
	}
}
