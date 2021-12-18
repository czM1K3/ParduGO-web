export const dayToString = (day: number): string => {
	switch (day) {
		case 1:
			return 'Po';
		case 2:
			return 'Út';
		case 3:
			return 'St';
		case 4:
			return 'Čt';
		case 5:
			return 'Pá';
		case 6:
			return 'So';
		case 0:
			return 'Ne';
		default:
			return '';
	}
};
