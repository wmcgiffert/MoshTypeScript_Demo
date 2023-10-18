// //Decorators have since changed and dont work like this anymore
// function Component(constructor: Function){
//     console.log('Component decorator called');
//     Object.seal(constructor);
//     Object.seal(constructor.prototype.uniqueId = Date.now());
//     Object.seal(constructor.prototype.insertInDom = () => {
//         console.log('Inserting in DOM');
//     });
// }
// @Component
// class ProfileComponent{
// }
