import { ComponentMeta, ComponentStory } from "@storybook/react";

import FileDisplay, { fileDisplayProps } from "./FileDisplay";

export default {
  component: FileDisplay,
  title: "Components/File Browser/File Display",
  parameters: {
    docs: {
      description: {
        component:
          "Component that displays a single file. It does syntax highlighting with highlight.js. Alternatively, if the 'isMarkdown' prop is set, it renders the contents as markdown",
      },
    },
  },
} as ComponentMeta<typeof FileDisplay>;

const Template: ComponentStory<typeof FileDisplay> = (
  args: fileDisplayProps
) => <FileDisplay {...args} />;

export const PlainText = Template.bind({});
PlainText.args = {
  isMarkdown: false,
  data: "hello world!",
};

export const Python = Template.bind({});
Python.args = {
  isMarkdown: false,
  data: `def hello():
  print("hello world!")

a = "another string"
b = [each for each in a]`,
};

export const Markdown = Template.bind({});
Markdown.args = {
  isMarkdown: true,
  data: `# heading

subtext

## a list:
- item 1
- item 2
- item 3
`,
};
