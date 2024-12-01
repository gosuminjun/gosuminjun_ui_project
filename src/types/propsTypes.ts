import { SerializedStyles } from "@emotion/react";

export type ButtonPropsType = {
  text: string; // 버튼 텍스트
  fontSize: string; // 버튼 폰트사이즈
  width: string; // 버튼 너비
  height?: string; // 버튼 높이
  theme: string; // 버튼 테마
  margin?: string;
  onClick: () => void; // 버튼의 onClick 메서드
  disabled?: boolean;
  cssProps?: SerializedStyles;
};
