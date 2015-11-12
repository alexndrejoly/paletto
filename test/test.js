'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

PalettoTestCase.prototype.testStory1 = function () {
    var engine = new Engine();
    engine.initBoard();
    assertEquals(true, engine.checkBoardDisposition());
};

PalettoTestCase.prototype.testStory2 = function () {
    var engine = new Engine();
    engine.initBoard();
    assertEquals(true, engine.pick(6, 1));
    assertEquals(false, engine.pick(1, 3));
};