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

PalettoTestCase.prototype.testStory3 = function () {
    var engine = new Engine();
    engine.initBoard();
    assertEquals(true, engine.pick(6, 1));
    assertEquals(1, engine.getPlayerPions(1));
    assertEquals(35, engine.getBoardPions());
    var playerOneInventory = ['y'];

    assertEquals(playerOneInventory.toString(), engine.getPlayerInventory(1).toString());
};