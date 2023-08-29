export let colors = getColors();

function getColors() {
	// if (
	// 	window.matchMedia &&
	// 	window.matchMedia('(prefers-color-scheme: dark)').matches
	// ) {
	if (false) {
		return {
			primary: '#78FF8F',
			lightPrimary: '#b1fabdff',
			darkPrimary: '#1a73e8',
			secondary: '#3c4043',
			lightSecondary: '#e8eaed',
			darkSecondary: '#202124',
			accent: '#5f6368',
			lightAccent: '#f8f9fa',
			darkAccent: '#3c4043',
			white: '#fff',
			black: '#000',
			gray: '#f8f9fa',
			danger: '#ea4335',
			success: '#34a853',
			warning: '#fbbc05',
			info: '#4285f4',
			background: '#010029',
		};
	}

	return {
		primary: '#78FF8F',
		lightPrimary: '#b1fabdff',
		fadedPrimary: '#78ff8f52',
		darkPrimary: '#1a73e8',

		secondary: '#3c4043',
		lightSecondary: '#e8eaed',
		darkSecondary: '#202124',

		accent: '#5f6368',
		lightAccent: '#f8f9fa',
		darkAccent: '#3c4043',
		white: '#fff',
		black: '#000',
		gray: '#f8f9fa',
		danger: '#ea4335',
		success: '#34a853',
		warning: '#fbbc05',
		info: '#4285f4',
		background: '#010029',
	};
}
