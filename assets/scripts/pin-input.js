/*!
 * OTP-designer-jquery v2.3.1
 * (c) HichemTech
 * Released under the MIT License.
 * Github: github.com/HichemTab-tech/OTP-designer-jquery
 */
!(function (t, e) {
	"object" == typeof exports && "object" == typeof module
		? (module.exports = e())
		: "function" == typeof define && define.amd
		? define([], e)
		: "object" == typeof exports
		? (exports["OTP-designer-jquery"] = e())
		: (t["OTP-designer-jquery"] = e());
})(this, () =>
	(() => {
		"use strict";
		var t = {
				426: (t, e, n) => {
					n.d(e, { Z: () => a });
					var o = n(81),
						i = n.n(o),
						r = n(645),
						s = n.n(r)()(i());
					s.push([
						t.id,
						".otp-fake-input {\n    width: 50px;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.otp-fake-input .otp-content {\n    font-size: 20px;\n    font-weight: 600;\n    color: #111;\n    padding-bottom: 1px;\n}\n\n.otp-fake-input.otpdesigner__focus__ {\n    border: 2px solid #007bff;\n}\n\n.realInput{\n    position: absolute!important;\n    z-index: -2000!important;\n}\n\n.dropdown-item {\n    cursor: pointer;\n    transition: 0.1s;\n}\n\n.dropdown-item:hover {\n    background-color: #eeeeee;\n    transition: 0.1s;\n}",
						"",
					]);
					const a = s;
				},
				645: (t) => {
					t.exports = function (t) {
						var e = [];
						return (
							(e.toString = function () {
								return this.map(function (e) {
									var n = "",
										o = void 0 !== e[5];
									return (
										e[4] && (n += "@supports (".concat(e[4], ") {")),
										e[2] && (n += "@media ".concat(e[2], " {")),
										o &&
											(n += "@layer".concat(
												e[5].length > 0 ? " ".concat(e[5]) : "",
												" {",
											)),
										(n += t(e)),
										o && (n += "}"),
										e[2] && (n += "}"),
										e[4] && (n += "}"),
										n
									);
								}).join("");
							}),
							(e.i = function (t, n, o, i, r) {
								"string" == typeof t && (t = [[null, t, void 0]]);
								var s = {};
								if (o)
									for (var a = 0; a < this.length; a++) {
										var u = this[a][0];
										null != u && (s[u] = !0);
									}
								for (var l = 0; l < t.length; l++) {
									var p = [].concat(t[l]);
									(o && s[p[0]]) ||
										(void 0 !== r &&
											(void 0 === p[5] ||
												(p[1] = "@layer"
													.concat(
														p[5].length > 0 ? " ".concat(p[5]) : "",
														" {",
													)
													.concat(p[1], "}")),
											(p[5] = r)),
										n &&
											(p[2]
												? ((p[1] = "@media "
														.concat(p[2], " {")
														.concat(p[1], "}")),
												  (p[2] = n))
												: (p[2] = n)),
										i &&
											(p[4]
												? ((p[1] = "@supports ("
														.concat(p[4], ") {")
														.concat(p[1], "}")),
												  (p[4] = i))
												: (p[4] = "".concat(i))),
										e.push(p));
								}
							}),
							e
						);
					};
				},
				81: (t) => {
					t.exports = function (t) {
						return t[1];
					};
				},
				379: (t) => {
					var e = [];
					function n(t) {
						for (var n = -1, o = 0; o < e.length; o++)
							if (e[o].identifier === t) {
								n = o;
								break;
							}
						return n;
					}
					function o(t, o) {
						for (var r = {}, s = [], a = 0; a < t.length; a++) {
							var u = t[a],
								l = o.base ? u[0] + o.base : u[0],
								p = r[l] || 0,
								c = "".concat(l, " ").concat(p);
							r[l] = p + 1;
							var d = n(c),
								f = {
									css: u[1],
									media: u[2],
									sourceMap: u[3],
									supports: u[4],
									layer: u[5],
								};
							if (-1 !== d) e[d].references++, e[d].updater(f);
							else {
								var g = i(f, o);
								(o.byIndex = a),
									e.splice(a, 0, { identifier: c, updater: g, references: 1 });
							}
							s.push(c);
						}
						return s;
					}
					function i(t, e) {
						var n = e.domAPI(e);
						n.update(t);
						return function (e) {
							if (e) {
								if (
									e.css === t.css &&
									e.media === t.media &&
									e.sourceMap === t.sourceMap &&
									e.supports === t.supports &&
									e.layer === t.layer
								)
									return;
								n.update((t = e));
							} else n.remove();
						};
					}
					t.exports = function (t, i) {
						var r = o((t = t || []), (i = i || {}));
						return function (t) {
							t = t || [];
							for (var s = 0; s < r.length; s++) {
								var a = n(r[s]);
								e[a].references--;
							}
							for (var u = o(t, i), l = 0; l < r.length; l++) {
								var p = n(r[l]);
								0 === e[p].references && (e[p].updater(), e.splice(p, 1));
							}
							r = u;
						};
					};
				},
				569: (t) => {
					var e = {};
					t.exports = function (t, n) {
						var o = (function (t) {
							if (void 0 === e[t]) {
								var n = document.querySelector(t);
								if (
									window.HTMLIFrameElement &&
									n instanceof window.HTMLIFrameElement
								)
									try {
										n = n.contentDocument.head;
									} catch (t) {
										n = null;
									}
								e[t] = n;
							}
							return e[t];
						})(t);
						if (!o)
							throw new Error(
								"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
							);
						o.appendChild(n);
					};
				},
				216: (t) => {
					t.exports = function (t) {
						var e = document.createElement("style");
						return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
					};
				},
				565: (t, e, n) => {
					t.exports = function (t) {
						var e = n.nc;
						e && t.setAttribute("nonce", e);
					};
				},
				795: (t) => {
					t.exports = function (t) {
						if ("undefined" == typeof document)
							return { update: function () {}, remove: function () {} };
						var e = t.insertStyleElement(t);
						return {
							update: function (n) {
								!(function (t, e, n) {
									var o = "";
									n.supports && (o += "@supports (".concat(n.supports, ") {")),
										n.media && (o += "@media ".concat(n.media, " {"));
									var i = void 0 !== n.layer;
									i &&
										(o += "@layer".concat(
											n.layer.length > 0 ? " ".concat(n.layer) : "",
											" {",
										)),
										(o += n.css),
										i && (o += "}"),
										n.media && (o += "}"),
										n.supports && (o += "}");
									var r = n.sourceMap;
									r &&
										"undefined" != typeof btoa &&
										(o +=
											"\n/*# sourceMappingURL=data:application/json;base64,".concat(
												btoa(
													unescape(encodeURIComponent(JSON.stringify(r))),
												),
												" */",
											)),
										e.styleTagTransform(o, t, e.options);
								})(e, t, n);
							},
							remove: function () {
								!(function (t) {
									if (null === t.parentNode) return !1;
									t.parentNode.removeChild(t);
								})(e);
							},
						};
					};
				},
				589: (t) => {
					t.exports = function (t, e) {
						if (e.styleSheet) e.styleSheet.cssText = t;
						else {
							for (; e.firstChild; ) e.removeChild(e.firstChild);
							e.appendChild(document.createTextNode(t));
						}
					};
				},
			},
			e = {};
		function n(o) {
			var i = e[o];
			if (void 0 !== i) return i.exports;
			var r = (e[o] = { id: o, exports: {} });
			return t[o](r, r.exports, n), r.exports;
		}
		(n.n = (t) => {
			var e = t && t.__esModule ? () => t.default : () => t;
			return n.d(e, { a: e }), e;
		}),
			(n.d = (t, e) => {
				for (var o in e)
					n.o(e, o) &&
						!n.o(t, o) &&
						Object.defineProperty(t, o, { enumerable: !0, get: e[o] });
			}),
			(n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
			(n.r = (t) => {
				"undefined" != typeof Symbol &&
					Symbol.toStringTag &&
					Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
					Object.defineProperty(t, "__esModule", { value: !0 });
			}),
			(n.nc = void 0);
		var o = {};
		return (
			(() => {
				n.r(o), n.d(o, { otpdesigner: () => h });
				var t = n(379),
					e = n.n(t),
					i = n(795),
					r = n.n(i),
					s = n(569),
					a = n.n(s),
					u = n(565),
					l = n.n(u),
					p = n(216),
					c = n.n(p),
					d = n(589),
					f = n.n(d),
					g = n(426),
					_ = {};
				(_.styleTagTransform = f()),
					(_.setAttributes = l()),
					(_.insert = a().bind(null, "head")),
					(_.domAPI = r()),
					(_.insertStyleElement = c());
				e()(g.Z, _);
				g.Z && g.Z.locals && g.Z.locals;
				const h = function (t = {}, ...e) {
					const n = "opt_input_";
					let o = [];
					const i = {
						code: function (t, e) {
							let n = $("#otp_hidden_" + e.idSuffix).val();
							return (
								(n = m(n) ? n.trim() : ""),
								t.push({ done: n.length === e.settings.length, code: n }),
								t
							);
						},
						set: function (t, e, o) {
							let i = o[0];
							if (((i = m(i) ? i.trim() : ""), i.length === e.settings.length)) {
								for (let t = 0; t < i.length; t++)
									$("#" + n + t + "_" + e.idSuffix).trigger("otp-written", [
										i[t],
										!1,
									]);
								"function" == typeof e.settings.onchange && e.settings.onchange(i);
							}
							return t;
						},
						clear: function (t, e) {
							for (let t = e.settings.length - 1; t >= 0; t--)
								$("#" + n + t + "_" + e.idSuffix).trigger("otp-written", [
									"Backspace",
									!1,
								]);
							return (
								"function" == typeof e.settings.onchange && e.settings.onchange(""),
								t
							);
						},
						focus: function (t, e) {
							return (
								$(
									"#" + n + (e.settings.length - 1) + "_" + e.idSuffix,
								).otpdesigner__toggleFocus__(!0),
								t
							);
						},
						option: function (t, e, o) {
							return (
								void 0 === e.settings && (e.settings = {}),
								!m(o) || o.length < 1 || o.length > 2
									? console.error("Arguments number not valid")
									: 1 === o.length
									? t.push(e.settings[o[0]])
									: 2 === o.length &&
									  ((e.settings[o[0]] = o[1]),
									  $("#" + n + (e.settings.length - 1) + "_" + e.idSuffix).data(
											"otpdesigner",
											e,
									  )),
								t
							);
						},
						addClass: function (t, e, n) {
							return (
								$("#otp_" + e.idSuffix)
									.find(".otp-fake-input")
									.addClass(n[0] ?? []),
								t
							);
						},
						removeClass: function (t, e, n) {
							return (
								$("#otp_" + e.idSuffix)
									.find(".otp-fake-input")
									.addClass(n[0] ?? []),
								t
							);
						},
						hiddenInput: function (t, e) {
							return t.push($("#otp_hidden_" + e.idSuffix)), t;
						},
					};
					return (
						$(this).each(function () {
							let r = $(this).data("otpdesigner"),
								s = Math.floor(1e3 * Math.random() + 100);
							if (r)
								"string" == typeof t && void 0 !== i[t] && (o = i[t](o, r, [...e]));
							else {
								let e = $.extend(
										{
											length: 6,
											onlyNumbers: !1,
											inputsClasses: "",
											inputsParentClasses: "",
											enterClicked: null,
											typingDone: null,
											onchange: null,
											contextMenuElement: $(
												'<div class="dropdown-menu" id="contextMenu" style="display: none; position: fixed;">\n    <a class="dropdown-item paste-action">Paste</a>\n</div>',
											),
											openContextMenuElement: (t) => {
												let n = $(e.contextMenuElement);
												n &&
													(n.css({
														display: "block",
														left: t.pageX,
														top: t.pageY,
													}),
													$("body").append(n));
											},
											closeContextMenuElement: () => {
												let t = $(e.contextMenuElement);
												t && t.hide();
											},
										},
										t,
									),
									o = $(this);
								m($(this).attr("data-otp-length")) &&
									(e.length = parseInt($(this).attr("data-otp-length"))),
									m($(this).attr("data-otp-onlynumbers")) &&
										(e.onlyNumbers = v($(this).attr("data-otp-onlynumbers"))),
									m($(this).attr("data-inputs-classes")) &&
										(e.inputsClasses = $(this).attr("data-inputs-classes")),
									m($(this).attr("data-inputs-parent-classes")) &&
										(e.inputsParentClasses = $(this).attr(
											"data-inputs-parent-classes",
										)),
									(r = { idSuffix: s, settings: e }),
									$(this).data("otpdesigner", r),
									$(this).attr("data-otpdesigner-id", s);
								let i = $(
									'<div class="fake-inputs d-flex flex-row justify-content-center mt-2">',
								);
								i.attr("id", "otp_" + s),
									"" !== e.inputsParentClasses &&
										i.addClass(e.inputsParentClasses);
								let a = $('<input type="hidden">');
								a.attr("id", "otp_hidden_" + s),
									a.attr("name", "otp_hidden_" + s),
									a.appendTo(o);
								let u = $('<textarea class="realInput" tabindex="-1">-</textarea>');
								u.attr("id", "otp_real_" + s),
									u.attr("name", "otp_real_" + s),
									u.appendTo(i),
									u.on("input", function () {
										let t = (function (t) {
											let e = $("#otp_" + t.idSuffix).find(".realInput");
											if ("" === e.val()) return "Backspace";
											if ("-\n" === e.val()) return "Enter";
											return e.val().substring(1);
										})(r);
										!(function (t) {
											let e = $("#otp_" + t.idSuffix).find(".realInput");
											e.val("-"),
												setTimeout(() => {
													e[0].setSelectionRange(
														e.val().length,
														e.val().length,
													);
												}, 10);
										})(r),
											k(r).trigger("otp-written", [t]);
									}),
									u.on("keydown", function (t) {
										if (
											"ArrowLeft" === t.key ||
											"ArrowRight" === t.key ||
											"ArrowUp" === t.key ||
											"ArrowDown" === t.key ||
											"Tab" === t.key
										) {
											t.preventDefault();
											let e = k(r),
												n = i.find(".otp-fake-input"),
												o = n.index(e);
											"ArrowLeft" === t.key || "ArrowUp" === t.key
												? o > 0 &&
												  $(n[o - 1]).otpdesigner__toggleFocus__(!0)
												: o < n.length - 1 &&
												  $(n[o + 1]).otpdesigner__toggleFocus__(!0);
										}
									}),
									u.on("paste", (t, n = null) => {
										let o = n ?? t.originalEvent.clipboardData.getData("text");
										t.preventDefault();
										let i = o.split("");
										(i = i.filter(function (t) {
											return S(t, e.onlyNumbers);
										})),
											(o = i.join("")),
											o.length >= e.length && (o = o.substring(0, e.length)),
											$(
												'[data-otpdesigner-id="' + r.idSuffix + '"]',
											).otpdesigner("set", o);
									}),
									$(document).on("click", function () {
										e.closeContextMenuElement();
									}),
									e.contextMenuElement &&
										$(e.contextMenuElement)
											.find(".paste-action")
											.on("click", function () {
												try {
													navigator.clipboard
														.readText()
														.then((t) => {
															u.trigger("paste", [t]);
														})
														.catch((t) => {
															console.error(
																"Failed to read clipboard contents: ",
																t,
															);
														});
												} catch (t) {
													window.isSecureContext
														? console.error(
																"navigator.clipboard is not supported",
																t,
														  )
														: console.error(
																"navigator.clipboard is not supported in insecure contexts",
														  );
												}
											});
								for (let t = 0; t < e.length; t++) {
									let o = $(
										'<div class="m-2 text-center form-control rounded otp-fake-input"><span class="otp-content"></span></div>',
									);
									o.attr("id", n + t + "_" + s),
										o[0].addEventListener("click", function () {
											$(this).otpdesigner__isFocused__()
												? C(this, !0)
												: $(this).otpdesigner__toggleFocus__(!0);
										});
									let r = "text";
									"numeric" === e.type && (r = "number"),
										"" !== e.inputsClasses && o.addClass(e.inputsClasses),
										o.appendTo(i);
								}
								i.appendTo(o);
								let l = i.find(".otp-fake-input");
								l.each(function (t) {
									$(l[t]).off("otp-written"),
										$(l[t]).on("otp-written", function (n, o, i = !0) {
											if ("Backspace" === o)
												$(l[t]).otpdesigner__fakeInputVal__(""),
													0 !== t &&
														$(l[t - 1]).otpdesigner__toggleFocus__(!0);
											else {
												if (
													"Enter" === o &&
													t === l.length - 1 &&
													"" !== $(l[t]).otpdesigner__fakeInputVal__()
												)
													return (
														y(r, !1),
														null != e.enterClicked && e.enterClicked(),
														void x(r)
													);
												1 === o.length
													? S(o, e.onlyNumbers) &&
													  ((o = o.toLowerCase()),
													  $(l[t]).otpdesigner__fakeInputVal__(o),
													  t !== l.length - 1 &&
															$(l[t + 1]).otpdesigner__toggleFocus__(
																!0,
															))
													: u.trigger("paste", [o]);
											}
											if (
												(y(r, t === l.length - 1),
												i && "function" == typeof e.onchange)
											) {
												let t = $("#otp_hidden_" + r.idSuffix).val();
												(t = m(t) ? t.trim() : ""), e.onchange(t);
											}
										}),
										$(l[t]).off("focused"),
										$(l[t]).on("focused", function () {
											if (!$(l[t]).data("f"))
												for (let e = 0; e < t; e++)
													if (
														"" === $(l[e]).otpdesigner__fakeInputVal__()
													) {
														$(l[e]).data("f", "1"),
															$(l[e]).otpdesigner__toggleFocus__(!0),
															$(l[e]).removeData("f");
														break;
													}
										});
								}),
									l.on("contextmenu", function (t) {
										t.preventDefault(), e.openContextMenuElement(t);
									});
							}
						}),
						o.length > 1 ? o : 0 === o.length ? null : o[0]
					);
				};
				let m = (t, e = !0) => null != t && ("string" != typeof t || !e || "" !== t),
					v = function (t) {
						return ["true", "TRUE", "1"].includes(t.toString());
					},
					y = (t, e = !0) => {
						let n = $("#otp_" + t.idSuffix).find(".otp-fake-input"),
							o = "";
						n.each(function (t, e) {
							o += $(e).otpdesigner__fakeInputVal__().trim();
						}),
							$("#otp_hidden_" + t.idSuffix).val(o),
							o.length === n.length &&
								e &&
								(null != t.settings.typingDone && t.settings.typingDone(o), x(t));
					},
					x = (t) => {
						null == t.settings.enterClicked &&
							$(".otpdesigner__focus__").otpdesigner__toggleFocus__(!1);
					};
				function b(t) {
					C(t, !0), $(t).trigger("focused");
				}
				function k(t) {
					return $("#otp_" + t.idSuffix).find(".otp-fake-input.otpdesigner__focus__");
				}
				function C(t, e) {
					let n = $(t).parents(".fake-inputs").find(".realInput");
					e
						? (n[0].focus(), n[0].setSelectionRange(n.val().length, n.val().length))
						: n[0].blur();
				}
				$(document)[0].addEventListener("click", function (t) {
					let e = $(t.target),
						n = $(".otp-fake-input");
					!e.closest(".otp-fake-input").length &&
						0 !== n.length &&
						n.is(":visible") &&
						n.otpdesigner__toggleFocus__(!1);
				}),
					($.fn.otpdesigner__toggleFocus__ = function (t = null) {
						$(this).each(function () {
							null === t
								? $(this).hasClass("otpdesigner__focus__")
									? $(this).removeClass("otpdesigner__focus__")
									: ($(".otpdesigner__focus__").removeClass(
											"otpdesigner__focus__",
									  ),
									  $(this).addClass("otpdesigner__focus__"),
									  b(this))
								: !0 === t
								? ($(".otpdesigner__focus__").removeClass("otpdesigner__focus__"),
								  $(this).addClass("otpdesigner__focus__"),
								  b(this))
								: $(this).removeClass("otpdesigner__focus__");
						});
					}),
					($.fn.otpdesigner__isFocused__ = function () {
						return $(this).hasClass("otpdesigner__focus__");
					}),
					($.fn.otpdesigner__fakeInputVal__ = function (t = "RETURN_REQUESTED") {
						if ("RETURN_REQUESTED" === t) return $(this).find(".otp-content").html();
						$(this).find(".otp-content").html(t);
					});
				const S = (t, e) => (w.includes(t) && !e) || E.includes(t),
					w = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
					E = "0123456789".split("");
				jQuery.fn.otpdesigner = h;
			})(),
			o
		);
	})(),
);
