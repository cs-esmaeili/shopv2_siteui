export const setCookie = (e) => {
    e.fn.droopmenu = function (o) {
        var d = {
            dmArrow: !1,
            dmIndicator: !0,
            dmArrowDirection: "dmarrowup",
            dmHideClick: !0,
            dmClickIcon: !0,
            dmTabAccess: !0,
            dmAnimation: !0,
            dmFixed: !1,
            dmSticky: !1,
            dmStickyClass: "dmsticky",
            dmOffCanvas: !0,
            dmAnimationEffect: "dmfade",
            dmFixedClass: "dmfixed",
            dmOffCanvasPos: "dmoffright",
            dmPosition: "dmtop",
            dmOrientation: "dmhorizontal",
            dmCentered: !1,
            dmCenteredClass: "dmcentered",
            dmOpenClass: "dmopener",
            dmAnimDelay: 1200,
            dmShowDelay: 200,
            dmHideDelay: 200,
            dmToggleSpeed: 500,
            dmBreakpoint: 767,
        };
        o = e.extend(d, o);
        var a = e(this),
            n = e("body"),
            t = e(a),
            s = e(".droopmenu-nav"),
            i = e(".droopmenu-toggle"),
            r = e('<div class="dm-arrow"></div>'),
            m = e('<div class="droopmenu-overlay"></div>'),
            l = e('<div class="droopmenu-mclose"><span></span></div>'),
            u = e(".droopmenu-extra .droopmenu > li:has(> ul), .droopmenu-extra .droopmenu li .droopmenu-indicator"),
            p = m,
            c = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            f = function () {
                1 == d.dmOffCanvas
                    ? (t.removeClass("droopmenu-offcanvas-open"),
                        l.removeClass("dmo-active"),
                        setTimeout(function () {
                            n.removeClass("droopmenu-dmopen");
                        }, d.dmAnimDelay))
                    : (s.stop(!0, !0).slideUp(d.dmToggleSpeed), n.removeClass("droopmenu-dmopen"), l.remove());
            },
            v = function () {
                i.removeClass("dmt-active"), l.removeClass("dmo-active"), f();
            },
            C = function (o) {
                o.preventDefault();
                var a = e(this),
                    n = a.closest("ul:not(.droopmenu-grid ul)"),
                    t = n.find(".dmtoggle-open"),
                    s = a.closest("li"),
                    i = s.hasClass("dmtoggle-open"),
                    r = 0;
                s.removeClass(d.dmOpenClass).children("ul").find("li").removeClass(d.dmOpenClass),
                    n
                        .find("ul:not(.droopmenu-grid ul)")
                        .stop(!0, !0)
                        .slideUp(d.dmToggleSpeed, function () {
                            ++r == n.find("ul:not(.droopmenu-grid ul)").length && (t.removeClass("dmtoggle-open"), t.find("> a").attr("aria-expanded", "false"), t.find("ul").removeAttr("style"));
                        }),
                    i || (s.children("ul:not(.droopmenu-grid ul)").stop(!0, !0).slideDown(d.dmToggleSpeed), s.addClass("dmtoggle-open"), s.find("> a").attr("aria-expanded", "true"));
            },
            h = function () {
                if (c >= d.dmBreakpoint) {
                    e(document).off("click.droopMenu touchstart.droopMenu"),
                        e(a).find(".droopmenu li a .droopmenu-indicator").off("click"),
                        e(a).find(".droopmenu li a:not(.droopmenu-grid a)").off("click"),
                        e(a).removeClass(d.dmOffCanvasPos),
                        e(a).removeClass("droopmenu-offcanvas droopmenu-offcanvas-open"),
                        e(a).closest(n).removeClass("droopmenu-dmopen"),
                        e(a).find(m, l).remove(),
                        1 == d.dmAnimation && e(a).addClass(d.dmAnimationEffect),
                        1 == d.dmOffCanvas && e(a).find(i).removeClass("dmt-active"),
                        1 == d.dmTabAccess &&
                        e(a)
                            .find("a, object, :input, iframe, [tabindex]")
                            .focus(function () {
                                e(this).parents('li:has("ul")').addClass(d.dmOpenClass).find("> a").attr("aria-expanded", "true");
                            })
                            .blur(function () {
                                e(this).parents('li:has("ul")').removeClass(d.dmOpenClass).find("> a").attr("aria-expanded", "false");
                            }),
                        1 == d.dmCentered && e(a).addClass(d.dmCenteredClass);
                    var o,
                        r = e(a).find(".droopmenu li:has(ul)");
                    r.removeClass(d.dmOpenClass),
                        r.on({
                            mouseenter: function () {
                                var a = e(this);
                                clearTimeout(o),
                                    (o = setTimeout(function () {
                                        a.stop(!0, !0).addClass(d.dmOpenClass), a.find("> a").attr("aria-expanded", "true");
                                    }, d.dmShowDelay));
                            },
                            mouseleave: function () {
                                var o = e(this);
                                setTimeout(function () {
                                    o.stop(!0, !0).removeClass(d.dmOpenClass), o.find("> a").attr("aria-expanded", "false");
                                }, d.dmHideDelay);
                            },
                        });
                } else
                    e(a).removeClass(d.dmAnimationEffect),
                        e(a).removeClass(d.dmCenteredClass),
                        e(a).find(".droopmenu li:has(ul)").off("mouseenter mouseleave"),
                        1 == d.dmClickIcon ? e(a).find(".droopmenu li a .droopmenu-indicator").off("click").on("click", C) : e(a).find(".droopmenu li:has(ul) > a").off("click").on("click", C),
                        1 == d.dmOffCanvas &&
                        (s.after(m),
                            s.prepend(l),
                            t.addClass("droopmenu-offcanvas"),
                            t.addClass(d.dmOffCanvasPos),
                            e(a).on("click", function (o) {
                                var d = e(a).find(".droopmenu-mclose span");
                                e(o.target).is(d) && v();
                            })),
                        1 == d.dmHideClick &&
                        e(document).on("click.droopMenu touchstart.droopMenu", function (o) {
                            if (
                                (1 == d.dmOffCanvas
                                    ? e(o.target).is(p) && v()
                                    : a.is(o.target) ||
                                    0 !== a.has(o.target).length ||
                                    s.slideUp(d.dmToggleSpeed, function () {
                                        i.removeClass("dmt-active");
                                    }),
                                    !u.is(o.target) && 0 === u.has(o.target).length)
                            ) {
                                var n = e(a).find(".droopmenu-extra .droopmenu li:has(ul)");
                                n.removeClass("dmtoggle-open").find("> a").attr("aria-expanded", "false"),
                                    n
                                        .find("> a")
                                        .removeClass("dmparent-open")
                                        .siblings("ul")
                                        .slideUp(d.dmToggleSpeed, function () { });
                            }
                        });
            },
            g = function () {
                e(a)
                    .find(i)
                    .on("click", function (o) {
                        o.preventDefault(),
                            e(this).toggleClass("dmt-active"),
                            e(this).hasClass("dmt-active")
                                ? 1 == d.dmOffCanvas
                                    ? (t.addClass("droopmenu-offcanvas-open"), n.addClass("droopmenu-dmopen"), l.addClass("dmo-active"))
                                    : (s.stop(!0, !0).slideDown(d.dmToggleSpeed), n.removeClass("droopmenu-dmopen"), l.remove())
                                : f();
                    });
            };
        return this.each(function () {
            var o;
            e(a)
                .find(".droopmenu-tabs")
                .each(function (o) {
                    var d = e(this);
                    d.wrapInner('<div class="droopmenu-tabpanel droopmenutabcol"></div>'),
                        d.prepend('<div class="droopmenu-tabnav droopmenutabcol"></div>'),
                        d.find(".droopmenu-tabsection").each(function (a) {
                            e(this).attr("id", "droopmenutab" + o + a),
                                e(this)
                                    .children(".droopmenu-tabheader")
                                    .attr("href", "#droopmenutab" + o + a),
                                d.children(".droopmenu-tabnav").append('<a href="#droopmenutab' + o + a + '">' + e(this).children(".droopmenu-tabheader").html() + "</a>");
                        }),
                        d.find(".droopmenu-tabsection:first").addClass("droopmenu-tab-active"),
                        d.find(".droopmenu-tabnav a:first").addClass("droopmenu-tab-active"),
                        d.find(".droopmenu-tabheader").each(function (o) {
                            e(this).on("click", function (o) {
                                o.preventDefault(), d.find(".droopmenu-tabsection").closest().removeClass("droopmenu-tab-active");
                                var a = e(this).parent().index();
                                e(this).hasClass("droopmenu-tab-active")
                                    ? d.find(".droopmenu-tabsection > .droopmenu-tab-active").removeClass("droopmenu-tab-active")
                                    : (d.find(".droopmenu-tabsection > .droopmenu-tab-active").removeClass("droopmenu-tab-active"),
                                        d
                                            .find(".droopmenu-tabsection:eq(" + a + ")")
                                            .children()
                                            .toggleClass("droopmenu-tab-active"));
                            });
                        }),
                        d.find(".droopmenu-tabnav a").each(function (o) {
                            e(this).closest(d).hasClass("droopmenu-tab-hover")
                                ? e(this).hover(function () {
                                    var o = e(this).index();
                                    d.find(".droopmenu-tabsection, .droopmenu-tabnav a").removeClass("droopmenu-tab-active"),
                                        d.find(".droopmenu-tabsection:eq(" + o + "), .droopmenu-tabnav a:eq(" + o + ")").toggleClass("droopmenu-tab-active");
                                })
                                : e(this).on("click", function (o) {
                                    o.preventDefault();
                                    var a = e(this).index();
                                    d.find(".droopmenu-tabsection, .droopmenu-tabnav a").removeClass("droopmenu-tab-active"),
                                        d.find(".droopmenu-tabsection:eq(" + a + "), .droopmenu-tabnav a:eq(" + a + ")").toggleClass("droopmenu-tab-active");
                                });
                        });
                }),
                (function () {
                    if (
                        (e(a)
                            .find(".droopmenu li a")
                            .each(function () {
                                e(this).siblings("ul").length > 0 &&
                                    (e(this).attr("aria-expanded", "false"),
                                        e(this).parent("li").addClass("droopmenu-parent").attr("aria-haspopup", "true"),
                                        1 == d.dmIndicator && e(this).append("<span class='droopmenu-indicator'><em></em></span>")),
                                    e(this).siblings("ul").find(".droopmenu-grid").length > 0 && e(".droopmenu-grid").closest("ul").addClass("droopmenu");
                            }),
                            e(a).find("li:has(ul.droopmenu-megamenu)").addClass("droopmenu-mega"),
                            e(a).find(".droopmenu > li > a").append("<em class='droopmenu-topanim'></em>"),
                            e(a).find(".droopmenu-nav .droopmenu").wrapAll("<div class='droopmenu-nav-wrap'><div class='droopmenu-navi'></div></div>"),
                            e(a).find(i).append("<i class='dm-burg'></i><i class='dm-burg'></i><i class='dm-burg'></i>"),
                            1 == d.dmFixed && e(a).addClass(d.dmFixedClass),
                            1 == d.dmSticky && e(a).addClass(d.dmStickyClass),
                            1 == d.dmArrow)
                    )
                        switch ((e(a).find(".droopmenu > li:has(ul) > a").after(r), d.dmArrowDirection)) {
                            case "dmarrowup":
                                e(a).addClass("dmarrow-up");
                                break;
                            case "dmarrowdown":
                                e(a).addClass("dmarrow-down");
                        }
                    switch (d.dmOrientation) {
                        case "dmvertical":
                            e(a).addClass("droopmenu-vertical");
                            break;
                        case "dmhorizontal":
                            e(a).addClass("droopmenu-horizontal");
                    }
                    switch (d.dmPosition) {
                        case "dmtop":
                            e(a).addClass("dmpos-top");
                            break;
                        case "dmbottom":
                            e(a).addClass("dmpos-bottom");
                            break;
                        case "dmleft":
                            e(a).addClass("dmpos-left");
                            break;
                        case "dmright":
                            e(a).addClass("dmpos-right");
                    }
                })(),
                h(),
                g(),
                e(window).on("resize.droopMenu orientationchange.droopMenu", function () {
                    clearTimeout(o),
                        (o = setTimeout(function () {
                            (c = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth), h();
                        }, 100));
                });
        });
    };
}