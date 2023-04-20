(() => {
	var e = {
			595: () => {
				document.querySelectorAll(".accordion").forEach((e) => {
					e.addEventListener("click", (e) => {
						const t = e.currentTarget,
							s = t.querySelector(".accordion__control"),
							i = t.querySelector(".accordion__content"),
							a = t.querySelector(".accordion__icon-arrow");
						t.classList.toggle("accordion-open"),
							t.classList.contains("docs-hero__item")
								? i.classList.toggle(
										"accordion__content-open-docs"
								  )
								: i.classList.toggle("accordion__content-open"),
							a.classList.toggle(
								"accordion__icon-arrow-reversed"
							),
							t.classList.contains("accordion-open")
								? (s.setAttribute("aria-expanded", !0),
								  i.setAttribute("aria-hidden", !1),
								  (i.style.maxHeight = i.scrollHeight + "px"))
								: (s.setAttribute("aria-expanded", !1),
								  i.setAttribute("aria-hidden", !0),
								  (i.style.maxHeight = null));
					});
				});
			},
			661: () => {
				document
					.querySelectorAll(".cabinet-hero__label-change")
					.forEach((e) => {
						e.addEventListener("click", () => {
							(input = document.getElementById(
								e.getAttribute("for")
							)),
								"disabled" !== input.getAttribute("disabled")
									? (console.log(input.value),
									  input.setAttribute(
											"disabled",
											"disabled"
									  ),
									  e.classList.remove(
											"cabinet-hero__label-change-active"
									  ))
									: (input.removeAttribute("disabled"),
									  e.classList.add(
											"cabinet-hero__label-change-active"
									  ));
						});
					}),
					document
						.querySelectorAll(".cabinet-hero__button-change")
						.forEach((e) => {
							e.addEventListener("click", () => {
								(currentSection = document.querySelector(
									".cabinet-hero__frame-visible"
								)),
									(targetSection = document.getElementById(
										e.getAttribute("data-frame")
									)),
									currentSection !== targetSection &&
										(currentSection.classList.toggle(
											"cabinet-hero__frame-visible"
										),
										targetSection.classList.toggle(
											"cabinet-hero__frame-visible"
										));
							});
						});
			},
			586: () => {
				document
					.querySelectorAll(".catalog-hero__input")
					.forEach((e) => {
						e.addEventListener("change", () => {
							const t = e.getAttribute("data-category-filter");
							document
								.getElementById(t)
								.classList.toggle(
									"catalog-hero__container-category-hidden"
								);
						});
					});
			},
			472: () => {
				const e = document.querySelectorAll(
						".catalog-hero__container-visible .catalog-hero__container-image"
					),
					t = document.querySelector(
						".catalog-hero__container-hidden"
					),
					s = document.querySelector(
						".catalog-hero__container-visible"
					);
				null !== e &&
					null !== t &&
					null !== s &&
					e.forEach((e) => {
						e.addEventListener("click", () => {
							const i = e.getAttribute("data-category"),
								a = document.getElementById(i),
								r = document
									.querySelector(
										`[data-category-filter="${i}"]`
									)
									.closest(".catalog-hero__item");
							console.log(r),
								a.classList.add(
									"catalog-hero__container-category-first"
								),
								t.classList.remove(
									"catalog-hero__container-hidden"
								),
								s.classList.add(
									"catalog-hero__container-hidden"
								),
								(r.style.order = "2"),
								document
									.querySelector(".header")
									.scrollIntoView({
										behavior: "smooth",
										block: "start",
									});
							let n = document.querySelectorAll(
								".catalog-hero__container-category"
							);
							n[n.length - 1] !== a
								? (n[n.length - 1].style.marginBottom = "0")
								: (n[n.length - 2].style.marginBottom = "0");
						});
					});
			},
			27: () => {
				ymaps.ready(function () {
					if (null !== document.getElementById("contacts-map"))
						myMap = new ymaps.Map("contacts-map", {
							center: [55.05386257036589, 61.45853671216136],
							zoom: 9,
						});
					else {
						if (null === document.getElementById("main-map"))
							return;
						myMap = new ymaps.Map("main-map", {
							center: [55.05386257036589, 61.45853671216136],
							zoom: 9,
						});
					}
					const e = new ymaps.GeoObject({
							geometry: {
								type: "Point",
								coordinates: [
									55.154938569541265, 61.31335099999995,
								],
							},
						}),
						t = new ymaps.GeoObject({
							geometry: {
								type: "Point",
								coordinates: [
									54.86839356980941, 61.40452099999999,
								],
							},
						});
					myMap.geoObjects.add(e).add(t);
				});
			},
			617: () => {
				const e = document.getElementById("burger"),
					t = document.querySelector(".menu__bg");
				null !== e &&
					null !== t &&
					e.addEventListener("click", () => {
						t.classList.toggle("menu__bg-active"),
							e.classList.toggle("burger--active");
					});
			},
			774: () => {
				const e = document.querySelector(".main-feedback__button-more"),
					t = document.querySelectorAll(".main-feedback__slide");
				null !== e &&
					e.addEventListener("click", () => {
						t.forEach((e) => {
							e.classList.add("main-feedback__slide-visible-480");
						}),
							(e.style.display = "none");
					});
			},
			240: () => {
				const e = document.querySelector(".main"),
					t = document.querySelector(".header"),
					s = document.querySelector(".nav");
				if (null !== e && null !== t && null !== s) {
					e.style.paddingTop = t.offsetY;
					let i = 0;
					const a = () => window.pageYOffset,
						r = () => s.classList.contains("nav-open");
					window.addEventListener("scroll", () => {
						a() > i && r()
							? (s.classList.remove("nav-open"),
							  (s.style.maxHeight = null))
							: a() < i &&
							  !r() &&
							  (s.classList.add("nav-open"),
							  (s.style.maxHeight = s.scrollHeight + "px")),
							(i = a());
					});
				}
			},
			848: () => {
				document
					.querySelectorAll(".main-design__container-row")
					.forEach((e) => {
						const t = e.querySelectorAll(".main-design__label");
						t.forEach((e) => {
							(input = e.querySelector(".main-design__input")),
								input.addEventListener("change", () => {
									t.forEach((e) => {
										e.classList.remove(
											"main-design__label-active"
										);
									}),
										e.classList.add(
											"main-design__label-active"
										);
								});
						});
					});
			},
			986: () => {
				const e = document.querySelector(".search"),
					t = document.querySelectorAll(".search-icon"),
					s = document.querySelector(".search__content"),
					i = document.getElementById("burger"),
					a = document.querySelector(".menu__bg");
				null !== t &&
					null !== e &&
					null !== s &&
					(t.forEach((t) => {
						t.addEventListener("click", () => {
							e.classList.contains("search-visible")
								? e.classList.remove("search-visible")
								: (null !== i &&
										null !== a &&
										(a.classList.remove("menu__bg-active"),
										i.classList.remove("burger--active")),
								  setTimeout(() => {
										e.classList.add("search-visible");
								  }, 300));
						});
					}),
					e.addEventListener("click", () => {
						e.classList.remove("search-visible");
					}),
					s.addEventListener("click", (e) => {
						e.stopPropagation();
					}));
				const r = document.querySelector(".search__container"),
					n = document.querySelector(".header");
				null !== r &&
					null !== n &&
					(r.style.marginTop = n.offsetHeight + "px");
			},
			290: () => {
				const e = document.querySelector(".up-button__button");
				null !== e &&
					e.addEventListener("click", () => {
						document
							.querySelector(".header")
							.scrollIntoView({
								behavior: "smooth",
								block: "start",
							});
					});
			},
			578: () => {
				document
					.querySelectorAll(".main-feedback__container-video")
					.forEach((e) => {
						const t = e.querySelector(".main-feedback__video");
						let s = 0;
						const i = e.querySelector(
							".main-feedback__button-fullscreen"
						);
						null !== i &&
							i.addEventListener("click", (e) => {
								e.stopPropagation(),
									t.requestFullscreen
										? t.requestFullscreen()
										: t.mozRequestFullScreen
										? t.mozRequestFullScreen()
										: t.webkitRequestFullscreen &&
										  t.webkitRequestFullscreen();
							}),
							t.addEventListener("fullscreenchange", () => {
								s++,
									s > 1 &&
										((s = 0),
										t.load(),
										e.classList.remove(
											"main-feedback__container-video-active"
										));
							}),
							e.addEventListener("click", () => {
								e.classList.contains(
									"main-feedback__container-video-active"
								)
									? (e.classList.remove(
											"main-feedback__container-video-active"
									  ),
									  t.pause(),
									  0 == s && t.load())
									: (t.play(),
									  e.classList.add(
											"main-feedback__container-video-active"
									  ));
							});
					});
			},
		},
		t = {};
	function s(i) {
		var a = t[i];
		if (void 0 !== a) return a.exports;
		var r = (t[i] = { exports: {} });
		return e[i](r, r.exports, s), r.exports;
	}
	(() => {
		"use strict";
		const e = {
			windowEl: window,
			documentEl: document,
			htmlEl: document.documentElement,
			bodyEl: document.body,
		};
		function t(e) {
			return (
				null !== e &&
				"object" == typeof e &&
				"constructor" in e &&
				e.constructor === Object
			);
		}
		function i(e = {}, s = {}) {
			Object.keys(s).forEach((a) => {
				void 0 === e[a]
					? (e[a] = s[a])
					: t(s[a]) &&
					  t(e[a]) &&
					  Object.keys(s[a]).length > 0 &&
					  i(e[a], s[a]);
			});
		}
		s(240), s(595), s(848);
		const a = {
			body: {},
			addEventListener() {},
			removeEventListener() {},
			activeElement: { blur() {}, nodeName: "" },
			querySelector: () => null,
			querySelectorAll: () => [],
			getElementById: () => null,
			createEvent: () => ({ initEvent() {} }),
			createElement: () => ({
				children: [],
				childNodes: [],
				style: {},
				setAttribute() {},
				getElementsByTagName: () => [],
			}),
			createElementNS: () => ({}),
			importNode: () => null,
			location: {
				hash: "",
				host: "",
				hostname: "",
				href: "",
				origin: "",
				pathname: "",
				protocol: "",
				search: "",
			},
		};
		function r() {
			const e = "undefined" != typeof document ? document : {};
			return i(e, a), e;
		}
		const n = {
			document: a,
			navigator: { userAgent: "" },
			location: {
				hash: "",
				host: "",
				hostname: "",
				href: "",
				origin: "",
				pathname: "",
				protocol: "",
				search: "",
			},
			history: { replaceState() {}, pushState() {}, go() {}, back() {} },
			CustomEvent: function () {
				return this;
			},
			addEventListener() {},
			removeEventListener() {},
			getComputedStyle: () => ({ getPropertyValue: () => "" }),
			Image() {},
			Date() {},
			screen: {},
			setTimeout() {},
			clearTimeout() {},
			matchMedia: () => ({}),
			requestAnimationFrame: (e) =>
				"undefined" == typeof setTimeout
					? (e(), null)
					: setTimeout(e, 0),
			cancelAnimationFrame(e) {
				"undefined" != typeof setTimeout && clearTimeout(e);
			},
		};
		function l() {
			const e = "undefined" != typeof window ? window : {};
			return i(e, n), e;
		}
		function o(e, t = 0) {
			return setTimeout(e, t);
		}
		function d() {
			return Date.now();
		}
		function c(e) {
			return (
				"object" == typeof e &&
				null !== e &&
				e.constructor &&
				"Object" === Object.prototype.toString.call(e).slice(8, -1)
			);
		}
		function p(...e) {
			const t = Object(e[0]),
				s = ["__proto__", "constructor", "prototype"];
			for (let a = 1; a < e.length; a += 1) {
				const r = e[a];
				if (
					null != r &&
					((i = r),
					!("undefined" != typeof window &&
					void 0 !== window.HTMLElement
						? i instanceof HTMLElement
						: i && (1 === i.nodeType || 11 === i.nodeType)))
				) {
					const e = Object.keys(Object(r)).filter(
						(e) => s.indexOf(e) < 0
					);
					for (let s = 0, i = e.length; s < i; s += 1) {
						const i = e[s],
							a = Object.getOwnPropertyDescriptor(r, i);
						void 0 !== a &&
							a.enumerable &&
							(c(t[i]) && c(r[i])
								? r[i].__swiper__
									? (t[i] = r[i])
									: p(t[i], r[i])
								: !c(t[i]) && c(r[i])
								? ((t[i] = {}),
								  r[i].__swiper__
										? (t[i] = r[i])
										: p(t[i], r[i]))
								: (t[i] = r[i]));
					}
				}
			}
			var i;
			return t;
		}
		function u(e, t, s) {
			e.style.setProperty(t, s);
		}
		function m({ swiper: e, targetPosition: t, side: s }) {
			const i = l(),
				a = -e.translate;
			let r,
				n = null;
			const o = e.params.speed;
			(e.wrapperEl.style.scrollSnapType = "none"),
				i.cancelAnimationFrame(e.cssModeFrameID);
			const d = t > a ? "next" : "prev",
				c = (e, t) =>
					("next" === d && e >= t) || ("prev" === d && e <= t),
				p = () => {
					(r = new Date().getTime()), null === n && (n = r);
					const l = Math.max(Math.min((r - n) / o, 1), 0),
						d = 0.5 - Math.cos(l * Math.PI) / 2;
					let u = a + d * (t - a);
					if (
						(c(u, t) && (u = t),
						e.wrapperEl.scrollTo({ [s]: u }),
						c(u, t))
					)
						return (
							(e.wrapperEl.style.overflow = "hidden"),
							(e.wrapperEl.style.scrollSnapType = ""),
							setTimeout(() => {
								(e.wrapperEl.style.overflow = ""),
									e.wrapperEl.scrollTo({ [s]: u });
							}),
							void i.cancelAnimationFrame(e.cssModeFrameID)
						);
					e.cssModeFrameID = i.requestAnimationFrame(p);
				};
			p();
		}
		function h(e) {
			return (
				e.querySelector(".swiper-slide-transform") ||
				(e.shadowEl &&
					e.shadowEl.querySelector(".swiper-slide-transform")) ||
				e
			);
		}
		function f(e, t = "") {
			return [...e.children].filter((e) => e.matches(t));
		}
		function g(e, t = []) {
			const s = document.createElement(e);
			return s.classList.add(...(Array.isArray(t) ? t : [t])), s;
		}
		function v(e, t) {
			return l().getComputedStyle(e, null).getPropertyValue(t);
		}
		function b(e) {
			let t,
				s = e;
			if (s) {
				for (t = 0; null !== (s = s.previousSibling); )
					1 === s.nodeType && (t += 1);
				return t;
			}
		}
		function w(e, t) {
			const s = [];
			let i = e.parentElement;
			for (; i; )
				t ? i.matches(t) && s.push(i) : s.push(i),
					(i = i.parentElement);
			return s;
		}
		function y(e, t, s) {
			const i = l();
			return s
				? e["width" === t ? "offsetWidth" : "offsetHeight"] +
						parseFloat(
							i
								.getComputedStyle(e, null)
								.getPropertyValue(
									"width" === t
										? "margin-right"
										: "margin-top"
								)
						) +
						parseFloat(
							i
								.getComputedStyle(e, null)
								.getPropertyValue(
									"width" === t
										? "margin-left"
										: "margin-bottom"
								)
						)
				: e.offsetWidth;
		}
		let S, E, T;
		function x() {
			return (
				S ||
					(S = (function () {
						const e = l(),
							t = r();
						return {
							smoothScroll:
								t.documentElement &&
								"scrollBehavior" in t.documentElement.style,
							touch: !!(
								"ontouchstart" in e ||
								(e.DocumentTouch &&
									t instanceof e.DocumentTouch)
							),
						};
					})()),
				S
			);
		}
		const L = {
				on(e, t, s) {
					const i = this;
					if (!i.eventsListeners || i.destroyed) return i;
					if ("function" != typeof t) return i;
					const a = s ? "unshift" : "push";
					return (
						e.split(" ").forEach((e) => {
							i.eventsListeners[e] || (i.eventsListeners[e] = []),
								i.eventsListeners[e][a](t);
						}),
						i
					);
				},
				once(e, t, s) {
					const i = this;
					if (!i.eventsListeners || i.destroyed) return i;
					if ("function" != typeof t) return i;
					function a(...s) {
						i.off(e, a),
							a.__emitterProxy && delete a.__emitterProxy,
							t.apply(i, s);
					}
					return (a.__emitterProxy = t), i.on(e, a, s);
				},
				onAny(e, t) {
					const s = this;
					if (!s.eventsListeners || s.destroyed) return s;
					if ("function" != typeof e) return s;
					const i = t ? "unshift" : "push";
					return (
						s.eventsAnyListeners.indexOf(e) < 0 &&
							s.eventsAnyListeners[i](e),
						s
					);
				},
				offAny(e) {
					const t = this;
					if (!t.eventsListeners || t.destroyed) return t;
					if (!t.eventsAnyListeners) return t;
					const s = t.eventsAnyListeners.indexOf(e);
					return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
				},
				off(e, t) {
					const s = this;
					return !s.eventsListeners || s.destroyed
						? s
						: s.eventsListeners
						? (e.split(" ").forEach((e) => {
								void 0 === t
									? (s.eventsListeners[e] = [])
									: s.eventsListeners[e] &&
									  s.eventsListeners[e].forEach((i, a) => {
											(i === t ||
												(i.__emitterProxy &&
													i.__emitterProxy === t)) &&
												s.eventsListeners[e].splice(
													a,
													1
												);
									  });
						  }),
						  s)
						: s;
				},
				emit(...e) {
					const t = this;
					if (!t.eventsListeners || t.destroyed) return t;
					if (!t.eventsListeners) return t;
					let s, i, a;
					return (
						"string" == typeof e[0] || Array.isArray(e[0])
							? ((s = e[0]), (i = e.slice(1, e.length)), (a = t))
							: ((s = e[0].events),
							  (i = e[0].data),
							  (a = e[0].context || t)),
						i.unshift(a),
						(Array.isArray(s) ? s : s.split(" ")).forEach((e) => {
							t.eventsAnyListeners &&
								t.eventsAnyListeners.length &&
								t.eventsAnyListeners.forEach((t) => {
									t.apply(a, [e, ...i]);
								}),
								t.eventsListeners &&
									t.eventsListeners[e] &&
									t.eventsListeners[e].forEach((e) => {
										e.apply(a, i);
									});
						}),
						t
					);
				},
			},
			C = (e, t) => {
				if (!e || e.destroyed || !e.params) return;
				const s = t.closest(
					e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
				);
				if (s) {
					const t = s.querySelector(
						`.${e.params.lazyPreloaderClass}`
					);
					t && t.remove();
				}
			},
			_ = (e, t) => {
				if (!e.slides[t]) return;
				const s = e.slides[t].querySelector('[loading="lazy"]');
				s && s.removeAttribute("loading");
			},
			M = (e) => {
				if (!e || e.destroyed || !e.params) return;
				let t = e.params.lazyPreloadPrevNext;
				const s = e.slides.length;
				if (!s || !t || t < 0) return;
				t = Math.min(t, s);
				const i =
						"auto" === e.params.slidesPerView
							? e.slidesPerViewDynamic()
							: Math.ceil(e.params.slidesPerView),
					a = e.activeIndex,
					r = a + i - 1;
				if (e.params.rewind)
					for (let i = a - t; i <= r + t; i += 1) {
						const t = ((i % s) + s) % s;
						t !== a && t > r && _(e, t);
					}
				else
					for (
						let i = Math.max(r - t, 0);
						i <= Math.min(r + t, s - 1);
						i += 1
					)
						i !== a && i > r && _(e, i);
			},
			P = {
				updateSize: function () {
					const e = this;
					let t, s;
					const i = e.el;
					(t =
						void 0 !== e.params.width && null !== e.params.width
							? e.params.width
							: i.clientWidth),
						(s =
							void 0 !== e.params.height &&
							null !== e.params.height
								? e.params.height
								: i.clientHeight),
						(0 === t && e.isHorizontal()) ||
							(0 === s && e.isVertical()) ||
							((t =
								t -
								parseInt(v(i, "padding-left") || 0, 10) -
								parseInt(v(i, "padding-right") || 0, 10)),
							(s =
								s -
								parseInt(v(i, "padding-top") || 0, 10) -
								parseInt(v(i, "padding-bottom") || 0, 10)),
							Number.isNaN(t) && (t = 0),
							Number.isNaN(s) && (s = 0),
							Object.assign(e, {
								width: t,
								height: s,
								size: e.isHorizontal() ? t : s,
							}));
				},
				updateSlides: function () {
					const e = this;
					function t(t) {
						return e.isHorizontal()
							? t
							: {
									width: "height",
									"margin-top": "margin-left",
									"margin-bottom ": "margin-right",
									"margin-left": "margin-top",
									"margin-right": "margin-bottom",
									"padding-left": "padding-top",
									"padding-right": "padding-bottom",
									marginRight: "marginBottom",
							  }[t];
					}
					function s(e, s) {
						return parseFloat(e.getPropertyValue(t(s)) || 0);
					}
					const i = e.params,
						{
							wrapperEl: a,
							slidesEl: r,
							size: n,
							rtlTranslate: l,
							wrongRTL: o,
						} = e,
						d = e.virtual && i.virtual.enabled,
						c = d ? e.virtual.slides.length : e.slides.length,
						p = f(r, `.${e.params.slideClass}, swiper-slide`),
						m = d ? e.virtual.slides.length : p.length;
					let h = [];
					const g = [],
						b = [];
					let w = i.slidesOffsetBefore;
					"function" == typeof w &&
						(w = i.slidesOffsetBefore.call(e));
					let S = i.slidesOffsetAfter;
					"function" == typeof S && (S = i.slidesOffsetAfter.call(e));
					const E = e.snapGrid.length,
						T = e.slidesGrid.length;
					let x = i.spaceBetween,
						L = -w,
						C = 0,
						_ = 0;
					if (void 0 === n) return;
					"string" == typeof x &&
						x.indexOf("%") >= 0 &&
						(x = (parseFloat(x.replace("%", "")) / 100) * n),
						(e.virtualSize = -x),
						p.forEach((e) => {
							l
								? (e.style.marginLeft = "")
								: (e.style.marginRight = ""),
								(e.style.marginBottom = ""),
								(e.style.marginTop = "");
						}),
						i.centeredSlides &&
							i.cssMode &&
							(u(a, "--swiper-centered-offset-before", ""),
							u(a, "--swiper-centered-offset-after", ""));
					const M = i.grid && i.grid.rows > 1 && e.grid;
					let P;
					M && e.grid.initSlides(m);
					const k =
						"auto" === i.slidesPerView &&
						i.breakpoints &&
						Object.keys(i.breakpoints).filter(
							(e) => void 0 !== i.breakpoints[e].slidesPerView
						).length > 0;
					for (let a = 0; a < m; a += 1) {
						let r;
						if (
							((P = 0),
							p[a] && (r = p[a]),
							M && e.grid.updateSlide(a, r, m, t),
							!p[a] || "none" !== v(r, "display"))
						) {
							if ("auto" === i.slidesPerView) {
								k && (p[a].style[t("width")] = "");
								const n = getComputedStyle(r),
									l = r.style.transform,
									o = r.style.webkitTransform;
								if (
									(l && (r.style.transform = "none"),
									o && (r.style.webkitTransform = "none"),
									i.roundLengths)
								)
									P = e.isHorizontal()
										? y(r, "width", !0)
										: y(r, "height", !0);
								else {
									const e = s(n, "width"),
										t = s(n, "padding-left"),
										i = s(n, "padding-right"),
										a = s(n, "margin-left"),
										l = s(n, "margin-right"),
										o = n.getPropertyValue("box-sizing");
									if (o && "border-box" === o) P = e + a + l;
									else {
										const {
											clientWidth: s,
											offsetWidth: n,
										} = r;
										P = e + t + i + a + l + (n - s);
									}
								}
								l && (r.style.transform = l),
									o && (r.style.webkitTransform = o),
									i.roundLengths && (P = Math.floor(P));
							} else
								(P =
									(n - (i.slidesPerView - 1) * x) /
									i.slidesPerView),
									i.roundLengths && (P = Math.floor(P)),
									p[a] && (p[a].style[t("width")] = `${P}px`);
							p[a] && (p[a].swiperSlideSize = P),
								b.push(P),
								i.centeredSlides
									? ((L = L + P / 2 + C / 2 + x),
									  0 === C && 0 !== a && (L = L - n / 2 - x),
									  0 === a && (L = L - n / 2 - x),
									  Math.abs(L) < 0.001 && (L = 0),
									  i.roundLengths && (L = Math.floor(L)),
									  _ % i.slidesPerGroup == 0 && h.push(L),
									  g.push(L))
									: (i.roundLengths && (L = Math.floor(L)),
									  (_ -
											Math.min(
												e.params.slidesPerGroupSkip,
												_
											)) %
											e.params.slidesPerGroup ==
											0 && h.push(L),
									  g.push(L),
									  (L = L + P + x)),
								(e.virtualSize += P + x),
								(C = P),
								(_ += 1);
						}
					}
					if (
						((e.virtualSize = Math.max(e.virtualSize, n) + S),
						l &&
							o &&
							("slide" === i.effect ||
								"coverflow" === i.effect) &&
							(a.style.width = `${
								e.virtualSize + i.spaceBetween
							}px`),
						i.setWrapperSize &&
							(a.style[t("width")] = `${
								e.virtualSize + i.spaceBetween
							}px`),
						M && e.grid.updateWrapperSize(P, h, t),
						!i.centeredSlides)
					) {
						const t = [];
						for (let s = 0; s < h.length; s += 1) {
							let a = h[s];
							i.roundLengths && (a = Math.floor(a)),
								h[s] <= e.virtualSize - n && t.push(a);
						}
						(h = t),
							Math.floor(e.virtualSize - n) -
								Math.floor(h[h.length - 1]) >
								1 && h.push(e.virtualSize - n);
					}
					if (d && i.loop) {
						const t = b[0] + x;
						if (i.slidesPerGroup > 1) {
							const s = Math.ceil(
									(e.virtual.slidesBefore +
										e.virtual.slidesAfter) /
										i.slidesPerGroup
								),
								a = t * i.slidesPerGroup;
							for (let e = 0; e < s; e += 1)
								h.push(h[h.length - 1] + a);
						}
						for (
							let s = 0;
							s < e.virtual.slidesBefore + e.virtual.slidesAfter;
							s += 1
						)
							1 === i.slidesPerGroup &&
								h.push(h[h.length - 1] + t),
								g.push(g[g.length - 1] + t),
								(e.virtualSize += t);
					}
					if ((0 === h.length && (h = [0]), 0 !== i.spaceBetween)) {
						const s =
							e.isHorizontal() && l
								? "marginLeft"
								: t("marginRight");
						p.filter(
							(e, t) =>
								!(i.cssMode && !i.loop) || t !== p.length - 1
						).forEach((e) => {
							e.style[s] = `${x}px`;
						});
					}
					if (i.centeredSlides && i.centeredSlidesBounds) {
						let e = 0;
						b.forEach((t) => {
							e += t + (i.spaceBetween ? i.spaceBetween : 0);
						}),
							(e -= i.spaceBetween);
						const t = e - n;
						h = h.map((e) => (e < 0 ? -w : e > t ? t + S : e));
					}
					if (i.centerInsufficientSlides) {
						let e = 0;
						if (
							(b.forEach((t) => {
								e += t + (i.spaceBetween ? i.spaceBetween : 0);
							}),
							(e -= i.spaceBetween),
							e < n)
						) {
							const t = (n - e) / 2;
							h.forEach((e, s) => {
								h[s] = e - t;
							}),
								g.forEach((e, s) => {
									g[s] = e + t;
								});
						}
					}
					if (
						(Object.assign(e, {
							slides: p,
							snapGrid: h,
							slidesGrid: g,
							slidesSizesGrid: b,
						}),
						i.centeredSlides &&
							i.cssMode &&
							!i.centeredSlidesBounds)
					) {
						u(a, "--swiper-centered-offset-before", -h[0] + "px"),
							u(
								a,
								"--swiper-centered-offset-after",
								e.size / 2 - b[b.length - 1] / 2 + "px"
							);
						const t = -e.snapGrid[0],
							s = -e.slidesGrid[0];
						(e.snapGrid = e.snapGrid.map((e) => e + t)),
							(e.slidesGrid = e.slidesGrid.map((e) => e + s));
					}
					if (
						(m !== c && e.emit("slidesLengthChange"),
						h.length !== E &&
							(e.params.watchOverflow && e.checkOverflow(),
							e.emit("snapGridLengthChange")),
						g.length !== T && e.emit("slidesGridLengthChange"),
						i.watchSlidesProgress && e.updateSlidesOffset(),
						!(
							d ||
							i.cssMode ||
							("slide" !== i.effect && "fade" !== i.effect)
						))
					) {
						const t = `${i.containerModifierClass}backface-hidden`,
							s = e.el.classList.contains(t);
						m <= i.maxBackfaceHiddenSlides
							? s || e.el.classList.add(t)
							: s && e.el.classList.remove(t);
					}
				},
				updateAutoHeight: function (e) {
					const t = this,
						s = [],
						i = t.virtual && t.params.virtual.enabled;
					let a,
						r = 0;
					"number" == typeof e
						? t.setTransition(e)
						: !0 === e && t.setTransition(t.params.speed);
					const n = (e) =>
						i ? t.getSlideIndexByData(e) : t.slides[e];
					if (
						"auto" !== t.params.slidesPerView &&
						t.params.slidesPerView > 1
					)
						if (t.params.centeredSlides)
							(t.visibleSlides || []).forEach((e) => {
								s.push(e);
							});
						else
							for (
								a = 0;
								a < Math.ceil(t.params.slidesPerView);
								a += 1
							) {
								const e = t.activeIndex + a;
								if (e > t.slides.length && !i) break;
								s.push(n(e));
							}
					else s.push(n(t.activeIndex));
					for (a = 0; a < s.length; a += 1)
						if (void 0 !== s[a]) {
							const e = s[a].offsetHeight;
							r = e > r ? e : r;
						}
					(r || 0 === r) && (t.wrapperEl.style.height = `${r}px`);
				},
				updateSlidesOffset: function () {
					const e = this,
						t = e.slides,
						s = e.isElement
							? e.isHorizontal()
								? e.wrapperEl.offsetLeft
								: e.wrapperEl.offsetTop
							: 0;
					for (let i = 0; i < t.length; i += 1)
						t[i].swiperSlideOffset =
							(e.isHorizontal()
								? t[i].offsetLeft
								: t[i].offsetTop) -
							s -
							e.cssOverflowAdjustment();
				},
				updateSlidesProgress: function (
					e = (this && this.translate) || 0
				) {
					const t = this,
						s = t.params,
						{ slides: i, rtlTranslate: a, snapGrid: r } = t;
					if (0 === i.length) return;
					void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
					let n = -e;
					a && (n = e),
						i.forEach((e) => {
							e.classList.remove(s.slideVisibleClass);
						}),
						(t.visibleSlidesIndexes = []),
						(t.visibleSlides = []);
					for (let e = 0; e < i.length; e += 1) {
						const l = i[e];
						let o = l.swiperSlideOffset;
						s.cssMode &&
							s.centeredSlides &&
							(o -= i[0].swiperSlideOffset);
						const d =
								(n +
									(s.centeredSlides ? t.minTranslate() : 0) -
									o) /
								(l.swiperSlideSize + s.spaceBetween),
							c =
								(n -
									r[0] +
									(s.centeredSlides ? t.minTranslate() : 0) -
									o) /
								(l.swiperSlideSize + s.spaceBetween),
							p = -(n - o),
							u = p + t.slidesSizesGrid[e];
						((p >= 0 && p < t.size - 1) ||
							(u > 1 && u <= t.size) ||
							(p <= 0 && u >= t.size)) &&
							(t.visibleSlides.push(l),
							t.visibleSlidesIndexes.push(e),
							i[e].classList.add(s.slideVisibleClass)),
							(l.progress = a ? -d : d),
							(l.originalProgress = a ? -c : c);
					}
				},
				updateProgress: function (e) {
					const t = this;
					if (void 0 === e) {
						const s = t.rtlTranslate ? -1 : 1;
						e = (t && t.translate && t.translate * s) || 0;
					}
					const s = t.params,
						i = t.maxTranslate() - t.minTranslate();
					let {
						progress: a,
						isBeginning: r,
						isEnd: n,
						progressLoop: l,
					} = t;
					const o = r,
						d = n;
					if (0 === i) (a = 0), (r = !0), (n = !0);
					else {
						a = (e - t.minTranslate()) / i;
						const s = Math.abs(e - t.minTranslate()) < 1,
							l = Math.abs(e - t.maxTranslate()) < 1;
						(r = s || a <= 0),
							(n = l || a >= 1),
							s && (a = 0),
							l && (a = 1);
					}
					if (s.loop) {
						const s = t.getSlideIndexByData(0),
							i = t.getSlideIndexByData(t.slides.length - 1),
							a = t.slidesGrid[s],
							r = t.slidesGrid[i],
							n = t.slidesGrid[t.slidesGrid.length - 1],
							o = Math.abs(e);
						(l = o >= a ? (o - a) / n : (o + n - r) / n),
							l > 1 && (l -= 1);
					}
					Object.assign(t, {
						progress: a,
						progressLoop: l,
						isBeginning: r,
						isEnd: n,
					}),
						(s.watchSlidesProgress ||
							(s.centeredSlides && s.autoHeight)) &&
							t.updateSlidesProgress(e),
						r && !o && t.emit("reachBeginning toEdge"),
						n && !d && t.emit("reachEnd toEdge"),
						((o && !r) || (d && !n)) && t.emit("fromEdge"),
						t.emit("progress", a);
				},
				updateSlidesClasses: function () {
					const e = this,
						{
							slides: t,
							params: s,
							slidesEl: i,
							activeIndex: a,
						} = e,
						r = e.virtual && s.virtual.enabled,
						n = (e) =>
							f(i, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
					let l;
					if (
						(t.forEach((e) => {
							e.classList.remove(
								s.slideActiveClass,
								s.slideNextClass,
								s.slidePrevClass
							);
						}),
						r)
					)
						if (s.loop) {
							let t = a - e.virtual.slidesBefore;
							t < 0 && (t = e.virtual.slides.length + t),
								t >= e.virtual.slides.length &&
									(t -= e.virtual.slides.length),
								(l = n(`[data-swiper-slide-index="${t}"]`));
						} else l = n(`[data-swiper-slide-index="${a}"]`);
					else l = t[a];
					if (l) {
						l.classList.add(s.slideActiveClass);
						let e = (function (e, t) {
							const s = [];
							for (; e.nextElementSibling; ) {
								const i = e.nextElementSibling;
								t ? i.matches(t) && s.push(i) : s.push(i),
									(e = i);
							}
							return s;
						})(l, `.${s.slideClass}, swiper-slide`)[0];
						s.loop && !e && (e = t[0]),
							e && e.classList.add(s.slideNextClass);
						let i = (function (e, t) {
							const s = [];
							for (; e.previousElementSibling; ) {
								const i = e.previousElementSibling;
								t ? i.matches(t) && s.push(i) : s.push(i),
									(e = i);
							}
							return s;
						})(l, `.${s.slideClass}, swiper-slide`)[0];
						s.loop && 0 === !i && (i = t[t.length - 1]),
							i && i.classList.add(s.slidePrevClass);
					}
					e.emitSlidesClasses();
				},
				updateActiveIndex: function (e) {
					const t = this,
						s = t.rtlTranslate ? t.translate : -t.translate,
						{
							snapGrid: i,
							params: a,
							activeIndex: r,
							realIndex: n,
							snapIndex: l,
						} = t;
					let o,
						d = e;
					const c = (e) => {
						let s = e - t.virtual.slidesBefore;
						return (
							s < 0 && (s = t.virtual.slides.length + s),
							s >= t.virtual.slides.length &&
								(s -= t.virtual.slides.length),
							s
						);
					};
					if (
						(void 0 === d &&
							(d = (function (e) {
								const { slidesGrid: t, params: s } = e,
									i = e.rtlTranslate
										? e.translate
										: -e.translate;
								let a;
								for (let e = 0; e < t.length; e += 1)
									void 0 !== t[e + 1]
										? i >= t[e] &&
										  i < t[e + 1] - (t[e + 1] - t[e]) / 2
											? (a = e)
											: i >= t[e] &&
											  i < t[e + 1] &&
											  (a = e + 1)
										: i >= t[e] && (a = e);
								return (
									s.normalizeSlideIndex &&
										(a < 0 || void 0 === a) &&
										(a = 0),
									a
								);
							})(t)),
						i.indexOf(s) >= 0)
					)
						o = i.indexOf(s);
					else {
						const e = Math.min(a.slidesPerGroupSkip, d);
						o = e + Math.floor((d - e) / a.slidesPerGroup);
					}
					if ((o >= i.length && (o = i.length - 1), d === r))
						return (
							o !== l &&
								((t.snapIndex = o), t.emit("snapIndexChange")),
							void (
								t.params.loop &&
								t.virtual &&
								t.params.virtual.enabled &&
								(t.realIndex = c(d))
							)
						);
					let p;
					(p =
						t.virtual && a.virtual.enabled && a.loop
							? c(d)
							: t.slides[d]
							? parseInt(
									t.slides[d].getAttribute(
										"data-swiper-slide-index"
									) || d,
									10
							  )
							: d),
						Object.assign(t, {
							previousSnapIndex: l,
							snapIndex: o,
							previousRealIndex: n,
							realIndex: p,
							previousIndex: r,
							activeIndex: d,
						}),
						t.initialized && M(t),
						t.emit("activeIndexChange"),
						t.emit("snapIndexChange"),
						n !== p && t.emit("realIndexChange"),
						(t.initialized || t.params.runCallbacksOnInit) &&
							t.emit("slideChange");
				},
				updateClickedSlide: function (e) {
					const t = this,
						s = t.params,
						i = e.closest(`.${s.slideClass}, swiper-slide`);
					let a,
						r = !1;
					if (i)
						for (let e = 0; e < t.slides.length; e += 1)
							if (t.slides[e] === i) {
								(r = !0), (a = e);
								break;
							}
					if (!i || !r)
						return (
							(t.clickedSlide = void 0),
							void (t.clickedIndex = void 0)
						);
					(t.clickedSlide = i),
						t.virtual && t.params.virtual.enabled
							? (t.clickedIndex = parseInt(
									i.getAttribute("data-swiper-slide-index"),
									10
							  ))
							: (t.clickedIndex = a),
						s.slideToClickedSlide &&
							void 0 !== t.clickedIndex &&
							t.clickedIndex !== t.activeIndex &&
							t.slideToClickedSlide();
				},
			};
		function k({ swiper: e, runCallbacks: t, direction: s, step: i }) {
			const { activeIndex: a, previousIndex: r } = e;
			let n = s;
			if (
				(n || (n = a > r ? "next" : a < r ? "prev" : "reset"),
				e.emit(`transition${i}`),
				t && a !== r)
			) {
				if ("reset" === n)
					return void e.emit(`slideResetTransition${i}`);
				e.emit(`slideChangeTransition${i}`),
					"next" === n
						? e.emit(`slideNextTransition${i}`)
						: e.emit(`slidePrevTransition${i}`);
			}
		}
		const A = {
			slideTo: function (e = 0, t = this.params.speed, s = !0, i, a) {
				"string" == typeof e && (e = parseInt(e, 10));
				const r = this;
				let n = e;
				n < 0 && (n = 0);
				const {
					params: l,
					snapGrid: o,
					slidesGrid: d,
					previousIndex: c,
					activeIndex: p,
					rtlTranslate: u,
					wrapperEl: h,
					enabled: f,
				} = r;
				if (
					(r.animating && l.preventInteractionOnTransition) ||
					(!f && !i && !a)
				)
					return !1;
				const g = Math.min(r.params.slidesPerGroupSkip, n);
				let v = g + Math.floor((n - g) / r.params.slidesPerGroup);
				v >= o.length && (v = o.length - 1);
				const b = -o[v];
				if (l.normalizeSlideIndex)
					for (let e = 0; e < d.length; e += 1) {
						const t = -Math.floor(100 * b),
							s = Math.floor(100 * d[e]),
							i = Math.floor(100 * d[e + 1]);
						void 0 !== d[e + 1]
							? t >= s && t < i - (i - s) / 2
								? (n = e)
								: t >= s && t < i && (n = e + 1)
							: t >= s && (n = e);
					}
				if (r.initialized && n !== p) {
					if (
						!r.allowSlideNext &&
						b < r.translate &&
						b < r.minTranslate()
					)
						return !1;
					if (
						!r.allowSlidePrev &&
						b > r.translate &&
						b > r.maxTranslate() &&
						(p || 0) !== n
					)
						return !1;
				}
				let w;
				if (
					(n !== (c || 0) && s && r.emit("beforeSlideChangeStart"),
					r.updateProgress(b),
					(w = n > p ? "next" : n < p ? "prev" : "reset"),
					(u && -b === r.translate) || (!u && b === r.translate))
				)
					return (
						r.updateActiveIndex(n),
						l.autoHeight && r.updateAutoHeight(),
						r.updateSlidesClasses(),
						"slide" !== l.effect && r.setTranslate(b),
						"reset" !== w &&
							(r.transitionStart(s, w), r.transitionEnd(s, w)),
						!1
					);
				if (l.cssMode) {
					const e = r.isHorizontal(),
						s = u ? b : -b;
					if (0 === t) {
						const t = r.virtual && r.params.virtual.enabled;
						t &&
							((r.wrapperEl.style.scrollSnapType = "none"),
							(r._immediateVirtual = !0)),
							t &&
							!r._cssModeVirtualInitialSet &&
							r.params.initialSlide > 0
								? ((r._cssModeVirtualInitialSet = !0),
								  requestAnimationFrame(() => {
										h[e ? "scrollLeft" : "scrollTop"] = s;
								  }))
								: (h[e ? "scrollLeft" : "scrollTop"] = s),
							t &&
								requestAnimationFrame(() => {
									(r.wrapperEl.style.scrollSnapType = ""),
										(r._immediateVirtual = !1);
								});
					} else {
						if (!r.support.smoothScroll)
							return (
								m({
									swiper: r,
									targetPosition: s,
									side: e ? "left" : "top",
								}),
								!0
							);
						h.scrollTo({
							[e ? "left" : "top"]: s,
							behavior: "smooth",
						});
					}
					return !0;
				}
				return (
					r.setTransition(t),
					r.setTranslate(b),
					r.updateActiveIndex(n),
					r.updateSlidesClasses(),
					r.emit("beforeTransitionStart", t, i),
					r.transitionStart(s, w),
					0 === t
						? r.transitionEnd(s, w)
						: r.animating ||
						  ((r.animating = !0),
						  r.onSlideToWrapperTransitionEnd ||
								(r.onSlideToWrapperTransitionEnd = function (
									e
								) {
									r &&
										!r.destroyed &&
										e.target === this &&
										(r.wrapperEl.removeEventListener(
											"transitionend",
											r.onSlideToWrapperTransitionEnd
										),
										(r.onSlideToWrapperTransitionEnd =
											null),
										delete r.onSlideToWrapperTransitionEnd,
										r.transitionEnd(s, w));
								}),
						  r.wrapperEl.addEventListener(
								"transitionend",
								r.onSlideToWrapperTransitionEnd
						  )),
					!0
				);
			},
			slideToLoop: function (e = 0, t = this.params.speed, s = !0, i) {
				"string" == typeof e && (e = parseInt(e, 10));
				const a = this;
				let r = e;
				return (
					a.params.loop &&
						(a.virtual && a.params.virtual.enabled
							? (r += a.virtual.slidesBefore)
							: (r = a.getSlideIndexByData(r))),
					a.slideTo(r, t, s, i)
				);
			},
			slideNext: function (e = this.params.speed, t = !0, s) {
				const i = this,
					{ enabled: a, params: r, animating: n } = i;
				if (!a) return i;
				let l = r.slidesPerGroup;
				"auto" === r.slidesPerView &&
					1 === r.slidesPerGroup &&
					r.slidesPerGroupAuto &&
					(l = Math.max(i.slidesPerViewDynamic("current", !0), 1));
				const o = i.activeIndex < r.slidesPerGroupSkip ? 1 : l,
					d = i.virtual && r.virtual.enabled;
				if (r.loop) {
					if (n && !d && r.loopPreventsSliding) return !1;
					i.loopFix({ direction: "next" }),
						(i._clientLeft = i.wrapperEl.clientLeft);
				}
				return r.rewind && i.isEnd
					? i.slideTo(0, e, t, s)
					: i.slideTo(i.activeIndex + o, e, t, s);
			},
			slidePrev: function (e = this.params.speed, t = !0, s) {
				const i = this,
					{
						params: a,
						snapGrid: r,
						slidesGrid: n,
						rtlTranslate: l,
						enabled: o,
						animating: d,
					} = i;
				if (!o) return i;
				const c = i.virtual && a.virtual.enabled;
				if (a.loop) {
					if (d && !c && a.loopPreventsSliding) return !1;
					i.loopFix({ direction: "prev" }),
						(i._clientLeft = i.wrapperEl.clientLeft);
				}
				function p(e) {
					return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
				}
				const u = p(l ? i.translate : -i.translate),
					m = r.map((e) => p(e));
				let h = r[m.indexOf(u) - 1];
				if (void 0 === h && a.cssMode) {
					let e;
					r.forEach((t, s) => {
						u >= t && (e = s);
					}),
						void 0 !== e && (h = r[e > 0 ? e - 1 : e]);
				}
				let f = 0;
				if (
					(void 0 !== h &&
						((f = n.indexOf(h)),
						f < 0 && (f = i.activeIndex - 1),
						"auto" === a.slidesPerView &&
							1 === a.slidesPerGroup &&
							a.slidesPerGroupAuto &&
							((f =
								f - i.slidesPerViewDynamic("previous", !0) + 1),
							(f = Math.max(f, 0)))),
					a.rewind && i.isBeginning)
				) {
					const a =
						i.params.virtual &&
						i.params.virtual.enabled &&
						i.virtual
							? i.virtual.slides.length - 1
							: i.slides.length - 1;
					return i.slideTo(a, e, t, s);
				}
				return i.slideTo(f, e, t, s);
			},
			slideReset: function (e = this.params.speed, t = !0, s) {
				return this.slideTo(this.activeIndex, e, t, s);
			},
			slideToClosest: function (
				e = this.params.speed,
				t = !0,
				s,
				i = 0.5
			) {
				const a = this;
				let r = a.activeIndex;
				const n = Math.min(a.params.slidesPerGroupSkip, r),
					l = n + Math.floor((r - n) / a.params.slidesPerGroup),
					o = a.rtlTranslate ? a.translate : -a.translate;
				if (o >= a.snapGrid[l]) {
					const e = a.snapGrid[l];
					o - e > (a.snapGrid[l + 1] - e) * i &&
						(r += a.params.slidesPerGroup);
				} else {
					const e = a.snapGrid[l - 1];
					o - e <= (a.snapGrid[l] - e) * i &&
						(r -= a.params.slidesPerGroup);
				}
				return (
					(r = Math.max(r, 0)),
					(r = Math.min(r, a.slidesGrid.length - 1)),
					a.slideTo(r, e, t, s)
				);
			},
			slideToClickedSlide: function () {
				const e = this,
					{ params: t, slidesEl: s } = e,
					i =
						"auto" === t.slidesPerView
							? e.slidesPerViewDynamic()
							: t.slidesPerView;
				let a,
					r = e.clickedIndex;
				const n = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
				if (t.loop) {
					if (e.animating) return;
					(a = parseInt(
						e.clickedSlide.getAttribute("data-swiper-slide-index"),
						10
					)),
						t.centeredSlides
							? r < e.loopedSlides - i / 2 ||
							  r > e.slides.length - e.loopedSlides + i / 2
								? (e.loopFix(),
								  (r = e.getSlideIndex(
										f(
											s,
											`${n}[data-swiper-slide-index="${a}"]`
										)[0]
								  )),
								  o(() => {
										e.slideTo(r);
								  }))
								: e.slideTo(r)
							: r > e.slides.length - i
							? (e.loopFix(),
							  (r = e.getSlideIndex(
									f(
										s,
										`${n}[data-swiper-slide-index="${a}"]`
									)[0]
							  )),
							  o(() => {
									e.slideTo(r);
							  }))
							: e.slideTo(r);
				} else e.slideTo(r);
			},
		};
		function I(e) {
			const t = this,
				s = r(),
				i = l(),
				a = t.touchEventsData;
			a.evCache.push(e);
			const { params: n, touches: o, enabled: c } = t;
			if (!c) return;
			if (!n.simulateTouch && "mouse" === e.pointerType) return;
			if (t.animating && n.preventInteractionOnTransition) return;
			!t.animating && n.cssMode && n.loop && t.loopFix();
			let p = e;
			p.originalEvent && (p = p.originalEvent);
			let u = p.target;
			if ("wrapper" === n.touchEventsTarget && !t.wrapperEl.contains(u))
				return;
			if ("which" in p && 3 === p.which) return;
			if ("button" in p && p.button > 0) return;
			if (a.isTouched && a.isMoved) return;
			const m = !!n.noSwipingClass && "" !== n.noSwipingClass,
				h = e.composedPath ? e.composedPath() : e.path;
			m && p.target && p.target.shadowRoot && h && (u = h[0]);
			const f = n.noSwipingSelector
					? n.noSwipingSelector
					: `.${n.noSwipingClass}`,
				g = !(!p.target || !p.target.shadowRoot);
			if (
				n.noSwiping &&
				(g
					? (function (e, t = this) {
							return (function t(s) {
								if (!s || s === r() || s === l()) return null;
								s.assignedSlot && (s = s.assignedSlot);
								const i = s.closest(e);
								return i || s.getRootNode
									? i || t(s.getRootNode().host)
									: null;
							})(t);
					  })(f, u)
					: u.closest(f))
			)
				return void (t.allowClick = !0);
			if (n.swipeHandler && !u.closest(n.swipeHandler)) return;
			(o.currentX = p.pageX), (o.currentY = p.pageY);
			const v = o.currentX,
				b = o.currentY,
				w = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
				y = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
			if (w && (v <= y || v >= i.innerWidth - y)) {
				if ("prevent" !== w) return;
				e.preventDefault();
			}
			Object.assign(a, {
				isTouched: !0,
				isMoved: !1,
				allowTouchCallbacks: !0,
				isScrolling: void 0,
				startMoving: void 0,
			}),
				(o.startX = v),
				(o.startY = b),
				(a.touchStartTime = d()),
				(t.allowClick = !0),
				t.updateSize(),
				(t.swipeDirection = void 0),
				n.threshold > 0 && (a.allowThresholdMove = !1);
			let S = !0;
			u.matches(a.focusableElements) &&
				((S = !1), "SELECT" === u.nodeName && (a.isTouched = !1)),
				s.activeElement &&
					s.activeElement.matches(a.focusableElements) &&
					s.activeElement !== u &&
					s.activeElement.blur();
			const E = S && t.allowTouchMove && n.touchStartPreventDefault;
			(!n.touchStartForcePreventDefault && !E) ||
				u.isContentEditable ||
				p.preventDefault(),
				t.params.freeMode &&
					t.params.freeMode.enabled &&
					t.freeMode &&
					t.animating &&
					!n.cssMode &&
					t.freeMode.onTouchStart(),
				t.emit("touchStart", p);
		}
		function O(e) {
			const t = r(),
				s = this,
				i = s.touchEventsData,
				{ params: a, touches: n, rtlTranslate: l, enabled: o } = s;
			if (!o) return;
			if (!a.simulateTouch && "mouse" === e.pointerType) return;
			let c = e;
			if ((c.originalEvent && (c = c.originalEvent), !i.isTouched))
				return void (
					i.startMoving &&
					i.isScrolling &&
					s.emit("touchMoveOpposite", c)
				);
			const p = i.evCache.findIndex((e) => e.pointerId === c.pointerId);
			p >= 0 && (i.evCache[p] = c);
			const u = i.evCache.length > 1 ? i.evCache[0] : c,
				m = u.pageX,
				h = u.pageY;
			if (c.preventedByNestedSwiper)
				return (n.startX = m), void (n.startY = h);
			if (!s.allowTouchMove)
				return (
					c.target.matches(i.focusableElements) ||
						(s.allowClick = !1),
					void (
						i.isTouched &&
						(Object.assign(n, {
							startX: m,
							startY: h,
							prevX: s.touches.currentX,
							prevY: s.touches.currentY,
							currentX: m,
							currentY: h,
						}),
						(i.touchStartTime = d()))
					)
				);
			if (a.touchReleaseOnEdges && !a.loop)
				if (s.isVertical()) {
					if (
						(h < n.startY && s.translate <= s.maxTranslate()) ||
						(h > n.startY && s.translate >= s.minTranslate())
					)
						return (i.isTouched = !1), void (i.isMoved = !1);
				} else if (
					(m < n.startX && s.translate <= s.maxTranslate()) ||
					(m > n.startX && s.translate >= s.minTranslate())
				)
					return;
			if (
				t.activeElement &&
				c.target === t.activeElement &&
				c.target.matches(i.focusableElements)
			)
				return (i.isMoved = !0), void (s.allowClick = !1);
			if (
				(i.allowTouchCallbacks && s.emit("touchMove", c),
				c.targetTouches && c.targetTouches.length > 1)
			)
				return;
			(n.currentX = m), (n.currentY = h);
			const f = n.currentX - n.startX,
				g = n.currentY - n.startY;
			if (
				s.params.threshold &&
				Math.sqrt(f ** 2 + g ** 2) < s.params.threshold
			)
				return;
			if (void 0 === i.isScrolling) {
				let e;
				(s.isHorizontal() && n.currentY === n.startY) ||
				(s.isVertical() && n.currentX === n.startX)
					? (i.isScrolling = !1)
					: f * f + g * g >= 25 &&
					  ((e =
							(180 * Math.atan2(Math.abs(g), Math.abs(f))) /
							Math.PI),
					  (i.isScrolling = s.isHorizontal()
							? e > a.touchAngle
							: 90 - e > a.touchAngle));
			}
			if (
				(i.isScrolling && s.emit("touchMoveOpposite", c),
				void 0 === i.startMoving &&
					((n.currentX === n.startX && n.currentY === n.startY) ||
						(i.startMoving = !0)),
				i.isScrolling ||
					(s.zoom &&
						s.params.zoom &&
						s.params.zoom.enabled &&
						i.evCache.length > 1))
			)
				return void (i.isTouched = !1);
			if (!i.startMoving) return;
			(s.allowClick = !1),
				!a.cssMode && c.cancelable && c.preventDefault(),
				a.touchMoveStopPropagation && !a.nested && c.stopPropagation();
			let v = s.isHorizontal() ? f : g,
				b = s.isHorizontal()
					? n.currentX - n.previousX
					: n.currentY - n.previousY;
			a.oneWayMovement &&
				((v = Math.abs(v) * (l ? 1 : -1)),
				(b = Math.abs(b) * (l ? 1 : -1))),
				(n.diff = v),
				(v *= a.touchRatio),
				l && ((v = -v), (b = -b));
			const w = s.touchesDirection;
			(s.swipeDirection = v > 0 ? "prev" : "next"),
				(s.touchesDirection = b > 0 ? "prev" : "next");
			const y = s.params.loop && !a.cssMode;
			if (!i.isMoved) {
				if (
					(y && s.loopFix({ direction: s.swipeDirection }),
					(i.startTranslate = s.getTranslate()),
					s.setTransition(0),
					s.animating)
				) {
					const e = new window.CustomEvent("transitionend", {
						bubbles: !0,
						cancelable: !0,
					});
					s.wrapperEl.dispatchEvent(e);
				}
				(i.allowMomentumBounce = !1),
					!a.grabCursor ||
						(!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
						s.setGrabCursor(!0),
					s.emit("sliderFirstMove", c);
			}
			let S;
			i.isMoved &&
				w !== s.touchesDirection &&
				y &&
				Math.abs(v) >= 1 &&
				(s.loopFix({ direction: s.swipeDirection, setTranslate: !0 }),
				(S = !0)),
				s.emit("sliderMove", c),
				(i.isMoved = !0),
				(i.currentTranslate = v + i.startTranslate);
			let E = !0,
				T = a.resistanceRatio;
			if (
				(a.touchReleaseOnEdges && (T = 0),
				v > 0
					? (y &&
							!S &&
							i.currentTranslate >
								(a.centeredSlides
									? s.minTranslate() - s.size / 2
									: s.minTranslate()) &&
							s.loopFix({
								direction: "prev",
								setTranslate: !0,
								activeSlideIndex: 0,
							}),
					  i.currentTranslate > s.minTranslate() &&
							((E = !1),
							a.resistance &&
								(i.currentTranslate =
									s.minTranslate() -
									1 +
									(-s.minTranslate() +
										i.startTranslate +
										v) **
										T)))
					: v < 0 &&
					  (y &&
							!S &&
							i.currentTranslate <
								(a.centeredSlides
									? s.maxTranslate() + s.size / 2
									: s.maxTranslate()) &&
							s.loopFix({
								direction: "next",
								setTranslate: !0,
								activeSlideIndex:
									s.slides.length -
									("auto" === a.slidesPerView
										? s.slidesPerViewDynamic()
										: Math.ceil(
												parseFloat(a.slidesPerView, 10)
										  )),
							}),
					  i.currentTranslate < s.maxTranslate() &&
							((E = !1),
							a.resistance &&
								(i.currentTranslate =
									s.maxTranslate() +
									1 -
									(s.maxTranslate() - i.startTranslate - v) **
										T))),
				E && (c.preventedByNestedSwiper = !0),
				!s.allowSlideNext &&
					"next" === s.swipeDirection &&
					i.currentTranslate < i.startTranslate &&
					(i.currentTranslate = i.startTranslate),
				!s.allowSlidePrev &&
					"prev" === s.swipeDirection &&
					i.currentTranslate > i.startTranslate &&
					(i.currentTranslate = i.startTranslate),
				s.allowSlidePrev ||
					s.allowSlideNext ||
					(i.currentTranslate = i.startTranslate),
				a.threshold > 0)
			) {
				if (!(Math.abs(v) > a.threshold || i.allowThresholdMove))
					return void (i.currentTranslate = i.startTranslate);
				if (!i.allowThresholdMove)
					return (
						(i.allowThresholdMove = !0),
						(n.startX = n.currentX),
						(n.startY = n.currentY),
						(i.currentTranslate = i.startTranslate),
						void (n.diff = s.isHorizontal()
							? n.currentX - n.startX
							: n.currentY - n.startY)
					);
			}
			a.followFinger &&
				!a.cssMode &&
				(((a.freeMode && a.freeMode.enabled && s.freeMode) ||
					a.watchSlidesProgress) &&
					(s.updateActiveIndex(), s.updateSlidesClasses()),
				s.params.freeMode &&
					a.freeMode.enabled &&
					s.freeMode &&
					s.freeMode.onTouchMove(),
				s.updateProgress(i.currentTranslate),
				s.setTranslate(i.currentTranslate));
		}
		function z(e) {
			const t = this,
				s = t.touchEventsData,
				i = s.evCache.findIndex((t) => t.pointerId === e.pointerId);
			if (
				(i >= 0 && s.evCache.splice(i, 1),
				["pointercancel", "pointerout", "pointerleave"].includes(
					e.type
				) &&
					("pointercancel" !== e.type ||
						(!t.browser.isSafari && !t.browser.isWebView)))
			)
				return;
			const {
				params: a,
				touches: r,
				rtlTranslate: n,
				slidesGrid: l,
				enabled: c,
			} = t;
			if (!c) return;
			if (!a.simulateTouch && "mouse" === e.pointerType) return;
			let p = e;
			if (
				(p.originalEvent && (p = p.originalEvent),
				s.allowTouchCallbacks && t.emit("touchEnd", p),
				(s.allowTouchCallbacks = !1),
				!s.isTouched)
			)
				return (
					s.isMoved && a.grabCursor && t.setGrabCursor(!1),
					(s.isMoved = !1),
					void (s.startMoving = !1)
				);
			a.grabCursor &&
				s.isMoved &&
				s.isTouched &&
				(!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
				t.setGrabCursor(!1);
			const u = d(),
				m = u - s.touchStartTime;
			if (t.allowClick) {
				const e = p.path || (p.composedPath && p.composedPath());
				t.updateClickedSlide((e && e[0]) || p.target),
					t.emit("tap click", p),
					m < 300 &&
						u - s.lastClickTime < 300 &&
						t.emit("doubleTap doubleClick", p);
			}
			if (
				((s.lastClickTime = d()),
				o(() => {
					t.destroyed || (t.allowClick = !0);
				}),
				!s.isTouched ||
					!s.isMoved ||
					!t.swipeDirection ||
					0 === r.diff ||
					s.currentTranslate === s.startTranslate)
			)
				return (
					(s.isTouched = !1),
					(s.isMoved = !1),
					void (s.startMoving = !1)
				);
			let h;
			if (
				((s.isTouched = !1),
				(s.isMoved = !1),
				(s.startMoving = !1),
				(h = a.followFinger
					? n
						? t.translate
						: -t.translate
					: -s.currentTranslate),
				a.cssMode)
			)
				return;
			if (t.params.freeMode && a.freeMode.enabled)
				return void t.freeMode.onTouchEnd({ currentPos: h });
			let f = 0,
				g = t.slidesSizesGrid[0];
			for (
				let e = 0;
				e < l.length;
				e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
			) {
				const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
				void 0 !== l[e + t]
					? h >= l[e] &&
					  h < l[e + t] &&
					  ((f = e), (g = l[e + t] - l[e]))
					: h >= l[e] &&
					  ((f = e), (g = l[l.length - 1] - l[l.length - 2]));
			}
			let v = null,
				b = null;
			a.rewind &&
				(t.isBeginning
					? (b =
							t.params.virtual &&
							t.params.virtual.enabled &&
							t.virtual
								? t.virtual.slides.length - 1
								: t.slides.length - 1)
					: t.isEnd && (v = 0));
			const w = (h - l[f]) / g,
				y = f < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
			if (m > a.longSwipesMs) {
				if (!a.longSwipes) return void t.slideTo(t.activeIndex);
				"next" === t.swipeDirection &&
					(w >= a.longSwipesRatio
						? t.slideTo(a.rewind && t.isEnd ? v : f + y)
						: t.slideTo(f)),
					"prev" === t.swipeDirection &&
						(w > 1 - a.longSwipesRatio
							? t.slideTo(f + y)
							: null !== b &&
							  w < 0 &&
							  Math.abs(w) > a.longSwipesRatio
							? t.slideTo(b)
							: t.slideTo(f));
			} else {
				if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
				!t.navigation ||
				(p.target !== t.navigation.nextEl &&
					p.target !== t.navigation.prevEl)
					? ("next" === t.swipeDirection &&
							t.slideTo(null !== v ? v : f + y),
					  "prev" === t.swipeDirection &&
							t.slideTo(null !== b ? b : f))
					: p.target === t.navigation.nextEl
					? t.slideTo(f + y)
					: t.slideTo(f);
			}
		}
		function q() {
			const e = this,
				{ params: t, el: s } = e;
			if (s && 0 === s.offsetWidth) return;
			t.breakpoints && e.setBreakpoint();
			const { allowSlideNext: i, allowSlidePrev: a, snapGrid: r } = e,
				n = e.virtual && e.params.virtual.enabled;
			(e.allowSlideNext = !0),
				(e.allowSlidePrev = !0),
				e.updateSize(),
				e.updateSlides(),
				e.updateSlidesClasses();
			const l = n && t.loop;
			!("auto" === t.slidesPerView || t.slidesPerView > 1) ||
			!e.isEnd ||
			e.isBeginning ||
			e.params.centeredSlides ||
			l
				? e.params.loop && !n
					? e.slideToLoop(e.realIndex, 0, !1, !0)
					: e.slideTo(e.activeIndex, 0, !1, !0)
				: e.slideTo(e.slides.length - 1, 0, !1, !0),
				e.autoplay &&
					e.autoplay.running &&
					e.autoplay.paused &&
					(clearTimeout(e.autoplay.resizeTimeout),
					(e.autoplay.resizeTimeout = setTimeout(() => {
						e.autoplay &&
							e.autoplay.running &&
							e.autoplay.paused &&
							e.autoplay.resume();
					}, 500))),
				(e.allowSlidePrev = a),
				(e.allowSlideNext = i),
				e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
		}
		function B(e) {
			const t = this;
			t.enabled &&
				(t.allowClick ||
					(t.params.preventClicks && e.preventDefault(),
					t.params.preventClicksPropagation &&
						t.animating &&
						(e.stopPropagation(), e.stopImmediatePropagation())));
		}
		function $() {
			const e = this,
				{ wrapperEl: t, rtlTranslate: s, enabled: i } = e;
			if (!i) return;
			let a;
			(e.previousTranslate = e.translate),
				e.isHorizontal()
					? (e.translate = -t.scrollLeft)
					: (e.translate = -t.scrollTop),
				0 === e.translate && (e.translate = 0),
				e.updateActiveIndex(),
				e.updateSlidesClasses();
			const r = e.maxTranslate() - e.minTranslate();
			(a = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
				a !== e.progress &&
					e.updateProgress(s ? -e.translate : e.translate),
				e.emit("setTranslate", e.translate, !1);
		}
		function G(e) {
			C(this, e.target), this.update();
		}
		let D = !1;
		function F() {}
		const H = (e, t) => {
				const s = r(),
					{ params: i, el: a, wrapperEl: n, device: l } = e,
					o = !!i.nested,
					d = "on" === t ? "addEventListener" : "removeEventListener",
					c = t;
				a[d]("pointerdown", e.onTouchStart, { passive: !1 }),
					s[d]("pointermove", e.onTouchMove, {
						passive: !1,
						capture: o,
					}),
					s[d]("pointerup", e.onTouchEnd, { passive: !0 }),
					s[d]("pointercancel", e.onTouchEnd, { passive: !0 }),
					s[d]("pointerout", e.onTouchEnd, { passive: !0 }),
					s[d]("pointerleave", e.onTouchEnd, { passive: !0 }),
					(i.preventClicks || i.preventClicksPropagation) &&
						a[d]("click", e.onClick, !0),
					i.cssMode && n[d]("scroll", e.onScroll),
					i.updateOnWindowResize
						? e[c](
								l.ios || l.android
									? "resize orientationchange observerUpdate"
									: "resize observerUpdate",
								q,
								!0
						  )
						: e[c]("observerUpdate", q, !0),
					a[d]("load", e.onLoad, { capture: !0 });
			},
			N = (e, t) => e.grid && t.grid && t.grid.rows > 1,
			V = {
				init: !0,
				direction: "horizontal",
				oneWayMovement: !1,
				touchEventsTarget: "wrapper",
				initialSlide: 0,
				speed: 300,
				cssMode: !1,
				updateOnWindowResize: !0,
				resizeObserver: !0,
				nested: !1,
				createElements: !1,
				enabled: !0,
				focusableElements:
					"input, select, option, textarea, button, video, label",
				width: null,
				height: null,
				preventInteractionOnTransition: !1,
				userAgent: null,
				url: null,
				edgeSwipeDetection: !1,
				edgeSwipeThreshold: 20,
				autoHeight: !1,
				setWrapperSize: !1,
				virtualTranslate: !1,
				effect: "slide",
				breakpoints: void 0,
				breakpointsBase: "window",
				spaceBetween: 0,
				slidesPerView: 1,
				slidesPerGroup: 1,
				slidesPerGroupSkip: 0,
				slidesPerGroupAuto: !1,
				centeredSlides: !1,
				centeredSlidesBounds: !1,
				slidesOffsetBefore: 0,
				slidesOffsetAfter: 0,
				normalizeSlideIndex: !0,
				centerInsufficientSlides: !1,
				watchOverflow: !0,
				roundLengths: !1,
				touchRatio: 1,
				touchAngle: 45,
				simulateTouch: !0,
				shortSwipes: !0,
				longSwipes: !0,
				longSwipesRatio: 0.5,
				longSwipesMs: 300,
				followFinger: !0,
				allowTouchMove: !0,
				threshold: 5,
				touchMoveStopPropagation: !1,
				touchStartPreventDefault: !0,
				touchStartForcePreventDefault: !1,
				touchReleaseOnEdges: !1,
				uniqueNavElements: !0,
				resistance: !0,
				resistanceRatio: 0.85,
				watchSlidesProgress: !1,
				grabCursor: !1,
				preventClicks: !0,
				preventClicksPropagation: !0,
				slideToClickedSlide: !1,
				loop: !1,
				loopedSlides: null,
				loopPreventsSliding: !0,
				rewind: !1,
				allowSlidePrev: !0,
				allowSlideNext: !0,
				swipeHandler: null,
				noSwiping: !0,
				noSwipingClass: "swiper-no-swiping",
				noSwipingSelector: null,
				passiveListeners: !0,
				maxBackfaceHiddenSlides: 10,
				containerModifierClass: "swiper-",
				slideClass: "swiper-slide",
				slideActiveClass: "swiper-slide-active",
				slideVisibleClass: "swiper-slide-visible",
				slideNextClass: "swiper-slide-next",
				slidePrevClass: "swiper-slide-prev",
				wrapperClass: "swiper-wrapper",
				lazyPreloaderClass: "swiper-lazy-preloader",
				lazyPreloadPrevNext: 0,
				runCallbacksOnInit: !0,
				_emitClasses: !1,
			};
		function j(e, t) {
			return function (s = {}) {
				const i = Object.keys(s)[0],
					a = s[i];
				"object" == typeof a && null !== a
					? (["navigation", "pagination", "scrollbar"].indexOf(i) >=
							0 &&
							!0 === e[i] &&
							(e[i] = { auto: !0 }),
					  i in e && "enabled" in a
							? (!0 === e[i] && (e[i] = { enabled: !0 }),
							  "object" != typeof e[i] ||
									"enabled" in e[i] ||
									(e[i].enabled = !0),
							  e[i] || (e[i] = { enabled: !1 }),
							  p(t, s))
							: p(t, s))
					: p(t, s);
			};
		}
		const R = {
				eventsEmitter: L,
				update: P,
				translate: {
					getTranslate: function (
						e = this.isHorizontal() ? "x" : "y"
					) {
						const {
							params: t,
							rtlTranslate: s,
							translate: i,
							wrapperEl: a,
						} = this;
						if (t.virtualTranslate) return s ? -i : i;
						if (t.cssMode) return i;
						let r = (function (e, t = "x") {
							const s = l();
							let i, a, r;
							const n = (function (e) {
								const t = l();
								let s;
								return (
									t.getComputedStyle &&
										(s = t.getComputedStyle(e, null)),
									!s &&
										e.currentStyle &&
										(s = e.currentStyle),
									s || (s = e.style),
									s
								);
							})(e);
							return (
								s.WebKitCSSMatrix
									? ((a = n.transform || n.webkitTransform),
									  a.split(",").length > 6 &&
											(a = a
												.split(", ")
												.map((e) => e.replace(",", "."))
												.join(", ")),
									  (r = new s.WebKitCSSMatrix(
											"none" === a ? "" : a
									  )))
									: ((r =
											n.MozTransform ||
											n.OTransform ||
											n.MsTransform ||
											n.msTransform ||
											n.transform ||
											n
												.getPropertyValue("transform")
												.replace(
													"translate(",
													"matrix(1, 0, 0, 1,"
												)),
									  (i = r.toString().split(","))),
								"x" === t &&
									(a = s.WebKitCSSMatrix
										? r.m41
										: 16 === i.length
										? parseFloat(i[12])
										: parseFloat(i[4])),
								"y" === t &&
									(a = s.WebKitCSSMatrix
										? r.m42
										: 16 === i.length
										? parseFloat(i[13])
										: parseFloat(i[5])),
								a || 0
							);
						})(a, e);
						return (
							(r += this.cssOverflowAdjustment()),
							s && (r = -r),
							r || 0
						);
					},
					setTranslate: function (e, t) {
						const s = this,
							{
								rtlTranslate: i,
								params: a,
								wrapperEl: r,
								progress: n,
							} = s;
						let l,
							o = 0,
							d = 0;
						s.isHorizontal() ? (o = i ? -e : e) : (d = e),
							a.roundLengths &&
								((o = Math.floor(o)), (d = Math.floor(d))),
							(s.previousTranslate = s.translate),
							(s.translate = s.isHorizontal() ? o : d),
							a.cssMode
								? (r[
										s.isHorizontal()
											? "scrollLeft"
											: "scrollTop"
								  ] = s.isHorizontal() ? -o : -d)
								: a.virtualTranslate ||
								  (s.isHorizontal()
										? (o -= s.cssOverflowAdjustment())
										: (d -= s.cssOverflowAdjustment()),
								  (r.style.transform = `translate3d(${o}px, ${d}px, 0px)`));
						const c = s.maxTranslate() - s.minTranslate();
						(l = 0 === c ? 0 : (e - s.minTranslate()) / c),
							l !== n && s.updateProgress(e),
							s.emit("setTranslate", s.translate, t);
					},
					minTranslate: function () {
						return -this.snapGrid[0];
					},
					maxTranslate: function () {
						return -this.snapGrid[this.snapGrid.length - 1];
					},
					translateTo: function (
						e = 0,
						t = this.params.speed,
						s = !0,
						i = !0,
						a
					) {
						const r = this,
							{ params: n, wrapperEl: l } = r;
						if (r.animating && n.preventInteractionOnTransition)
							return !1;
						const o = r.minTranslate(),
							d = r.maxTranslate();
						let c;
						if (
							((c = i && e > o ? o : i && e < d ? d : e),
							r.updateProgress(c),
							n.cssMode)
						) {
							const e = r.isHorizontal();
							if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;
							else {
								if (!r.support.smoothScroll)
									return (
										m({
											swiper: r,
											targetPosition: -c,
											side: e ? "left" : "top",
										}),
										!0
									);
								l.scrollTo({
									[e ? "left" : "top"]: -c,
									behavior: "smooth",
								});
							}
							return !0;
						}
						return (
							0 === t
								? (r.setTransition(0),
								  r.setTranslate(c),
								  s &&
										(r.emit("beforeTransitionStart", t, a),
										r.emit("transitionEnd")))
								: (r.setTransition(t),
								  r.setTranslate(c),
								  s &&
										(r.emit("beforeTransitionStart", t, a),
										r.emit("transitionStart")),
								  r.animating ||
										((r.animating = !0),
										r.onTranslateToWrapperTransitionEnd ||
											(r.onTranslateToWrapperTransitionEnd =
												function (e) {
													r &&
														!r.destroyed &&
														e.target === this &&
														(r.wrapperEl.removeEventListener(
															"transitionend",
															r.onTranslateToWrapperTransitionEnd
														),
														(r.onTranslateToWrapperTransitionEnd =
															null),
														delete r.onTranslateToWrapperTransitionEnd,
														s &&
															r.emit(
																"transitionEnd"
															));
												}),
										r.wrapperEl.addEventListener(
											"transitionend",
											r.onTranslateToWrapperTransitionEnd
										))),
							!0
						);
					},
				},
				transition: {
					setTransition: function (e, t) {
						const s = this;
						s.params.cssMode ||
							(s.wrapperEl.style.transitionDuration = `${e}ms`),
							s.emit("setTransition", e, t);
					},
					transitionStart: function (e = !0, t) {
						const s = this,
							{ params: i } = s;
						i.cssMode ||
							(i.autoHeight && s.updateAutoHeight(),
							k({
								swiper: s,
								runCallbacks: e,
								direction: t,
								step: "Start",
							}));
					},
					transitionEnd: function (e = !0, t) {
						const s = this,
							{ params: i } = s;
						(s.animating = !1),
							i.cssMode ||
								(s.setTransition(0),
								k({
									swiper: s,
									runCallbacks: e,
									direction: t,
									step: "End",
								}));
					},
				},
				slide: A,
				loop: {
					loopCreate: function (e) {
						const t = this,
							{ params: s, slidesEl: i } = t;
						!s.loop ||
							(t.virtual && t.params.virtual.enabled) ||
							(f(i, `.${s.slideClass}, swiper-slide`).forEach(
								(e, t) => {
									e.setAttribute(
										"data-swiper-slide-index",
										t
									);
								}
							),
							t.loopFix({
								slideRealIndex: e,
								direction: s.centeredSlides ? void 0 : "next",
							}));
					},
					loopFix: function ({
						slideRealIndex: e,
						slideTo: t = !0,
						direction: s,
						setTranslate: i,
						activeSlideIndex: a,
						byController: r,
						byMousewheel: n,
					} = {}) {
						const l = this;
						if (!l.params.loop) return;
						l.emit("beforeLoopFix");
						const {
							slides: o,
							allowSlidePrev: d,
							allowSlideNext: c,
							slidesEl: p,
							params: u,
						} = l;
						if (
							((l.allowSlidePrev = !0),
							(l.allowSlideNext = !0),
							l.virtual && u.virtual.enabled)
						)
							return (
								t &&
									(u.centeredSlides || 0 !== l.snapIndex
										? u.centeredSlides &&
										  l.snapIndex < u.slidesPerView
											? l.slideTo(
													l.virtual.slides.length +
														l.snapIndex,
													0,
													!1,
													!0
											  )
											: l.snapIndex ===
													l.snapGrid.length - 1 &&
											  l.slideTo(
													l.virtual.slidesBefore,
													0,
													!1,
													!0
											  )
										: l.slideTo(
												l.virtual.slides.length,
												0,
												!1,
												!0
										  )),
								(l.allowSlidePrev = d),
								(l.allowSlideNext = c),
								void l.emit("loopFix")
							);
						const m =
							"auto" === u.slidesPerView
								? l.slidesPerViewDynamic()
								: Math.ceil(parseFloat(u.slidesPerView, 10));
						let h = u.loopedSlides || m;
						h % u.slidesPerGroup != 0 &&
							(h += u.slidesPerGroup - (h % u.slidesPerGroup)),
							(l.loopedSlides = h);
						const f = [],
							g = [];
						let v = l.activeIndex;
						void 0 === a
							? (a = l.getSlideIndex(
									l.slides.filter((e) =>
										e.classList.contains(u.slideActiveClass)
									)[0]
							  ))
							: (v = a);
						const b = "next" === s || !s,
							w = "prev" === s || !s;
						let y = 0,
							S = 0;
						if (a < h) {
							y = Math.max(h - a, u.slidesPerGroup);
							for (let e = 0; e < h - a; e += 1) {
								const t =
									e - Math.floor(e / o.length) * o.length;
								f.push(o.length - t - 1);
							}
						} else if (a > l.slides.length - 2 * h) {
							S = Math.max(
								a - (l.slides.length - 2 * h),
								u.slidesPerGroup
							);
							for (let e = 0; e < S; e += 1) {
								const t =
									e - Math.floor(e / o.length) * o.length;
								g.push(t);
							}
						}
						if (
							(w &&
								f.forEach((e) => {
									p.prepend(l.slides[e]);
								}),
							b &&
								g.forEach((e) => {
									p.append(l.slides[e]);
								}),
							l.recalcSlides(),
							u.watchSlidesProgress && l.updateSlidesOffset(),
							t)
						)
							if (f.length > 0 && w)
								if (void 0 === e) {
									const e = l.slidesGrid[v],
										t = l.slidesGrid[v + y] - e;
									n
										? l.setTranslate(l.translate - t)
										: (l.slideTo(v + y, 0, !1, !0),
										  i &&
												(l.touches[
													l.isHorizontal()
														? "startX"
														: "startY"
												] += t));
								} else i && l.slideToLoop(e, 0, !1, !0);
							else if (g.length > 0 && b)
								if (void 0 === e) {
									const e = l.slidesGrid[v],
										t = l.slidesGrid[v - S] - e;
									n
										? l.setTranslate(l.translate - t)
										: (l.slideTo(v - S, 0, !1, !0),
										  i &&
												(l.touches[
													l.isHorizontal()
														? "startX"
														: "startY"
												] += t));
								} else l.slideToLoop(e, 0, !1, !0);
						if (
							((l.allowSlidePrev = d),
							(l.allowSlideNext = c),
							l.controller && l.controller.control && !r)
						) {
							const t = {
								slideRealIndex: e,
								slideTo: !1,
								direction: s,
								setTranslate: i,
								activeSlideIndex: a,
								byController: !0,
							};
							Array.isArray(l.controller.control)
								? l.controller.control.forEach((e) => {
										!e.destroyed &&
											e.params.loop &&
											e.loopFix(t);
								  })
								: l.controller.control instanceof
										l.constructor &&
								  l.controller.control.params.loop &&
								  l.controller.control.loopFix(t);
						}
						l.emit("loopFix");
					},
					loopDestroy: function () {
						const e = this,
							{ params: t, slidesEl: s } = e;
						if (!t.loop || (e.virtual && e.params.virtual.enabled))
							return;
						e.recalcSlides();
						const i = [];
						e.slides.forEach((e) => {
							const t =
								void 0 === e.swiperSlideIndex
									? 1 *
									  e.getAttribute("data-swiper-slide-index")
									: e.swiperSlideIndex;
							i[t] = e;
						}),
							e.slides.forEach((e) => {
								e.removeAttribute("data-swiper-slide-index");
							}),
							i.forEach((e) => {
								s.append(e);
							}),
							e.recalcSlides(),
							e.slideTo(e.realIndex, 0);
					},
				},
				grabCursor: {
					setGrabCursor: function (e) {
						const t = this;
						if (
							!t.params.simulateTouch ||
							(t.params.watchOverflow && t.isLocked) ||
							t.params.cssMode
						)
							return;
						const s =
							"container" === t.params.touchEventsTarget
								? t.el
								: t.wrapperEl;
						t.isElement && (t.__preventObserver__ = !0),
							(s.style.cursor = "move"),
							(s.style.cursor = e ? "grabbing" : "grab"),
							t.isElement &&
								requestAnimationFrame(() => {
									t.__preventObserver__ = !1;
								});
					},
					unsetGrabCursor: function () {
						const e = this;
						(e.params.watchOverflow && e.isLocked) ||
							e.params.cssMode ||
							(e.isElement && (e.__preventObserver__ = !0),
							(e[
								"container" === e.params.touchEventsTarget
									? "el"
									: "wrapperEl"
							].style.cursor = ""),
							e.isElement &&
								requestAnimationFrame(() => {
									e.__preventObserver__ = !1;
								}));
					},
				},
				events: {
					attachEvents: function () {
						const e = this,
							t = r(),
							{ params: s } = e;
						(e.onTouchStart = I.bind(e)),
							(e.onTouchMove = O.bind(e)),
							(e.onTouchEnd = z.bind(e)),
							s.cssMode && (e.onScroll = $.bind(e)),
							(e.onClick = B.bind(e)),
							(e.onLoad = G.bind(e)),
							D ||
								(t.addEventListener("touchstart", F), (D = !0)),
							H(e, "on");
					},
					detachEvents: function () {
						H(this, "off");
					},
				},
				breakpoints: {
					setBreakpoint: function () {
						const e = this,
							{
								realIndex: t,
								initialized: s,
								params: i,
								el: a,
							} = e,
							r = i.breakpoints;
						if (!r || (r && 0 === Object.keys(r).length)) return;
						const n = e.getBreakpoint(
							r,
							e.params.breakpointsBase,
							e.el
						);
						if (!n || e.currentBreakpoint === n) return;
						const l = (n in r ? r[n] : void 0) || e.originalParams,
							o = N(e, i),
							d = N(e, l),
							c = i.enabled;
						o && !d
							? (a.classList.remove(
									`${i.containerModifierClass}grid`,
									`${i.containerModifierClass}grid-column`
							  ),
							  e.emitContainerClasses())
							: !o &&
							  d &&
							  (a.classList.add(
									`${i.containerModifierClass}grid`
							  ),
							  ((l.grid.fill && "column" === l.grid.fill) ||
									(!l.grid.fill &&
										"column" === i.grid.fill)) &&
									a.classList.add(
										`${i.containerModifierClass}grid-column`
									),
							  e.emitContainerClasses()),
							["navigation", "pagination", "scrollbar"].forEach(
								(t) => {
									const s = i[t] && i[t].enabled,
										a = l[t] && l[t].enabled;
									s && !a && e[t].disable(),
										!s && a && e[t].enable();
								}
							);
						const u = l.direction && l.direction !== i.direction,
							m =
								i.loop &&
								(l.slidesPerView !== i.slidesPerView || u);
						u && s && e.changeDirection(), p(e.params, l);
						const h = e.params.enabled;
						Object.assign(e, {
							allowTouchMove: e.params.allowTouchMove,
							allowSlideNext: e.params.allowSlideNext,
							allowSlidePrev: e.params.allowSlidePrev,
						}),
							c && !h ? e.disable() : !c && h && e.enable(),
							(e.currentBreakpoint = n),
							e.emit("_beforeBreakpoint", l),
							m &&
								s &&
								(e.loopDestroy(),
								e.loopCreate(t),
								e.updateSlides()),
							e.emit("breakpoint", l);
					},
					getBreakpoint: function (e, t = "window", s) {
						if (!e || ("container" === t && !s)) return;
						let i = !1;
						const a = l(),
							r = "window" === t ? a.innerHeight : s.clientHeight,
							n = Object.keys(e).map((e) => {
								if (
									"string" == typeof e &&
									0 === e.indexOf("@")
								) {
									const t = parseFloat(e.substr(1));
									return { value: r * t, point: e };
								}
								return { value: e, point: e };
							});
						n.sort(
							(e, t) =>
								parseInt(e.value, 10) - parseInt(t.value, 10)
						);
						for (let e = 0; e < n.length; e += 1) {
							const { point: r, value: l } = n[e];
							"window" === t
								? a.matchMedia(`(min-width: ${l}px)`).matches &&
								  (i = r)
								: l <= s.clientWidth && (i = r);
						}
						return i || "max";
					},
				},
				checkOverflow: {
					checkOverflow: function () {
						const e = this,
							{ isLocked: t, params: s } = e,
							{ slidesOffsetBefore: i } = s;
						if (i) {
							const t = e.slides.length - 1,
								s =
									e.slidesGrid[t] +
									e.slidesSizesGrid[t] +
									2 * i;
							e.isLocked = e.size > s;
						} else e.isLocked = 1 === e.snapGrid.length;
						!0 === s.allowSlideNext &&
							(e.allowSlideNext = !e.isLocked),
							!0 === s.allowSlidePrev &&
								(e.allowSlidePrev = !e.isLocked),
							t && t !== e.isLocked && (e.isEnd = !1),
							t !== e.isLocked &&
								e.emit(e.isLocked ? "lock" : "unlock");
					},
				},
				classes: {
					addClasses: function () {
						const e = this,
							{
								classNames: t,
								params: s,
								rtl: i,
								el: a,
								device: r,
							} = e,
							n = (function (e, t) {
								const s = [];
								return (
									e.forEach((e) => {
										"object" == typeof e
											? Object.keys(e).forEach((i) => {
													e[i] && s.push(t + i);
											  })
											: "string" == typeof e &&
											  s.push(t + e);
									}),
									s
								);
							})(
								[
									"initialized",
									s.direction,
									{
										"free-mode":
											e.params.freeMode &&
											s.freeMode.enabled,
									},
									{ autoheight: s.autoHeight },
									{ rtl: i },
									{ grid: s.grid && s.grid.rows > 1 },
									{
										"grid-column":
											s.grid &&
											s.grid.rows > 1 &&
											"column" === s.grid.fill,
									},
									{ android: r.android },
									{ ios: r.ios },
									{ "css-mode": s.cssMode },
									{ centered: s.cssMode && s.centeredSlides },
									{ "watch-progress": s.watchSlidesProgress },
								],
								s.containerModifierClass
							);
						t.push(...n),
							a.classList.add(...t),
							e.emitContainerClasses();
					},
					removeClasses: function () {
						const { el: e, classNames: t } = this;
						e.classList.remove(...t), this.emitContainerClasses();
					},
				},
			},
			W = {};
		class Y {
			constructor(...e) {
				let t, s;
				1 === e.length &&
				e[0].constructor &&
				"Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
					? (s = e[0])
					: ([t, s] = e),
					s || (s = {}),
					(s = p({}, s)),
					t && !s.el && (s.el = t);
				const i = r();
				if (
					s.el &&
					"string" == typeof s.el &&
					i.querySelectorAll(s.el).length > 1
				) {
					const e = [];
					return (
						i.querySelectorAll(s.el).forEach((t) => {
							const i = p({}, s, { el: t });
							e.push(new Y(i));
						}),
						e
					);
				}
				const a = this;
				(a.__swiper__ = !0),
					(a.support = x()),
					(a.device = (function (e = {}) {
						return (
							E ||
								(E = (function ({ userAgent: e } = {}) {
									const t = x(),
										s = l(),
										i = s.navigator.platform,
										a = e || s.navigator.userAgent,
										r = { ios: !1, android: !1 },
										n = s.screen.width,
										o = s.screen.height,
										d = a.match(
											/(Android);?[\s\/]+([\d.]+)?/
										);
									let c = a.match(/(iPad).*OS\s([\d_]+)/);
									const p = a.match(
											/(iPod)(.*OS\s([\d_]+))?/
										),
										u =
											!c &&
											a.match(
												/(iPhone\sOS|iOS)\s([\d_]+)/
											),
										m = "Win32" === i;
									let h = "MacIntel" === i;
									return (
										!c &&
											h &&
											t.touch &&
											[
												"1024x1366",
												"1366x1024",
												"834x1194",
												"1194x834",
												"834x1112",
												"1112x834",
												"768x1024",
												"1024x768",
												"820x1180",
												"1180x820",
												"810x1080",
												"1080x810",
											].indexOf(`${n}x${o}`) >= 0 &&
											((c =
												a.match(/(Version)\/([\d.]+)/)),
											c || (c = [0, 1, "13_0_0"]),
											(h = !1)),
										d &&
											!m &&
											((r.os = "android"),
											(r.android = !0)),
										(c || u || p) &&
											((r.os = "ios"), (r.ios = !0)),
										r
									);
								})(e)),
							E
						);
					})({ userAgent: s.userAgent })),
					(a.browser =
						(T ||
							(T = (function () {
								const e = l();
								let t = !1;
								function s() {
									const t =
										e.navigator.userAgent.toLowerCase();
									return (
										t.indexOf("safari") >= 0 &&
										t.indexOf("chrome") < 0 &&
										t.indexOf("android") < 0
									);
								}
								if (s()) {
									const s = String(e.navigator.userAgent);
									if (s.includes("Version/")) {
										const [e, i] = s
											.split("Version/")[1]
											.split(" ")[0]
											.split(".")
											.map((e) => Number(e));
										t = e < 16 || (16 === e && i < 2);
									}
								}
								return {
									isSafari: t || s(),
									needPerspectiveFix: t,
									isWebView:
										/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
											e.navigator.userAgent
										),
								};
							})()),
						T)),
					(a.eventsListeners = {}),
					(a.eventsAnyListeners = []),
					(a.modules = [...a.__modules__]),
					s.modules &&
						Array.isArray(s.modules) &&
						a.modules.push(...s.modules);
				const n = {};
				a.modules.forEach((e) => {
					e({
						params: s,
						swiper: a,
						extendParams: j(s, n),
						on: a.on.bind(a),
						once: a.once.bind(a),
						off: a.off.bind(a),
						emit: a.emit.bind(a),
					});
				});
				const o = p({}, V, n);
				return (
					(a.params = p({}, o, W, s)),
					(a.originalParams = p({}, a.params)),
					(a.passedParams = p({}, s)),
					a.params &&
						a.params.on &&
						Object.keys(a.params.on).forEach((e) => {
							a.on(e, a.params.on[e]);
						}),
					a.params && a.params.onAny && a.onAny(a.params.onAny),
					Object.assign(a, {
						enabled: a.params.enabled,
						el: t,
						classNames: [],
						slides: [],
						slidesGrid: [],
						snapGrid: [],
						slidesSizesGrid: [],
						isHorizontal: () => "horizontal" === a.params.direction,
						isVertical: () => "vertical" === a.params.direction,
						activeIndex: 0,
						realIndex: 0,
						isBeginning: !0,
						isEnd: !1,
						translate: 0,
						previousTranslate: 0,
						progress: 0,
						velocity: 0,
						animating: !1,
						cssOverflowAdjustment() {
							return (
								Math.trunc(this.translate / 2 ** 23) * 2 ** 23
							);
						},
						allowSlideNext: a.params.allowSlideNext,
						allowSlidePrev: a.params.allowSlidePrev,
						touchEventsData: {
							isTouched: void 0,
							isMoved: void 0,
							allowTouchCallbacks: void 0,
							touchStartTime: void 0,
							isScrolling: void 0,
							currentTranslate: void 0,
							startTranslate: void 0,
							allowThresholdMove: void 0,
							focusableElements: a.params.focusableElements,
							lastClickTime: 0,
							clickTimeout: void 0,
							velocities: [],
							allowMomentumBounce: void 0,
							startMoving: void 0,
							evCache: [],
						},
						allowClick: !0,
						allowTouchMove: a.params.allowTouchMove,
						touches: {
							startX: 0,
							startY: 0,
							currentX: 0,
							currentY: 0,
							diff: 0,
						},
						imagesToLoad: [],
						imagesLoaded: 0,
					}),
					a.emit("_swiper"),
					a.params.init && a.init(),
					a
				);
			}
			getSlideIndex(e) {
				const { slidesEl: t, params: s } = this,
					i = b(f(t, `.${s.slideClass}, swiper-slide`)[0]);
				return b(e) - i;
			}
			getSlideIndexByData(e) {
				return this.getSlideIndex(
					this.slides.filter(
						(t) =>
							1 * t.getAttribute("data-swiper-slide-index") === e
					)[0]
				);
			}
			recalcSlides() {
				const { slidesEl: e, params: t } = this;
				this.slides = f(e, `.${t.slideClass}, swiper-slide`);
			}
			enable() {
				const e = this;
				e.enabled ||
					((e.enabled = !0),
					e.params.grabCursor && e.setGrabCursor(),
					e.emit("enable"));
			}
			disable() {
				const e = this;
				e.enabled &&
					((e.enabled = !1),
					e.params.grabCursor && e.unsetGrabCursor(),
					e.emit("disable"));
			}
			setProgress(e, t) {
				const s = this;
				e = Math.min(Math.max(e, 0), 1);
				const i = s.minTranslate(),
					a = (s.maxTranslate() - i) * e + i;
				s.translateTo(a, void 0 === t ? 0 : t),
					s.updateActiveIndex(),
					s.updateSlidesClasses();
			}
			emitContainerClasses() {
				const e = this;
				if (!e.params._emitClasses || !e.el) return;
				const t = e.el.className
					.split(" ")
					.filter(
						(t) =>
							0 === t.indexOf("swiper") ||
							0 === t.indexOf(e.params.containerModifierClass)
					);
				e.emit("_containerClasses", t.join(" "));
			}
			getSlideClasses(e) {
				const t = this;
				return t.destroyed
					? ""
					: e.className
							.split(" ")
							.filter(
								(e) =>
									0 === e.indexOf("swiper-slide") ||
									0 === e.indexOf(t.params.slideClass)
							)
							.join(" ");
			}
			emitSlidesClasses() {
				const e = this;
				if (!e.params._emitClasses || !e.el) return;
				const t = [];
				e.slides.forEach((s) => {
					const i = e.getSlideClasses(s);
					t.push({ slideEl: s, classNames: i }),
						e.emit("_slideClass", s, i);
				}),
					e.emit("_slideClasses", t);
			}
			slidesPerViewDynamic(e = "current", t = !1) {
				const {
					params: s,
					slides: i,
					slidesGrid: a,
					slidesSizesGrid: r,
					size: n,
					activeIndex: l,
				} = this;
				let o = 1;
				if (s.centeredSlides) {
					let e,
						t = i[l].swiperSlideSize;
					for (let s = l + 1; s < i.length; s += 1)
						i[s] &&
							!e &&
							((t += i[s].swiperSlideSize),
							(o += 1),
							t > n && (e = !0));
					for (let s = l - 1; s >= 0; s -= 1)
						i[s] &&
							!e &&
							((t += i[s].swiperSlideSize),
							(o += 1),
							t > n && (e = !0));
				} else if ("current" === e)
					for (let e = l + 1; e < i.length; e += 1)
						(t ? a[e] + r[e] - a[l] < n : a[e] - a[l] < n) &&
							(o += 1);
				else
					for (let e = l - 1; e >= 0; e -= 1)
						a[l] - a[e] < n && (o += 1);
				return o;
			}
			update() {
				const e = this;
				if (!e || e.destroyed) return;
				const { snapGrid: t, params: s } = e;
				function i() {
					const t = e.rtlTranslate ? -1 * e.translate : e.translate,
						s = Math.min(
							Math.max(t, e.maxTranslate()),
							e.minTranslate()
						);
					e.setTranslate(s),
						e.updateActiveIndex(),
						e.updateSlidesClasses();
				}
				let a;
				s.breakpoints && e.setBreakpoint(),
					[...e.el.querySelectorAll('[loading="lazy"]')].forEach(
						(t) => {
							t.complete && C(e, t);
						}
					),
					e.updateSize(),
					e.updateSlides(),
					e.updateProgress(),
					e.updateSlidesClasses(),
					e.params.freeMode && e.params.freeMode.enabled
						? (i(), e.params.autoHeight && e.updateAutoHeight())
						: ((a =
								("auto" === e.params.slidesPerView ||
									e.params.slidesPerView > 1) &&
								e.isEnd &&
								!e.params.centeredSlides
									? e.slideTo(e.slides.length - 1, 0, !1, !0)
									: e.slideTo(e.activeIndex, 0, !1, !0)),
						  a || i()),
					s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
					e.emit("update");
			}
			changeDirection(e, t = !0) {
				const s = this,
					i = s.params.direction;
				return (
					e || (e = "horizontal" === i ? "vertical" : "horizontal"),
					e === i ||
						("horizontal" !== e && "vertical" !== e) ||
						(s.el.classList.remove(
							`${s.params.containerModifierClass}${i}`
						),
						s.el.classList.add(
							`${s.params.containerModifierClass}${e}`
						),
						s.emitContainerClasses(),
						(s.params.direction = e),
						s.slides.forEach((t) => {
							"vertical" === e
								? (t.style.width = "")
								: (t.style.height = "");
						}),
						s.emit("changeDirection"),
						t && s.update()),
					s
				);
			}
			changeLanguageDirection(e) {
				const t = this;
				(t.rtl && "rtl" === e) ||
					(!t.rtl && "ltr" === e) ||
					((t.rtl = "rtl" === e),
					(t.rtlTranslate =
						"horizontal" === t.params.direction && t.rtl),
					t.rtl
						? (t.el.classList.add(
								`${t.params.containerModifierClass}rtl`
						  ),
						  (t.el.dir = "rtl"))
						: (t.el.classList.remove(
								`${t.params.containerModifierClass}rtl`
						  ),
						  (t.el.dir = "ltr")),
					t.update());
			}
			mount(e) {
				const t = this;
				if (t.mounted) return !0;
				let s = e || t.params.el;
				if (
					("string" == typeof s && (s = document.querySelector(s)),
					!s)
				)
					return !1;
				(s.swiper = t), s.shadowEl && (t.isElement = !0);
				const i = () =>
					`.${(t.params.wrapperClass || "")
						.trim()
						.split(" ")
						.join(".")}`;
				let a =
					s && s.shadowRoot && s.shadowRoot.querySelector
						? s.shadowRoot.querySelector(i())
						: f(s, i())[0];
				return (
					!a &&
						t.params.createElements &&
						((a = g("div", t.params.wrapperClass)),
						s.append(a),
						f(s, `.${t.params.slideClass}`).forEach((e) => {
							a.append(e);
						})),
					Object.assign(t, {
						el: s,
						wrapperEl: a,
						slidesEl: t.isElement ? s : a,
						mounted: !0,
						rtl:
							"rtl" === s.dir.toLowerCase() ||
							"rtl" === v(s, "direction"),
						rtlTranslate:
							"horizontal" === t.params.direction &&
							("rtl" === s.dir.toLowerCase() ||
								"rtl" === v(s, "direction")),
						wrongRTL: "-webkit-box" === v(a, "display"),
					}),
					!0
				);
			}
			init(e) {
				const t = this;
				return (
					t.initialized ||
						!1 === t.mount(e) ||
						(t.emit("beforeInit"),
						t.params.breakpoints && t.setBreakpoint(),
						t.addClasses(),
						t.updateSize(),
						t.updateSlides(),
						t.params.watchOverflow && t.checkOverflow(),
						t.params.grabCursor && t.enabled && t.setGrabCursor(),
						t.params.loop && t.virtual && t.params.virtual.enabled
							? t.slideTo(
									t.params.initialSlide +
										t.virtual.slidesBefore,
									0,
									t.params.runCallbacksOnInit,
									!1,
									!0
							  )
							: t.slideTo(
									t.params.initialSlide,
									0,
									t.params.runCallbacksOnInit,
									!1,
									!0
							  ),
						t.params.loop && t.loopCreate(),
						t.attachEvents(),
						[...t.el.querySelectorAll('[loading="lazy"]')].forEach(
							(e) => {
								e.complete
									? C(t, e)
									: e.addEventListener("load", (e) => {
											C(t, e.target);
									  });
							}
						),
						M(t),
						(t.initialized = !0),
						M(t),
						t.emit("init"),
						t.emit("afterInit")),
					t
				);
			}
			destroy(e = !0, t = !0) {
				const s = this,
					{ params: i, el: a, wrapperEl: r, slides: n } = s;
				return (
					void 0 === s.params ||
						s.destroyed ||
						(s.emit("beforeDestroy"),
						(s.initialized = !1),
						s.detachEvents(),
						i.loop && s.loopDestroy(),
						t &&
							(s.removeClasses(),
							a.removeAttribute("style"),
							r.removeAttribute("style"),
							n &&
								n.length &&
								n.forEach((e) => {
									e.classList.remove(
										i.slideVisibleClass,
										i.slideActiveClass,
										i.slideNextClass,
										i.slidePrevClass
									),
										e.removeAttribute("style"),
										e.removeAttribute(
											"data-swiper-slide-index"
										);
								})),
						s.emit("destroy"),
						Object.keys(s.eventsListeners).forEach((e) => {
							s.off(e);
						}),
						!1 !== e &&
							((s.el.swiper = null),
							(function (e) {
								const t = e;
								Object.keys(t).forEach((e) => {
									try {
										t[e] = null;
									} catch (e) {}
									try {
										delete t[e];
									} catch (e) {}
								});
							})(s)),
						(s.destroyed = !0)),
					null
				);
			}
			static extendDefaults(e) {
				p(W, e);
			}
			static get extendedDefaults() {
				return W;
			}
			static get defaults() {
				return V;
			}
			static installModule(e) {
				Y.prototype.__modules__ || (Y.prototype.__modules__ = []);
				const t = Y.prototype.__modules__;
				"function" == typeof e && t.indexOf(e) < 0 && t.push(e);
			}
			static use(e) {
				return Array.isArray(e)
					? (e.forEach((e) => Y.installModule(e)), Y)
					: (Y.installModule(e), Y);
			}
		}
		Object.keys(R).forEach((e) => {
			Object.keys(R[e]).forEach((t) => {
				Y.prototype[t] = R[e][t];
			});
		}),
			Y.use([
				function ({ swiper: e, on: t, emit: s }) {
					const i = l();
					let a = null,
						r = null;
					const n = () => {
							e &&
								!e.destroyed &&
								e.initialized &&
								(s("beforeResize"), s("resize"));
						},
						o = () => {
							e &&
								!e.destroyed &&
								e.initialized &&
								s("orientationchange");
						};
					t("init", () => {
						e.params.resizeObserver && void 0 !== i.ResizeObserver
							? e &&
							  !e.destroyed &&
							  e.initialized &&
							  ((a = new ResizeObserver((t) => {
									r = i.requestAnimationFrame(() => {
										const { width: s, height: i } = e;
										let a = s,
											r = i;
										t.forEach(
											({
												contentBoxSize: t,
												contentRect: s,
												target: i,
											}) => {
												(i && i !== e.el) ||
													((a = s
														? s.width
														: (t[0] || t)
																.inlineSize),
													(r = s
														? s.height
														: (t[0] || t)
																.blockSize));
											}
										),
											(a === s && r === i) || n();
									});
							  })),
							  a.observe(e.el))
							: (i.addEventListener("resize", n),
							  i.addEventListener("orientationchange", o));
					}),
						t("destroy", () => {
							r && i.cancelAnimationFrame(r),
								a &&
									a.unobserve &&
									e.el &&
									(a.unobserve(e.el), (a = null)),
								i.removeEventListener("resize", n),
								i.removeEventListener("orientationchange", o);
						});
				},
				function ({ swiper: e, extendParams: t, on: s, emit: i }) {
					const a = [],
						r = l(),
						n = (t, s = {}) => {
							const n = new (r.MutationObserver ||
								r.WebkitMutationObserver)((t) => {
								if (e.__preventObserver__) return;
								if (1 === t.length)
									return void i("observerUpdate", t[0]);
								const s = function () {
									i("observerUpdate", t[0]);
								};
								r.requestAnimationFrame
									? r.requestAnimationFrame(s)
									: r.setTimeout(s, 0);
							});
							n.observe(t, {
								attributes:
									void 0 === s.attributes || s.attributes,
								childList:
									void 0 === s.childList || s.childList,
								characterData:
									void 0 === s.characterData ||
									s.characterData,
							}),
								a.push(n);
						};
					t({
						observer: !1,
						observeParents: !1,
						observeSlideChildren: !1,
					}),
						s("init", () => {
							if (e.params.observer) {
								if (e.params.observeParents) {
									const t = w(e.el);
									for (let e = 0; e < t.length; e += 1)
										n(t[e]);
								}
								n(e.el, {
									childList: e.params.observeSlideChildren,
								}),
									n(e.wrapperEl, { attributes: !1 });
							}
						}),
						s("destroy", () => {
							a.forEach((e) => {
								e.disconnect();
							}),
								a.splice(0, a.length);
						});
				},
			]);
		const X = Y;
		function U(e, t, s, i) {
			return (
				e.params.createElements &&
					Object.keys(i).forEach((a) => {
						if (!s[a] && !0 === s.auto) {
							let r = f(e.el, `.${i[a]}`)[0];
							r ||
								((r = g("div", i[a])),
								(r.className = i[a]),
								e.el.append(r)),
								(s[a] = r),
								(t[a] = r);
						}
					}),
				s
			);
		}
		function K(e = "") {
			return `.${e
				.trim()
				.replace(/([\.:!+\/])/g, "\\$1")
				.replace(/ /g, ".")}`;
		}
		function Z(e) {
			const t = this,
				{ params: s, slidesEl: i } = t;
			s.loop && t.loopDestroy();
			const a = (e) => {
				if ("string" == typeof e) {
					const t = document.createElement("div");
					(t.innerHTML = e),
						i.append(t.children[0]),
						(t.innerHTML = "");
				} else i.append(e);
			};
			if ("object" == typeof e && "length" in e)
				for (let t = 0; t < e.length; t += 1) e[t] && a(e[t]);
			else a(e);
			t.recalcSlides(),
				s.loop && t.loopCreate(),
				(s.observer && !t.isElement) || t.update();
		}
		function J(e) {
			const t = this,
				{ params: s, activeIndex: i, slidesEl: a } = t;
			s.loop && t.loopDestroy();
			let r = i + 1;
			const n = (e) => {
				if ("string" == typeof e) {
					const t = document.createElement("div");
					(t.innerHTML = e),
						a.prepend(t.children[0]),
						(t.innerHTML = "");
				} else a.prepend(e);
			};
			if ("object" == typeof e && "length" in e) {
				for (let t = 0; t < e.length; t += 1) e[t] && n(e[t]);
				r = i + e.length;
			} else n(e);
			t.recalcSlides(),
				s.loop && t.loopCreate(),
				(s.observer && !t.isElement) || t.update(),
				t.slideTo(r, 0, !1);
		}
		function Q(e, t) {
			const s = this,
				{ params: i, activeIndex: a, slidesEl: r } = s;
			let n = a;
			i.loop &&
				((n -= s.loopedSlides), s.loopDestroy(), s.recalcSlides());
			const l = s.slides.length;
			if (e <= 0) return void s.prependSlide(t);
			if (e >= l) return void s.appendSlide(t);
			let o = n > e ? n + 1 : n;
			const d = [];
			for (let t = l - 1; t >= e; t -= 1) {
				const e = s.slides[t];
				e.remove(), d.unshift(e);
			}
			if ("object" == typeof t && "length" in t) {
				for (let e = 0; e < t.length; e += 1) t[e] && r.append(t[e]);
				o = n > e ? n + t.length : n;
			} else r.append(t);
			for (let e = 0; e < d.length; e += 1) r.append(d[e]);
			s.recalcSlides(),
				i.loop && s.loopCreate(),
				(i.observer && !s.isElement) || s.update(),
				i.loop
					? s.slideTo(o + s.loopedSlides, 0, !1)
					: s.slideTo(o, 0, !1);
		}
		function ee(e) {
			const t = this,
				{ params: s, activeIndex: i } = t;
			let a = i;
			s.loop && ((a -= t.loopedSlides), t.loopDestroy());
			let r,
				n = a;
			if ("object" == typeof e && "length" in e) {
				for (let s = 0; s < e.length; s += 1)
					(r = e[s]),
						t.slides[r] && t.slides[r].remove(),
						r < n && (n -= 1);
				n = Math.max(n, 0);
			} else
				(r = e),
					t.slides[r] && t.slides[r].remove(),
					r < n && (n -= 1),
					(n = Math.max(n, 0));
			t.recalcSlides(),
				s.loop && t.loopCreate(),
				(s.observer && !t.isElement) || t.update(),
				s.loop
					? t.slideTo(n + t.loopedSlides, 0, !1)
					: t.slideTo(n, 0, !1);
		}
		function te() {
			const e = this,
				t = [];
			for (let s = 0; s < e.slides.length; s += 1) t.push(s);
			e.removeSlide(t);
		}
		function se(e, t) {
			const s = h(t);
			return (
				s !== t &&
					((s.style.backfaceVisibility = "hidden"),
					(s.style["-webkit-backface-visibility"] = "hidden")),
				s
			);
		}
		function ie(e, t, s) {
			const i = "swiper-slide-shadow" + (s ? `-${s}` : ""),
				a = h(t);
			let r = a.querySelector(`.${i}`);
			return (
				r ||
					((r = g("div", "swiper-slide-shadow" + (s ? `-${s}` : ""))),
					a.append(r)),
				r
			);
		}
		X.use([
			function ({ swiper: e, extendParams: t, on: s, emit: i }) {
				const a = "swiper-pagination";
				let r;
				t({
					pagination: {
						el: null,
						bulletElement: "span",
						clickable: !1,
						hideOnClick: !1,
						renderBullet: null,
						renderProgressbar: null,
						renderFraction: null,
						renderCustom: null,
						progressbarOpposite: !1,
						type: "bullets",
						dynamicBullets: !1,
						dynamicMainBullets: 1,
						formatFractionCurrent: (e) => e,
						formatFractionTotal: (e) => e,
						bulletClass: `${a}-bullet`,
						bulletActiveClass: `${a}-bullet-active`,
						modifierClass: `${a}-`,
						currentClass: `${a}-current`,
						totalClass: `${a}-total`,
						hiddenClass: `${a}-hidden`,
						progressbarFillClass: `${a}-progressbar-fill`,
						progressbarOppositeClass: `${a}-progressbar-opposite`,
						clickableClass: `${a}-clickable`,
						lockClass: `${a}-lock`,
						horizontalClass: `${a}-horizontal`,
						verticalClass: `${a}-vertical`,
						paginationDisabledClass: `${a}-disabled`,
					},
				}),
					(e.pagination = { el: null, bullets: [] });
				let n = 0;
				const l = (e) => (
					Array.isArray(e) || (e = [e].filter((e) => !!e)), e
				);
				function o() {
					return (
						!e.params.pagination.el ||
						!e.pagination.el ||
						(Array.isArray(e.pagination.el) &&
							0 === e.pagination.el.length)
					);
				}
				function d(t, s) {
					const { bulletActiveClass: i } = e.params.pagination;
					t &&
						(t =
							t[
								("prev" === s ? "previous" : "next") +
									"ElementSibling"
							]) &&
						(t.classList.add(`${i}-${s}`),
						(t =
							t[
								("prev" === s ? "previous" : "next") +
									"ElementSibling"
							]) && t.classList.add(`${i}-${s}-${s}`));
				}
				function c(t) {
					const s = t.target.closest(
						K(e.params.pagination.bulletClass)
					);
					if (!s) return;
					t.preventDefault();
					const i = b(s) * e.params.slidesPerGroup;
					if (e.params.loop) {
						if (e.realIndex === i) return;
						const t = e.getSlideIndexByData(i),
							s = e.getSlideIndexByData(e.realIndex);
						t > e.slides.length - e.loopedSlides &&
							e.loopFix({
								direction: t > s ? "next" : "prev",
								activeSlideIndex: t,
								slideTo: !1,
							}),
							e.slideToLoop(i);
					} else e.slideTo(i);
				}
				function p() {
					const t = e.rtl,
						s = e.params.pagination;
					if (o()) return;
					let a,
						c,
						p = e.pagination.el;
					p = l(p);
					const u =
							e.virtual && e.params.virtual.enabled
								? e.virtual.slides.length
								: e.slides.length,
						m = e.params.loop
							? Math.ceil(u / e.params.slidesPerGroup)
							: e.snapGrid.length;
					if (
						(e.params.loop
							? ((c = e.previousRealIndex || 0),
							  (a =
									e.params.slidesPerGroup > 1
										? Math.floor(
												e.realIndex /
													e.params.slidesPerGroup
										  )
										: e.realIndex))
							: void 0 !== e.snapIndex
							? ((a = e.snapIndex), (c = e.previousSnapIndex))
							: ((c = e.previousIndex || 0),
							  (a = e.activeIndex || 0)),
						"bullets" === s.type &&
							e.pagination.bullets &&
							e.pagination.bullets.length > 0)
					) {
						const i = e.pagination.bullets;
						let l, o, u;
						if (
							(s.dynamicBullets &&
								((r = y(
									i[0],
									e.isHorizontal() ? "width" : "height",
									!0
								)),
								p.forEach((t) => {
									t.style[
										e.isHorizontal() ? "width" : "height"
									] = r * (s.dynamicMainBullets + 4) + "px";
								}),
								s.dynamicMainBullets > 1 &&
									void 0 !== c &&
									((n += a - (c || 0)),
									n > s.dynamicMainBullets - 1
										? (n = s.dynamicMainBullets - 1)
										: n < 0 && (n = 0)),
								(l = Math.max(a - n, 0)),
								(o =
									l +
									(Math.min(i.length, s.dynamicMainBullets) -
										1)),
								(u = (o + l) / 2)),
							i.forEach((e) => {
								const t = [
									...[
										"",
										"-next",
										"-next-next",
										"-prev",
										"-prev-prev",
										"-main",
									].map((e) => `${s.bulletActiveClass}${e}`),
								]
									.map((e) =>
										"string" == typeof e && e.includes(" ")
											? e.split(" ")
											: e
									)
									.flat();
								e.classList.remove(...t);
							}),
							p.length > 1)
						)
							i.forEach((e) => {
								const t = b(e);
								t === a &&
									e.classList.add(
										...s.bulletActiveClass.split(" ")
									),
									s.dynamicBullets &&
										(t >= l &&
											t <= o &&
											e.classList.add(
												...`${s.bulletActiveClass}-main`.split(
													" "
												)
											),
										t === l && d(e, "prev"),
										t === o && d(e, "next"));
							});
						else {
							const e = i[a];
							if (
								(e &&
									e.classList.add(
										...s.bulletActiveClass.split(" ")
									),
								s.dynamicBullets)
							) {
								const e = i[l],
									t = i[o];
								for (let e = l; e <= o; e += 1)
									i[e] &&
										i[e].classList.add(
											...`${s.bulletActiveClass}-main`.split(
												" "
											)
										);
								d(e, "prev"), d(t, "next");
							}
						}
						if (s.dynamicBullets) {
							const a = Math.min(
									i.length,
									s.dynamicMainBullets + 4
								),
								n = (r * a - r) / 2 - u * r,
								l = t ? "right" : "left";
							i.forEach((t) => {
								t.style[
									e.isHorizontal() ? l : "top"
								] = `${n}px`;
							});
						}
					}
					p.forEach((t, r) => {
						if (
							("fraction" === s.type &&
								(t
									.querySelectorAll(K(s.currentClass))
									.forEach((e) => {
										e.textContent = s.formatFractionCurrent(
											a + 1
										);
									}),
								t
									.querySelectorAll(K(s.totalClass))
									.forEach((e) => {
										e.textContent =
											s.formatFractionTotal(m);
									})),
							"progressbar" === s.type)
						) {
							let i;
							i = s.progressbarOpposite
								? e.isHorizontal()
									? "vertical"
									: "horizontal"
								: e.isHorizontal()
								? "horizontal"
								: "vertical";
							const r = (a + 1) / m;
							let n = 1,
								l = 1;
							"horizontal" === i ? (n = r) : (l = r),
								t
									.querySelectorAll(K(s.progressbarFillClass))
									.forEach((t) => {
										(t.style.transform = `translate3d(0,0,0) scaleX(${n}) scaleY(${l})`),
											(t.style.transitionDuration = `${e.params.speed}ms`);
									});
						}
						"custom" === s.type && s.renderCustom
							? ((t.innerHTML = s.renderCustom(e, a + 1, m)),
							  0 === r && i("paginationRender", t))
							: (0 === r && i("paginationRender", t),
							  i("paginationUpdate", t)),
							e.params.watchOverflow &&
								e.enabled &&
								t.classList[e.isLocked ? "add" : "remove"](
									s.lockClass
								);
					});
				}
				function u() {
					const t = e.params.pagination;
					if (o()) return;
					const s =
						e.virtual && e.params.virtual.enabled
							? e.virtual.slides.length
							: e.slides.length;
					let a = e.pagination.el;
					a = l(a);
					let r = "";
					if ("bullets" === t.type) {
						let i = e.params.loop
							? Math.ceil(s / e.params.slidesPerGroup)
							: e.snapGrid.length;
						e.params.freeMode &&
							e.params.freeMode.enabled &&
							i > s &&
							(i = s);
						for (let s = 0; s < i; s += 1)
							t.renderBullet
								? (r += t.renderBullet.call(
										e,
										s,
										t.bulletClass
								  ))
								: (r += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
					}
					"fraction" === t.type &&
						(r = t.renderFraction
							? t.renderFraction.call(
									e,
									t.currentClass,
									t.totalClass
							  )
							: `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
						"progressbar" === t.type &&
							(r = t.renderProgressbar
								? t.renderProgressbar.call(
										e,
										t.progressbarFillClass
								  )
								: `<span class="${t.progressbarFillClass}"></span>`),
						(e.pagination.bullets = []),
						a.forEach((s) => {
							"custom" !== t.type && (s.innerHTML = r || ""),
								"bullets" === t.type &&
									e.pagination.bullets.push(
										...s.querySelectorAll(K(t.bulletClass))
									);
						}),
						"custom" !== t.type && i("paginationRender", a[0]);
				}
				function m() {
					e.params.pagination = U(
						e,
						e.originalParams.pagination,
						e.params.pagination,
						{ el: "swiper-pagination" }
					);
					const t = e.params.pagination;
					if (!t.el) return;
					let s;
					"string" == typeof t.el &&
						e.isElement &&
						(s = e.el.shadowRoot.querySelector(t.el)),
						s ||
							"string" != typeof t.el ||
							(s = [...document.querySelectorAll(t.el)]),
						s || (s = t.el),
						s &&
							0 !== s.length &&
							(e.params.uniqueNavElements &&
								"string" == typeof t.el &&
								Array.isArray(s) &&
								s.length > 1 &&
								((s = [...e.el.querySelectorAll(t.el)]),
								s.length > 1 &&
									(s = s.filter(
										(t) => w(t, ".swiper")[0] === e.el
									)[0])),
							Array.isArray(s) && 1 === s.length && (s = s[0]),
							Object.assign(e.pagination, { el: s }),
							(s = l(s)),
							s.forEach((s) => {
								"bullets" === t.type &&
									t.clickable &&
									s.classList.add(t.clickableClass),
									s.classList.add(t.modifierClass + t.type),
									s.classList.add(
										e.isHorizontal()
											? t.horizontalClass
											: t.verticalClass
									),
									"bullets" === t.type &&
										t.dynamicBullets &&
										(s.classList.add(
											`${t.modifierClass}${t.type}-dynamic`
										),
										(n = 0),
										t.dynamicMainBullets < 1 &&
											(t.dynamicMainBullets = 1)),
									"progressbar" === t.type &&
										t.progressbarOpposite &&
										s.classList.add(
											t.progressbarOppositeClass
										),
									t.clickable &&
										s.addEventListener("click", c),
									e.enabled || s.classList.add(t.lockClass);
							}));
				}
				function h() {
					const t = e.params.pagination;
					if (o()) return;
					let s = e.pagination.el;
					s &&
						((s = l(s)),
						s.forEach((s) => {
							s.classList.remove(t.hiddenClass),
								s.classList.remove(t.modifierClass + t.type),
								s.classList.remove(
									e.isHorizontal()
										? t.horizontalClass
										: t.verticalClass
								),
								t.clickable &&
									s.removeEventListener("click", c);
						})),
						e.pagination.bullets &&
							e.pagination.bullets.forEach((e) =>
								e.classList.remove(
									...t.bulletActiveClass.split(" ")
								)
							);
				}
				s("changeDirection", () => {
					if (!e.pagination || !e.pagination.el) return;
					const t = e.params.pagination;
					let { el: s } = e.pagination;
					(s = l(s)),
						s.forEach((s) => {
							s.classList.remove(
								t.horizontalClass,
								t.verticalClass
							),
								s.classList.add(
									e.isHorizontal()
										? t.horizontalClass
										: t.verticalClass
								);
						});
				}),
					s("init", () => {
						!1 === e.params.pagination.enabled
							? f()
							: (m(), u(), p());
					}),
					s("activeIndexChange", () => {
						void 0 === e.snapIndex && p();
					}),
					s("snapIndexChange", () => {
						p();
					}),
					s("snapGridLengthChange", () => {
						u(), p();
					}),
					s("destroy", () => {
						h();
					}),
					s("enable disable", () => {
						let { el: t } = e.pagination;
						t &&
							((t = l(t)),
							t.forEach((t) =>
								t.classList[e.enabled ? "remove" : "add"](
									e.params.pagination.lockClass
								)
							));
					}),
					s("lock unlock", () => {
						p();
					}),
					s("click", (t, s) => {
						const a = s.target;
						let { el: r } = e.pagination;
						if (
							(Array.isArray(r) || (r = [r].filter((e) => !!e)),
							e.params.pagination.el &&
								e.params.pagination.hideOnClick &&
								r &&
								r.length > 0 &&
								!a.classList.contains(
									e.params.pagination.bulletClass
								))
						) {
							if (
								e.navigation &&
								((e.navigation.nextEl &&
									a === e.navigation.nextEl) ||
									(e.navigation.prevEl &&
										a === e.navigation.prevEl))
							)
								return;
							const t = r[0].classList.contains(
								e.params.pagination.hiddenClass
							);
							i(!0 === t ? "paginationShow" : "paginationHide"),
								r.forEach((t) =>
									t.classList.toggle(
										e.params.pagination.hiddenClass
									)
								);
						}
					});
				const f = () => {
					e.el.classList.add(
						e.params.pagination.paginationDisabledClass
					);
					let { el: t } = e.pagination;
					t &&
						((t = l(t)),
						t.forEach((t) =>
							t.classList.add(
								e.params.pagination.paginationDisabledClass
							)
						)),
						h();
				};
				Object.assign(e.pagination, {
					enable: () => {
						e.el.classList.remove(
							e.params.pagination.paginationDisabledClass
						);
						let { el: t } = e.pagination;
						t &&
							((t = l(t)),
							t.forEach((t) =>
								t.classList.remove(
									e.params.pagination.paginationDisabledClass
								)
							)),
							m(),
							u(),
							p();
					},
					disable: f,
					render: u,
					update: p,
					init: m,
					destroy: h,
				});
			},
			function ({ swiper: e, extendParams: t, on: s }) {
				t({
					creativeEffect: {
						limitProgress: 1,
						shadowPerProgress: !1,
						progressMultiplier: 1,
						perspective: !0,
						prev: {
							translate: [0, 0, 0],
							rotate: [0, 0, 0],
							opacity: 1,
							scale: 1,
						},
						next: {
							translate: [0, 0, 0],
							rotate: [0, 0, 0],
							opacity: 1,
							scale: 1,
						},
					},
				});
				const i = (e) => ("string" == typeof e ? e : `${e}px`);
				!(function (e) {
					const {
						effect: t,
						swiper: s,
						on: i,
						setTranslate: a,
						setTransition: r,
						overwriteParams: n,
						perspective: l,
						recreateShadows: o,
						getEffectParams: d,
					} = e;
					let c;
					i("beforeInit", () => {
						if (s.params.effect !== t) return;
						s.classNames.push(
							`${s.params.containerModifierClass}${t}`
						),
							l &&
								l() &&
								s.classNames.push(
									`${s.params.containerModifierClass}3d`
								);
						const e = n ? n() : {};
						Object.assign(s.params, e),
							Object.assign(s.originalParams, e);
					}),
						i("setTranslate", () => {
							s.params.effect === t && a();
						}),
						i("setTransition", (e, i) => {
							s.params.effect === t && r(i);
						}),
						i("transitionEnd", () => {
							if (s.params.effect === t && o) {
								if (!d || !d().slideShadows) return;
								s.slides.forEach((e) => {
									e.querySelectorAll(
										".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
									).forEach((e) => e.remove());
								}),
									o();
							}
						}),
						i("virtualUpdate", () => {
							s.params.effect === t &&
								(s.slides.length || (c = !0),
								requestAnimationFrame(() => {
									c &&
										s.slides &&
										s.slides.length &&
										(a(), (c = !1));
								}));
						});
				})({
					effect: "creative",
					swiper: e,
					on: s,
					setTranslate: () => {
						const {
								slides: t,
								wrapperEl: s,
								slidesSizesGrid: a,
							} = e,
							r = e.params.creativeEffect,
							{ progressMultiplier: n } = r,
							l = e.params.centeredSlides;
						if (l) {
							const t =
								a[0] / 2 - e.params.slidesOffsetBefore || 0;
							s.style.transform = `translateX(calc(50% - ${t}px))`;
						}
						for (let s = 0; s < t.length; s += 1) {
							const a = t[s],
								o = a.progress,
								d = Math.min(
									Math.max(a.progress, -r.limitProgress),
									r.limitProgress
								);
							let c = d;
							l ||
								(c = Math.min(
									Math.max(
										a.originalProgress,
										-r.limitProgress
									),
									r.limitProgress
								));
							const p = a.swiperSlideOffset,
								u = [
									e.params.cssMode ? -p - e.translate : -p,
									0,
									0,
								],
								m = [0, 0, 0];
							let h = !1;
							e.isHorizontal() || ((u[1] = u[0]), (u[0] = 0));
							let f = {
								translate: [0, 0, 0],
								rotate: [0, 0, 0],
								scale: 1,
								opacity: 1,
							};
							d < 0
								? ((f = r.next), (h = !0))
								: d > 0 && ((f = r.prev), (h = !0)),
								u.forEach((e, t) => {
									u[t] = `calc(${e}px + (${i(
										f.translate[t]
									)} * ${Math.abs(d * n)}))`;
								}),
								m.forEach((e, t) => {
									m[t] = f.rotate[t] * Math.abs(d * n);
								}),
								(a.style.zIndex =
									-Math.abs(Math.round(o)) + t.length);
							const g = u.join(", "),
								v = `rotateX(${m[0]}deg) rotateY(${m[1]}deg) rotateZ(${m[2]}deg)`,
								b =
									c < 0
										? `scale(${1 + (1 - f.scale) * c * n})`
										: `scale(${1 - (1 - f.scale) * c * n})`,
								w =
									c < 0
										? 1 + (1 - f.opacity) * c * n
										: 1 - (1 - f.opacity) * c * n,
								y = `translate3d(${g}) ${v} ${b}`;
							if ((h && f.shadow) || !h) {
								let e = a.querySelector(".swiper-slide-shadow");
								if ((!e && f.shadow && (e = ie(0, a)), e)) {
									const t = r.shadowPerProgress
										? d * (1 / r.limitProgress)
										: d;
									e.style.opacity = Math.min(
										Math.max(Math.abs(t), 0),
										1
									);
								}
							}
							const S = se(0, a);
							(S.style.transform = y),
								(S.style.opacity = w),
								f.origin &&
									(S.style.transformOrigin = f.origin);
						}
					},
					setTransition: (t) => {
						const s = e.slides.map((e) => h(e));
						s.forEach((e) => {
							(e.style.transitionDuration = `${t}ms`),
								e
									.querySelectorAll(".swiper-slide-shadow")
									.forEach((e) => {
										e.style.transitionDuration = `${t}ms`;
									});
						}),
							(function ({
								swiper: e,
								duration: t,
								transformElements: s,
								allSlides: i,
							}) {
								const { activeIndex: a } = e;
								if (e.params.virtualTranslate && 0 !== t) {
									let t,
										r = !1;
									(t = i
										? s
										: s.filter((t) => {
												const s = t.classList.contains(
													"swiper-slide-transform"
												)
													? ((t) =>
															t.parentElement
																? t.parentElement
																: e.slides.filter(
																		(e) =>
																			e.shadowEl &&
																			e.shadowEl ===
																				t.parentNode
																  )[0])(t)
													: t;
												return e.getSlideIndex(s) === a;
										  })),
										t.forEach((t) => {
											!(function (e, t) {
												t &&
													e.addEventListener(
														"transitionend",
														function s(i) {
															i.target === e &&
																(t.call(e, i),
																e.removeEventListener(
																	"transitionend",
																	s
																));
														}
													);
											})(t, () => {
												if (r) return;
												if (!e || e.destroyed) return;
												(r = !0), (e.animating = !1);
												const t =
													new window.CustomEvent(
														"transitionend",
														{
															bubbles: !0,
															cancelable: !0,
														}
													);
												e.wrapperEl.dispatchEvent(t);
											});
										});
								}
							})({
								swiper: e,
								duration: t,
								transformElements: s,
								allSlides: !0,
							});
					},
					perspective: () => e.params.creativeEffect.perspective,
					overwriteParams: () => ({
						watchSlidesProgress: !0,
						virtualTranslate: !e.params.cssMode,
					}),
				});
			},
			function ({ swiper: e, extendParams: t, on: s, emit: i }) {
				t({
					navigation: {
						nextEl: null,
						prevEl: null,
						hideOnClick: !1,
						disabledClass: "swiper-button-disabled",
						hiddenClass: "swiper-button-hidden",
						lockClass: "swiper-button-lock",
						navigationDisabledClass: "swiper-navigation-disabled",
					},
				}),
					(e.navigation = { nextEl: null, prevEl: null });
				const a = (e) => (
					Array.isArray(e) || (e = [e].filter((e) => !!e)), e
				);
				function r(t) {
					let s;
					return t &&
						"string" == typeof t &&
						e.isElement &&
						((s = e.el.shadowRoot.querySelector(t)), s)
						? s
						: (t &&
								("string" == typeof t &&
									(s = [...document.querySelectorAll(t)]),
								e.params.uniqueNavElements &&
									"string" == typeof t &&
									s.length > 1 &&
									1 === e.el.querySelectorAll(t).length &&
									(s = e.el.querySelector(t))),
						  t && !s ? t : s);
				}
				function n(t, s) {
					const i = e.params.navigation;
					(t = a(t)).forEach((t) => {
						t &&
							(t.classList[s ? "add" : "remove"](
								...i.disabledClass.split(" ")
							),
							"BUTTON" === t.tagName && (t.disabled = s),
							e.params.watchOverflow &&
								e.enabled &&
								t.classList[e.isLocked ? "add" : "remove"](
									i.lockClass
								));
					});
				}
				function l() {
					const { nextEl: t, prevEl: s } = e.navigation;
					if (e.params.loop) return n(s, !1), void n(t, !1);
					n(s, e.isBeginning && !e.params.rewind),
						n(t, e.isEnd && !e.params.rewind);
				}
				function o(t) {
					t.preventDefault(),
						(!e.isBeginning || e.params.loop || e.params.rewind) &&
							(e.slidePrev(), i("navigationPrev"));
				}
				function d(t) {
					t.preventDefault(),
						(!e.isEnd || e.params.loop || e.params.rewind) &&
							(e.slideNext(), i("navigationNext"));
				}
				function c() {
					const t = e.params.navigation;
					if (
						((e.params.navigation = U(
							e,
							e.originalParams.navigation,
							e.params.navigation,
							{
								nextEl: "swiper-button-next",
								prevEl: "swiper-button-prev",
							}
						)),
						!t.nextEl && !t.prevEl)
					)
						return;
					let s = r(t.nextEl),
						i = r(t.prevEl);
					Object.assign(e.navigation, { nextEl: s, prevEl: i }),
						(s = a(s)),
						(i = a(i));
					const n = (s, i) => {
						s && s.addEventListener("click", "next" === i ? d : o),
							!e.enabled &&
								s &&
								s.classList.add(...t.lockClass.split(" "));
					};
					s.forEach((e) => n(e, "next")),
						i.forEach((e) => n(e, "prev"));
				}
				function p() {
					let { nextEl: t, prevEl: s } = e.navigation;
					(t = a(t)), (s = a(s));
					const i = (t, s) => {
						t.removeEventListener("click", "next" === s ? d : o),
							t.classList.remove(
								...e.params.navigation.disabledClass.split(" ")
							);
					};
					t.forEach((e) => i(e, "next")),
						s.forEach((e) => i(e, "prev"));
				}
				s("init", () => {
					!1 === e.params.navigation.enabled ? u() : (c(), l());
				}),
					s("toEdge fromEdge lock unlock", () => {
						l();
					}),
					s("destroy", () => {
						p();
					}),
					s("enable disable", () => {
						let { nextEl: t, prevEl: s } = e.navigation;
						(t = a(t)),
							(s = a(s)),
							[...t, ...s]
								.filter((e) => !!e)
								.forEach((t) =>
									t.classList[e.enabled ? "remove" : "add"](
										e.params.navigation.lockClass
									)
								);
					}),
					s("click", (t, s) => {
						let { nextEl: r, prevEl: n } = e.navigation;
						(r = a(r)), (n = a(n));
						const l = s.target;
						if (
							e.params.navigation.hideOnClick &&
							!n.includes(l) &&
							!r.includes(l)
						) {
							if (
								e.pagination &&
								e.params.pagination &&
								e.params.pagination.clickable &&
								(e.pagination.el === l ||
									e.pagination.el.contains(l))
							)
								return;
							let t;
							r.length
								? (t = r[0].classList.contains(
										e.params.navigation.hiddenClass
								  ))
								: n.length &&
								  (t = n[0].classList.contains(
										e.params.navigation.hiddenClass
								  )),
								i(
									!0 === t
										? "navigationShow"
										: "navigationHide"
								),
								[...r, ...n]
									.filter((e) => !!e)
									.forEach((t) =>
										t.classList.toggle(
											e.params.navigation.hiddenClass
										)
									);
						}
					});
				const u = () => {
					e.el.classList.add(
						...e.params.navigation.navigationDisabledClass.split(
							" "
						)
					),
						p();
				};
				Object.assign(e.navigation, {
					enable: () => {
						e.el.classList.remove(
							...e.params.navigation.navigationDisabledClass.split(
								" "
							)
						),
							c(),
							l();
					},
					disable: u,
					update: l,
					init: c,
					destroy: p,
				});
			},
			function ({ swiper: e, extendParams: t, on: s }) {
				t({
					thumbs: {
						swiper: null,
						multipleActiveThumbs: !0,
						autoScrollOffset: 0,
						slideThumbActiveClass: "swiper-slide-thumb-active",
						thumbsContainerClass: "swiper-thumbs",
					},
				});
				let i = !1,
					a = !1;
				function n() {
					const t = e.thumbs.swiper;
					if (!t || t.destroyed) return;
					const s = t.clickedIndex,
						i = t.clickedSlide;
					if (
						i &&
						i.classList.contains(
							e.params.thumbs.slideThumbActiveClass
						)
					)
						return;
					if (null == s) return;
					let a;
					(a = t.params.loop
						? parseInt(
								t.clickedSlide.getAttribute(
									"data-swiper-slide-index"
								),
								10
						  )
						: s),
						e.params.loop ? e.slideToLoop(a) : e.slideTo(a);
				}
				function l() {
					const { thumbs: t } = e.params;
					if (i) return !1;
					i = !0;
					const s = e.constructor;
					if (t.swiper instanceof s)
						(e.thumbs.swiper = t.swiper),
							Object.assign(e.thumbs.swiper.originalParams, {
								watchSlidesProgress: !0,
								slideToClickedSlide: !1,
							}),
							Object.assign(e.thumbs.swiper.params, {
								watchSlidesProgress: !0,
								slideToClickedSlide: !1,
							}),
							e.thumbs.swiper.update();
					else if (c(t.swiper)) {
						const i = Object.assign({}, t.swiper);
						Object.assign(i, {
							watchSlidesProgress: !0,
							slideToClickedSlide: !1,
						}),
							(e.thumbs.swiper = new s(i)),
							(a = !0);
					}
					return (
						e.thumbs.swiper.el.classList.add(
							e.params.thumbs.thumbsContainerClass
						),
						e.thumbs.swiper.on("tap", n),
						!0
					);
				}
				function o(t) {
					const s = e.thumbs.swiper;
					if (!s || s.destroyed) return;
					const i =
						"auto" === s.params.slidesPerView
							? s.slidesPerViewDynamic()
							: s.params.slidesPerView;
					let a = 1;
					const r = e.params.thumbs.slideThumbActiveClass;
					if (
						(e.params.slidesPerView > 1 &&
							!e.params.centeredSlides &&
							(a = e.params.slidesPerView),
						e.params.thumbs.multipleActiveThumbs || (a = 1),
						(a = Math.floor(a)),
						s.slides.forEach((e) => e.classList.remove(r)),
						s.params.loop ||
							(s.params.virtual && s.params.virtual.enabled))
					)
						for (let t = 0; t < a; t += 1)
							f(
								s.slidesEl,
								`[data-swiper-slide-index="${e.realIndex + t}"]`
							).forEach((e) => {
								e.classList.add(r);
							});
					else
						for (let t = 0; t < a; t += 1)
							s.slides[e.realIndex + t] &&
								s.slides[e.realIndex + t].classList.add(r);
					const n = e.params.thumbs.autoScrollOffset,
						l = n && !s.params.loop;
					if (e.realIndex !== s.realIndex || l) {
						const a = s.activeIndex;
						let r, o;
						if (s.params.loop) {
							const t = s.slides.filter(
								(t) =>
									t.getAttribute(
										"data-swiper-slide-index"
									) === `${e.realIndex}`
							)[0];
							(r = s.slides.indexOf(t)),
								(o =
									e.activeIndex > e.previousIndex
										? "next"
										: "prev");
						} else
							(r = e.realIndex),
								(o = r > e.previousIndex ? "next" : "prev");
						l && (r += "next" === o ? n : -1 * n),
							s.visibleSlidesIndexes &&
								s.visibleSlidesIndexes.indexOf(r) < 0 &&
								(s.params.centeredSlides
									? (r =
											r > a
												? r - Math.floor(i / 2) + 1
												: r + Math.floor(i / 2) - 1)
									: r > a && s.params.slidesPerGroup,
								s.slideTo(r, t ? 0 : void 0));
					}
				}
				(e.thumbs = { swiper: null }),
					s("beforeInit", () => {
						const { thumbs: t } = e.params;
						if (t && t.swiper)
							if (
								"string" == typeof t.swiper ||
								t.swiper instanceof HTMLElement
							) {
								const s = r(),
									i = () => {
										const i =
											"string" == typeof t.swiper
												? s.querySelector(t.swiper)
												: t.swiper;
										if (i && i.swiper)
											(t.swiper = i.swiper), l(), o(!0);
										else if (i) {
											const s = (a) => {
												(t.swiper = a.detail[0]),
													i.removeEventListener(
														"init",
														s
													),
													l(),
													o(!0),
													t.swiper.update(),
													e.update();
											};
											i.addEventListener("init", s);
										}
										return i;
									},
									a = () => {
										e.destroyed ||
											i() ||
											requestAnimationFrame(a);
									};
								requestAnimationFrame(a);
							} else l(), o(!0);
					}),
					s("slideChange update resize observerUpdate", () => {
						o();
					}),
					s("setTransition", (t, s) => {
						const i = e.thumbs.swiper;
						i && !i.destroyed && i.setTransition(s);
					}),
					s("beforeDestroy", () => {
						const t = e.thumbs.swiper;
						t && !t.destroyed && a && t.destroy();
					}),
					Object.assign(e.thumbs, { init: l, update: o });
			},
			function ({ swiper: e }) {
				Object.assign(e, {
					appendSlide: Z.bind(e),
					prependSlide: J.bind(e),
					addSlide: Q.bind(e),
					removeSlide: ee.bind(e),
					removeAllSlides: te.bind(e),
				});
			},
			function ({
				swiper: e,
				extendParams: t,
				on: s,
				emit: i,
				params: a,
			}) {
				let n, l;
				(e.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
					t({
						autoplay: {
							enabled: !1,
							delay: 3e3,
							waitForTransition: !0,
							disableOnInteraction: !0,
							stopOnLastSlide: !1,
							reverseDirection: !1,
							pauseOnMouseEnter: !1,
						},
					});
				let o,
					d,
					c,
					p,
					u,
					m,
					h,
					f = a && a.autoplay ? a.autoplay.delay : 3e3,
					g = a && a.autoplay ? a.autoplay.delay : 3e3,
					v = new Date().getTime;
				function b(t) {
					e &&
						!e.destroyed &&
						e.wrapperEl &&
						t.target === e.wrapperEl &&
						(e.wrapperEl.removeEventListener("transitionend", b),
						x());
				}
				const w = () => {
						if (e.destroyed || !e.autoplay.running) return;
						e.autoplay.paused ? (d = !0) : d && ((g = o), (d = !1));
						const t = e.autoplay.paused
							? o
							: v + g - new Date().getTime();
						(e.autoplay.timeLeft = t),
							i("autoplayTimeLeft", t, t / f),
							(l = requestAnimationFrame(() => {
								w();
							}));
					},
					y = (t) => {
						if (e.destroyed || !e.autoplay.running) return;
						cancelAnimationFrame(l), w();
						let s = void 0 === t ? e.params.autoplay.delay : t;
						(f = e.params.autoplay.delay),
							(g = e.params.autoplay.delay);
						const a = (() => {
							let t;
							if (
								((t =
									e.virtual && e.params.virtual.enabled
										? e.slides.filter((e) =>
												e.classList.contains(
													"swiper-slide-active"
												)
										  )[0]
										: e.slides[e.activeIndex]),
								t)
							)
								return parseInt(
									t.getAttribute("data-swiper-autoplay"),
									10
								);
						})();
						!Number.isNaN(a) &&
							a > 0 &&
							void 0 === t &&
							((s = a), (f = a), (g = a)),
							(o = s);
						const r = e.params.speed,
							d = () => {
								e &&
									!e.destroyed &&
									(e.params.autoplay.reverseDirection
										? !e.isBeginning ||
										  e.params.loop ||
										  e.params.rewind
											? (e.slidePrev(r, !0, !0),
											  i("autoplay"))
											: e.params.autoplay
													.stopOnLastSlide ||
											  (e.slideTo(
													e.slides.length - 1,
													r,
													!0,
													!0
											  ),
											  i("autoplay"))
										: !e.isEnd ||
										  e.params.loop ||
										  e.params.rewind
										? (e.slideNext(r, !0, !0),
										  i("autoplay"))
										: e.params.autoplay.stopOnLastSlide ||
										  (e.slideTo(0, r, !0, !0),
										  i("autoplay")),
									e.params.cssMode &&
										((v = new Date().getTime()),
										requestAnimationFrame(() => {
											y();
										})));
							};
						return (
							s > 0
								? (clearTimeout(n),
								  (n = setTimeout(() => {
										d();
								  }, s)))
								: requestAnimationFrame(() => {
										d();
								  }),
							s
						);
					},
					S = () => {
						(e.autoplay.running = !0), y(), i("autoplayStart");
					},
					E = () => {
						(e.autoplay.running = !1),
							clearTimeout(n),
							cancelAnimationFrame(l),
							i("autoplayStop");
					},
					T = (t, s) => {
						if (e.destroyed || !e.autoplay.running) return;
						clearTimeout(n), t || (h = !0);
						const a = () => {
							i("autoplayPause"),
								e.params.autoplay.waitForTransition
									? e.wrapperEl.addEventListener(
											"transitionend",
											b
									  )
									: x();
						};
						if (((e.autoplay.paused = !0), s))
							return (
								m && (o = e.params.autoplay.delay),
								(m = !1),
								void a()
							);
						const r = o || e.params.autoplay.delay;
						(o = r - (new Date().getTime() - v)),
							(e.isEnd && o < 0 && !e.params.loop) ||
								(o < 0 && (o = 0), a());
					},
					x = () => {
						(e.isEnd && o < 0 && !e.params.loop) ||
							e.destroyed ||
							!e.autoplay.running ||
							((v = new Date().getTime()),
							h ? ((h = !1), y(o)) : y(),
							(e.autoplay.paused = !1),
							i("autoplayResume"));
					},
					L = () => {
						if (e.destroyed || !e.autoplay.running) return;
						const t = r();
						"hidden" === t.visibilityState && ((h = !0), T(!0)),
							"visible" === t.visibilityState && x();
					},
					C = (e) => {
						"mouse" === e.pointerType && ((h = !0), T(!0));
					},
					_ = (t) => {
						"mouse" === t.pointerType && e.autoplay.paused && x();
					};
				s("init", () => {
					e.params.autoplay.enabled &&
						(e.params.autoplay.pauseOnMouseEnter &&
							(e.el.addEventListener("pointerenter", C),
							e.el.addEventListener("pointerleave", _)),
						r().addEventListener("visibilitychange", L),
						(v = new Date().getTime()),
						S());
				}),
					s("destroy", () => {
						e.el.removeEventListener("pointerenter", C),
							e.el.removeEventListener("pointerleave", _),
							r().removeEventListener("visibilitychange", L),
							e.autoplay.running && E();
					}),
					s("beforeTransitionStart", (t, s, i) => {
						!e.destroyed &&
							e.autoplay.running &&
							(i || !e.params.autoplay.disableOnInteraction
								? T(!0, !0)
								: E());
					}),
					s("sliderFirstMove", () => {
						!e.destroyed &&
							e.autoplay.running &&
							(e.params.autoplay.disableOnInteraction
								? E()
								: ((c = !0),
								  (p = !1),
								  (h = !1),
								  (u = setTimeout(() => {
										(h = !0), (p = !0), T(!0);
								  }, 200))));
					}),
					s("touchEnd", () => {
						if (!e.destroyed && e.autoplay.running && c) {
							if (
								(clearTimeout(u),
								clearTimeout(n),
								e.params.autoplay.disableOnInteraction)
							)
								return (p = !1), void (c = !1);
							p && e.params.cssMode && x(), (p = !1), (c = !1);
						}
					}),
					s("slideChange", () => {
						!e.destroyed && e.autoplay.running && (m = !0);
					}),
					Object.assign(e.autoplay, {
						start: S,
						stop: E,
						pause: T,
						resume: x,
					});
			},
		]),
			new X(document.querySelector(".main-hero__slider"), {
				slidesPerView: "auto",
				spaceBetween: 40,
				resistanceRatio: 0,
				speed: 400,
				grabCursor: !0,
				pagination: {
					el: ".main-hero__pagination",
					type: "progressbar",
				},
				breakpoints: { 481: { enabled: !0 }, 0: { enabled: !1 } },
				loop: !0,
				autoplay: { delay: 5e3, pauseOnMouseEnter: !0 },
			}),
			new X(document.querySelector(".main-feedback__slider"), {
				slidesPerView: 3,
				spaceBetween: 30,
				speed: 400,
				resistanceRatio: 1,
				watchSlidesProgress: !0,
				slideVisibleClass: "main-feedback__slide-visible",
				pagination: {
					el: ".main-feedback__pagination",
					type: "bullets",
					clickable: !0,
					bulletClass: "main-feedback__bullet",
					bulletActiveClass: "main-feedback__bullet-active",
				},
				navigation: {
					nextEl: ".main-feedback__button-next",
					prevEl: ".main-feedback__button-prev",
				},
				breakpoints: {
					481: { enabled: !0 },
					0: { slidesPerView: 1, enabled: !1 },
				},
			});
		const ae = new X(
				".catalog-item-hero__slider-thumbs .swiper-container",
				{
					slidesPerView: 3,
					direction: "vertical",
					navigation: {
						nextEl: ".catalog-item-hero__button-next",
						prevEl: ".catalog-item-hero__button-prev",
					},
					freeMode: !0,
					breakpoints: {
						1025: { spaceBetween: 40 },
						481: { spaceBetween: 10, direction: "vertical" },
						0: { direction: "horizontal" },
					},
				}
			),
			re =
				(new X(".catalog-item-hero__slider-images .swiper-container", {
					slidesPerView: 1,
					spaceBetween: 30,
					mousewheel: !0,
					navigation: {
						nextEl: ".catalog-item-hero__button-next",
						prevEl: ".catalog-item-hero__button-prev",
					},
					grabCursor: !0,
					thumbs: { swiper: ae },
				}),
				new X(".quiz__slider", {
					slidesPerView: 1,
					speed: 500,
					allowSlideNext: !1,
					allowSlidePrev: !1,
				})),
			ne = document.getElementById("startTestBtn");
		null !== ne &&
			ne.addEventListener("click", () => {
				(re.allowSlideNext = !0),
					re.slideNext(),
					(re.allowSlideNext = !1);
			});
		const le = new X(".quiz__slider-inner", {
				slidesPerView: 1,
				spaceBetween: 15,
				speed: 500,
				navigation: {
					nextEl: ".quiz__button-next",
					prevEl: ".quiz__button-prev",
				},
				pagination: { el: ".quiz__pagination", type: "progressbar" },
			}),
			oe = document.querySelector(".quiz__title-current"),
			de = document.querySelector(".quiz__title-all");
		null !== de && (de.innerHTML = le.slides.length),
			le.on("activeIndexChange", () => {
				oe.innerHTML = le.activeIndex + 1;
			}),
			le.on("reachEnd", () => {
				const e = document.querySelector(".quiz__button-next");
				setTimeout(() => {
					e.removeAttribute("disabled"),
						e.addEventListener("click", () => {
							(re.allowSlideNext = !0),
								re.slideNext(),
								(re.allowSlideNext = !1);
						});
				}, 0);
			});
		const ce = new X(".main-design__slider", {
				slidesPerView: 1,
				speed: 500,
				allowSlideNext: !1,
				allowSlidePrev: !1,
			}),
			pe = document.querySelector(".main-design__slide-tohide"),
			ue = document.querySelector(".main-design__button-next");
		null !== ue &&
			ue.addEventListener("click", (e) => {
				e.preventDefault();
				const t = document.querySelector(".main-design__form"),
					s = t.querySelectorAll(
						".main-design__label-active .main-design__input"
					),
					i = t
						.querySelector(
							".main-design__label-active .main-design__image"
						)
						.getAttribute("src");
				if (null !== s) {
					const e = { img: i };
					s.forEach((t) => {
						e[t.name] = t.value;
					}),
						"под заказ" == e.color && (pe.style.display = "none"),
						document
							.querySelectorAll(".main-degign__image-imported")
							.forEach((t) => {
								t.setAttribute("src", e.img);
							}),
						document
							.querySelectorAll(".main-design__text-shape")
							.forEach((t) => {
								t.innerHTML = `Форма: ${e.shape}`;
							}),
						document
							.querySelectorAll(".main-design__text-color")
							.forEach((t) => {
								t.innerHTML = `Цвет: ${e.color}`;
							}),
						(ce.allowSlideNext = !0),
						ce.slideNext(),
						(ce.allowSlideNext = !1);
				}
			});
		const me = document.querySelectorAll(".main-design__button-prev");
		null !== me &&
			me.forEach((e) => {
				e.addEventListener("click", () => {
					(ce.allowSlidePrev = !0),
						ce.slidePrev(),
						(ce.allowSlidePrev = !1),
						(pe.style.display = "block");
				});
			}),
			s(27);
		class he {
			constructor(e, t, s) {
				(this.selector = e),
					(this.innerElements = t),
					(this.starterId = s),
					(this.tabs = document.querySelector(`[data-tabs="${e}"]`)),
					this.tabs &&
						((this.tabList = this.tabs.querySelector("." + t.list)),
						(this.tabsBtns = this.tabList.querySelectorAll(
							"." + t.button
						)),
						(this.tabsPanels = this.tabs.querySelectorAll(
							"." + t.panel
						)),
						this.init(),
						this.events());
			}
			init() {
				this.tabList.setAttribute("role", "tablist"),
					this.tabsBtns.forEach((e, t) => {
						e.setAttribute("role", "tab"),
							e.setAttribute("tabindex", "-1"),
							e.setAttribute("id", `${this.selector}${t + 1}`),
							e.classList.remove(
								this.innerElements.button + "-active"
							);
					}),
					this.tabsPanels.forEach((e, t) => {
						e.setAttribute("role", "tabpanel"),
							e.setAttribute("tabindex", "-1"),
							e.setAttribute(
								"aria-labelledby",
								this.tabsBtns[t].id
							),
							e.classList.remove(
								this.innerElements.panel + "-active"
							);
					}),
					this.tabsBtns[this.starterId].classList.add(
						this.innerElements.button + "-active"
					),
					this.tabsBtns[this.starterId].removeAttribute("tabindex"),
					this.tabsBtns[this.starterId].setAttribute(
						"aria-selected",
						"true"
					),
					this.tabsPanels[this.starterId].classList.add(
						this.innerElements.panel + "-active"
					);
			}
			events() {
				this.tabsBtns.forEach((e, t) => {
					e.addEventListener("click", (e) => {
						let t = this.tabList.querySelector("[aria-selected]");
						e.currentTarget !== t &&
							this.switchTabs(e.currentTarget, t);
					}),
						e.addEventListener("keydown", (e) => {
							let s = Array.prototype.indexOf.call(
									this.tabsBtns,
									e.currentTarget
								),
								i = null;
							(i =
								37 === e.which
									? s - 1
									: 39 === e.which
									? s + 1
									: 40 === e.which
									? "down"
									: null),
								null !== i &&
									("down" === i
										? this.tabsPanels[t].focus()
										: this.tabsBtns[i] &&
										  this.switchTabs(
												this.tabsBtns[i],
												e.currentTarget
										  ));
						});
				});
			}
			switchTabs(e) {
				let t =
					arguments.length > 1 && void 0 !== arguments[1]
						? arguments[1]
						: this.tabs.querySelector("[aria-selected]");
				e.focus(),
					e.removeAttribute("tabindex"),
					e.setAttribute("aria-selected", "true"),
					t.removeAttribute("aria-selected"),
					t.setAttribute("tabindex", "-1");
				let s = Array.prototype.indexOf.call(this.tabsBtns, e),
					i = Array.prototype.indexOf.call(this.tabsBtns, t);
				this.tabsPanels[i].classList.remove(
					this.innerElements.panel + "-active"
				),
					this.tabsPanels[s].classList.add(
						this.innerElements.panel + "-active"
					),
					this.tabsBtns[i].classList.remove(
						this.innerElements.button + "-active"
					),
					this.tabsBtns[s].classList.add(
						this.innerElements.button + "-active"
					);
			}
		}
		new he(
			"tab",
			{
				list: "catalog-item-tabs__list",
				button: "catalog-item-tabs__btn",
				panel: "catalog-item-tabs__panel",
			},
			2
		),
			new he(
				"quizTab",
				{
					list: "quiz__list-tabs",
					button: "quiz__btn",
					panel: "quiz__panel",
				},
				0
			),
			s(661),
			s(617),
			s(578),
			s(774),
			s(472),
			s(586),
			s(986);
		const fe = () => {
				const t = document?.querySelectorAll(".fixed-block"),
					s =
						(document.body,
						parseInt(e.bodyEl.dataset.position, 10));
				t.forEach((e) => {
					e.style.paddingRight = "0px";
				}),
					(e.bodyEl.style.paddingRight = "0px"),
					(e.bodyEl.style.top = "auto"),
					e.bodyEl.classList.remove("dis-scroll"),
					window.scroll({ top: s, left: 0 }),
					e.bodyEl.removeAttribute("data-position"),
					(e.htmlEl.style.scrollBehavior = "smooth");
			},
			ge = document.querySelector(".forms");
		if (null !== ge) {
			const t = ge.querySelector(".forms__container"),
				s = document.querySelector(".header");
			null !== t &&
				null !== s &&
				(t.style.marginTop = s.offsetHeight + "px"),
				ge.addEventListener("click", () => {
					ge.classList.remove("forms-visible"), fe();
				}),
				document.querySelectorAll(".open-form-btn").forEach((t) => {
					t.addEventListener("click", () => {
						ge.classList.contains("forms-visible") ||
							(ge.classList.add("forms-visible"),
							(() => {
								const t =
										document?.querySelectorAll(
											".fixed-block"
										),
									s = window.scrollY,
									i =
										window.innerWidth -
										e.bodyEl.offsetWidth +
										"px";
								(e.htmlEl.style.scrollBehavior = "none"),
									t.forEach((e) => {
										e.style.paddingRight = i;
									}),
									(e.bodyEl.style.paddingRight = i),
									e.bodyEl.classList.add("dis-scroll"),
									(e.bodyEl.dataset.position = s),
									(e.bodyEl.style.top = `-${s}px`);
							})());
					});
				}),
				ge.querySelectorAll(".forms__button-close").forEach((e) => {
					e.addEventListener("click", () => {
						ge.classList.remove("forms-visible"), fe();
					});
				});
			const i = ge.querySelectorAll(".forms__container-inner");
			i.forEach((e) => {
				e.addEventListener("click", (e) => {
					e.stopPropagation();
				});
			});
			const a = ge.querySelector(".forms__item-email"),
				r = document.getElementById("emailRegContainer");
			a.addEventListener("click", () => {
				i.forEach((e) => {
					e.classList.add("forms__container-inner-hidden");
				}),
					r.classList.remove("forms__container-inner-hidden");
			});
			const n = ge.querySelectorAll(".login-form-btn"),
				l = document.getElementById("loginFormContainer");
			n.forEach((e) => {
				e.addEventListener("click", () => {
					i.forEach((e) => {
						e.classList.add("forms__container-inner-hidden");
					}),
						l.classList.remove("forms__container-inner-hidden");
				});
			});
			const o = ge.querySelector(".forms__button-recover"),
				d = document.getElementById("recoverFormContainer");
			o.addEventListener("click", () => {
				i.forEach((e) => {
					e.classList.add("forms__container-inner-hidden");
				}),
					d.classList.remove("forms__container-inner-hidden");
			}),
				ge.querySelectorAll(".forms__button-reg").forEach((e) => {
					e.addEventListener("click", () => {
						i.forEach((e) => {
							e.classList.add("forms__container-inner-hidden");
						}),
							r.classList.remove("forms__container-inner-hidden");
					});
				});
			const c = document.querySelectorAll(".main-form-fack-btn"),
				p = document.getElementById("main-form-container");
			c.forEach((e) => {
				e.addEventListener("click", () => {
					i.forEach((e) => {
						e.classList.add("forms__container-inner-hidden");
					}),
						p.classList.remove("forms__container-inner-hidden");
				});
			}),
				document
					.getElementById("login-form-back-btn")
					.addEventListener("click", () => {
						i.forEach((e) => {
							e.classList.add("forms__container-inner-hidden");
						}),
							l.classList.remove("forms__container-inner-hidden");
					});
		}
		s(290);
	})();
})();
