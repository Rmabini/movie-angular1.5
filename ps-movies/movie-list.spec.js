/**
 * Created by Roxanne on 08/07/2016.
 */
describe('The movieList components',function () {

    beforeEach(module('psMovies'));

    var movieList;

    beforeEach(inject(function($componentController){
        movieList = $componentController('movieList',{
            $scope:{}
        });
    }));

    it('can be created',function(){
        expect(movieList).toBeDefined();
        expect(movieList.$onInit).toBeDefined();
    });
});