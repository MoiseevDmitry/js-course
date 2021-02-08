function myFirstApp(name, age) {
	alert(`Привет, меня зовут ${name} и это моя первая программа!`);
	
	function showSkills() {
		let skills = ['html', 'css', 'js', 'sql'];
		for (let i = 0; i < skills.length; i++) {
			alert(`Я владею: ${skills[i]}`)
		}
	}
		
	function checkAge() {
		if (age > 18) {
			alert('У тебя отличные шансы стать разработчиком!');
		} else {
			alert('Подрасти еще!');
		}
	}
	
	function calcPow() {
		let num = prompt('Введите число', '');
		console.log(num * num);
	}
	
	showSkills();
	checkAge();
	calcPow();
}

myFirstApp('dmitry', 12);
