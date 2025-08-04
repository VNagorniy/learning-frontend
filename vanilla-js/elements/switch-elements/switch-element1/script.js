window.addEventListener('DOMContentLoaded', () => {
	const rockerSwitch = new RockerSwitch('#temperature-scale');
});

class RockerSwitch {
	/** Button used for this switch */
	constructor(buttonEl) {
		this.button = document.querySelector(buttonEl);
		this.button.addEventListener('click', this.temperatureScaleToggle.bind(this));
		this._temperatureScale = 'f';
	}
	/** Selected temperature scale */
	get temperatureScale() {
		return this._temperatureScale;
	}
	set temperatureScale(value) {
		this._temperatureScale = value;
		this.button.setAttribute('aria-labelledby', this._temperatureScale);
	}
	/** Set the temperature scale to °C or °F. */
	temperatureScaleToggle() {
		this.temperatureScale = this.temperatureScale === 'c' ? 'f' : 'c';
	}
}
