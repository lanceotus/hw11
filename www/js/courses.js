function GetCourseName(obj) {
	let course_name = ''

	while (obj.className != 'course_card') {
		obj = obj.parentElement
	}

	let names = obj.getElementsByClassName('course_card__name')
	if (names.length) {
		course_name = names[0].textContent
	}

	return course_name
}

function GetCourseDate(obj) {
	let course_date = ''

	while (obj.className != 'course_card') {
		obj = obj.parentElement
	}

	let dates = obj.getElementsByClassName('course_card__date_text')
	if (dates.length) {
		course_date = dates[0].textContent
	}

	return course_date
}

function CourseClick(event) {
	let obj = event.target
	let course_name = GetCourseName(obj)

	alert ('Страница курса "' +  course_name + '" пока не существует.')
	event.preventDefault()
}

function CourseMouseOver(event) {
	let obj = event.target
	let el = document.getElementsByClassName('info_box')[0]
	el.textContent = 'Курс "' + GetCourseName(obj) + '", начало: ' + GetCourseDate(obj)
	el.style.visibility = 'visible'
}

function CourseMouseOut(event) {
	let el = document.getElementsByClassName('info_box')[0]
	el.style.visibility = 'hidden'
}
