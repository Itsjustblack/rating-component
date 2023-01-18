import { useState } from "react";
import star from "../icons/icon-star.svg";
import Thanks from "../icons/illustration-thank-you.svg";
import Button from "./Button";

const Rating = () => {
	const [rating, setRating] = useState(0);
	const [isActive, setIsActive] = useState(false);
	return (
		<>
			<div className="gradient rounded-[20px] max-w-[330px] h-[360px] px-5 flex items-center">
				<div className={`${isActive ? "hidden" : "block"}`}>
					<div className="bg-[#252d37] rounded-full w-10 h-10 flex justify-center items-center">
						<img
							className="w-[13px] h-[13px]"
							src={star}
							alt="a star icon"
						/>
					</div>
					<h1 className="text-white text-[21px] mt-4 font-semibold">
						How did we do?
					</h1>
					<p className="text-white opacity-60 mt-[10px] text-[14px]">
						Please let us know how we did with your support request. All
						feedback is appreciated to help us improve our offering!
					</p>
					<div className="mt-[20px] flex justify-between items-center">
						<Button
							value={1}
							toggle={() => setRating(1)}
						/>
						<Button
							value={2}
							toggle={() => setRating(2)}
						/>
						<Button
							value={3}
							toggle={() => setRating(3)}
						/>
						<Button
							value={4}
							toggle={() => setRating(4)}
						/>
						<Button
							value={5}
							toggle={() => setRating(5)}
						/>
					</div>
					<div className="flex justify-center mt-6 mb-[10px]">
						<button
							onClick={() => setIsActive(true)}
							className="tracking-[0.1em] font-semibold text-[14px] text-white bg-[#fb7413] hover:bg-white hover:text-[#fb7413] rounded-[20px] w-full py-3 transition-colors"
						>
							SUBMIT
						</button>
					</div>
				</div>
				<div
					className={`${
						isActive ? "block" : "hidden"
					} flex flex-col items-center fade`}
				>
					<img
						src={Thanks}
						alt="Illustration Thank you"
					/>
					<div className="bg-[#252d37] mt-6 px-3 py-[6px] text-[14px] font-medium rounded-2xl text-[#fb7413]">
						You selected {rating} out of 5
					</div>
					<h1 className="text-white mt-5 tracking-[0.03em] text-[21px] font-semibold">
						Thank you!
					</h1>
					<p className="text-white opacity-50 text-center mt-3 text-[14px]">
						We appreciate you taking the time to give a rating. If you ever need
						more support, dont hesitate to get in touch!
					</p>
				</div>
			</div>
		</>
	);
};

export default Rating;
