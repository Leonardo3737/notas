import { CSSProperties } from "react";

type CustomPProps = {
  children: any;
  style?: CSSProperties
  className?: string
}

export const CustomP = ({children, style, className}: CustomPProps) => {
  return <p style={style} className={className}>{children}</p>
}