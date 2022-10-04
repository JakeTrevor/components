import { ComponentMeta, ComponentStory } from "@storybook/react";

import Browser, { browserProps } from "./Browser";

export default {
  component: Browser,
  title: "Components/File Browser/Browser",
  parameters: {
    URLInspector: {
      enabled: true,
      timeout: 2000,
    },
    docs: {
      description: {
        component: `Component for rendering out a browsable file system. Allows a user to traverse up and down, and to read files.`,
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Browser>;

const Template: ComponentStory<typeof Browser> = (args: browserProps) => (
  <Browser {...args} />
);

export const Basic = Template.bind({});
let exampleDir = {
  fileA: "hello world",
  fileB: "Green eggs and ham",
  dirA: { FileC: "Foo and Bar" },
};

Basic.args = {
  data: exampleDir,
};

export const MD = Template.bind({});
let mdDir = {
  "README.md": "# hello world! \n ## this is a subheading",
  "main.c": '#include <stdio.h>; \n\nint main(){\nprintf("hello world!");\n}',
};
MD.args = {
  data: mdDir,
};
