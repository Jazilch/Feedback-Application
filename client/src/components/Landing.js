import React from 'react';

const divStyle = {
	backgroundImage: "url('https://cdn2.hubspot.net/hubfs/2676636/Tooltip/mountain-landscape-wallpaper-29048-29765-hd-wallpapers.jpg')",
	backgroundSize: 'cover',
	position: 'relative',
	height: '100vh',
	paddingBottom: '8%',
	textAlign: 'center'
};

const overlayStyles = {
	position: 'absolute',
	top: '0',
	left: '0',
	bottom: '0',
	right: '0',
	backgroundColor: 'rgba(0,0,0, 0.5)'
};

const textWrapper = {
	paddingTop: '10%'
};
const textStyles = {
	color: '#fff',
};



const Landing = () => {
	return (
		<div style={divStyle}>
			<div style={overlayStyles}>
				<div style={textWrapper}>
					<h1 style={textStyles}>
						GetFeedback
					</h1>
					<p style={textStyles}>
						Collect feedback from your users
					</p>
					<a class="waves-effect waves-light btn-large">button</a>
				</div>
			</div>
		</div>
	);
};

export default Landing;