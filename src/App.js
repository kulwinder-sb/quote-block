import { useState } from "react";
import "./App.css";
import QuoteBlock from "./components/QuoteBlock";

function App() {
	const [theme, setTheme] = useState("primary");

	return (
		<div className="App">
			<header className="header">
				<button
					className="theme-swithcer"
					onClick={() =>
						setTheme(theme === "primary" ? "secondary" : "primary")
					}
				>
					Switch theme
				</button>
			</header>
			<QuoteBlock
				title="Possit etimam"
				subTitle="Morbi eget efficitur nunc."
				hideUnderline={false}
				description="A staycation with the kids is always a good idea especially at Dubai’s family resort! Memorable bonding time with complimentary lunch or dinner at Gordon Ramsay’s Bread Street Kitchen*, activities for kids, one hour free watersports in the Arabian Sea and so much more! We’re sure to keep the little ones entertained."
				hyperlinkText="Test Hyperlink"
				hyperlinkLink="https://www.google.com"
				ctaPrimaryText="Buy ticket"
				ctaPrimaryLink="https://reactjs.org/"
				ctaSecondaryText="Buy ticket"
				ctaSecondaryLink="https://reactjs.org/"
				compBackground="white"
				textboxBackground="cream"
				textBoxTextColor="black"
				theme={theme}
			/>
		</div>
	);
}

export default App;
