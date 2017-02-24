/**
 * Created by MKS on 24.02.2017.
 */
var names = ['Michail', 'Thomas', 'Wien', 'Derp', 'Herp', 'Alpha'];

var person = {
    name: 'Michi',
    greet: function () {
        names.forEach((name) => {
            console.log(this.name + ' says hi to ' + name);
        });
    }
};

var addStatement = (a, b) => console.log(a + b);

var addExpression = (a, b) => {
    console.log(a + b);
};

addStatement(6, 9);
addExpression(10, 13);