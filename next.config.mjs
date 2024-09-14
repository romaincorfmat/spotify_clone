/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "lmzhwqxlfyvqwshmnnfq.supabase.co",
				pathname: "**",
			},
		],
	},
};

export default nextConfig;
