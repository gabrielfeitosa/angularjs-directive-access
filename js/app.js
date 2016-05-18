(function(){
    
    angular.module('acesso',[])
    .directive('acesso', function(){
        return {
            restrict: 'A',
            link: function ($scope, element, attrs) {
                if (attrs.permissao === 'block') {
                    element.attr('disabled', 'disabled');
                    element.append('<span class="block fa fa-lock"></span>');
                }
            }
        };
    });
})();