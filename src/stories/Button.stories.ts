import type { Meta, StoryObj } from "@storybook/react";
// 対象とするUIコンポーネント
import { Button } from "../components/Button";

/**
 * ストーリーのセットアップ
 * https://storybook.js.org/docs/react/writing-stories/introduction#default-export
 */
const meta = {
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
 * ストーリーの定義
 * https://storybook.js.org/docs/react/writing-stories/args
 */

// ストーリー１
export const Primary: Story = {
  args: {
    primary: true, // 表示モード
    label: "Button", // 表示テキスト
  },
};

// ストーリー２
export const Secondary: Story = {
  args: {
    label: "Button", // 表示テキスト
  },
};

// ストーリー３
export const Large: Story = {
  args: {
    size: "large", // ボタンサイズ
    label: "Button", // 表示テキスト
  },
};

// ストーリー４
export const Small: Story = {
  args: {
    size: "small", // ボタンサイズ
    label: "Button", // 表示テキスト
  },
};

// ストーリー５
export const Warning: Story = {
  args: {
    primary: true, // ボタンサイズ
    size: "large", // ボタンサイズ
    label: "Delete now", // 表示テキスト
    backgroundColor: "red", // ボタンカラー
    onClick() {
      console.log("Pushed");
    },
  },
};
