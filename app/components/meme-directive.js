/**
 * Created by Doug on 12/4/2015.
 */
/*
var _getAllFilesFromFolder = function(dir) {
    var filesystem = require("fs");
    var results = [];
    filesystem.readdirSync(dir).forEach(function(file) {
        file = dir+'/'+file;
        var stat = filesystem.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(_getAllFilesFromFolder(file))
        } else results.push(file);
    });
    return results;
};
*/
angular.module("myApp.imgcontrol", [])
    .controller('imgcontrol', ['$scope', function($scope) {
        console.log("CAT");
        $scope.imgfiles = ['imgs/doge/0d2.jpg',
            'imgs/doge/10e.gif',
            'imgs/doge/307.jpg',
            'imgs/doge/3a7.jpg',
            'imgs/doge/828.jpg',
            'imgs/doge/8a5.png',
            'imgs/doge/8b7.png',
            'imgs/doge/d1.jpeg',
            'imgs/doge/d2.png',
            'imgs/doge/d3.jpg',
            'imgs/doge/d4.jpeg']

    }]);

angular.module("myApp.backimg", ['myApp.imgcontrol'])
.directive('backimg', function(){
    return function(scope, element, attrs){
        attrs.$observe('backimg', function(value) {
            element.css({
                'background-image': 'url(' + value +')',
                'background-repeat' : 'no-repeat',
                'background-size' : 'contain'
            });
        });
    };
});
