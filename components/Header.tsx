import Image from "next/image";

export default function Header() {
	return (
		<div className="w-full max-w-[940px] m-auto px-[20px] py-[16px]">
            <Image src={"/logo.png"} alt={"단풍지지"} width={120} height={25} className="dark:invert" />
            {/* TODO. 테마 옵션 버튼 */}
		</div>	
	);
}
