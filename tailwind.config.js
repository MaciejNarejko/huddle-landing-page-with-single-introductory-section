tailwind.config = {
	theme: {
		extend: {
			screens: {
				sm: '576px',
				md: '960px',
				lg: '1240px',
			},
			backgroundPosition: {
				'center-right': 'center right',
			},
			colors: {
				violet: 'hsl(257, 40%, 49%)',
				'soft-magenta': 'hsl(300, 69%, 71%)',
			},
			backgroundImage: {
				desktop: "url('./images/bg-desktop.svg')",
				mobile: "url('./images/bg-mobile.svg')",
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				'open-sans': ['Open Sans', 'sans-serif'],
			},
			lineHeight: {
				'60px': '60px',
				'50px': '50px',
			},
			fontSize: {
				'4xl': '2.5rem',
			},
			boxShadow: {
				'custom-mobile': '1px 3px 5px 0px rgba(0, 0, 0, 0.27)',
				'custom-desktop': '2px 4px 9px 3px rgba(0, 0, 0, 0.26)',
			},
		},
	},
}
