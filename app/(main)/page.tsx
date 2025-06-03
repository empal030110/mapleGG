import Image from "next/image";

export default function Home() {
	return (
		<div className="w-full h-full">
			<div className="relative w-full h-[300px] flex items-center justify-center">
				<Image src="/main/header.png" alt="메인" sizes="(max-width: 768px) 100vw, 940px" fill style={{ objectFit: "cover" }} />
				<div className="relative w-full text-white flex flex-col gap-[16px] items-center justify-center text-center">
					<p>메인</p>
					<div>
						TODO. 검색 서치바
					</div>
				</div>
			</div>
		</div>
	);
}
