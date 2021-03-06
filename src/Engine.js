'use strict';

var Engine = function () {

    // private attributes and methods
    var _board = new Array(36);
    var _currentPlayer = 1;
    var _boardPions = 0;
    var _playerOneInventory = new Array();
    var _playerTwoInventory = new Array();

    var checkPick = function (row, column) {

        var piece = _board[(row - 1) * 6 + column - 1];
        var position = (row - 1) * 6 + column - 1;

        if ((row == 1 || row == 6) && (column == 1 || column == 6)) {
            return true;
        }

        if (row == 1 && _board[position - 1] != '' && _board[position + 1] != '' && _board[position + 6] != '') {
            return false;
        }

        if (row == 6 && _board[position - 1] != '' && _board[position + 1] != '' && _board[position - 6] != '') {
            return false;
        }

        if(column == 1 && _board[position - 6] != '' && _board[position + 6] != '' && _board[position + 1] != '') {
            return false;
        }

        if(column == 6 && _board[position - 6] != '' && _board[position + 6] != '' && _board[position - 1] != '') {
            return false;
        }

        var piecesArround = 0;

        if(_board[position - 1] != '') {
            piecesArround++;
        }
        if(_board[position + 1] != '') {
            piecesArround++;
        }
        if(_board[position - 6] != '') {
            piecesArround++;
        }
        if(_board[position + 6] != '') {
            piecesArround++;
        }

        if(piecesArround > 2) {
            return false;
        }

        if((_board[position - 1] != '' && _board[position + 1] != '') ||
            (_board[position - 6] != '' && _board[position + 6] != '') ||
            (_board[position - 6] != '' && _board[position + 1] != '' && _board[position - 5] == '') ||
            (_board[position + 6] != '' && _board[position + 1] != '' && _board[position + 7] == '') ||
            (_board[position + 6] != '' && _board[position - 1] != '' && _board[position + 5] == '') ||
            (_board[position - 6] != '' && _board[position - 1] != '' && _board[position - 7] == '')) {
            return false;
        }

        return true;
    };

    // public methods
    this.initBoard = function() {
        _board[2] = 'w', _board[5] = 'w', _board[7] = 'w', _board[15] = 'w', _board[23] = 'w', _board[24] = 'w';
        _board[0] = 'd', _board[16] = 'd', _board[19] = 'd', _board[27] = 'd', _board[32] = 'd', _board[35] = 'd';
        _board[1] = 'g', _board[8] = 'g', _board[21] = 'g', _board[25] = 'g', _board[29] = 'g', _board[34] = 'g';
        _board[3] = 'b', _board[11] = 'b', _board[12] = 'b', _board[14] = 'b', _board[22] = 'b', _board[31] = 'b';
        _board[4] = 'r', _board[9] = 'r', _board[17] = 'r', _board[18] = 'r', _board[20] = 'r', _board[33] = 'r';
        _board[6] = 'y', _board[10] = 'y', _board[13] = 'y', _board[26] = 'y', _board[28] = 'y', _board[30] = 'y';

        _boardPions = 36;
    };

    this.checkBoardDisposition = function () {
        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 6; j++) {
                var piece = _board[i * 6 + j];
                if (j != 0 && piece == _board[i * 6 + j - 1]) {
                    console.log(i + " " + j + " " + piece + " " + _board[i * 6 + j - 1]);
                    return false;
                }
                if (i != 5 && piece == _board[(i + 1) * 6 + j]) {
                    console.log(i + " " + j + " " + piece + " " + _board[(i + 1) * 6 + j]);
                    return false;
                }
            }
        }

        return true;
    };

    this.pick = function (row, column) {
        if (!checkPick(row, column)) {
            return false;
        }

        if(_currentPlayer == 1) {
            _playerOneInventory.push(_board[(row - 1) * 6 + column - 1]);
        } else {
            _playerTwoInventory.push(_board[(row - 1) * 6 + column - 1])
        }

        _board[(row - 1) * 6 + column - 1] = '';
        _boardPions--;

        return true;
    };

    this.getPlayerOneInventory = function () {
        return _playerOneInventory.toString();
    };

    this.getPlayerTwoInventory = function () {
        return _playerTwoInventory.toString();
    };

    this.getPlayerOnePions = function () {
        return _playerOneInventory.length;
    };

    this.getPlayerTwoPions = function () {
        return _playerTwoInventory.length;
    };

    this.getBoardPions = function () {
        return _boardPions;
    };

    this.switchPlayer = function () {
        _currentPlayer = _currentPlayer == 1 ? 2 : 1;
        return _currentPlayer;
    };
};
