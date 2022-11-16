/**
 * Essential types for sanity. Taken from
 * @see https://gist.github.com/barbogast/4bea3ad77272fafe0af3d4f70446d037
 */

type Meta = {
	parent: { [key: string]: any };
	path: string[];
	document: { [key: string]: any };
};

type CustomRuleCallback = (
	field: any,
	meta: Meta
) => true | string | Promise<true | string>;

export type RuleType = {
	required: () => RuleType;
	custom: (cb: CustomRuleCallback) => RuleType;
	min: (min: number) => RuleType;
	max: (max: number) => RuleType;
	length: (exactLength: number) => RuleType;
	greaterThan: (gt: number) => RuleType;
	uri: (options: { scheme: string[] }) => RuleType;
};
