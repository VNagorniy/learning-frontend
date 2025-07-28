{
	const myButton: HTMLButtonElement | null = document.querySelector('button');

	myButton?.addEventListener('click', () => {});

	myButton!.addEventListener('keyup', (e: KeyboardEvent) => {
		console.log('Button pressed');
	});

	myButton!.addEventListener('touchstart', (e: TouchEvent) => {
		console.log('Button touched');
	});

	myButton!.addEventListener('dragstart', (e: DragEvent) => {
		console.log('Button dragged');
	});
}
