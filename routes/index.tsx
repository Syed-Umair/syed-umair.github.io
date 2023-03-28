/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Home() {
	return (
		<div class={tw`flex flex-col h-screen justify-center items-center`}>
			<figure class={tw`bg-slate-100 rounded-xl p-8 dark:bg-slate-800`}>
				<img
					class={tw`w-72 h-72 object-cover rounded-full mx-auto`}
					src="/Syed.webp"
					alt=""
				/>
				<div class={tw`pt-6 text-center space-y-4`}>
					<blockquote>
						<p class={tw`text-lg font-medium`}>
							“Success is being an integral part of building
							products, without which my future kids couldn't
							imagine living”
						</p>
					</blockquote>
					<figcaption class={tw`font-medium`}>
						<div class={tw`text-sky-500 dark:text-sky-400`}>
							Syed Umair
						</div>
						<div class={tw`text-slate-700 dark:text-slate-500`}>
							Module Lead, FULL Creative
						</div>
					</figcaption>
				</div>
			</figure>
		</div>
	);
}
