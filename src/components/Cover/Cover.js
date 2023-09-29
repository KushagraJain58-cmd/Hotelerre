import React from 'react';
import './Cover.css';

const Cover = ({ coverImageSrc, title, subTitle }) => {
	return (
		<div className="cover">
			<div className="cover-img">
				<img src={coverImageSrc} alt="" />
			</div>
			<div className="cover-content">
				<h1>{title}</h1>
				<h2>{subTitle}</h2>
			</div>
		</div>
	);
};

export default Cover;
