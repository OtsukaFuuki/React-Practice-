import { keyframes } from "@mui/system";

export const COLORS = {
  background: "#121212", // 深いブラック（背景）
  primary: "#E0E0E0", // 明るいグレー（主要テキスト）
  secondary: "#FFFFFF", // 白（ヘッダー背景）
  accent: "#BB86FC", // ネオンパープル（アクセント）
  highlight: "#03DAC6", // サイバーグリーン（ボタンなど）
  border: "#292929", // 中間グレー（境界線）
};

export const bounceAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
`;
