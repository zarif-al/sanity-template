export default {
	name: "test",
	type: "document",
	title: "Test",
	fields: [
		{
			name: "title",
			type: "string",
			title: "Title",
		},
		{
			name: "content",
			type: "bodyPortableText",
			title: "Content",
		},
		{
			name: "image",
			title: "Image",
			type: "image",
		},
	],
};
