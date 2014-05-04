/**
 * Odin - библиотека, добавляющая в javascript ООП в схожем с ООП-языками виде.
 * Позволяет определять классы, добавлять поля, методы (экземпляра и статические),
 * наследовать один класс от другого, создавать экземпляры класса.
 */

/**
 * @method Odin.def
 * Объявление класса.
 * @example
 *
 *      class MyClass{
 *          public String name;
 *
 *          public MyClass(name){
 *              this.name = name;
 *          }
 *
 *      }
 *
 *
 *
 *
 *      // Объявление класса
 *      Odin.def('MyClass', {
 *			// Конструктор класса
 *			constructor: function(cfg){
 *				this.name = cfg.name;
 *			},
 *
 *          staticMethods: {
 *              someStaticMethod: function(){
 *
 *              }
 *          },
 *
 *          staticFields: {
 *              frenchGreeting: 'Bonjour',
 *              englishGreeting: 'Hello'
 *          },
 *
 *          fields: {
 *              name: 'MyClassName'
 *          },
 *
 *          methods: {
 *              greeting: function(){
 *                  console.log(MyClass.frenchGreeting + ', ' + this.name);
 *
 * 					// вызов переопределенного метода из родительского класса
 *					this.greeting.callSuper();
 *              }
 *          }
 *      });
 *
 *      var myClass = Odin.create('MyClass');
 *      myClass.greeting(); // В консоли должно быть напечатано 'Bonjour, MyClass'
 *
 * @param {String} className Имя класса
 * @param {Object} config Объект, содержащий конфигурацию объявляемого класса.
 */


Odin = {

    def : function(className, config){
        window[className] = function(){
            this.name = config.fields.name;
            config.constructor();
            this.name = ;

        }
    }
};




function Class(a){
    this.a = a;
}


/**
 * @method Odin.create
 * Создание экземпляра класса.
 * @param {String} className Имя класса
 * @params {Object} config Объект, содержащий конфигурацию создаваемого экземпляра.
 * При создании объекта будет передан в конструктор класса.
 * @example
 *     Odin.create('MyClass', {name: 'Odin'});
 */