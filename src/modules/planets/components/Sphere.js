import React from 'react';

const Sphere = ({diameter}) => {
	let size;
	if (parseInt(diameter) === 0) {
		size = 0;
	} else {
		size = diameter * 3 / 100 || 150;
	}
	return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={size} height={size} viewBox="-1.2 -1.2 2.2 2.2">
		<g fill="hsla(203, 85%, 95%, .015)" stroke="hsla(255,255%,255%,.2)" strokeWidth="0.01">
			<circle r="1"/>
			<g id="grid">
				<path d="M0 1A1 1 0 0 1 0-1">
					<animateTransform attributeName="transform" type="scale" dur="10s" values="1 1; -1 1" repeatCount="indefinite" calcMode="spline" keySplines="0.64 0 0.36 1"/>
				</path>
				<path d="M0 1A1 1 0 0 1 0-1">
					<animateTransform attributeName="transform" type="scale" begin="-0.5s" dur="10s" values="1 1; -1 1" repeatCount="indefinite" calcMode="spline" keySplines="0.64 0 0.36 1"/>
				</path>
				<path  d="M0 1A1 1 0 0 1 0-1">
					<animateTransform attributeName="transform" type="scale" begin="-1.0s" dur="10s" values="1 1; -1 1" repeatCount="indefinite" calcMode="spline" keySplines="0.64 0 0.36 1"/>
				</path>
				<path d="M0 1A1 1 0 0 1 0-1">
					<animateTransform attributeName="transform" type="scale" begin="-1.5s" dur="10s" values="1 1; -1 1" repeatCount="indefinite" calcMode="spline" keySplines="0.64 0 0.36 1"/>
				</path>
				<path  d="M0 1A1 1 0 0 1 0-1">
					<animateTransform attributeName="transform" type="scale" begin="-2.0s" dur="10s" values="1 1; -1 1" repeatCount="indefinite" calcMode="spline" keySplines="0.64 0 0.36 1"/>
				</path>
				<path d="M0 1A1 1 0 0 1 0-1">
					<animateTransform attributeName="transform" type="scale" begin="-2.5s" dur="10s" values="1 1; -1 1" repeatCount="indefinite" calcMode="spline" keySplines="0.64 0 0.36 1"/>
				</path>
				<path  d="M0 1A1 1 0 0 1 0-1">
					<animateTransform attributeName="transform" type="scale" begin="-3.0s" dur="10s" values="1 1; -1 1" repeatCount="indefinite" calcMode="spline" keySplines="0.64 0 0.36 1"/>
				</path>
				<path  d="M0 1A1 1 0 0 1 0-1">
					<animateTransform attributeName="transform" type="scale" begin="-3.5s" dur="10s" values="1 1; -1 1" repeatCount="indefinite" calcMode="spline" keySplines="0.64 0 0.36 1"/>
				</path>
				<path d="M0 1A1 1 0 0 1 0-1">
					<animateTransform attributeName="transform" type="scale" begin="-4.0s" dur="10s" values="1 1; -1 1" repeatCount="indefinite" calcMode="spline" keySplines="0.64 0 0.36 1"/>
				</path>
				<path d="M0 1A1 1 0 0 1 0-1">
					<animateTransform attributeName="transform" type="scale" begin="-4.5s" dur="10s" values="1 1; -1 1" repeatCount="indefinite" calcMode="spline" keySplines="0.64 0 0.36 1"/>
				</path>
				<path d="M0 1A1 1 0 0 1 0-1">
					<animateTransform attributeName="transform" type="scale" begin="-5.0s" dur="10s" values="1 1; -1 1" repeatCount="indefinite" calcMode="spline" keySplines="0.64 0 0.36 1"/>
				</path>
				<path  d="M0 1A1 1 0 0 1 0-1">
					<animateTransform attributeName="transform" type="scale" begin="-5.5s" dur="10s" values="1 1; -1 1" repeatCount="indefinite" calcMode="spline" keySplines="0.64 0 0.36 1"/>
				</path>
				<path  d="M0 1A1 1 0 0 1 0-1">
					<animateTransform attributeName="transform" type="scale" begin="-6.0s" dur="10s" values="1 1; -1 1" repeatCount="indefinite" calcMode="spline" keySplines="0.64 0 0.36 1"/>
				</path>
				<path d="M0 1A1 1 0 0 1 0-1">
					<animateTransform attributeName="transform" type="scale" begin="-6.5s" dur="10s" values="1 1; -1 1" repeatCount="indefinite" calcMode="spline" keySplines="0.64 0 0.36 1"/>
				</path>
				<path  d="M0 1A1 1 0 0 1 0-1">
					<animateTransform attributeName="transform" type="scale" begin="-7.0s" dur="10s" values="1 1; -1 1" repeatCount="indefinite" calcMode="spline" keySplines="0.64 0 0.36 1"/>
				</path>
				<path  d="M0 1A1 1 0 0 1 0-1">
					<animateTransform attributeName="transform" type="scale" begin="-7.5s" dur="10s" values="1 1; -1 1" repeatCount="indefinite" calcMode="spline" keySplines="0.64 0 0.36 1"/>
				</path>
				<path  d="M0 1A1 1 0 0 1 0-1">
					<animateTransform attributeName="transform" type="scale" begin="-8.0s" dur="10s" values="1 1; -1 1" repeatCount="indefinite" calcMode="spline" keySplines="0.64 0 0.36 1"/>
				</path>
				<path  d="M0 1A1 1 0 0 1 0-1">
					<animateTransform attributeName="transform" type="scale" begin="-8.5s" dur="10s" values="1 1; -1 1" repeatCount="indefinite" calcMode="spline" keySplines="0.64 0 0.36 1"/>
				</path>
				<path d="M0 1A1 1 0 0 1 0-1">
					<animateTransform attributeName="transform" type="scale" begin="-9.0s" dur="10s" values="1 1; -1 1" repeatCount="indefinite" calcMode="spline" keySplines="0.64 0 0.36 1"/>
				</path>
				<path  d="M0 1A1 1 0 0 1 0-1">
					<animateTransform attributeName="transform" type="scale" begin="-9.5s" dur="10s" values="1 1; -1 1" repeatCount="indefinite" calcMode="spline" keySplines="0.64 0 0.36 1"/>
				</path>
			</g>
			<use xlinkHref="#grid" transform="rotate(90)"/>
		</g>
	</svg>;
};

export default Sphere;
