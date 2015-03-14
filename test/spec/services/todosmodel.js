'use strict';

describe('Service: todosModel', function () {

  // load the service's module
  beforeEach(module('yeomanTutorialSimpleApp'));

  // instantiate service
  var todosModel;
  beforeEach(inject(function (_todosModel_) {
    todosModel = _todosModel_;
  }));

  it('should do something', function () {
    expect(!!todosModel).toBe(true);
  });

});
