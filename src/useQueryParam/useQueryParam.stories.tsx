import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Title, Subtitle, Description, Primary } from "@storybook/addon-docs";

import Demo from "./Demo";

export default {
  component: Demo,
  title: "Hooks/useQueryParam",
  parameters: {
    URLInspector: {
      enabled: true,
      timeout: 2000,
    },
    docs: {
      description: {
        component: `This is a custom hook which links some state (must be serialised as a string) to a query parameter in the url.
        This can be useful when constructing sites which allow deep-linking - i.e. linking to state.
        The hook takes two arguments; the name of parameter, and an initial value, witch defaults to "". 
        When the page is first loaded, it checks to see if the parameter is encoded in the url. If it is, this is the value that is used. Otherwise it falls back on the provided initial value.

        Aside from its initialisation however, this hook functions identically to useState.
        `,
      },
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
        </>
      ),
    },
  },
} as ComponentMeta<typeof Demo>;

const Template: ComponentStory<typeof Demo> = () => <Demo />;

export const example = Template.bind({});

example.parameters = {
  docs: {
    source: {
      code: `import { FC } from "react";

import useQueryParam from "./useQueryParam";

import styles from "./Demo.module.css";

let Demo: FC = () => {
  let [state, setState] = useQueryParam("state", "0");

  let val = Number(state);

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => {
          setState(String(val + 1));
        }}
      >
        +
      </button>
      <h1>{val}</h1>
      <button
        className={styles.button}
        onClick={() => {
          setState(String(val - 1));
        }}
      >
        -
      </button>
    </div>
  );
};

export default Demo;`,
    },
  },
};
