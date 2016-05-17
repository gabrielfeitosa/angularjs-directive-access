(function(){
    
    angular.module('acesso',[])
    .directive('acesso', function($compile){
        var directive = {
            restrict: 'A',
            link: function ($scope, element, attrs) {
                function createWrapper() {
                    var div = angular.element('<div />');
                    div.attr('class', 'permissao');
                    div.attr('title', 'Bloqueado');
                    return div;
                }

                if (attrs.permissao === 'block') {
                    var wrapper = createWrapper();
                    element.wrap(wrapper);
                    element.attr('disabled', 'disabled');
                    element.append('<span class="block fa fa-lock"></span>');
                    element.removeAttr('acesso');
                    $compile(element.parent())($scope);
                }
            }
        };
        return directive;
        
    });
})();