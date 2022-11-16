import {
	PrimaryTextColorIcon,
	PrimaryTextRender,
} from "../components/editorComponents";

export default {
	name: "bodyPortableText",
	type: "array",
	title: "Post body",
	of: [
		{
			type: "block",
			title: "Block",
			// Styles set the various mark up that the user can use to format content blocks. These
			// correspond to HTML tags, but you can set a custom title and/or value
			// and decide how it will be formatted or displayed where your content is used.
			styles: [
				{ title: "Normal", value: "normal" },
				{ title: "H1", value: "h1" },
				{ title: "H2", value: "h2" },
				{ title: "H3", value: "h3" },
				{ title: "H4", value: "h4" },
				{ title: "Quote", value: "blockquote" },
			],
			lists: [
				{ title: "Bullet", value: "bullet" },
				{ title: "Number", value: "number" },
			],
			// Marks let you mark up inline text in the block editor.
			marks: {
				// Decorators usually describe a single property – e.g. a typographic
				// preference or highlighting by editors.
				decorators: [
					{ title: "Strong", value: "strong" },
					{ title: "Emphasis", value: "em" },
					{ title: "Code", value: "code" },
					{
						title: "Primary Color",
						value: "primary",
						blockEditor: {
							icon: PrimaryTextColorIcon,
							render: PrimaryTextRender,
						},
					},
				],
				// Annotations can be any object structure – e.g. a link or a footnote.
				annotations: [
					{
						name: "link",
						type: "object",
						title: "URL",
						fields: [
							{
								title: "URL",
								name: "href",
								type: "url",
							},
						],
					},
				],
			},
		},
	],
};
