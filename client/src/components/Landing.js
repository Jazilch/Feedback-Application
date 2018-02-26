import React from 'react';
import('./Landing.css');


const Landing = () => {
	return (
		<div className="hero">
			<div className="hero_overlay">
				<div className="content_wrapper">
					<h1>
						GetFeedback
					</h1>
					<h5>
						Getting feedback from your users is difficult but it doesn't have to be.
						Quickly and easily start sending feddback surveys to get the feedback your app needs.
					</h5>
					<a href="/auth/google" class="waves-effect waves-light btn-large">Get Started</a>
				</div>
			</div>
		</div>
	);
};

export default Landing;