"use strict";
function _defineProperty(e, t, r) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
			  })
			: (e[t] = r),
		e
	);
}
!(function(e) {
	function t() {
		var t = (e.skyscanner = e.skyscanner || {}),
			r = (t.widgets = t.widgets || {});
		return (
			(r.renderCache = r.renderCache || {}),
			(r.requests = r.requests || {}),
			{ widgets: r }
		);
	}
	function r(e, t, r) {
		return (
			(t = t || ""),
			(r = r || {}),
			(r.v = "06066f"),
			e +
				t +
				"?" +
				Object.keys(r)
					.filter(function(e) {
						return e && null !== r[e] && void 0 !== r[e];
					})
					.map(function(e) {
						return (
							encodeURIComponent(e) +
							"=" +
							encodeURIComponent(r[e])
						);
					})
					.join("&")
		);
	}
	function a(e, t) {
		return r("https://www.skyscanner.net/g/widget-server", e, t);
	}
	function n(e, t) {
		return r("https://www.skyscanner.net/g/widget-server", e, t);
	}
	function i(t, r) {
		(this.scope = r || d),
			(this.xhr = e && e.XMLHttpRequest),
			(this.element = t),
			(this.locale = this.element.dataset.locale || "en-GB"),
			(this.market = this.element.dataset.market || "any"),
			(this.currency = this.element.dataset.currency || "any"),
			(this.widgetType = this.element.dataset.skyscannerWidget),
			(this.params = {}),
			(this.xhrParams = []),
			(this.errors = []),
			(this.serverUrl = "https://www.skyscanner.net/g/widget-server");
	}
	function s(e) {
		return e.document
			? window.location === window.parent.location
				? document.location.href
				: document.referrer
			: e.location
				? e.location.href
				: null;
	}
	function o(t) {
		if (e.document && e.document.querySelectorAll) {
			var r = e.document.querySelectorAll(t);
			return Array.prototype.slice.call(r);
		}
	}
	var d = t(),
		c = /^\{(.+)\}$/,
		l = /^([^(]+)\(([^)]+)\)$/,
		u = i.prototype;
	(u.removeXhr = function(e) {
		delete this.scope.widgets.requests[e];
	}),
		(u.getXhr = function(t, r, a) {
			if (!this.scope.widgets.requests[t]) {
				var n = new this.xhr();
				n.addEventListener("loadend", this.removeXhr.bind(this, t)),
					n.open("GET", t, !0),
					r || n.setRequestHeader("Widget-Referrer", s(e)),
					a && (n.withCredentials = !0),
					n.send(null),
					(this.scope.widgets.requests[t] = n);
			}
			return this.scope.widgets.requests[t];
		}),
		(u.addError = function(e, t) {
			this.errors.push({ message: e, error: t });
		}),
		(u.lookupLocation = function(e, t) {
			for (var r in e) if (!e[r]) return;
			return (
				t && (e.widgetType = t),
				this.getXhr(
					a(
						"/v1.0/" +
							this.locale +
							"/" +
							this.market +
							"/" +
							this.currency +
							"/location",
						e
					)
				)
			);
		}),
		(u.unregisterXhrParam = function(e) {
			this.xhrParams = this.xhrParams.filter(function(t) {
				return t.request !== e;
			});
		}),
		(u.handleXhrParamLoad = function(e, t) {
			this.unregisterXhrParam(t),
				4 !== t.readyState || 200 !== t.status
					? this.setParam(e, null)
					: this.setParam(e, t.responseText),
				this.beginRender();
		}),
		(u.registerXhrParam = function(e, t) {
			this.xhrParams.push({ key: e, request: t }),
				t.addEventListener(
					"load",
					this.handleXhrParamLoad.bind(this, e, t)
				);
		}),
		(u.setSimpleParam = function(e, t) {
			if (void 0 === t)
				return void this.addError(
					'Undefined parameter value for key "' + e + '"'
				);
			this.params[e] = t;
		}),
		(u.setComplexParams = function(e, t) {
			var r = this,
				a = null;
			if ("string" == typeof t)
				try {
					a = JSON.parse(t);
				} catch (e) {
					this.addError("Error parsing JSON data: " + t);
				}
			else a = t;
			e.forEach(function(e) {
				r.setSimpleParam(e.paramKey, (a && a[e.objectKey]) || null);
			});
		}),
		(u.setParam = function(e, t) {
			if (t instanceof this.xhr) this.registerXhrParam(e, t);
			else {
				var r = e.match(c);
				if (r) {
					var a = r[1]
						.split(",")
						.map(function(e) {
							return e.trim();
						})
						.map(function(e) {
							var t = e.match(l);
							return t
								? { paramKey: t[1], objectKey: t[2] }
								: { paramKey: e, objectKey: e };
						});
					this.setComplexParams(a, t);
				} else this.setSimpleParam(e, t);
			}
		}),
		(u.parseParamString = function(e) {
			var t = {};
			return (
				e.split(";").forEach(function(e) {
					var r = e.split(":");
					e && r.length > 1 && (t[r[0]] = r[1]);
				}),
				t
			);
		}),
		(u.parseFixedParams = function() {
			var e = this,
				t = [];
			this.element.dataset.params &&
				(t = this.parseParamString(this.element.dataset.params)),
				Object.keys(t).forEach(function(r) {
					e.setParam(r, t[r]);
				});
		}),
		(u.parseScriptedParams = function() {
			var e = this,
				t = this.element,
				r = t.dataset.scriptParams;
			if (r)
				try {
					var a = JSON.parse(r);
					Object.keys(a).forEach(function(t) {
						var r = a[t];
						if (t && r)
							try {
								Array.isArray(r) && (r = r.join("\n"));
								var n = function() {
									return eval("(" + r + ")");
								}.apply(e);
								e.setParam(t, n);
							} catch (r) {
								e.addError(
									'Error parsing scripted parameter "' +
										t +
										'"',
									r
								);
							}
					});
				} catch (e) {
					this.addError(
						"Error parsing data-script-parameters: " + r,
						e
					);
				}
		}),
		(u.parseLocationParams = function() {
			function e(e) {
				return (
					{
						HotelSearchWidget: "q",
						MultiVerticalWidget: ["destination", "q"],
						CarHireWidget: "destination"
					}[e] || "destination"
				);
			}
			function t(e) {
				return Array.isArray(e) ? e : [e];
			}
			function r(e) {
				return t(f.types[e]);
			}
			function a(e) {
				return t(f.attributes[e]);
			}
			function n(e, t) {
				var r = e + "-" + t,
					a = u.element.getAttribute("data-" + r);
				if (a)
					try {
						var n = function() {
							return eval("(" + a + ")");
						}.apply(u);
						if (void 0 === n || "undefined" === n)
							throw "Undefined value";
						return u.element.removeAttribute("data-" + r), n;
					} catch (e) {
						console.warn(
							"Failed to evaluate location " + r + " script: " + e
						);
					}
			}
			function i(e, t, r) {
				return a(r).reduce(function(a, i) {
					var s = n(t, i);
					return void 0 !== s && (e[r] = s), e;
				}, e);
			}
			function s(e, t) {
				return Object.keys(f.attributes).reduce(function(e, r) {
					return i(e, t, r);
				}, e);
			}
			function o(e) {
				var t = e.split(",");
				return 1 === t.length
					? "{" + t[0] + "(name)," + t[0] + "Id(id)}"
					: "{" +
							t.reduce(function(e, t) {
								return (
									e +
									(t + "(") +
									t +
									"Name), " +
									t +
									"Id(" +
									t +
									"Id),"
								);
							}, "") +
							"}";
			}
			function d(e, t) {
				var r = o(e),
					a = u.lookupLocation(t, u.widgetType);
				a && u.setParam(r, a);
			}
			function c(e) {
				var t = r(e).reduce(s, {});
				Object.keys(t).length > 0 && d(e, t);
			}
			var l,
				u = this,
				h = e(u.widgetType),
				f = {
					types: ((l = {}),
					_defineProperty(l, h, ["location", "destination"]),
					_defineProperty(l, "origin", "origin"),
					l),
					attributes: {
						name: ["param", "name"],
						latlon: "coords",
						phrase: "phrase",
						iataCode: "iata-code",
						geo: "geo-lookup"
					}
				};
			Object.keys(f.types).forEach(c);
		}),
		(u.parseAffiliateParams = function() {
			var e = this.element.dataset.affiliate;
			if (e) {
				var t = JSON.stringify(this.parseParamString(e));
				this.setParam("tracking", t);
			}
		}),
		(u.mergeAttributesIntoParams = function() {
			var e = this,
				t = [
					"skyscannerWidget",
					"skyscannerWidgetLoading",
					"locale",
					"market",
					"currency",
					"params",
					"affiliate"
				];
			Object.keys(this.element.dataset)
				.filter(function(e) {
					return -1 === t.indexOf(e);
				})
				.forEach(function(t) {
					e.params[t] = e.params[t] || e.element.dataset[t];
				});
		}),
		(u.beginRender = function() {
			if (!(this.xhrParams.length > 0)) {
				if (this.errors.length > 0)
					return (
						console.log(
							"Error(s) occured while loading widget",
							this
						),
						void this.errors.forEach(function(e) {
							console.log(e.message),
								e.error && console.log(e.error);
						})
					);
				this.mergeAttributesIntoParams();
				var e = a(
					"/v1.0/" +
						this.locale +
						"/" +
						this.market +
						"/" +
						this.currency +
						"/widgets/" +
						this.widgetType,
					this.params
				);
				if (void 0 !== this.scope.widgets.renderCache[e]) {
					var t = this.scope.widgets.renderCache[e];
					this.render(t.code, t.personalise);
				} else {
					var r = this.getXhr(e);
					r.addEventListener(
						"load",
						this.handleRenderLoad.bind(this, e, r)
					),
						r.addEventListener(
							"error",
							this.handleRenderLoadError.bind(this, e, r)
						);
				}
			}
		}),
		(u.handleRenderLoad = function(e, t) {
			if (4 === t.readyState) {
				if (200 !== t.status)
					return void this.handleRenderLoadError(e, t);
				var r = t.responseText,
					a =
						"true" ===
						t.getResponseHeader("Widget-Personalisation-Enabled");
				(this.scope.widgets.renderCache[e] = {
					code: r,
					personalise: a
				}),
					this.render(r, a);
			}
		}),
		(u.dispatchEvent = function(t, r) {
			if (e.CustomEvent) {
				var a = null;
				"function" == typeof e.CustomEvent
					? (a = new e.CustomEvent(t, r))
					: e.document &&
					  e.document.createEvent &&
					  ((a = e.document.createEvent("CustomEvent")),
					  a.initCustomEvent(t, !1, !1, (r && r.detail) || {})),
					a && this.element.dispatchEvent(a);
			}
		}),
		(u.render = function(e, t) {
			var r = this;
			try {
				(function(__widget) {
					eval(e);
				}.call(this, this),
					this.replaceScriptNodes(),
					t && this.personalise(),
					Object.keys(r.element.dataset).forEach(function(e) {
						delete r.element.dataset[e];
					}),
					(r.element.dataset.skyscannerWidgetLoaded = !0),
					this.dispatchEvent("skyscanner-widget-load", {
						detail: { widget: r }
					}));
			} catch (e) {
				(r.element.dataset.skyscannerWidgetError = !0),
					console.error("Error rendering widget:", e),
					this.dispatchEvent("skyscanner-widget-render-error", {
						detail: { widget: r, error: e }
					});
			}
		}),
		(u.handleRenderLoadError = function(e, t) {
			(this.element.dataset.skyscannerWidgetError = !0),
				console.error("Error rendering widget:", t),
				this.dispatchEvent("skyscanner-widget-load-error", {
					detail: {
						widget: this,
						status: t.status,
						error: t.responseText
					}
				});
		}),
		(u.personalise = function() {
			var e = this,
				t = {};
			Object.keys(e.params).forEach(function(r) {
				t[r] = e.params[r];
			}),
				(t.locale = e.locale),
				(t.market = e.market),
				(t.currency = e.currency),
				(t.widgetType = e.widgetType);
			var r = n("/personalise", t),
				a = this.getXhr(r, !0, !0);
			a.addEventListener(
				"load",
				this.handlePersonalisationData.bind(this, a)
			);
		}),
		(u.handlePersonalisationData = function(e) {
			if (4 === e.readyState && 200 === e.status) {
				var t = JSON.parse(e.responseText);
				t.personalise &&
					(void 0 !== t.message &&
						(this.element.querySelector(
							".skyscanner-widget-text"
						).innerHTML = t.message),
					void 0 !== t.referralUrl &&
						(this.element.querySelector("a").href = t.referralUrl));
			}
		}),
		(u.replaceScriptNodes = function() {
			var t = this.element.querySelectorAll("script");
			Array.prototype.forEach.call(t, function(t) {
				if ("SCRIPT" === t.tagName) {
					var r = e.document.createElement("script");
					(r.text = t.innerHTML),
						Array.prototype.forEach.call(t.attributes, function(e) {
							"replace" !== e.name &&
								r.setAttribute(e.name, e.value);
						}),
						t.parentNode.replaceChild(r, t);
				}
			});
		}),
		(d.widgets.load = function(e) {
			e = e || o;
			var t = e("[data-skyscanner-widget]");
			t &&
				t.forEach(function(e) {
					if (
						!(
							e.dataset.skyscannerWidgetLoading ||
							e.dataset.skyscannerWidgetLoaded ||
							e.dataset.skyscannerWidgetError
						)
					) {
						e.dataset.skyscannerWidgetLoading = !0;
						var t = new i(e);
						t.parseFixedParams(),
							t.parseScriptedParams(),
							t.parseLocationParams(),
							t.parseAffiliateParams(),
							t.beginRender();
					}
				});
		});
	var h = function(e) {
		"true" === e && d.widgets.load();
	};
	h("true"),
		"undefined" != typeof module &&
			module.exports &&
			(module.exports = {
				getWidgetUrl: a,
				WidgetElement: i,
				globals: d
			});
})("undefined" == typeof window ? global : window);
