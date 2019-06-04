export const selectLibray = (libraryId) => {
	return {
		type: 'select_library',
		payload: libraryId
	};
};
