

// eslint-disable-next-line max-len
const employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
const nameCourse = 'Базовый React';

const command = employers.filter(name => name.trim())
					.map(name=>
						name.trim().charAt(0).toUpperCase()+ //только первые буквы - charAt(0) и toUpperCase() - большие
						name.trim().slice(1).toLowerCase());// А + ртем

console.log(command);
const data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase']
 };
 
 const { cash, react, react: [first], add } = data;
 
 const calcCash = everyCash => everyCash.reduce((prev, curr) => prev + curr);
//  console.log(calcCash([3, 8, 3]));
 const lesson = calcCash(cash);
//  console.log(lesson);
 
 function makeBusiness(director, allModule, gang, course, teacher = 'Максим') {
	const sumTech = [...react, ...add, 'и другие'];
	console.log(`Стартуем новый курс: ${course}. Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${allModule}
 Команда Академии: ${gang}
 Первое что изучим будет ${first}. Он очень похож на HTML!
 Технологии которые мы изучим:
 ${sumTech}`);
 }
 
 makeBusiness('Артем', lesson, command, nameCourse);