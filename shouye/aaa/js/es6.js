class Cat{
    constructor(n,c){
        this.name = n;
        this.color = c;
    }
    skill(){
        alert("卖萌");
    }
}

var cat1 = new Cat("小白","black");
cat1.skill();