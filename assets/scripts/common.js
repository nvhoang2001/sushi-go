const colors = {
	neutral: {
		"01": "#1f1f20",
		"02": "#494a4d",
		"03": "#7c7d80",
		"04": "#b6b7ba",
		"05": "#d6d6d9",
		"06": "#ededf1",
		"07": "#f7f8fa",
		"08": "#fff",
	},
	primary: {
		"01": "#d92d2d",
		"02": "#c41b1b",
		"03": "#e64646",
		"04": "#fcc",
		"05": "#fee",
	},
};

const fonts = {
	".HeaderH1---Bold": {
		fontFamily: "Roboto, san-serif",
		fontSize: "60px",
		fontWeight: "bold",
		fontStretch: "normal",
		fontStyle: "normal",
		lineHeight: 1.4,
		letterSpacing: "normal",
	},
	".HeaderH1---Medium": {
		fontFamily: "Roboto, san-serif",
		fontSize: "60px",
		fontWeight: 500,
		fontStretch: "normal",
		fontStyle: "normal",
		lineHeight: 1.4,
		letterSpacing: "normal",
	},
	".HeaderH2---Bold": {
		fontFamily: "Roboto, san-serif",
		fontSize: "52px",
		fontWeight: "bold",
		fontStretch: "normal",
		fontStyle: "normal",
		lineHeight: 1.5,
		letterSpacing: "normal",
	},
	".HeaderH2---Medium": {
		fontFamily: "Roboto, san-serif",
		fontSize: "52px",
		fontWeight: 500,
		fontStretch: "normal",
		fontStyle: "normal",
		lineHeight: 1.5,
		letterSpacing: "normal",
	},
	".HeaderH3---Bold": {
		fontFamily: "Roboto, san-serif",
		fontSize: "40px",
		fontWeight: "bold",
		fontStretch: "normal",
		fontStyle: "normal",
		lineHeight: 1.4,
		letterSpacing: "normal",
	},
	".HeaderH3---Medium": {
		fontFamily: "Roboto, san-serif",
		fontSize: "40px",
		fontWeight: 500,
		fontStretch: "normal",
		fontStyle: "normal",
		lineHeight: 1.4,
		letterSpacing: "normal",
	},
	".HeaderH4---Bold": {
		fontFamily: "Roboto, san-serif",
		fontSize: "32px",
		fontWeight: "bold",
		fontStretch: "normal",
		fontStyle: "normal",
		lineHeight: 1.5,
		letterSpacing: "normal",
	},
	".HeaderH4---Medium": {
		fontFamily: "Roboto, san-serif",
		fontSize: "32px",
		fontWeight: 500,
		fontStretch: "normal",
		fontStyle: "normal",
		lineHeight: 1.5,
		letterSpacing: "normal",
	},
	".TitleT1---Bold": {
		fontFamily: "Roboto, san-serif",
		fontSize: "24px",
		fontWeight: "bold",
		fontStretch: "normal",
		fontStyle: "normal",
		lineHeight: 1.5,
		letterSpacing: "normal",
	},
	".TitleT1---Medium": {
		fontFamily: "Roboto, san-serif",
		fontSize: "24px",
		fontWeight: 500,
		fontStretch: "normal",
		fontStyle: "normal",
		lineHeight: 1.5,
		letterSpacing: "normal",
	},
	".TitleT1---Regular": {
		fontFamily: "Roboto, san-serif",
		fontSize: "24px",
		fontWeight: "normal",
		fontStretch: "normal",
		fontStyle: "normal",
		lineHeight: 1.5,
		letterSpacing: "normal",
	},
	".TitleT2---Bold": {
		fontFamily: "Roboto, san-serif",
		fontSize: "20px",
		fontWeight: "bold",
		fontStretch: "normal",
		fontStyle: "normal",
		lineHeight: 1.3,
		letterSpacing: "normal",
	},
	".TitleT2---Medium": {
		fontFamily: "Roboto, san-serif",
		fontSize: "20px",
		fontWeight: 500,
		fontStretch: "normal",
		fontStyle: "normal",
		lineHeight: 1.3,
		letterSpacing: "normal",
	},
	".TitleT2---Regular": {
		fontFamily: "Roboto, san-serif",
		fontSize: "20px",
		fontWeight: "normal",
		fontStretch: "normal",
		fontStyle: "normal",
		lineHeight: 1.3,
		letterSpacing: "normal",
	},
	".Body-TextB1---Bold": {
		fontFamily: "Roboto, san-serif",
		fontSize: "16px",
		fontWeight: "bold",
		fontStretch: "normal",
		fontStyle: "normal",
		lineHeight: 1.5,
		letterSpacing: "normal",
	},
	".Body-TextB1---Medium": {
		fontFamily: "Roboto, san-serif",
		fontSize: "16px",
		fontWeight: 500,
		fontStretch: "normal",
		fontStyle: "normal",
		lineHeight: 1.5,
		letterSpacing: "normal",
	},
	".Body-TextB1---Regular": {
		fontFamily: "Roboto, san-serif",
		fontSize: "16px",
		fontWeight: "normal",
		fontStretch: "normal",
		fontStyle: "normal",
		lineHeight: 1.5,
		letterSpacing: "normal",
	},
	".Body-TextB2---SemiBold": {
		fontFamily: "Roboto, san-serif",
		fontSize: "14px",
		fontWeight: 600,
		fontStretch: "normal",
		fontStyle: "normal",
		lineHeight: 1.4,
		letterSpacing: "normal",
	},
	".Body-TextB2---Medium": {
		fontFamily: "Roboto, san-serif",
		fontSize: "14px",
		fontWeight: 500,
		fontStretch: "normal",
		fontStyle: "normal",
		lineHeight: 1.4,
		letterSpacing: "normal",
	},
	".Body-TextB2---Regular": {
		fontFamily: "Roboto, san-serif",
		fontSize: "14px",
		fontWeight: "normal",
		fontStretch: "normal",
		fontStyle: "normal",
		lineHeight: 1.4,
		letterSpacing: "normal",
	},
	".CaptionC1---SemiBold": {
		fontFamily: "Roboto, san-serif",
		fontSize: "12px",
		fontWeight: 600,
		fontStretch: "normal",
		fontStyle: "normal",
		lineHeight: 1.3,
		letterSpacing: "normal",
	},
	".CaptionC1---Medium": {
		fontFamily: "Roboto, san-serif",
		fontSize: "12px",
		fontWeight: 500,
		fontStretch: "normal",
		fontStyle: "normal",
		lineHeight: 1.3,
		letterSpacing: "normal",
	},
	".CaptionC1---Regular": {
		fontFamily: "Roboto, san-serif",
		fontSize: "12px",
		fontWeight: "normal",
		fontStretch: "normal",
		fontStyle: "normal",
		lineHeight: 1.3,
		letterSpacing: "normal",
	},
	".CaptionC2---SemiBold": {
		fontFamily: "Roboto, san-serif",
		fontSize: "10px",
		fontWeight: 600,
		fontStretch: "normal",
		fontStyle: "normal",
		lineHeight: 1.4,
		letterSpacing: "normal",
	},
	".CaptionC2---Medium": {
		fontFamily: "Roboto, san-serif",
		fontSize: "10px",
		fontWeight: 500,
		fontStretch: "normal",
		fontStyle: "normal",
		lineHeight: 1.4,
		letterSpacing: "normal",
	},
	".CaptionC2---Regular": {
		fontFamily: "Roboto, san-serif",
		fontSize: "10px",
		fontWeight: "normal",
		fontStretch: "normal",
		fontStyle: "normal",
		lineHeight: 1.4,
		letterSpacing: "normal",
	},
};

