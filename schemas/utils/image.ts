import { RuleType } from "types";

export default {
	type: "document",
	name: "images",
	title: "Images Store",
	fields: [
		{
			type: "image",
			name: "image",
			title: "Image",
			options: {
				hotspot: true,
			},
			validation: (Rule: RuleType) => Rule.required(),
		},
		{
			type: "string",
			name: "alt",
			title: "Alt Text",
			description: "Alternate text for image, important for SEO",
			validation: (Rule: RuleType) => Rule.required(),
		},
	],
};
