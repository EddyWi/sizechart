(function(document, Handlebars, SizeChart) {
    'use strict';

    var _changeUnits = '[data-action="change-units"]';
    var _unitOptions = _changeUnits + ' input';
    var _sizeChartInit = '[data-sizechart]';

    var SizingChart = function(element, config) {
        this.element = element;
        this.selectedCountry = {
            code: 'uk',
            name: 'UK Sizes'
        };
        // init
        this.initTemplates();
        this.bindEvents();
        this.removeCSS(); // disables Weblinc stylesheets for pop-ups size chart, not for page at /size-chart which loads via iFrame
    };

    var unwantedStyles = ["custom-min", "framework-min", "layout-min", "content-mobile-min", "site-1-min", "site-2-min"];
    var matched = function(sheet) {
        for (var i = 0; i < unwantedStyles.length; i++) {
            if (sheet.href && sheet.href.match(unwantedStyles[i])) {
                sheet.disabled = true;
            }
        }
    };

    SizingChart.prototype = {
        constructor: SizingChart,
        initTemplates: function() {
            Handlebars.partials = SizeChart.templates;
            var main = SizeChart.templates['main'];

            var getJSON = $.getJSON('/content/sizechart/dev/js/data.js');
            getJSON.done(function(res) {
                var $container = $('.container');
                var html = main(res);
                $container.append(html);
                $(document).trigger('template.loaded');
                new SizeCalculator();
            });
        },
        removeCSS: function() {
            for (var i = 0; i < document.styleSheets.length; i++) {
                matched(document.styleSheets[i]);
            }
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
            var _unitRefs = $('.change-units--radio');
            $this
                .attr('checked', true)
                .siblings()
                .attr('checked', false);

            this.toggleClasses($currentUnit);

            $.each(_unitRefs, function(index, unit){
                if ( $(unit).attr('value') === unitValue ) {
                     $(unit).prop('checked', 'checked');
                }
            });
        },
        changeCountry: function(e) {
            var $this = $(e.currentTarget);
            var currentCountry = $this.html();
            var currentCode = $this.data('countryTrigger');
            var $countrySelector = $this.closest('.size-chart')
                .find('[data-country="' + currentCode + '"]');
            this.toggleClasses($countrySelector);
            // If change comes from user mouse click
            // then change the current country and code
            if (e.originalEvent) {
                this.selectedCountry.name = currentCountry;
                this.selectedCountry.code = currentCode;
            }
        },
        buildCrossHairs: function(toggle, e) {
            var $this = $(e.currentTarget);
            var idx = $this.index() + 1;
            $this[toggle]('highlight active-highlight');
            $this.parent('tr')
                .find('td')[toggle]('passive-highlight')
                .end()
                .find('td:first')[toggle]('cr-highlight');

            $this.closest('table')
                .find('th:nth-child(' + idx + ')')[toggle]('passive-highlight cr-highlight'); // included highlight previously
        },
        enableCrossHairs: function(e) {
            var types = {
                'mouseenter': 'addClass',
                'mouseleave': 'removeClass'
            };
            return this.buildCrossHairs.call(this, types[e.type], e);
        },
        tabChangePersist: function() {
            var $selector = $('.is-active').find('a:contains(' + this.selectedCountry.name + ')');
            $selector.click();

            //_ref = "cm" or "inches"

            // @TODO: when I click on "inches" or "centimeters" on any page, update the "checked" value of the other 5 instances of the radio button

            // 0. _unitRefs has an array of all of the "inches" and "centimeters" buttons on the page
            // 1. read which button was clicked by checking its "value" attribute (will either return "inches" or "cm")
            // 2. find all other instances of the code that contain that value attribute and add the "Checked" attribute to each of them
        },
        bindEvents: function() {
            var i;
            var $element = $(this.element);
            var eventMap = {
                'change.units': [_unitOptions, $.proxy(this.convertUnits, this)],
                'click.country': ['[data-country-trigger]', $.proxy(this.changeCountry, this)],
                'mouseenter.table': ['td', $.proxy(this.enableCrossHairs, this)],
                'mouseleave.table': ['td', $.proxy(this.enableCrossHairs, this)],
                'tab.changed': $.proxy(this.tabChangePersist, this)
            };
            for (i in eventMap) {
                if (eventMap.hasOwnProperty(i)) {
                    if ($.isArray(eventMap[i])) {
                        $element.on(i, eventMap[i][0], eventMap[i][1]);
                    } else {
                        $element.on(i, eventMap[i]);
                    }
                }
            }
        }
    };

    return $(_sizeChartInit).each(function() {
        return new SizingChart(this);
    });

}(document, Handlebars, SizeChart));