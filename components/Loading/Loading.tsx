import React from 'react';
import ReactLoading from 'react-loading';

const Loading: React.FC = () => {
	return (
		<div className="flex w-full h-full justify-center items-center">
			<ReactLoading type="spin" color="#B70106" height={300} width={300} />
		</div>
	);
};

export default Loading;
