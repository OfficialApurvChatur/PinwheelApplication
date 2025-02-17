import pinwheel from "@/love/hAsset/business/3.png";

const brand = () => {
	var brandObject

		brandObject = {
			logo: pinwheel,
			name: "Pinwheel Organisation",
			app: "https://beehive-frontend.netlify.app/",
			admin: "https://beehive-admin.netlify.app/"
		}
						
	return brandObject
}

export default brand