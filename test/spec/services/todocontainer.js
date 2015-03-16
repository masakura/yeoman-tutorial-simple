'use strict';

describe('Service: todoContainer', function () {

  // load the service's module
  beforeEach(module('yeomanTutorialSimpleApp'));

  // instantiate service
  var todoContainer;
  beforeEach(inject(function (_todoContainer_) {
    todoContainer = _todoContainer_;
  }));

  it('should do something', function () {
    expect(!!todoContainer).toBe(true);
  });

});
