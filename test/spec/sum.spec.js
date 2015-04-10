/* Sum function test */
define(['sum'],function(Sum){
	'use strict';

	describe('Sum tests', function (){
		describe('Another summary', function () {
			it('adds 1 and 2 to equal 3', function(){
				expect(Sum(1,2)).toBe(3);
			})
		}); 
	});
	
});
