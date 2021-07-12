// Создать класс SuperMath с методом check(obj), параметр obj которого имеет свойства X, Y, znak.

// Пример объекта: obj = { X:12, Y:3, znak: “/”}, возможные варианты znak=> + - / * %. При вводе znak нужно сделать проверку корректности ввода на возможные математические действия.

// Метод check должен подтвердить у пользователя хочет ли он произвести действие znak c Х и У. Если - да, сделать математическое действие znak(которое описано в классе), иначе - запросить ввод новых данных через метод input() с класса SuperMath.

// p = new SuperMath();
// p.check(obj); // --> no p.input() -> 3 prompt -> считает


class SuperMath {
    constructor(x, y, znak) {
        this.x = x;
        this.y = y;
        this.znak = znak;
    }

    check() {
        let checked = confirm(`Operate SuperMath?`);
        if (checked) {
            if (this.znak === "+") {
                console.log(this.summ());
            } else if (this.znak === "-") {
                console.log(this.diff());
            } else if (this.znak === "*") {
                console.log(this.gain());
            } else if (this.znak === "/") {
                console.log(this.separate());
            } else if (this.znak === "%") {
                console.log(this.separate() * 100);
            } else {
                console.log(`It's not operation.`)
            }
        } else {
            this.input();
        }
    }

    summ() {
        return this.x + this.y;
    }

    diff() {
        return this.x - this.y;
    }

    gain() {
        return this.x * this.y;
    }

    separate() {
        return this.x / this.y;
    }

    input() {
        let iks;
        let igrik;
        let oper;
        do {
            iks = prompt(`Please enter X`);
        } while (isNaN(+iks));
        do {
            igrik = +prompt(`Please enter Y`);
        } while (isNaN(+igrik) || +igrik == 0);
        do {
            oper = prompt(`Please enter ZNAK`);
        } while (oper != "+" && oper != "-" && oper != "/" && oper != "*" && oper != "%");

        this.x = +iks;
        this.y = +igrik;
        this.znak = oper;
        return this.check();
    }


}

let obj = new SuperMath(10, 20, "%");

obj.check();