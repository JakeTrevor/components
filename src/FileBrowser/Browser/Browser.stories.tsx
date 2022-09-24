import { ComponentMeta, ComponentStory } from "@storybook/react";
import DisplayURL from "../../DisplayURL/DisplayURL";

import Browser, { browserProps } from "./Browser";

export default {
  component: Browser,
  title: "Components/File Browser/Browser",
  decorators: [DisplayURL],
  parameters: {
    docs: {
      description: {
        component: `Component for rendering out a browsable file system. Allows a user to traverse up and down, and to read files.`,
      },
    },
  },
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
