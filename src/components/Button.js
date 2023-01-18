const Button = ({ value, toggle }) => {
	return (
		<>
			<button
				className="text-white text-[14px] text-opacity-40 hover:text-opacity-100 focus:text-opacity-100 font-semibold bg-[#252d37] focus:bg-[#959eac] hover:bg-[#fb7413] w-10 h-10 flex justify-center items-center rounded-full transition-colors"
				onClick={toggle}
			>
				{value}
			</button>
		</>
	);
};

export default Button;
