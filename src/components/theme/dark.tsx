import { createMuiTheme } from "@material-ui/core";

export const darkTheme = createMuiTheme({
	palette: {
		type: "dark",
		// primary: {
		// 	main: "#000"
		// },
		// text: {
		// 	secondary: {
		// 		fontcolor: "#ff0000",
		// 	}
		// },
		primary: {
			// light: "#757ce8",
			main: "#000",
			dark: "#D11D3C",
			contrastText: "#fff"
		},
		secondary: {
			light: "#ff7961",
			main: "#6DF4EE",
			dark: "#ba000d",
			contrastText: "#000"
		},
		text: {
			primary: "#fff"
		},
		// Used by `getContrastText()` to maximize the contrast between
		// the background and the text.
		contrastThreshold: 3,
		// Used by the functions below to shift a color's luminance by approximately
		// two indexes within its tonal palette.
		// E.g., shift from Red 500 to Red 300 or Red 700.
		tonalOffset: 0.2
	},
	typography: {
		htmlFontSize: 20,
		fontFamily: [
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"'
		].join(",")
	}
});