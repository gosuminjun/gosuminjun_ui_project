import { css } from "@emotion/react";

import { ButtonPropsType } from "@/types/propsTypes";

function Button({
  text,
  fontSize,
  width,
  height,
  theme,
  margin,
  onClick,
  disabled,
  cssProps,
}: ButtonPropsType) {
  return (
    <button
      disabled={disabled}
      css={[
        initCSS({ fontSize, width, height, margin }),
        buttonCSS({ theme }),
        cssProps,
      ]}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

const buttonCSS = ({ theme }: { theme: string }) => {
  const themes: { [prop: string]: any } = {
    normal: css`
      border: none;
      border-radius: 10px;
      color: var(--common-back-color-2);
      background-color: var(--teacher-main-color);
    `,
  };

  return themes[theme];
};

const initCSS = ({
  fontSize,
  width,
  height,
  margin,
}: {
  fontSize: string;
  width: string;
  height: string | undefined;
  margin?: string;
}) => {
  return css`
    font-size: ${fontSize};
    width: ${width};
    height: ${height ? height : "40px"}; // 기본 height 40px
    margin: ${margin};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s;

    :hover:enabled {
      filter: brightness(95%) saturate(200%);
    }

    :disabled {
      filter: brightness(60%);
      cursor: default;
    }
  `;
};

export default Button;
