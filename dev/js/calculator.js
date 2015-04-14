(function(window) {
    'use strict';
    var bra = {
        'sizes': [{
            'band': '30',
            'bust': '31',
            'cupSize': '30A'
    }, {
            'band': '30',
            'bust': '32',
            'cupSize': '30B'
    }, {
            'band': '31',
            'bust': '31',
            'cupSize': '30A'
    }, {
            'band': '31',
            'bust': '32',
            'cupSize': '30B'
    }, {
            'band': '32',
            'bust': '32',
            'cupSize': '32AA'
    }, {
            'band': '33',
            'bust': '32',
            'cupSize': '32AA'
    }, {
            'band': '32',
            'bust': '33',
            'cupSize': '32A'
    }, {
            'band': '33',
            'bust': '33',
            'cupSize': '32A'
    }, {
            'band': '32',
            'bust': '34',
            'cupSize': '32B'
    }, {
            'band': '33',
            'bust': '34',
            'cupSize': '32B'
    }, {
            'band': '32',
            'bust': '35',
            'cupSize': '32C'
    }, {
            'band': '33',
            'bust': '35',
            'cupSize': '32C'
    }, {
            'band': '32',
            'bust': '36',
            'cupSize': '32D'
    }, {
            'band': '33',
            'bust': '36',
            'cupSize': '32D'
    }, {
            'band': '32',
            'bust': '37',
            'cupSize': '32DD'
    }, {
            'band': '33',
            'bust': '37',
            'cupSize': '32DD'
    }, {
            'band': '33',
            'bust': '38',
            'cupSize': '32DDD'
    }, {
            'band': '34',
            'bust': '34',
            'cupSize': '34AA'
    }, {
            'band': '35',
            'bust': '34',
            'cupSize': '34AA'
    }, {
            'band': '34',
            'bust': '35',
            'cupSize': '34A'
    }, {
            'band': '35',
            'bust': '35',
            'cupSize': '34A'
    }, {
            'band': '34',
            'bust': '36',
            'cupSize': '34B'
    }, {
            'band': '35',
            'bust': '36',
            'cupSize': '34B'
    }, {
            'band': '34',
            'bust': '37',
            'cupSize': '34C'
    }, {
            'band': '35',
            'bust': '37',
            'cupSize': '34C'
    }, {
            'band': '34',
            'bust': '38',
            'cupSize': '34D'
    }, {
            'band': '35',
            'bust': '38',
            'cupSize': '34D'
    }, {
            'band': '34',
            'bust': '39',
            'cupSize': '34DD'
    }, {
            'band': '35',
            'bust': '39',
            'cupSize': '34DD'
    }, {
            'band': '34',
            'bust': '40',
            'cupSize': '34DDD'
    }, {
            'band': '35',
            'bust': '40',
            'cupSize': '34DDD'
    }, {
            'band': '36',
            'bust': '36',
            'cupSize': '36AA'
    }, {
            'band': '37',
            'bust': '36',
            'cupSize': '36AA'
    }, {
            'band': '36',
            'bust': '37',
            'cupSize': '36A'
    }, {
            'band': '37',
            'bust': '37',
            'cupSize': '36A'
    }, {
            'band': '36',
            'bust': '38',
            'cupSize': '36B'
    }, {
            'band': '37',
            'bust': '38',
            'cupSize': '36B'
    }, {
            'band': '36',
            'bust': '39',
            'cupSize': '36C'
    }, {
            'band': '37',
            'bust': '39',
            'cupSize': '36C'
    }, {
            'band': '36',
            'bust': '40',
            'cupSize': '36D'
    }, {
            'band': '37',
            'bust': '40',
            'cupSize': '36D'
    }, {
            'band': '36',
            'bust': '41',
            'cupSize': '36DD'
    }, {
            'band': '37',
            'bust': '41',
            'cupSize': '36DD'
    }, {
            'band': '36',
            'bust': '42',
            'cupSize': '36DDD'
    }, {
            'band': '37',
            'bust': '42',
            'cupSize': '36DDD'
    }, {
            'band': '38',
            'bust': '38',
            'cupSize': '38AA'
    }, {
            'band': '39',
            'bust': '38',
            'cupSize': '38AA'
    }, {
            'band': '38',
            'bust': '39',
            'cupSize': '38A'
    }, {
            'band': '39',
            'bust': '39',
            'cupSize': '38A'
    }, {
            'band': '38',
            'bust': '40',
            'cupSize': '38B'
    }, {
            'band': '39',
            'bust': '40',
            'cupSize': '38B'
    }, {
            'band': '38',
            'bust': '41',
            'cupSize': '38C'
    }, {
            'band': '39',
            'bust': '41',
            'cupSize': '38C'
    }, {
            'band': '38',
            'bust': '42',
            'cupSize': '38D'
    }, {
            'band': '39',
            'bust': '42',
            'cupSize': '38D'
    }, {
            'band': '38',
            'bust': '43',
            'cupSize': '38DD'
    }, {
            'band': '39',
            'bust': '43',
            'cupSize': '38DD'
    }, {
            'band': '38',
            'bust': '44',
            'cupSize': '38DDD'
    }, {
            'band': '39',
            'bust': '44',
            'cupSize': '38DDD'
    }, {
            'band': '40',
            'bust': '40',
            'cupSize': '40AA'
    }, {
            'band': '40',
            'bust': '41',
            'cupSize': '40A'
    }, {
            'band': '40',
            'bust': '42',
            'cupSize': '40B'
    }, {
            'band': '40',
            'bust': '43',
            'cupSize': '40C'
    }, {
            'band': '40',
            'bust': '44',
            'cupSize': '40D'
    }, {
            'band': '40',
            'bust': '45',
            'cupSize': '40DD'
    }, {
            'band': '40',
            'bust': '46',
            'cupSize': '40DDD'
    }]
    };

    var getById = document.getElementById.bind(document);
    var ErrorHandler = function(customError) {
        this.errorStr = customError || 'Please check your measurements above and try again. <br> Enter a band size between 30 & 40. <br> Enter a cup size between 31 & 46.';
        this.errorTag = getById('error');
    };

    ErrorHandler.prototype.triggerError = function() {
        this.errorTag.innerHTML = this.errorStr;
        return '--';
    };

    ErrorHandler.prototype.clearError = function() {
        this.errorTag.textContent = '';
    };

    var SizeCalculator = function() {
        this.results = getById('results');
        this.bandSize = getById('band-size');
        this.bustSize = getById('bust-size');
        this.errorHandler = new ErrorHandler();

        this.bindEvents();
    };

    SizeCalculator.prototype.calculateSize = function() {
        var i = 0;
        var l = bra.sizes.length;
        var cupSize;
        var bandSizeVal = this.bandSize.value;
        var bustSizeVal = this.bustSize.value;
        this.errorHandler.clearError();
        if (bustSizeVal === '' && bandSizeVal !== '') {
            return;
        }
        if (bandSizeVal.length < 2 || bustSizeVal.length < 2) {
            return;
        }
        for (i; i < l; i++) {
            if (bra.sizes[i].band === bandSizeVal && bra.sizes[i].bust === bustSizeVal) {
                cupSize = bra.sizes[i].cupSize;
            }
        }
        this.results.value = cupSize || this.errorHandler.triggerError();
    };

    SizeCalculator.prototype.bindEvents = function() {
        this.bandSize.addEventListener('keyup', this.calculateSize.bind(this));
        this.bustSize.addEventListener('keyup', this.calculateSize.bind(this));
    };

    window.SizeCalculator = SizeCalculator;

})(window);