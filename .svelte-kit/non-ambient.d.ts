
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/" | "/about" | "/contact" | "/services" | "/services/cabinet-painting" | "/services/cleaning" | "/services/counter-resurfacing" | "/services/installations" | "/services/millwork" | "/services/painting" | "/services/pressure-washing" | "/services/repairs" | "/services/sheetrock" | "/services/tub-resurfacing" | "/services/turnkey" | "/services/water-remediation";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/about": Record<string, never>;
			"/contact": Record<string, never>;
			"/services": Record<string, never>;
			"/services/cabinet-painting": Record<string, never>;
			"/services/cleaning": Record<string, never>;
			"/services/counter-resurfacing": Record<string, never>;
			"/services/installations": Record<string, never>;
			"/services/millwork": Record<string, never>;
			"/services/painting": Record<string, never>;
			"/services/pressure-washing": Record<string, never>;
			"/services/repairs": Record<string, never>;
			"/services/sheetrock": Record<string, never>;
			"/services/tub-resurfacing": Record<string, never>;
			"/services/turnkey": Record<string, never>;
			"/services/water-remediation": Record<string, never>
		};
		Pathname(): "/" | "/about" | "/contact" | "/services" | "/services/cabinet-painting" | "/services/cleaning" | "/services/counter-resurfacing" | "/services/installations" | "/services/millwork" | "/services/painting" | "/services/pressure-washing" | "/services/repairs" | "/services/sheetrock" | "/services/tub-resurfacing" | "/services/turnkey" | "/services/water-remediation";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/assets/css/main.css" | "/assets/img/apple-touch-icon.png" | "/assets/img/blog/blog-1.jpg" | "/assets/img/blog/blog-2.jpg" | "/assets/img/blog/blog-3.jpg" | "/assets/img/blog/blog-4.jpg" | "/assets/img/blog/blog-5.jpg" | "/assets/img/blog/blog-6.jpg" | "/assets/img/blog/blog-author-2.jpg" | "/assets/img/blog/blog-author-3.jpg" | "/assets/img/blog/blog-author-4.jpg" | "/assets/img/blog/blog-author-5.jpg" | "/assets/img/blog/blog-author-6.jpg" | "/assets/img/blog/blog-author.jpg" | "/assets/img/blog/blog-inside-post.jpg" | "/assets/img/blog/blog-recent-1.jpg" | "/assets/img/blog/blog-recent-2.jpg" | "/assets/img/blog/blog-recent-3.jpg" | "/assets/img/blog/blog-recent-4.jpg" | "/assets/img/blog/blog-recent-5.jpg" | "/assets/img/blog/comments-1.jpg" | "/assets/img/blog/comments-2.jpg" | "/assets/img/blog/comments-3.jpg" | "/assets/img/blog/comments-4.jpg" | "/assets/img/blog/comments-5.jpg" | "/assets/img/blog/comments-6.jpg" | "/assets/img/clients/client-1.png" | "/assets/img/clients/client-2.png" | "/assets/img/clients/client-3.png" | "/assets/img/clients/client-4.png" | "/assets/img/clients/client-5.png" | "/assets/img/clients/client-6.png" | "/assets/img/contact-team.jpg" | "/assets/img/cta-bg.jpg" | "/assets/img/favicon.png" | "/assets/img/features-light-1.jpg" | "/assets/img/features-light-2.jpg" | "/assets/img/features-light-3.jpg" | "/assets/img/hero-bg.jpg" | "/assets/img/img1.png" | "/assets/img/logo.png" | "/assets/img/masonry-portfolio/masonry-portfolio-1.jpg" | "/assets/img/masonry-portfolio/masonry-portfolio-2.jpg" | "/assets/img/masonry-portfolio/masonry-portfolio-3.jpg" | "/assets/img/masonry-portfolio/masonry-portfolio-4.jpg" | "/assets/img/masonry-portfolio/masonry-portfolio-5.jpg" | "/assets/img/masonry-portfolio/masonry-portfolio-6.jpg" | "/assets/img/masonry-portfolio/masonry-portfolio-7.jpg" | "/assets/img/masonry-portfolio/masonry-portfolio-8.jpg" | "/assets/img/masonry-portfolio/masonry-portfolio-9.jpg" | "/assets/img/portfolio/app-1.jpg" | "/assets/img/portfolio/books-1.jpg" | "/assets/img/portfolio/branding-1.jpg" | "/assets/img/portfolio/product-1.jpg" | "/assets/img/services.jpg" | "/assets/img/stats-bg.jpg" | "/assets/img/team/team-1.jpg" | "/assets/img/team/team-2.jpg" | "/assets/img/team/team-3.jpg" | "/assets/img/team/team-4.jpg" | "/assets/img/team/team-5.jpg" | "/assets/img/team/team-6.jpg" | "/assets/img/team/team-7.png" | "/assets/img/team/team-8.jpeg" | "/assets/img/team/team-boss.jpg" | "/assets/img/testimonials/testimonials-1.jpg" | "/assets/img/testimonials/testimonials-2.jpg" | "/assets/img/testimonials/testimonials-3.jpg" | "/assets/img/testimonials/testimonials-4.jpg" | "/assets/img/testimonials/testimonials-5.jpg" | "/assets/js/main.js" | "/assets/scss/Readme.txt" | "/assets/vendor/aos/aos.cjs.js" | "/assets/vendor/aos/aos.css" | "/assets/vendor/aos/aos.esm.js" | "/assets/vendor/aos/aos.js" | "/assets/vendor/aos/aos.js.map" | "/assets/vendor/bootstrap/css/bootstrap-grid.css" | "/assets/vendor/bootstrap/css/bootstrap-grid.css.map" | "/assets/vendor/bootstrap/css/bootstrap-grid.min.css" | "/assets/vendor/bootstrap/css/bootstrap-grid.min.css.map" | "/assets/vendor/bootstrap/css/bootstrap-grid.rtl.css" | "/assets/vendor/bootstrap/css/bootstrap-grid.rtl.css.map" | "/assets/vendor/bootstrap/css/bootstrap-grid.rtl.min.css" | "/assets/vendor/bootstrap/css/bootstrap-grid.rtl.min.css.map" | "/assets/vendor/bootstrap/css/bootstrap-reboot.css" | "/assets/vendor/bootstrap/css/bootstrap-reboot.css.map" | "/assets/vendor/bootstrap/css/bootstrap-reboot.min.css" | "/assets/vendor/bootstrap/css/bootstrap-reboot.min.css.map" | "/assets/vendor/bootstrap/css/bootstrap-reboot.rtl.css" | "/assets/vendor/bootstrap/css/bootstrap-reboot.rtl.css.map" | "/assets/vendor/bootstrap/css/bootstrap-reboot.rtl.min.css" | "/assets/vendor/bootstrap/css/bootstrap-reboot.rtl.min.css.map" | "/assets/vendor/bootstrap/css/bootstrap-utilities.css" | "/assets/vendor/bootstrap/css/bootstrap-utilities.css.map" | "/assets/vendor/bootstrap/css/bootstrap-utilities.min.css" | "/assets/vendor/bootstrap/css/bootstrap-utilities.min.css.map" | "/assets/vendor/bootstrap/css/bootstrap-utilities.rtl.css" | "/assets/vendor/bootstrap/css/bootstrap-utilities.rtl.css.map" | "/assets/vendor/bootstrap/css/bootstrap-utilities.rtl.min.css" | "/assets/vendor/bootstrap/css/bootstrap-utilities.rtl.min.css.map" | "/assets/vendor/bootstrap/css/bootstrap.css" | "/assets/vendor/bootstrap/css/bootstrap.css.map" | "/assets/vendor/bootstrap/css/bootstrap.min.css" | "/assets/vendor/bootstrap/css/bootstrap.min.css.map" | "/assets/vendor/bootstrap/css/bootstrap.rtl.css" | "/assets/vendor/bootstrap/css/bootstrap.rtl.css.map" | "/assets/vendor/bootstrap/css/bootstrap.rtl.min.css" | "/assets/vendor/bootstrap/css/bootstrap.rtl.min.css.map" | "/assets/vendor/bootstrap/js/bootstrap.bundle.js" | "/assets/vendor/bootstrap/js/bootstrap.bundle.js.map" | "/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" | "/assets/vendor/bootstrap/js/bootstrap.bundle.min.js.map" | "/assets/vendor/bootstrap/js/bootstrap.esm.js" | "/assets/vendor/bootstrap/js/bootstrap.esm.js.map" | "/assets/vendor/bootstrap/js/bootstrap.esm.min.js" | "/assets/vendor/bootstrap/js/bootstrap.esm.min.js.map" | "/assets/vendor/bootstrap/js/bootstrap.js" | "/assets/vendor/bootstrap/js/bootstrap.js.map" | "/assets/vendor/bootstrap/js/bootstrap.min.js" | "/assets/vendor/bootstrap/js/bootstrap.min.js.map" | "/assets/vendor/bootstrap-icons/bootstrap-icons.css" | "/assets/vendor/bootstrap-icons/bootstrap-icons.json" | "/assets/vendor/bootstrap-icons/bootstrap-icons.min.css" | "/assets/vendor/bootstrap-icons/bootstrap-icons.scss" | "/assets/vendor/bootstrap-icons/fonts/bootstrap-icons.woff" | "/assets/vendor/bootstrap-icons/fonts/bootstrap-icons.woff2" | "/assets/vendor/glightbox/css/glightbox.css" | "/assets/vendor/glightbox/css/glightbox.min.css" | "/assets/vendor/glightbox/js/glightbox.js" | "/assets/vendor/glightbox/js/glightbox.min.js" | "/assets/vendor/imagesloaded/imagesloaded.pkgd.min.js" | "/assets/vendor/isotope-layout/isotope.pkgd.js" | "/assets/vendor/isotope-layout/isotope.pkgd.min.js" | "/assets/vendor/php-email-form/validate.js" | "/assets/vendor/purecounter/purecounter_vanilla.js" | "/assets/vendor/purecounter/purecounter_vanilla.js.map" | "/assets/vendor/swiper/swiper-bundle.min.css" | "/assets/vendor/swiper/swiper-bundle.min.js" | "/assets/vendor/swiper/swiper-bundle.min.js.map" | string & {};
	}
}