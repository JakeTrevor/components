import { ComponentMeta, ComponentStory } from "@storybook/react";

import FileList, { fileListProps } from "./FileList";

export default {
  component: FileList,
  title: "Components/File Browser/File List",
  parameters: {
    docs: {
      description: {
        component: `Given a Directory object, this component renders out the top level of Keys.        
        It will analyse the contents of each key to determine if it is a file (value is a string) or a directory (value is an object).        
        It also exposes an "update" function, which will be triggered whenever one of the items is clicked on, passing the file name as an argument.
          `,
      },
    },
  },
  argTypes: {
    update: { action: "Change Directory" },
  },
} as ComponentMeta<typeof FileList>;

const Template: ComponentStory<typeof FileList> = (args: fileListProps) => (
  <FileList {...args} />
);

export const Basic = Template.bind({});
let update = (string: string) => console.log(string);
let exampleDir = {
  fileA: "hello world",
  fileB: "Green eggs and ham",
  dirA: { FileC: "Foo and Bar" },
};

Basic.args = {
  data: exampleDir,
};
