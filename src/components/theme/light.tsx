import { createMuiTheme } from "@material-ui/core";

export const lightTheme = createMuiTheme({
	palette: {
		type: "light",
		// primary: {
		// 	main: "#fff",
		// },
		// secondary: {
		// 	main: "#ff0000"
		// }
		primary: {
			light: "#757ce8",
			main: "#fff",
			dark: "#1E90FF",
			contrastText: "#000"
		},
		secondary: {
			light: "#ff7961",
			main: "#6DF4EE",
			dark: "#ba000d",
			contrastText: "#1E90FF"
		},
		text: {
			primary: "#000",
			secondary: "#000"
		}
	},
	// typography: {
	// 	fontFamily: "TTCommons-Regular, sans-serif;",
	// 	fontWeightLight: "bolder"
	// }
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