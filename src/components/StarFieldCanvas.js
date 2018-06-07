import React from 'react';

class StarFieldCanvas extends React.Component {

	flag = true
	test = true
	n = 512
	w = 0
	h = 0
	x = 0
	y = 0
	z = 0
	star_color_ratio = 0
	star_x_save
	star_y_save
	star_ratio = 256
	star_speed = 1
	star_speed_save = 0
	star = new Array(this.n)
	opacity = 0.08
	cursor_x = 0
	cursor_y = 0
	mouse_x = 0
	mouse_y = 0
	context = {}
	key
	timeout
	fps = 0
	fast = false;

	shouldComponentUpdate = () => {
		return false;
	}

	componentDidMount = () => {
		document.onkeypress = this.keyManager;
		// document.onkeyup = this.release;
		this.start();
	}

	getScreenSize = () => {
		const w = document.documentElement.clientWidth;
		const h = document.documentElement.clientHeight;
		return Array(w , h);
	}

	resize = () => {
		this.w = this.getScreenSize()[0];
		this.h = this.getScreenSize()[1];
		this.x = Math.round(this.w / 2);
		this.y = Math.round(this.h / 2);
		this.z = (this.w + this.h) / 2;
		this.star_color_ratio = 1 / this.z;
		this.cursor_x = this.x;
		this.cursor_y = this.y;
		this.init();
	}

	anim = () => {
		this.mouse_x = this.cursor_x - this.x;
		this.mouse_y = this.cursor_y - this.y;
		this.starField.getContext('2d').fillRect(0, 0, this.w, this.h);
		for (let i=0; i < this.n; i++) {
			this.test = true;
			this.star_x_save = this.star[i][3];
			this.star_y_save = this.star[i][4];
			this.star[i][0] += this.mouse_x >> 4;
			if (this.star[i][0] > this.x << 1) {
				this.star[i][0] -= this.w << 1;
				this.test = false;
			}
			if (this.star[i][0] < -this.x << 1) {
				this.star[i][0] += this.w << 1;
				this.test = false;
			}
			this.star[i][1] += this.mouse_y>>4;
			if (this.star[i][1] > this.y << 1) {
				this.star[i][1] -= this.h << 1;
				this.test = false;
			}
			if (this.star[i][1] < -this.y << 1) {
				this.star[i][1] += this.h << 1;
				this.test = false;
			}
			this.star[i][2] -= this.star_speed;
			if (this.star[i][2] > this.z) {
				this.star[i][2] -= this.z;
				this.test = false;
			}
			if (this.star[i][2] < 0) {
				this.star[i][2] += this.z;
				this.test = false;
			}
			this.star[i][3] = this.x + (this.star[i][0] / this.star[i][2]) * this.star_ratio;
			this.star[i][4] = this.y + (this.star[i][1] / this.star[i][2]) * this.star_ratio;
			if (this.star_x_save > 0 && this.star_x_save < this.w && this.star_y_save > 0 && this.star_y_save < this.h && this.test) {
				this.starField.getContext('2d').lineWidth = (1 - this.star_color_ratio * this.star[i][2]) * 2;
				this.starField.getContext('2d').beginPath();
				this.starField.getContext('2d').moveTo(this.star_x_save, this.star_y_save);
				this.starField.getContext('2d').lineTo(this.star[i][3], this.star[i][4]);
				this.starField.getContext('2d').stroke();
				this.starField.getContext('2d').closePath();
			}
		}
		this.timeout = setTimeout(() => this.anim(), this.fps);
	}

	keyManager = (ev) => {
		ev = ev || event;
		this.key = ev.which || ev.keyCode;
		switch(this.key) {
			case 13: {
				if (this.fast) {
					this.slowDown();
				} else {
					this.speedUp();
				}
				break;
			}
		}
	}

	// release = () => {
	// 	switch(this.key) {
	// 		case 13: {
	// 			this.slowDown();
	// 			break;
	// 		}
	// 	}
	// }

	speedUp = () => {
		this.fast = true;
		this.star_speed = 4;
		this.starField.getContext('2d').fillStyle = 'rgba(0,0,0,' + this.opacity + ')';
	}
	slowDown = () => {
		this.fast = false;
		this.star_speed = 1;
		this.starField.getContext('2d').fillStyle = 'rgb(0,0,0)';
	}

	init = () => {
		for (let i = 0; i < this.n; i++) {
			this.star[i] = new Array(5);
			this.star[i][0] = Math.random() * this.w * 2 - this.x * 2;
			this.star[i][1] = Math.random() * this.h * 2 - this.y * 2;
			this.star[i][2] = Math.round(Math.random() * this.z);
			this.star[i][3] = 0;
			this.star[i][4] = 0;
		}
		// const starField = document.getElementById('starfield');
		this.starField.style.position = 'absolute';
		this.starField.width = this.w;
		this.starField.height = this.h;
		this.starField.getContext('2d').fillStyle = 'rgb(0,0,0)';
		this.starField.getContext('2d').strokeStyle = 'rgb(255,255,255)';
	}

	start = () => {
		this.resize();
		this.anim();
	}

	render() {
		return <canvas ref={node => this.starField = node} style={{zIndex: -1, backgroundColor: 'rgb(0, 0, 0)', position: 'absolute'}} />;
	}
}

export default StarFieldCanvas;
