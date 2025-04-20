class Person {
    constructor(name, age, gender) {
        if (typeof age != 'number' || age < 0) {
            throw new Error('Возраст не может быть отрицательным');
        }
        if (gender.toLowerCase() != 'мужской' && gender !== 'женский') {
            throw new Error('Введите корректный возраст ( мужской или женский)');
        }

        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    introduce() {
        alert(`Привет, меня зовут ${this.name}, мне ${this.age} лет.`);
    }

    isAdult() {
        return this.age >= 18;
    }
}

class Student extends Person {
    constructor(name, age, gender, major, gpa = 0) {
        super(name, age, gender);

        if (typeof gpa != 'number' || gpa < 0 || gpa > 4) {
            throw new Error('Средний балл должен быть числом от 0 до 4');
        }

        this.major = major;
        this.gpa = gpa;
    }

    study() {
        alert(`${this.name} учится на специальности ${this.major}.`);
    }

    improveGPA(points) {
        if (typeof points != 'number' || points < 0) {
            throw new Error('Балл должен быть положительным числом');
        }

        this.gpa += points;
        if (this.gpa > 4) {
            this.gpa = 4;
        }
        return this.gpa;
    }

    introduce() {
        super.introduce();
        alert(`Я учусь на специальности ${this.major}, мой средний балл: ${this.gpa}.`);
    }
}


const person = new Person('Анастасия', 24, 'женский');
person.introduce();
console.log('Совершеннолетний:', person.isAdult());

const student = new Student('Алексей', 33, 'мужской', 'Java core', 3);
student.introduce();
student.study();
student.improveGPA(0.8);
console.log('Новый GPA:', student.gpa);

