
/**
 *
 * Magazin App
 * 
 * 
 */
/*(function () {
    angular.module('magazin', ['ui.router','test'])
});*/

angular
    .module('magazin')
    .controller('homeController', HomeController);
function HomeController($scope)
{
    $scope.message = 'Everyone come and see how good I look!. Dolor ducimus blanditiis dolorem magnam ' +
    'laudantium totam rem magni non quos est repudiandae labore voluptates nam esse sed ipsa sed nostrum ' +
    'minima totam deserunt ipsum sapiente rerum quas voluptatem aut voluptatem rem nulla possimus tempore ' +
    'id fugiat repudiandae qui odit et id provident molestiae voluptates ex placeat ad ut est rem ipsa ' +
    'commodi accusantium fugiat voluptatum consequatur quod qui quos aut nulla ratione fugiat dignissimos ' +
    'totam sint quia voluptatem pariatur accusamus ullam consequatur qui fuga nulla magnam saepe beatae sed ' +
    'amet dignissimos doloremque nulla qui quae cumque in quis et vero fuga soluta non perferendis quis quae ' +
    'nemo tenetur repudiandae rerum ut rerum omnis deserunt perferendis id nihil iure velit est ut maxime porro' +
    ' ut neque ullam minima aut tempora iusto quasi ad et quasi libero qui earum ut quam quisquam ' +
    'unde odit numquam velit praesentium quisquam corrupti dolorem rerum nobis quaerat dolor voluptatem ' +
    'accusantium suscipit labore quia aspernatur et doloribus odio non praesentium dicta minima est' +
    ' blanditiis ad illum ex minus eos animi voluptates expedita sit dolores ab neque quod assumenda quisquam ' +
    'minus omnis est aut fugit incidunt aut qui sed impedit dolorem sit qui praesentium corrupti cum ut et et ' +
    'tempora autem placeat voluptatem odio eligendi ut harum dicta earum enim quidem quod esse cum accusamus ' +
    'laborum et eos cum voluptas quo qui rerum cupiditate voluptatibus velit distinctio dolor temporibus laboriosam ' +
    'accusantium voluptatum incidunt maiores possimus impedit est illo illum eos ' +
    'necessitatibus consequatur aspernatur placeat ullam mollitia illo ut dolor cum iste qui.';
}
