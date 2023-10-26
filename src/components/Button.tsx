import "./Button.css";

/**
 * ボタンコンポーネント
 */
interface ButtonProps {
  primary?: boolean; // UIのモードを「primary」にするか「secondary」にするか
  backgroundColor?: string; // 背景色
  size?: "small" | "medium" | "large"; // ボタンの大きさ「small」/「medium」/「large」
  label: string; // ボタンに表示するテキスト
  onClick?: () => void; // [Option] クリック時に動作させる関数
}
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
