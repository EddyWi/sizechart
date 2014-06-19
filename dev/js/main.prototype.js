(function(document, Handlebars, SizeChart) {
    'use strict';

    var _changeUnits = '[data-action="change-units"]';
    var _unitOptions = _changeUnits + ' input';
    var _sizeChartInit = '[data-sizechart]';

    var SizingChart = function(element, config) {
        this.element = element;
        //defaults with selected country
        this.selectedCountry = {
            code: 'uk',
            name: 'UK Sizes',
            changed: false
        };
        // init
        this.initTemplates();
        this.bindEvents();
    };

    SizingChart.prototype = {
        constructor: SizingChart,
        initTemplates: function() {
            Handlebars.partials = SizeChart.templates;
            var main = SizeChart.templates['main'];

            var getJSON = $.getJSON('./dev/js/data.json');
            getJSON.done(function(res) {
                var $container = $('.container');
                var html = main(res);
                $container.append(html);
            });
        },
        toggleClasses: function($selector) {
            $selector
                .siblings('.is-active')
                .removeClass('is-active').addClass('is-hidden')
                .end()
                .removeClass('is-hidden').addClass('is-active');
        },
        convertUnits: function(e) {
            var $this = $(e.currentTarget);
            var unitValue = $this.val();
            var $currentUnit = $('[data-unit="' + unitValue + '"]');
            $this
                .attr('checked', true)
                .siblings()
                .attr('checked', false);

            this.toggleClasses($currentUnit);
        },
        changeCountry: function(e) {
            var $this = $(e.currentTarget);
            var toggle = $('[data-toggle="dropdown"]').html();
            if (this.innerHTML === toggle) return; // jshint ignore:line
            var currentCountry = this.selectedCountry.code = $this.data('countryTrigger');
            var $countrySelector = $this.closest('.size-chart')
                .find('[data-country="' + currentCountry + '"]');

            this.toggleClasses($countrySelector);
            this.selectedCountry.changed = true;
        },
        buildCrossHairs: function(toggle, e) {
            var $this = $(e.currentTarget);
            var idx = $this.index() + 1;
            $this.parent('tr')
                .find('td')[toggle]('highlight')
                .end()
                .find('td:first')[toggle]('marked');
                
            $this[toggle]('marked');
            
            $this.closest('table')
                .find('th:nth-child(' + idx + ')')[toggle]('highlight marked')
                .end()
                .find('td:nth-child(' + idx + ')')[toggle]('highlight');
        },
        enableCrossHairs: function(e) {
            var types = {
                'mouseenter': 'addClass',
                'mouseleave': 'removeClass'
            };
            return this.buildCrossHairs.call(this, types[e.type], e);
        },
        changeTabPersist: function() {
            if (this.selectedCountry.changed) {
                var $country = $('[data-country-trigger="' + this.selectedCountry.code + '"]');
                $country.closest('.dropdown-menu').children().removeClass('is-active');
                $country.parent().addClass('is-active');
                this.selectedCountry.name = $country.html();
                $('[data-toggle="dropdown"]').text(this.selectedCountry.name);
                var $countrySelector = $('[data-country="' + this.selectedCountry.code + '"]');
                this.toggleClasses($countrySelector);
                this.selectedCountry.changed = false;
            }
        },
        bindEvents: function() {
            $(this.element)
                .on('change.units', _unitOptions, $.proxy(this.convertUnits, this))
                .on('click.country', '[data-country-trigger]', $.proxy(this.changeCountry, this))
                .on('mouseenter.table', 'td', $.proxy(this.enableCrossHairs, this))
                .on('mouseleave.table', 'td', $.proxy(this.enableCrossHairs, this))
                .on('tab.changed', $.proxy(this.changeTabPersist, this));
        }
    };

    return $(_sizeChartInit).each(function() {
        return new SizingChart(this);
    });

}(document, Handlebars, SizeChart));