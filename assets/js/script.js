(function ($) {
	"use strict";

	
	// Theme color control js
	$(document).ready(function () {
		// Ambil preferensi mode gelap dari penyimpanan lokal
		const stored = localStorage.getItem('darkMode');
		// Jika belum ada preferensi, default ke dark (true)
		const isDarkMode = stored === null ? true : stored === 'true';
		if (stored === null) {
			localStorage.setItem('darkMode', 'true');
		}
		// Terapkan kelas mode gelap jika preferensi menyatakan mode gelap aktif
		$('body').toggleClass('dark-theme', isDarkMode);
		
		// Tampilkan konten halaman
		$('#page-content').fadeIn(0);
	
		// Tambahkan event handler untuk tombol pengendali tema
		$('.theme-control-btn').on("click", function () {
			// Toggle kelas mode gelap pada elemen body
			$('body').toggleClass('dark-theme');
			
			// Simpan status mode gelap di penyimpanan lokal
			const isDark = $('body').hasClass('dark-theme');
			localStorage.setItem('darkMode', isDark);
		});
	});

	// Mobile menu control js
	$(".mobile-menu-control-bar").on("click", function () {
		$(".mobile-menu-overlay").addClass("show");
		$(".navbar-main").addClass("show");
	})
	$(".mobile-menu-overlay").on("click", function () {
		$(".mobile-menu-overlay").removeClass("show");
		$(".navbar-main").removeClass("show");
	})

	// Parallax scroll effect js
	document.querySelectorAll(".move-with-cursor").forEach(a => {
		document.addEventListener("mousemove", function (e) {
			var t = e.clientX,
				e = e.clientY;
			a.style.transition = "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)", a.style.transform = `translate(${.01 * t}px, ${.01 * e}px) rotate(${.01 * (t + e)}deg)`
		})
	}),

		// Email copy button js
		new ClipboardJS('.btn-copy');

	// Email copy button tooltip js
	$(document).ready(function () {
		$(".btn-copy").on("click", function () {
			$(this).addClass("active");

			setTimeout(() => {
				$(this).removeClass("active");
			}, 1000);
		});
	});

	// Magnific popup js
	$(".parent-container").magnificPopup({
		delegate: ".gallery-popup",
		type: "image",
		gallery: {
			enabled: true,
		},
	});

	// Client feedback slider js
	$(".client-feedback-slider").slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: false,
		dots: false,
		infinite: true,
		arrows: true,
		speed: 500,
		prevArrow: '<i class="fas left icon fa-arrow-left"></i>',
		nextArrow: '<i class="fas right icon fa-arrow-right"></i>',
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},]
	});

	// Article publications slider js
	$(".article-publications-slider").slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: false,
		dots: false,
		infinite: true,
		arrows: true,
		speed: 500,
		prevArrow: '<i class="fas left icon fa-arrow-left"></i>',
		nextArrow: '<i class="fas right icon fa-arrow-right"></i>',
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},]
	});

	// Digital product promo popup js
	$(document).ready(function () {
		const $popup = $('#productPromoPopup');
		if (!$popup.length) return;

		const isHomePage = /(^|\/)(index\.html)?$/.test(window.location.pathname);
		if (!isHomePage) return;

		const $fab = $('#productPromoFab');
		const $langWrap = $popup.find('.product-promo-lang');
		const storedLang = localStorage.getItem('promoLang');
		const initialLang = storedLang === 'en' || storedLang === 'id'
			? storedLang
			: ((navigator.language || 'id').toLowerCase().startsWith('id') ? 'id' : 'en');

		function applyLang(lang) {
			$langWrap.attr('data-active', lang);
			$langWrap.find('.lang-option').each(function () {
				const isActive = $(this).data('lang') === lang;
				$(this).toggleClass('active', isActive).attr('aria-selected', isActive);
			});
			$('[data-i18n]').each(function () {
				const key = $(this).attr('data-i18n');
				$(this).prop('hidden', !key.endsWith('-' + lang));
			});
			localStorage.setItem('promoLang', lang);
		}

		applyLang(initialLang);

		$langWrap.on('click', '.lang-option', function () {
			applyLang($(this).data('lang'));
		});

		function openPopup() {
			$popup.addClass('is-open').attr('aria-hidden', 'false');
			$('body').addClass('promo-open');
			$fab.prop('hidden', true);
		}

		function closePopup() {
			$popup.removeClass('is-open').attr('aria-hidden', 'true');
			$('body').removeClass('promo-open');
			$fab.prop('hidden', false);
		}

		$popup.on('click', '[data-popup-close]', closePopup);
		$fab.on('click', openPopup);

		$(document).on('keydown.promoPopup', function (e) {
			if (e.key === 'Escape' && $popup.hasClass('is-open')) {
				closePopup();
			}
		});

		setTimeout(openPopup, 900);
	});

})(jQuery);
