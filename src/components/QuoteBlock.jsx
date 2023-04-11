import "./QuoteBlock.css";

import React from "react";
import PropTypes from "prop-types";

const QuoteBlock = ({
	title,
	subTitle,
	description,
	ctaPrimaryText,
	ctaPrimaryLink,
	ctaSecondaryText,
	ctaSecondaryLink,
	compBackground,
	textboxBackground,
	hideUnderline,
	textBoxTextColor,
	theme,
	hyperlinkText,
	hyperlinkLink,
}) => {
	return (
		<div
			className={`quote-block theme--${theme || "primary"}`}
			style={{ background: compBackground }}
		>
			<div className="quote-block__left">
				<h2 className="quote-block__heading">{title}</h2>
				<h5
					className="quote-block__sub-heading"
					style={{ color: textBoxTextColor }}
				>
					{subTitle}
				</h5>
				{!hideUnderline && (
					<span className="quote-block__underline">&nbsp;</span>
				)}
			</div>
			<div className="quote-block__right">
				<p
					className={`quote-block__description`}
					style={{ background: textboxBackground, color: textBoxTextColor }}
				>
					{description}
					{hyperlinkText !== undefined && hyperlinkLink !== undefined && (
						<a href={hyperlinkLink} className="quote-block__link">
							{hyperlinkText}
						</a>
					)}
				</p>
				<div className="quote-block__btns">
					{ctaPrimaryText !== undefined && ctaPrimaryLink !== undefined && (
						<a href={ctaPrimaryLink} className="quote-block__btn btn---fill">
							{ctaPrimaryText}
						</a>
					)}
					{ctaSecondaryText !== undefined && ctaSecondaryLink !== undefined && (
						<a
							href={ctaSecondaryLink}
							className="quote-block__btn btn---outline"
						>
							{ctaSecondaryText}
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default QuoteBlock;

QuoteBlock.propTypes = {
	title: PropTypes.string,
	subTitle: PropTypes.string,
	description: PropTypes.string,
	ctaPrimaryText: PropTypes.string,
	ctaPrimaryLink: PropTypes.string,
	ctaSecondaryText: PropTypes.string,
	ctaSecondaryLink: PropTypes.string,
	compBackground: PropTypes.string,
	textboxBackground: PropTypes.string,
	hideUnderline: PropTypes.bool,
	textBoxTextColor: PropTypes.string,
	theme: PropTypes.oneOf(["primary", "secondary"]),
	hyperlinkText: PropTypes.string,
	hyperlinkLink: PropTypes.string,
};
