const Footer = () => {
	return (
		<footer className="py-4 md:py-6 xl:py-8 bg-[#292929]">
			<div
				className="flex tracking-tight flex-col font-primary w-916/1000 xl:w-9/10 mx-auto items-center justify-center gap-2">
				<p className="text-base">Crafted with 💜 by Mohit Gurnani</p>
				<p className="text-sm">{new Date().getFullYear()}; All rights
					reserved
				</p>
			</div>
		</footer>
	)
}

export default Footer
