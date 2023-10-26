import type { Meta, StoryObj } from "@storybook/react";
// 対象とするUIコンポーネント
import { Button } from "../components/Button";

/**
 * ボタンUIのストーリー
 */
const meta = {
  // https://storybook.js.org/docs/react/writing-stories/introduction#default-export
  // タイトル
  title: "SampleStories/main/Button",
  // UIコンポーネントの指定
  component: Button,
  parameters: {
    // [Option] Canvas上でのUIコンポーネントの配置
    // https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // Docsの自動生成の設定
  // https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // UIコンポーネントのプロパティのコントロールの表示
  // https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * ストーリー１：Primaryモード
 */
export const Primary: Story = {
  // https://storybook.js.org/docs/react/writing-stories/args
  args: {
    primary: true, // 表示モード
    label: "Button", // 表示テキスト
  },
};

/**
 * ストーリー２：Secondaryモード
 */
export const Secondary: Story = {
  args: {
    label: "Button", // 表示テキスト
  },
};

/**
 * ストーリー３：Large サイズ
 */
export const Large: Story = {
  args: {
    size: "large", // ボタンサイズ
    label: "Button", // 表示テキスト
  },
};

/**
 * ストーリー４：Small サイズ
 */
export const Small: Story = {
  args: {
    size: "small", // ボタンサイズ
    label: "Button", // 表示テキスト
  },
};

/**
 * ストーリー５：ボタンカラー
 */
export const Color: Story = {
  args: {
    primary: true, // ボタンサイズ
    size: "large", // ボタンサイズ
    label: "Delete now", // 表示テキスト
    backgroundColor: "red", // ボタンカラー
  },
};

/**
 * ストーリー６：クリック時のコールバック関数の登録
 */
export const OnClickCallback: Story = {
  args: {
    primary: true, // ボタンサイズ
    label: "Click", // 表示テキスト
    onClick() {
      // クリック時のコールバック関数
      console.log("Pushed");
    },
  },
};
