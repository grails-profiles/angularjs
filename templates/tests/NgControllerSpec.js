describe("${moduleName} module", function() {
    var scope;

    beforeEach(angular.mock.module("${moduleName}", function() {
    }));

    beforeEach(angular.mock.inject(function(\$rootScope) {
        scope = \$rootScope.\$new();
    }));

    describe("${name}", function() {

        var ctrl;

        beforeEach(angular.mock.inject(function(\$controller) {
            ctrl = \$controller("${name}", {});
        }));

        it("should be tested", function() {
            expect(true).toEqual(false);
        });

    });

});
