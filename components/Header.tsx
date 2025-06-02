import Image from "next/image";
import ThemeBtn from "./elements/ThemeBtn";

export default function Header() {
	return (
		<div className="w-full max-w-[940px] m-auto px-[20px] py-[16px]">
            <div className="w-full flex items-center justify-between">
            	<Image src={"/logo.png"} alt={"단풍지지"} width={120} height={25} className="dark:invert" />
				<ThemeBtn />
			</div>
		</div>	
	);
}
