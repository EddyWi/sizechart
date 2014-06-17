(function(document, Handlebars, SizeChart) {
    'use strict';
    Handlebars.partials = SizeChart.templates;
    var main = SizeChart.templates['main'];

    var getJSON = $.getJSON('./dev/js/data.json');
    getJSON.done(function(res) {
        var $container = $('.container');
        var html = main(res);
        $container.append(html);
    });

    var changeUnits = '[data-action="change-units"]';
    var unitOptions = changeUnits + ' input';

    //defaults with selected country
    var selectedCountry = {
        code: 'uk',
        name: 'UK Sizes',
        changed: false
    };


    var toggleClasses = function($selector) {
        $selector
            .siblings('.is-active')
            .toggleClass('is-active is-hidden')
            .end()
            .toggleClass('is-hidden is-active');
    };

    var convertUnits = function() {
        var $this = $(this);
        var unitValue = $this.val();
        var $currentUnit = $('[data-unit="' + unitValue + '"]');
        $this
            .attr('checked', true)
            .siblings()
            .attr('checked', false);

        toggleClasses($currentUnit);
    };

    var changeCountry = function() {
        var $this = $(this);
        var toggle = $('[data-toggle="dropdown"]').html();
        if (this.innerHTML === toggle) return; // jshint ignore:line
        var currentCountry = selectedCountry.code = $this.data('countryTrigger');
        var $countrySelector = $this.closest('.size-chart')
            .find('[data-country="' + currentCountry + '"]');

        toggleClasses($countrySelector);
        selectedCountry.changed = true;
    };

    var crossHairs = function(toggle) {
        var $this = $(this);
        var idx = $this.index() + 1;
        $this.parent('tr')
            .find('td')[toggle]('highlight');

        $this.closest('table')
            .find('th:nth-child(' + idx + ')')[toggle]('highlight')
            .end()
            .find('td:nth-child(' + idx + ')')[toggle]('highlight');
    };

    var toggleMouse = function(e) {
        var types = {
            'mouseenter': 'addClass',
            'mouseleave': 'removeClass'
        };
        return crossHairs.call(this, types[e.type]);
    };

    $(document)
        .on('change.units', unitOptions, convertUnits)
        .on('click.country', '[data-country-trigger]', changeCountry)
        .on('mouseenter.table', 'td', toggleMouse)
        .on('mouseleave.table', 'td', toggleMouse)
        .on('tab.changed', function() {
            if (selectedCountry.changed) {
                var $country = $('[data-country-trigger="' + selectedCountry.code + '"]');
                selectedCountry.name = $country.html();
                $('[data-toggle="dropdown"]').text(selectedCountry.name);
                var $countrySelector = $('[data-country="' + selectedCountry.code + '"]');
                toggleClasses($countrySelector);
                selectedCountry.changed = false;
            }
        });


}(document, Handlebars, SizeChart));