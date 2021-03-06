this.SizeChart = this.SizeChart || {}, this.SizeChart.templates = this.SizeChart.templates || {}, this.SizeChart.templates.bottoms = this.SizeChart.templates.bottoms || {}, this.SizeChart.templates.bottoms.cn = Handlebars.template(function (a, r, n, t, o) {
    function e(a, r) {
        var t, o, e, m = "";
        return m += '\n            <tr>\n                <td class="uppercase">\n                    ', (o = n.size) ? t = o.call(a, {hash: {}, data: r}) : (o = a && a.size, t = typeof o === b ? o.call(a, {hash: {}, data: r}) : o), m += w(t) + "\n                </td>\n                <td>\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: z.noop, fn: z.program(2, i, r), data: r}, t = o ? o.call(a, a && a.us, e) : S.call(a, "loopArr", a && a.us, e), (t || 0 === t) && (m += t), m += "\n                </td>\n                <td>\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: z.noop, fn: z.program(4, l, r), data: r}, t = o ? o.call(a, a && a.uk, e) : S.call(a, "loopArr", a && a.uk, e), (t || 0 === t) && (m += t), m += "\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: z.noop, fn: z.program(6, s, r), data: r}, t = o ? o.call(a, a && a.australia, e) : S.call(a, "loopArr", a && a.australia, e), (t || 0 === t) && (m += t), m += "\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: z.noop, fn: z.program(8, p, r), data: r}, t = o ? o.call(a, a && a.china, e) : S.call(a, "loopArr", a && a.china, e), (t || 0 === t) && (m += t), m += "\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: z.noop, fn: z.program(10, d, r), data: r}, t = o ? o.call(a, a && a.germany, e) : S.call(a, "loopArr", a && a.germany, e), (t || 0 === t) && (m += t), m += "\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: z.noop, fn: z.program(12, h, r), data: r}, t = o ? o.call(a, a && a.spain, e) : S.call(a, "loopArr", a && a.spain, e), (t || 0 === t) && (m += t), m += "\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: z.noop, fn: z.program(14, c, r), data: r}, t = o ? o.call(a, a && a.italy, e) : S.call(a, "loopArr", a && a.italy, e), (t || 0 === t) && (m += t), m += "\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: z.noop, fn: z.program(16, u, r), data: r}, t = o ? o.call(a, a && a.russia, e) : S.call(a, "loopArr", a && a.russia, e), (t || 0 === t) && (m += t), m += "\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: z.noop, fn: z.program(18, v, r), data: r}, t = o ? o.call(a, a && a.france, e) : S.call(a, "loopArr", a && a.france, e), (t || 0 === t) && (m += t), m += "\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: z.noop, fn: z.program(20, f, r), data: r}, t = o ? o.call(a, a && a.japan, e) : S.call(a, "loopArr", a && a.japan, e), (t || 0 === t) && (m += t), m += "\n                </td>\n                <td>\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: z.noop, fn: z.program(2, i, r), data: r}, t = o ? o.call(a, a && a.denim, e) : S.call(a, "loopArr", a && a.denim, e), (t || 0 === t) && (m += t), m += "\n                </td>\n                <td>\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: z.noop, fn: z.program(22, g, r), data: r}, t = o ? o.call(a, a && a["drop-waist"], e) : S.call(a, "loopArr", a && a["drop-waist"], e), (t || 0 === t) && (m += t), m += "\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: z.noop, fn: z.program(24, y, r), data: r}, t = o ? o.call(a, a && a["drop-waist-cm"], e) : S.call(a, "loopArr", a && a["drop-waist-cm"], e), (t || 0 === t) && (m += t), m += "\n                </td>\n                <td>\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: z.noop, fn: z.program(22, g, r), data: r}, t = o ? o.call(a, a && a.hips, e) : S.call(a, "loopArr", a && a.hips, e), (t || 0 === t) && (m += t), m += "\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: z.noop, fn: z.program(24, y, r), data: r}, t = o ? o.call(a, a && a["hips-cm"], e) : S.call(a, "loopArr", a && a["hips-cm"], e), (t || 0 === t) && (m += t), m += "\n                </td>\n            </tr>\n        "
    }

    function i(a) {
        var r = "";
        return r += "\n                        <div>" + w(typeof a === b ? a.apply(a) : a) + "</div>\n                    "
    }

    function l(a) {
        var r = "";
        return r += '\n                        <div data-country="uk" class="is-hidden">' + w(typeof a === b ? a.apply(a) : a) + "</div>\n                    "
    }

    function s(a) {
        var r = "";
        return r += '\n                        <div data-country="au" class="is-hidden">' + w(typeof a === b ? a.apply(a) : a) + "</div>\n                    "
    }

    function p(a) {
        var r = "";
        return r += '\n                        <div data-country="ch" class="is-active">' + w(typeof a === b ? a.apply(a) : a) + "</div>\n                    "
    }

    function d(a) {
        var r = "";
        return r += '\n                        <div data-country="de" class="is-hidden">' + w(typeof a === b ? a.apply(a) : a) + "</div>\n                    "
    }

    function h(a) {
        var r = "";
        return r += '\n                        <div data-country="es" class="is-hidden">' + w(typeof a === b ? a.apply(a) : a) + "</div>\n                    "
    }

    function c(a) {
        var r = "";
        return r += '\n                        <div data-country="it" class="is-hidden">' + w(typeof a === b ? a.apply(a) : a) + "</div>\n                    "
    }

    function u(a) {
        var r = "";
        return r += '\n                        <div data-country="ru" class="is-hidden">' + w(typeof a === b ? a.apply(a) : a) + "</div>\n                    "
    }

    function v(a) {
        var r = "";
        return r += '\n                        <div data-country="fr" class="is-hidden">' + w(typeof a === b ? a.apply(a) : a) + "</div>\n                    "
    }

    function f(a) {
        var r = "";
        return r += '\n                        <div data-country="jp" class="is-hidden">' + w(typeof a === b ? a.apply(a) : a) + "</div>\n                    "
    }

    function g(a) {
        var r = "";
        return r += '\n                        <div data-unit="inches" class="is-active">' + w(typeof a === b ? a.apply(a) : a) + '"</div>\n                    '
    }

    function y(a) {
        var r = "";
        return r += '\n                        <div data-unit="cm" class="is-hidden">' + w(typeof a === b ? a.apply(a) : a) + " cm</div>\n                    "
    }

    this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, a.helpers), t = this.merge(t, a.partials), o = o || {};
    var m, A = "", b = "function", w = this.escapeExpression, z = this, S = n.helperMissing;
    return A += '<div class="table-respond">\n    <table class="size-chart">\n        <thead>\n        <tr>\n            <th>Size</th>\n            <th>US/Canada</th>\n            <th class="has-dropdown">\n                <div class="dropdown">\n                    <a class="dropdown-trigger" data-toggle="dropdown" href="#">\n                        China\n                    </a>\n                    <div class="dropdown-container">\n                        <ul class="dropdown-menu" role="menu">\n                            <li><a data-country-trigger="au" href="#">Australia</a></li>\n                            <li><a data-country-trigger="de" href="#">Austria</a></li>\n                            <li><a data-country-trigger="de" href="#">Brazil</a></li>\n                            <li class="is-active"><a data-country-trigger="ch" href="#">China</a></li>\n                            <li><a data-country-trigger="es" href="#">Denmark</a></li>\n                            <li><a data-country-trigger="fr" href="#">France</a></li>\n                            <li><a data-country-trigger="de" href="#">Germany</a></li>\n                            <li><a data-country-trigger="uk" href="#">Hong Kong</a></li>\n                            <li><a data-country-trigger="es" href="#">Israel</a></li>\n                            <li><a data-country-trigger="it" href="#">Italy</a></li>\n                            <li><a data-country-trigger="jp" href="#">Japan</a></li>\n                            <li><a data-country-trigger="de" href="#">Netherlands</a></li>\n                            <li><a data-country-trigger="au" href="#">New Zealand</a></li>\n                            <li><a data-country-trigger="es" href="#">Portugal</a></li>\n                            <li><a data-country-trigger="ru" href="#">Russia</a></li>\n                            <li><a data-country-trigger="es" href="#">Spain</a></li>\n                            <li><a data-country-trigger="de" href="#">Sweden</a></li>\n                            <li><a data-country-trigger="de" href="#">Switzerland</a></li>\n                            <li><a data-country-trigger="uk" href="#">UK</a></li> <!-- Was United Kingdom -->\n                        </ul>\n                    </div>\n                </div>\n            </th>\n            <th>Denim</th>\n            <th>Drop Waist</th>\n            <th>Hips</th>\n        </tr>\n        </thead>\n        <tbody>\n        ', m = n.each.call(r, r && r.bottoms, {hash: {}, inverse: z.noop, fn: z.program(1, e, o), data: o}), (m || 0 === m) && (A += m), A += "\n        </tbody>\n    </table>\n    <p>Inseams</p>\n    ", m = z.invokePartial(t.inseams, "inseams", r, n, t, o), (m || 0 === m) && (A += m), A += '\n    <p class="foot-note">\n        All conversions are approximate and may vary by label, brand, or personal preference of fit.\n    </p>\n    <div class="two-column grid group">\n        <div class="column">\n            <h3>How to Measure</h3>\n            <img src="/content/sizechart/dest/assets/SizeChart_Illustrations_Pants.jpg">\n        </div>\n        <div class="column margin-top-large">\n            <h4>Drop Waist</h4>\n            <p>\n                Measure 1 1/2 inches below your natural waistline.\n            </p>\n            <h4>Hips</h4>\n            <p>\n                Stand with your feet together and measure around\n                the fullest part of your hips\n            </p>\n            <h4>Inseam</h4>\n            <p>\n                Use a pair of pants that fits you well.\n                Lay them on a flat surface and measure from the crotch\n                seam to the bottom of the leg.\n            </p>\n        </div>\n    </div>\n</div>'
}), this.SizeChart = this.SizeChart || {}, this.SizeChart.templates = this.SizeChart.templates || {}, this.SizeChart.templates.dressesSlips = this.SizeChart.templates.dressesSlips || {}, this.SizeChart.templates.dressesSlips.cn = Handlebars.template(function (a, r, n, t, o) {
    function e(a, r) {
        var t, o, e, m = "";
        return m += '\n            <tr>\n                <td class="uppercase">\n                    <div>', (o = n.size) ? t = o.call(a, {hash: {}, data: r}) : (o = a && a.size, t = typeof o === b ? o.call(a, {hash: {}, data: r}) : o), m += w(t) + "</div>\n                </td>\n                <td>\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: z.noop, fn: z.program(2, i, r), data: r}, t = o ? o.call(a, a && a.us, e) : S.call(a, "loopArr", a && a.us, e), (t || 0 === t) && (m += t), m += "\n                </td>\n                <td>\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: z.noop, fn: z.program(4, l, r), data: r}, t = o ? o.call(a, a && a.uk, e) : S.call(a, "loopArr", a && a.uk, e), (t || 0 === t) && (m += t), m += "\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: z.noop, fn: z.program(6, s, r), data: r}, t = o ? o.call(a, a && a.australia, e) : S.call(a, "loopArr", a && a.australia, e), (t || 0 === t) && (m += t), m += "\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: z.noop, fn: z.program(8, p, r), data: r}, t = o ? o.call(a, a && a.china, e) : S.call(a, "loopArr", a && a.china, e), (t || 0 === t) && (m += t), m += "\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: z.noop, fn: z.program(10, d, r), data: r}, t = o ? o.call(a, a && a.germany, e) : S.call(a, "loopArr", a && a.germany, e), (t || 0 === t) && (m += t), m += "\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: z.noop, fn: z.program(12, h, r), data: r}, t = o ? o.call(a, a && a.spain, e) : S.call(a, "loopArr", a && a.spain, e), (t || 0 === t) && (m += t), m += "\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: z.noop, fn: z.program(14, c, r), data: r}, t = o ? o.call(a, a && a.italy, e) : S.call(a, "loopArr", a && a.italy, e), (t || 0 === t) && (m += t), m += "\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: z.noop, fn: z.program(16, u, r), data: r}, t = o ? o.call(a, a && a.russia, e) : S.call(a, "loopArr", a && a.russia, e), (t || 0 === t) && (m += t), m += "\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: z.noop, fn: z.program(18, v, r), data: r}, t = o ? o.call(a, a && a.france, e) : S.call(a, "loopArr", a && a.france, e), (t || 0 === t) && (m += t), m += "\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: z.noop, fn: z.program(20, f, r), data: r}, t = o ? o.call(a, a && a.japan, e) : S.call(a, "loopArr", a && a.japan, e), (t || 0 === t) && (m += t), m += "\n                </td>\n                <td>\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: z.noop, fn: z.program(22, g, r), data: r}, t = o ? o.call(a, a && a.bust, e) : S.call(a, "loopArr", a && a.bust, e), (t || 0 === t) && (m += t), m += "\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: z.noop, fn: z.program(24, y, r), data: r}, t = o ? o.call(a, a && a["bust-cm"], e) : S.call(a, "loopArr", a && a["bust-cm"], e), (t || 0 === t) && (m += t), m += "\n                </td>\n                <td>\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: z.noop, fn: z.program(22, g, r), data: r}, t = o ? o.call(a, a && a["natural-waist"], e) : S.call(a, "loopArr", a && a["natural-waist"], e), (t || 0 === t) && (m += t), m += "\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: z.noop, fn: z.program(24, y, r), data: r}, t = o ? o.call(a, a && a["natural-waist-cm"], e) : S.call(a, "loopArr", a && a["natural-waist-cm"], e), (t || 0 === t) && (m += t), m += "\n                </td>\n                <td>\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: z.noop, fn: z.program(22, g, r), data: r}, t = o ? o.call(a, a && a["drop-waist"], e) : S.call(a, "loopArr", a && a["drop-waist"], e), (t || 0 === t) && (m += t), m += "\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: z.noop, fn: z.program(24, y, r), data: r}, t = o ? o.call(a, a && a["drop-waist-cm"], e) : S.call(a, "loopArr", a && a["drop-waist-cm"], e), (t || 0 === t) && (m += t), m += "\n                </td>\n                <td>\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: z.noop, fn: z.program(22, g, r), data: r}, t = o ? o.call(a, a && a.hips, e) : S.call(a, "loopArr", a && a.hips, e), (t || 0 === t) && (m += t), m += "\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: z.noop, fn: z.program(24, y, r), data: r}, t = o ? o.call(a, a && a["hips-cm"], e) : S.call(a, "loopArr", a && a["hips-cm"], e), (t || 0 === t) && (m += t), m += "\n                </td>\n            </tr>\n        "
    }

    function i(a) {
        var r = "";
        return r += "\n                        <div>" + w(typeof a === b ? a.apply(a) : a) + "</div>\n                    "
    }

    function l(a) {
        var r = "";
        return r += '\n                        <div data-country="uk" class="is-hidden">' + w(typeof a === b ? a.apply(a) : a) + "</div>\n                    "
    }

    function s(a) {
        var r = "";
        return r += '\n                        <div data-country="au" class="is-hidden">' + w(typeof a === b ? a.apply(a) : a) + "</div>\n                    "
    }

    function p(a) {
        var r = "";
        return r += '\n                        <div data-country="ch" class="is-active">' + w(typeof a === b ? a.apply(a) : a) + "</div>\n                    "
    }

    function d(a) {
        var r = "";
        return r += '\n                        <div data-country="de" class="is-hidden">' + w(typeof a === b ? a.apply(a) : a) + "</div>\n                    "
    }

    function h(a) {
        var r = "";
        return r += '\n                        <div data-country="es" class="is-hidden">' + w(typeof a === b ? a.apply(a) : a) + "</div>\n                    "
    }

    function c(a) {
        var r = "";
        return r += '\n                        <div data-country="it" class="is-hidden">' + w(typeof a === b ? a.apply(a) : a) + "</div>\n                    "
    }

    function u(a) {
        var r = "";
        return r += '\n                        <div data-country="ru" class="is-hidden">' + w(typeof a === b ? a.apply(a) : a) + "</div>\n                    "
    }

    function v(a) {
        var r = "";
        return r += '\n                        <div data-country="fr" class="is-hidden">' + w(typeof a === b ? a.apply(a) : a) + "</div>\n                    "
    }

    function f(a) {
        var r = "";
        return r += '\n                        <div data-country="jp" class="is-hidden">' + w(typeof a === b ? a.apply(a) : a) + "</div>\n                    "
    }

    function g(a) {
        var r = "";
        return r += '\n                        <div data-unit="inches" class="is-active">' + w(typeof a === b ? a.apply(a) : a) + '"</div>\n                    '
    }

    function y(a) {
        var r = "";
        return r += '\n                        <div data-unit="cm" class="is-hidden">' + w(typeof a === b ? a.apply(a) : a) + " cm</div>\n                    "
    }

    this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, a.helpers), o = o || {};
    var m, A = "", b = "function", w = this.escapeExpression, z = this, S = n.helperMissing;
    return A += '<div class="table-respond">\n    <table class="size-chart">\n        <thead>\n        <tr>\n            <th>Size</th>\n            <th>US/Canada</th>\n            <th class="has-dropdown">\n                <div class="dropdown">\n                    <a class="dropdown-trigger" data-toggle="dropdown" href="#">\n                        China\n                    </a>\n                    <div class="dropdown-container">\n                        <ul class="dropdown-menu" role="menu">\n                            <li><a data-country-trigger="au" href="#">Australia</a></li>\n                            <li><a data-country-trigger="de" href="#">Austria</a></li>\n                            <li><a data-country-trigger="de" href="#">Brazil</a></li>\n                            <li class="is-active"><a data-country-trigger="ch" href="#">China</a></li>\n                            <li><a data-country-trigger="es" href="#">Denmark</a></li>\n                            <li><a data-country-trigger="fr" href="#">France</a></li>\n                            <li><a data-country-trigger="de" href="#">Germany</a></li>\n                            <li><a data-country-trigger="uk" href="#">Hong Kong</a></li>\n                            <li><a data-country-trigger="es" href="#">Israel</a></li>\n                            <li><a data-country-trigger="it" href="#">Italy</a></li>\n                            <li><a data-country-trigger="jp" href="#">Japan</a></li>\n                            <li><a data-country-trigger="de" href="#">Netherlands</a></li>\n                            <li><a data-country-trigger="au" href="#">New Zealand</a></li>\n                            <li><a data-country-trigger="es" href="#">Portugal</a></li>\n                            <li><a data-country-trigger="ru" href="#">Russia</a></li>\n                            <li><a data-country-trigger="es" href="#">Spain</a></li>\n                            <li><a data-country-trigger="de" href="#">Sweden</a></li>\n                            <li><a data-country-trigger="de" href="#">Switzerland</a></li>\n                            <li><a data-country-trigger="uk" href="#">UK</a></li>\n                        </ul>\n                    </div>\n                </div>\n            </th>\n            <th>Bust</th>\n            <th>Natural Waist</th>\n            <th>Drop Waist</th>\n            <th>Hips</th>\n        </tr>\n        </thead>\n        <tbody>\n        ', m = n.each.call(r, r && r.dressesTops, {hash: {}, inverse: z.noop, fn: z.program(1, e, o), data: o}), (m || 0 === m) && (A += m), A += '\n        </tbody>\n    </table>\n</div>\n<div class="one-column grid">\n    <div class="column">\n        <p class="foot-note">\n            All conversions are approximate and may vary by label, brand, or personal preference of fit.\n        </p>\n    </div>\n</div>\n<div class="two-column grid group">\n    <div class="column">\n        <h3>How to Measure</h3>\n        <img src="/content/sizechart/dest/assets/SizeChart_Illustrations_Dresses.jpg">\n    </div>\n    <div class="column margin-top-large">\n        <h4>Bust</h4>\n        <p>\n            Measure under your arms at the fullest part of your bust.\n            Keep the tape level.\n        </p>\n        <h4>Natural Waist</h4>\n        <p>\n            Measure around your natural waistline, keeping the tape\n            comfortably loose. This is the narrowest part of the body\n            between the ribs and the hips.\n        </p>\n        <h4>Drop Waist</h4>\n        <p>\n            Measure 1 1/2 inches below your natural waistline.\n        </p>\n        <h4>Hips</h4>\n        <p>\n            Stand with your feet together and measure around\n            the fullest part of your hips\n        </p>\n    </div>\n</div>'
}), this.SizeChart = this.SizeChart || {}, this.SizeChart.templates = this.SizeChart.templates || {}, this.SizeChart.templates.inseams = this.SizeChart.templates.inseams || {}, this.SizeChart.templates.inseams.cn = Handlebars.template(function (a, r, n, t, o) {
    function e(a, r) {
        var t, o, e, s = "";
        return s += "\n        <tr>\n            <td>\n                ", (o = n.type) ? t = o.call(a, {hash: {}, data: r}) : (o = a && a.type, t = typeof o === d ? o.call(a, {hash: {}, data: r}) : o), s += h(t) + "\n            </td>\n            <td>\n                ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: c.noop, fn: c.program(2, i, r), data: r}, t = o ? o.call(a, a && a["short"], e) : u.call(a, "loopArr", a && a["short"], e), (t || 0 === t) && (s += t), s += "\n                ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: c.noop, fn: c.program(4, l, r), data: r}, t = o ? o.call(a, a && a["short-cm"], e) : u.call(a, "loopArr", a && a["short-cm"], e), (t || 0 === t) && (s += t), s += "\n            </td>\n            <td>\n                ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: c.noop, fn: c.program(2, i, r), data: r}, t = o ? o.call(a, a && a.regular, e) : u.call(a, "loopArr", a && a.regular, e), (t || 0 === t) && (s += t), s += "\n                ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: c.noop, fn: c.program(4, l, r), data: r}, t = o ? o.call(a, a && a["regular-cm"], e) : u.call(a, "loopArr", a && a["regular-cm"], e), (t || 0 === t) && (s += t), s += "\n            </td>\n            <td>\n                ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: c.noop, fn: c.program(2, i, r), data: r}, t = o ? o.call(a, a && a.tall, e) : u.call(a, "loopArr", a && a.tall, e), (t || 0 === t) && (s += t), s += "\n                ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: c.noop, fn: c.program(4, l, r), data: r}, t = o ? o.call(a, a && a["tall-cm"], e) : u.call(a, "loopArr", a && a["tall-cm"], e), (t || 0 === t) && (s += t), s += "\n            </td>\n        </tr>\n        "
    }

    function i(a) {
        var r = "";
        return r += '\n                    <div data-unit="inches" class="is-active">' + h(typeof a === d ? a.apply(a) : a) + '"</div>\n                '
    }

    function l(a) {
        var r = "";
        return r += '\n                    <div data-unit="cm" class="is-hidden">' + h(typeof a === d ? a.apply(a) : a) + " cm</div>\n                "
    }

    this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, a.helpers), o = o || {};
    var s, p = "", d = "function", h = this.escapeExpression, c = this, u = n.helperMissing;
    return p += '<table class="size-chart">\n    <thead>\n        <tr>\n            <th>Type</th>\n            <th>Short</th>\n            <th>Regular</th>\n            <th>Tall</th>\n        </tr>\n    </thead>\n    <tbody>\n        ', s = n.each.call(r, r && r.inseams, {hash: {}, inverse: c.noop, fn: c.program(1, e, o), data: o}), (s || 0 === s) && (p += s), p += "\n    </tbody>\n</table>"
}), this.SizeChart = this.SizeChart || {}, this.SizeChart.templates = this.SizeChart.templates || {}, this.SizeChart.templates.intimates = this.SizeChart.templates.intimates || {}, this.SizeChart.templates.intimates.cn = Handlebars.template(function (a, r, n, t, o) {
    function e(a, r) {
        var t, o, e, u = "";
        return u += '\n            <tr>\n                <td class="uppercase">\n                    ', (o = n.size) ? t = o.call(a, {hash: {}, data: r}) : (o = a && a.size, t = typeof o === f ? o.call(a, {hash: {}, data: r}) : o), u += g(t) + "\n                </td>\n                <td>\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: y.noop, fn: y.program(2, i, r), data: r}, t = o ? o.call(a, a && a.us, e) : m.call(a, "loopArr", a && a.us, e), (t || 0 === t) && (u += t), u += "\n                </td>\n                <td>\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: y.noop, fn: y.program(4, l, r), data: r}, t = o ? o.call(a, a && a.uk, e) : m.call(a, "loopArr", a && a.uk, e), (t || 0 === t) && (u += t), u += "\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: y.noop, fn: y.program(6, s, r), data: r}, t = o ? o.call(a, a && a.australia, e) : m.call(a, "loopArr", a && a.australia, e), (t || 0 === t) && (u += t), u += "\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: y.noop, fn: y.program(8, p, r), data: r}, t = o ? o.call(a, a && a.china, e) : m.call(a, "loopArr", a && a.china, e), (t || 0 === t) && (u += t), u += "\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: y.noop, fn: y.program(10, d, r), data: r}, t = o ? o.call(a, a && a.germany, e) : m.call(a, "loopArr", a && a.germany, e), (t || 0 === t) && (u += t), u += "\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: y.noop, fn: y.program(12, h, r), data: r}, t = o ? o.call(a, a && a.spain, e) : m.call(a, "loopArr", a && a.spain, e), (t || 0 === t) && (u += t), u += "\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: y.noop, fn: y.program(14, c, r), data: r}, t = o ? o.call(a, a && a.italy, e) : m.call(a, "loopArr", a && a.italy, e), (t || 0 === t) && (u += t), u += "\n                </td>\n            </tr>\n        "
    }

    function i(a) {
        var r = "";
        return r += "\n                        <div>" + g(typeof a === f ? a.apply(a) : a) + "</div>\n                    "
    }

    function l(a) {
        var r = "";
        return r += '\n                        <div data-country="uk" class="is-hidden">' + g(typeof a === f ? a.apply(a) : a) + "</div>\n                    "
    }

    function s(a) {
        var r = "";
        return r += '\n                        <div data-country="au" class="is-hidden">' + g(typeof a === f ? a.apply(a) : a) + "</div>\n                    "
    }

    function p(a) {
        var r = "";
        return r += '\n                        <div data-country="ch" class="is-active">' + g(typeof a === f ? a.apply(a) : a) + "</div>\n                    "
    }

    function d(a) {
        var r = "";
        return r += '\n                        <div data-country="de" class="is-hidden">' + g(typeof a === f ? a.apply(a) : a) + "</div>\n                    "
    }

    function h(a) {
        var r = "";
        return r += '\n                        <div data-country="es" class="is-hidden">' + g(typeof a === f ? a.apply(a) : a) + "</div>\n                    "
    }

    function c(a) {
        var r = "";
        return r += '\n                        <div data-country="it" class="is-hidden">' + g(typeof a === f ? a.apply(a) : a) + "</div>\n                    "
    }

    this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, a.helpers), o = o || {};
    var u, v = "", f = "function", g = this.escapeExpression, y = this, m = n.helperMissing;
    return v += '<div class="table-respond">\n    <table class="size-chart">\n        <thead>\n        <tr>\n            <th>Size</th>\n            <th>US/Canada</th>\n            <th class="has-dropdown">\n                <div class="dropdown">\n                    <a class="dropdown-trigger" data-toggle="dropdown" href="#">\n                        China\n                    </a>\n                    <div class="dropdown-container">\n                        <ul class="dropdown-menu" role="menu">\n                            <li><a data-country-trigger="au" href="#">Australia</a></li>\n                            <li><a data-country-trigger="de" href="#">Austria</a></li>\n                            <li><a data-country-trigger="de" href="#">Brazil</a></li>\n                            <li class="is-active"><a data-country-trigger="ch" href="#">China</a></li>\n                            <li><a data-country-trigger="es" href="#">Denmark</a></li>\n                            <li><a data-country-trigger="es" href="#">France</a></li>\n                            <li><a data-country-trigger="de" href="#">Germany</a></li>\n                            <li><a data-country-trigger="de" href="#">Hong Kong</a></li>\n                            <li><a data-country-trigger="es" href="#">Israel</a></li>\n                            <li><a data-country-trigger="it" href="#">Italy</a></li>\n                            <li><a data-country-trigger="de" href="#">Japan</a></li>\n                            <li><a data-country-trigger="au" href="#">New Zealand</a></li>\n                            <li><a data-country-trigger="de" href="#">Netherlands</a></li>\n                            <li><a data-country-trigger="es" href="#">Portugal</a></li>\n                            <li><a data-country-trigger="es" href="#">Spain</a></li>\n                            <li><a data-country-trigger="de" href="#">Sweden</a></li>\n                            <li><a data-country-trigger="de" href="#">Switzerland</a></li>\n                            <li><a data-country-trigger="uk" href="#">UK</a></li>\n                        </ul>\n                    </div>\n                </div>\n            </th>\n        </tr>\n        </thead>\n        <tbody>\n        ', u = n.each.call(r, r && r.intimates, {hash: {}, inverse: y.noop, fn: y.program(1, e, o), data: o}), (u || 0 === u) && (v += u), v += '\n        </tbody>\n    </table>\n    <p class="foot-note">\n        All conversions are approximate and may vary by label, brand, or personal preference of fit.\n    </p>\n    <p class="foot-note">If unsure of size, please choose based on desired fit. We recommend the size you wear in Tops as a guide.</p>\n    <!--\n    <div class="two-column grid group">\n        <div class="column">\n            <h3>How to Measure</h3>\n            <img src="http://fillmurray.com/460/463">\n        </div>\n        <div class="column margin-top-large">\n            <h4>Bust</h4>\n            <p>\n            Measure under your arms at the fullest part of your bust.\n            Keep the tape level.\n            </p>\n        </div>\n    </div>\n    -->\n</div>'
}), this.SizeChart = this.SizeChart || {}, this.SizeChart.templates = this.SizeChart.templates || {}, this.SizeChart.templates.main = this.SizeChart.templates.main || {}, this.SizeChart.templates.main.cn = Handlebars.template(function (a, r, n, t, o) {
    this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, a.helpers), t = this.merge(t, a.partials), o = o || {};
    var e, i = "", l = this;
    return i += '<div class="one-column grid">\n    <div class="column">\n        <div class="page-divider"></div>\n        <div class="hand-border" data-toggle="mobile-tab">\n            <a href="#" class="mobile-tab" ></a>\n            <ul class=\'tab-nav\' data-toggle=\'tab\' data-tab-settings=\'{"content":"#size-chart"}\'>\n                <li class="is-active"><a href="#">Dresses &nbsp; &amp; &nbsp; Slips</a></li>\n                <li><a href="#" >Tops &nbsp; &amp; &nbsp; Camis</a></li>\n                <li><a href="#" >Bottoms</a></li>\n                <li><a href="#" >Swim</a></li>\n                <li><a href="#" >Shoes</a></li>\n                <li><a href="#" >Intimates</a></li>\n            </ul>\n        </div>\n        <div class="page-divider"></div>\n    </div>\n</div>\n<div class="one-column grid">\n    <div class="column">\n        <div id="size-chart" class="tab-content">\n            <div class="is-active">', e = l.invokePartial(t.dressesSlips, "dressesSlips", r, n, t, o), (e || 0 === e) && (i += e), i += "</div>\n            <div>", e = l.invokePartial(t.topsCamis, "topsCamis", r, n, t, o), (e || 0 === e) && (i += e), i += "</div>\n            <div>", e = l.invokePartial(t.bottoms, "bottoms", r, n, t, o), (e || 0 === e) && (i += e), i += "</div>\n            <div>", e = l.invokePartial(t.swim, "swim", r, n, t, o), (e || 0 === e) && (i += e), i += "</div>\n            <div>", e = l.invokePartial(t.shoes, "shoes", r, n, t, o), (e || 0 === e) && (i += e), i += "</div>\n            <div>", e = l.invokePartial(t.intimates, "intimates", r, n, t, o), (e || 0 === e) && (i += e), i += '</div>\n        </div>\n    </div>\n</div>\n<footer class="one-column grid center">\n    <div class="column">\n        <div class="page-divider-simple"></div>\n        <h4>Have questions about sizing</h4>\n        <p class="foot-note"><a href="/contact-us" target="_blank">Email us</a> or call (800) 309-1500</p>\n    </div>\n</footer>'
}), this.SizeChart = this.SizeChart || {}, this.SizeChart.templates = this.SizeChart.templates || {}, this.SizeChart.templates.shoes = this.SizeChart.templates.shoes || {}, this.SizeChart.templates.shoes.cn = Handlebars.template(function (a, r, n, t, o) {
    function e(a, r) {
        var t, o, e, v = "";
        return v += "\n            <tr>\n                <td>\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: m.noop, fn: m.program(2, i, r), data: r}, t = o ? o.call(a, a && a.us, e) : A.call(a, "loopArr", a && a.us, e), (t || 0 === t) && (v += t), v += "\n                </td>\n                <td>\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: m.noop, fn: m.program(4, l, r), data: r}, t = o ? o.call(a, a && a.uk, e) : A.call(a, "loopArr", a && a.uk, e), (t || 0 === t) && (v += t), v += "\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: m.noop, fn: m.program(6, s, r), data: r}, t = o ? o.call(a, a && a.australia, e) : A.call(a, "loopArr", a && a.australia, e), (t || 0 === t) && (v += t), v += "\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: m.noop, fn: m.program(8, p, r), data: r}, t = o ? o.call(a, a && a.china, e) : A.call(a, "loopArr", a && a.china, e), (t || 0 === t) && (v += t), v += "\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: m.noop, fn: m.program(10, d, r), data: r}, t = o ? o.call(a, a && a.eu, e) : A.call(a, "loopArr", a && a.eu, e), (t || 0 === t) && (v += t), v += "\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: m.noop, fn: m.program(12, h, r), data: r}, t = o ? o.call(a, a && a.japan, e) : A.call(a, "loopArr", a && a.japan, e), (t || 0 === t) && (v += t), v += "\n                </td>\n                <td>\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: m.noop, fn: m.program(14, c, r), data: r}, t = o ? o.call(a, a && a.inches, e) : A.call(a, "loopArr", a && a.inches, e), (t || 0 === t) && (v += t), v += "\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: m.noop, fn: m.program(16, u, r), data: r}, t = o ? o.call(a, a && a.cm, e) : A.call(a, "loopArr", a && a.cm, e), (t || 0 === t) && (v += t), v += "\n                </td>\n            </tr>\n            "
    }

    function i(a) {
        var r = "";
        return r += "\n                    <div>" + y(typeof a === g ? a.apply(a) : a) + "</div>\n                    "
    }

    function l(a) {
        var r = "";
        return r += '\n                    <div data-country="uk" class="is-hidden">' + y(typeof a === g ? a.apply(a) : a) + "</div>\n                    "
    }

    function s(a) {
        var r = "";
        return r += '\n                    <div data-country="au" class="is-hidden">' + y(typeof a === g ? a.apply(a) : a) + "</div>\n                    "
    }

    function p(a) {
        var r = "";
        return r += '\n                    <div data-country="ch" class="is-active">' + y(typeof a === g ? a.apply(a) : a) + "</div>\n                    "
    }

    function d(a) {
        var r = "";
        return r += '\n                    <div data-country="eu" class="is-hidden">' + y(typeof a === g ? a.apply(a) : a) + "</div>\n                    "
    }

    function h(a) {
        var r = "";
        return r += '\n                    <div data-country="jp" class="is-hidden">' + y(typeof a === g ? a.apply(a) : a) + "</div>\n                    "
    }

    function c(a) {
        var r = "";
        return r += '\n                    <div data-unit="inches" class="is-active">' + y(typeof a === g ? a.apply(a) : a) + "</div>\n                    "
    }

    function u(a) {
        var r = "";
        return r += '\n                    <div data-unit="cm" class="is-hidden">' + y(typeof a === g ? a.apply(a) : a) + " cm</div>\n                    "
    }

    this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, a.helpers), o = o || {};
    var v, f = "", g = "function", y = this.escapeExpression, m = this, A = n.helperMissing;
    return f += '<div class="table-respond">\n    <table class="size-chart">\n        <thead>\n            <tr>\n                <th>US/Canada</th>\n                <th class="has-dropdown">\n                    <div class="dropdown">\n                        <a class="dropdown-trigger" data-toggle="dropdown" href="#">\n                            China\n                        </a>\n                        <div class="dropdown-container">\n                            <ul class="dropdown-menu" role="menu">\n                                <li><a data-country-trigger="au" href="#">Australia</a></li>\n                                <li class="is-active"><a data-country-trigger="ch" href="#">China</a></li>\n                                <li><a data-country-trigger="eu" href="#">EU</a></li>\n                                <li><a data-country-trigger="jp" href="#">Japan</a></li>\n                                <li><a data-country-trigger="uk" href="#">UK</a></li>\n                            </ul>\n                        </div>\n                    </div>\n                </th>\n                <th>Measurement*</th>\n            </tr>\n        </thead>\n        <tbody>\n            ', v = n.each.call(r, r && r.shoes, {hash: {}, inverse: m.noop, fn: m.program(1, e, o), data: o}), (v || 0 === v) && (f += v), f += '\n        </tbody>\n    </table>\n    <p class="foot-note">*Measurements shown in inches and CM are approximate and may vary by shoe</p>\n</div>'
}), this.SizeChart = this.SizeChart || {}, this.SizeChart.templates = this.SizeChart.templates || {}, this.SizeChart.templates.swim = this.SizeChart.templates.swim || {}, this.SizeChart.templates.swim.cn = Handlebars.template(function (a, r, n, t, o) {
    function e(a, r) {
        var t, o, e, f = "";
        return f += '\n            <tr>\n                <td class="uppercase">\n                    ', (o = n.size) ? t = o.call(a, {hash: {}, data: r}) : (o = a && a.size, t = typeof o === y ? o.call(a, {hash: {}, data: r}) : o), f += m(t) + "\n                </td>\n                <td>\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: A.noop, fn: A.program(2, i, r), data: r}, t = o ? o.call(a, a && a.us, e) : b.call(a, "loopArr", a && a.us, e), (t || 0 === t) && (f += t), f += "\n                </td>\n                <td>\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: A.noop, fn: A.program(4, l, r), data: r}, t = o ? o.call(a, a && a.uk, e) : b.call(a, "loopArr", a && a.uk, e), (t || 0 === t) && (f += t), f += "\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: A.noop, fn: A.program(6, s, r), data: r}, t = o ? o.call(a, a && a.australia, e) : b.call(a, "loopArr", a && a.australia, e), (t || 0 === t) && (f += t), f += "\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: A.noop, fn: A.program(8, p, r), data: r}, t = o ? o.call(a, a && a.china, e) : b.call(a, "loopArr", a && a.china, e), (t || 0 === t) && (f += t), f += "\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: A.noop, fn: A.program(10, d, r), data: r}, t = o ? o.call(a, a && a.france, e) : b.call(a, "loopArr", a && a.france, e), (t || 0 === t) && (f += t), f += "\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: A.noop, fn: A.program(12, h, r), data: r}, t = o ? o.call(a, a && a.japan, e) : b.call(a, "loopArr", a && a.japan, e), (t || 0 === t) && (f += t), f += "\n                </td>\n                <td>\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: A.noop, fn: A.program(14, c, r), data: r}, t = o ? o.call(a, a && a.bust, e) : b.call(a, "loopArr", a && a.bust, e), (t || 0 === t) && (f += t), f += "\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: A.noop, fn: A.program(16, u, r), data: r}, t = o ? o.call(a, a && a["bust-cm"], e) : b.call(a, "loopArr", a && a["bust-cm"], e), (t || 0 === t) && (f += t), f += "\n                </td>\n                <td>\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: A.noop, fn: A.program(18, v, r), data: r}, t = o ? o.call(a, a && a["bra-size"], e) : b.call(a, "loopArr", a && a["bra-size"], e), (t || 0 === t) && (f += t), f += "\n                </td>\n                <td>\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: A.noop, fn: A.program(14, c, r), data: r}, t = o ? o.call(a, a && a.waist, e) : b.call(a, "loopArr", a && a.waist, e), (t || 0 === t) && (f += t), f += "\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: A.noop, fn: A.program(16, u, r), data: r}, t = o ? o.call(a, a && a["waist-cm"], e) : b.call(a, "loopArr", a && a["waist-cm"], e), (t || 0 === t) && (f += t), f += "\n                </td>\n                <td>\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: A.noop, fn: A.program(2, i, r), data: r}, t = o ? o.call(a, a && a["high-waist"], e) : b.call(a, "loopArr", a && a["high-waist"], e), (t || 0 === t) && (f += t), f += "\n                </td>\n            </tr>\n        "
    }

    function i(a) {
        var r = "";
        return r += "\n                        <div>" + m(typeof a === y ? a.apply(a) : a) + "</div>\n                    "
    }

    function l(a) {
        var r = "";
        return r += '\n                        <div data-country="uk" class="is-hidden">' + m(typeof a === y ? a.apply(a) : a) + "</div>\n                    "
    }

    function s(a) {
        var r = "";
        return r += '\n                        <div data-country="au" class="is-hidden">' + m(typeof a === y ? a.apply(a) : a) + "</div>\n                    "
    }

    function p(a) {
        var r = "";
        return r += '\n                        <div data-country="ch" class="is-active">' + m(typeof a === y ? a.apply(a) : a) + "</div>\n                    "
    }

    function d(a) {
        var r = "";
        return r += '\n                        <div data-country="fr" class="is-hidden">' + m(typeof a === y ? a.apply(a) : a) + "</div>\n                    "
    }

    function h(a) {
        var r = "";
        return r += '\n                        <div data-country="jp" class="is-hidden">' + m(typeof a === y ? a.apply(a) : a) + "</div>\n                    "
    }

    function c(a) {
        var r = "";
        return r += '\n                        <div data-unit="inches" class="is-active">' + m(typeof a === y ? a.apply(a) : a) + '"</div>\n                    '
    }

    function u(a) {
        var r = "";
        return r += '\n                        <div data-unit="cm" class="is-hidden">' + m(typeof a === y ? a.apply(a) : a) + " cm</div>\n                    "
    }

    function v(a) {
        var r = "";
        return r += '\n                        <div class="two-column-table">' + m(typeof a === y ? a.apply(a) : a) + "</div>\n                    "
    }

    this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, a.helpers), o = o || {};
    var f, g = "", y = "function", m = this.escapeExpression, A = this, b = n.helperMissing;
    return g += '<div class="table-respond">\n    <table class="size-chart">\n        <thead>\n        <tr>\n            <th>Size</th>\n            <th>US/Canada</th>\n            <th class="has-dropdown">\n                <div class="dropdown">\n                    <a class="dropdown-trigger" data-toggle="dropdown" href="#">\n                        China\n                    </a>\n                    <div class="dropdown-container">\n                        <ul class="dropdown-menu" role="menu">\n                            <li><a data-country-trigger="au" href="#">Australia</a></li>\n                            <li class="is-active"><a data-country-trigger="ch" href="#">China</a></li>\n                            <li><a data-country-trigger="fr" href="#">France</a></li>\n                            <li><a data-country-trigger="jp" href="#">Japan</a></li>\n                            <li><a data-country-trigger="uk" href="#">UK</a></li>\n                        </ul>\n                    </div>\n                </div>\n            </th>\n            <th>Bust</th>\n            <th>Bra-size</th>\n            <th>Waist</th>\n            <th>High Waist</th>\n\n        </tr>\n        </thead>\n        <tbody>\n        ', f = n.each.call(r, r && r.swim, {hash: {}, inverse: A.noop, fn: A.program(1, e, o), data: o}), (f || 0 === f) && (g += f), g += '\n        </tbody>\n    </table>\n    <p class="foot-note">\n        All conversions are approximate and may vary by label, brand, or personal preference of fit.\n    </p>\n    <div class="two-column grid group">\n        <div class="column">\n            <h3>How to Measure</h3>\n            <img src="/content/sizechart/dest/assets/SizeChart_Illustrations_Swim.jpg">\n        </div>\n        <div class="column margin-top-large">\n            <h4>Bust</h4>\n            <p>\n                Measure under your arms at the fullest part of your bust.\n                Keep the tape level.\n            </p>\n            <h4>High Waist</h4>\n            <p>\n                Measure around your natural waistline, keeping the tape\n                comfortably loose. This is the narrowest part of the body\n                between the ribs and the hips.\n            </p>\n            <h4>Hips</h4>\n            <p>\n                Stand with your feet together and measure around\n                the fullest part of your hips\n            </p>\n        </div>\n    </div>\n</div>'
}), this.SizeChart = this.SizeChart || {}, this.SizeChart.templates = this.SizeChart.templates || {}, this.SizeChart.templates.topsCamis = this.SizeChart.templates.topsCamis || {}, this.SizeChart.templates.topsCamis.cn = Handlebars.template(function (a, r, n, t, o) {
    function e(a, r) {
        var t, o, e, m = "";
        return m += '\n            <tr>\n                <td class="uppercase">\n                    ', (o = n.size) ? t = o.call(a, {hash: {}, data: r}) : (o = a && a.size, t = typeof o === b ? o.call(a, {hash: {}, data: r}) : o), m += w(t) + "\n                </td>\n                <td>\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: z.noop, fn: z.program(2, i, r), data: r}, t = o ? o.call(a, a && a.us, e) : S.call(a, "loopArr", a && a.us, e), (t || 0 === t) && (m += t), m += "\n                </td>\n                <td>\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: z.noop, fn: z.program(4, l, r), data: r}, t = o ? o.call(a, a && a.uk, e) : S.call(a, "loopArr", a && a.uk, e), (t || 0 === t) && (m += t), m += "\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: z.noop, fn: z.program(6, s, r), data: r}, t = o ? o.call(a, a && a.australia, e) : S.call(a, "loopArr", a && a.australia, e), (t || 0 === t) && (m += t), m += "\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: z.noop, fn: z.program(8, p, r), data: r}, t = o ? o.call(a, a && a.china, e) : S.call(a, "loopArr", a && a.china, e), (t || 0 === t) && (m += t), m += "\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: z.noop, fn: z.program(10, d, r), data: r}, t = o ? o.call(a, a && a.germany, e) : S.call(a, "loopArr", a && a.germany, e), (t || 0 === t) && (m += t), m += "\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: z.noop, fn: z.program(12, h, r), data: r}, t = o ? o.call(a, a && a.spain, e) : S.call(a, "loopArr", a && a.spain, e), (t || 0 === t) && (m += t), m += "\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: z.noop, fn: z.program(14, c, r), data: r}, t = o ? o.call(a, a && a.italy, e) : S.call(a, "loopArr", a && a.italy, e), (t || 0 === t) && (m += t), m += "\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: z.noop, fn: z.program(16, u, r), data: r}, t = o ? o.call(a, a && a.russia, e) : S.call(a, "loopArr", a && a.russia, e), (t || 0 === t) && (m += t), m += "\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: z.noop, fn: z.program(18, v, r), data: r}, t = o ? o.call(a, a && a.france, e) : S.call(a, "loopArr", a && a.france, e), (t || 0 === t) && (m += t), m += "\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: z.noop, fn: z.program(20, f, r), data: r}, t = o ? o.call(a, a && a.japan, e) : S.call(a, "loopArr", a && a.japan, e), (t || 0 === t) && (m += t), m += "\n                </td>\n                <td>\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: z.noop, fn: z.program(22, g, r), data: r}, t = o ? o.call(a, a && a.bust, e) : S.call(a, "loopArr", a && a.bust, e), (t || 0 === t) && (m += t), m += "\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: z.noop, fn: z.program(24, y, r), data: r}, t = o ? o.call(a, a && a["bust-cm"], e) : S.call(a, "loopArr", a && a["bust-cm"], e), (t || 0 === t) && (m += t), m += "\n                </td>\n                <td>\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: z.noop, fn: z.program(22, g, r), data: r}, t = o ? o.call(a, a && a["natural-waist"], e) : S.call(a, "loopArr", a && a["natural-waist"], e), (t || 0 === t) && (m += t), m += "\n                    ", o = n.loopArr || a && a.loopArr, e = {hash: {}, inverse: z.noop, fn: z.program(24, y, r), data: r}, t = o ? o.call(a, a && a["natural-waist-cm"], e) : S.call(a, "loopArr", a && a["natural-waist-cm"], e), (t || 0 === t) && (m += t), m += "\n                </td>\n            </tr>\n        "
    }

    function i(a) {
        var r = "";
        return r += "\n                        <div>" + w(typeof a === b ? a.apply(a) : a) + "</div>\n                    "
    }

    function l(a) {
        var r = "";
        return r += '\n                        <div data-country="uk" class="is-hidden">' + w(typeof a === b ? a.apply(a) : a) + "</div>\n                    "
    }

    function s(a) {
        var r = "";
        return r += '\n                        <div data-country="au" class="is-hidden">' + w(typeof a === b ? a.apply(a) : a) + "</div>\n                    "
    }

    function p(a) {
        var r = "";
        return r += '\n                        <div data-country="ch" class="is-active">' + w(typeof a === b ? a.apply(a) : a) + "</div>\n                    "
    }

    function d(a) {
        var r = "";
        return r += '\n                        <div data-country="de" class="is-hidden">' + w(typeof a === b ? a.apply(a) : a) + "</div>\n                    "
    }

    function h(a) {
        var r = "";
        return r += '\n                        <div data-country="es" class="is-hidden">' + w(typeof a === b ? a.apply(a) : a) + "</div>\n                    "
    }

    function c(a) {
        var r = "";
        return r += '\n                        <div data-country="it" class="is-hidden">' + w(typeof a === b ? a.apply(a) : a) + "</div>\n                    "
    }

    function u(a) {
        var r = "";
        return r += '\n                        <div data-country="ru" class="is-hidden">' + w(typeof a === b ? a.apply(a) : a) + "</div>\n                    "
    }

    function v(a) {
        var r = "";
        return r += '\n                        <div data-country="fr" class="is-hidden">' + w(typeof a === b ? a.apply(a) : a) + "</div>\n                    "
    }

    function f(a) {
        var r = "";
        return r += '\n                        <div data-country="jp" class="is-hidden">' + w(typeof a === b ? a.apply(a) : a) + "</div>\n                    "
    }

    function g(a) {
        var r = "";
        return r += '\n                        <div data-unit="inches" class="is-active">' + w(typeof a === b ? a.apply(a) : a) + '"</div>\n                    '
    }

    function y(a) {
        var r = "";
        return r += '\n                        <div data-unit="cm" class="is-hidden">' + w(typeof a === b ? a.apply(a) : a) + " cm</div>\n                    "
    }

    this.compilerInfo = [4, ">= 1.0.0"], n = this.merge(n, a.helpers), o = o || {};
    var m, A = "", b = "function", w = this.escapeExpression, z = this, S = n.helperMissing;
    return A += '<div class="table-respond">\n    <table class="size-chart">\n        <thead>\n        <tr>\n            <th>Size</th>\n            <th>US/Canada</th>\n            <th class="has-dropdown">\n                <div class="dropdown">\n                    <a class="dropdown-trigger" data-toggle="dropdown" href="#">\n                        China\n                    </a>\n                    <div class="dropdown-container">\n                        <ul class="dropdown-menu" role="menu">\n                            <li><a data-country-trigger="au" href="#">Australia</a></li>\n                            <li><a data-country-trigger="de" href="#">Austria</a></li>\n                            <li><a data-country-trigger="de" href="#">Brazil</a></li>\n                            <li class="is-active"><a data-country-trigger="ch" href="#">China</a></li>\n                            <li><a data-country-trigger="es" href="#">Denmark</a></li>\n                            <li><a data-country-trigger="fr" href="#">France</a></li>\n                            <li><a data-country-trigger="de" href="#">Germany</a></li>\n                            <li><a data-country-trigger="uk" href="#">Hong Kong</a></li>\n                            <li><a data-country-trigger="es" href="#">Israel</a></li>\n                            <li><a data-country-trigger="it" href="#">Italy</a></li>\n                            <li><a data-country-trigger="jp" href="#">Japan</a></li>\n                            <li><a data-country-trigger="de" href="#">Netherlands</a></li>\n                            <li><a data-country-trigger="au" href="#">New Zealand</a></li>\n                            <li><a data-country-trigger="es" href="#">Portugal</a></li>\n                            <li><a data-country-trigger="ru" href="#">Russia</a></li>\n                            <li><a data-country-trigger="es" href="#">Spain</a></li>\n                            <li><a data-country-trigger="de" href="#">Sweden</a></li>\n                            <li><a data-country-trigger="de" href="#">Switzerland</a></li>\n                            <li><a data-country-trigger="uk" href="#">UK</a></li>\n                        </ul>\n                    </div>\n                </div>\n            </th>\n            <th>Bust</th>\n            <th>Natural Waist</th>\n        </tr>\n        </thead>\n        <tbody>\n        ', m = n.each.call(r, r && r.dressesTops, {hash: {}, inverse: z.noop, fn: z.program(1, e, o), data: o}), (m || 0 === m) && (A += m), A += '\n        </tbody>\n    </table>\n    <p class="foot-note">\n        All conversions are approximate and may vary by label, brand, or personal preference of fit.\n    </p>\n    <div class="two-column grid group">\n        <div class="column">\n            <h3>How to Measure</h3>\n            <img src="/content/sizechart/dest/assets/SizeChart_Illustrations_Top.jpg">\n        </div>\n        <div class="column margin-top-large">\n            <h4>Bust</h4>\n            <p>\n                Measure under your arms at the fullest part of your bust.\n                Keep the tape level.\n            </p>\n            <h4>Natural Waist</h4>\n            <p>\n                Measure around your natural waistline, keeping the tape\n                comfortably loose. This is the narrowest part of the body\n                between the ribs and the hips.\n            </p>\n        </div>\n    </div>\n</div>'
});