tailwind.config = {
	prefix: "tw-",
	corePlugins: {
		preflight: false,
	},
	theme: {
		extend: {
			colors,
			fontFamily: {
				MonaSans: [
					"Roboto",
					"ui-sans-serif",
					"system-ui",
					"sans-serif",
					'"Apple Color Emoji"',
					'"Segoe UI Emoji"',
					'"Segoe UI Symbol"',
					'"Noto Color Emoji"',
				],
			},
		},
	},
	plugins: [
		/** @type {import('tailwindcss/types/config').PluginCreator} */
		({ addUtilities }) => {
			addUtilities(fonts);
		},
	],
};

(function ($) {
	/**
	 * Auto-growing textareas; technique ripped from Facebook
	 *
	 *
	 * http://github.com/jaz303/jquery-grab-bag/tree/master/javascripts/jquery.autogrow-textarea.js
	 */
	$.fn.autogrow = function (options) {
		return this.filter("textarea").each(function () {
			var self = this;
			var $self = $(self);
			var minHeight = $self.height();
			var noFlickerPad = $self.hasClass("autogrow-short")
				? 0
				: parseInt($self.css("lineHeight")) || 0;
			var settings = $.extend(
				{
					preGrowCallback: null,
					postGrowCallback: null,
				},
				options,
			);

			var shadow = $("<div></div>")
				.css({
					position: "absolute",
					top: -10000,
					left: -10000,
					width: $self.width(),
					fontSize: $self.css("fontSize"),
					fontFamily: $self.css("fontFamily"),
					fontWeight: $self.css("fontWeight"),
					lineHeight: $self.css("lineHeight"),
					resize: "none",
					"word-wrap": "break-word",
				})
				.appendTo(document.body);

			var update = function (event) {
				var times = function (string, number) {
					for (var i = 0, r = ""; i < number; i++) r += string;
					return r;
				};

				var val = self.value
					.replace(/&/g, "&amp;")
					.replace(/</g, "&lt;")
					.replace(/>/g, "&gt;")
					.replace(/\n$/, "<br/>&#xa0;")
					.replace(/\n/g, "<br/>")
					.replace(/ {2,}/g, function (space) {
						return times("&#xa0;", space.length - 1) + " ";
					});

				// Did enter get pressed?  Resize in this keydown event so that the flicker doesn't occur.
				if (event && event.data && event.data.event === "keydown" && event.keyCode === 13) {
					val += "<br />";
				}

				shadow.css("width", $self.width());
				shadow.html(val + (noFlickerPad === 0 ? "..." : "")); // Append '...' to resize pre-emptively.

				var newHeight = Math.max(shadow.height() + noFlickerPad, minHeight);
				if (settings.preGrowCallback != null) {
					newHeight = settings.preGrowCallback($self, shadow, newHeight, minHeight);
				}

				$self.height(newHeight);

				if (settings.postGrowCallback != null) {
					settings.postGrowCallback($self);
				}
			};

			$self.change(update).keyup(update).keydown({ event: "keydown" }, update);
			$(window).resize(update);

			update();
		});
	};
})(jQuery);
