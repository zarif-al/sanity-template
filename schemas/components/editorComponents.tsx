import React from "react";
import { colors } from "../../styles";

interface Props {
	children: React.ReactNode;
}

export const PrimaryTextColorIcon = () => (
	<span style={{ fontWeight: "bold" }}>P</span>
);

export const PrimaryTextRender = ({ children }: Props) => {
	return <span style={{ color: colors.primary }}>{children}</span>;
};
