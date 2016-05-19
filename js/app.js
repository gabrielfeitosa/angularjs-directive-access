(function(){
    
    angular.module('acesso',[])
    .directive('permissaoAcesso', function(){
        return {
            restrict: 'A',
            link: function ($scope, element, attrs) {
                console.log(element);
                if (attrs.permissaoAcesso === 'block') {
                    element.attr('disabled', 'disabled');
                    element.append('<span class="block fa fa-lock"></span>');
                }
            }
        };
    });
})();