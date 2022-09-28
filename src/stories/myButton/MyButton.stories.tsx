import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MyButton } from "./MyButton";

export default {
  title: "Form/MyButton",
  component: MyButton,

  argTypes: {
    backgroundColor: { control: "color" },
  },
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        { name: "dark", value: "#333" },
        { name: "light", value: "#eee" },
        { name: "red", value: "#f00" },
        { name: "green", value: "#0f0" },
      ],
    },
  },
} as ComponentMeta<typeof MyButton>;

const Template: ComponentStory<typeof MyButton> = (args) => (
  <MyButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary Button",
  btnvariant: "contained",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Button",
  btnvariant: "outlined",
};

export const Large = Template.bind({});
Large.args = {
  btnsize: "large",
  label: "LArge Button",
};

export const Small = Template.bind({});
Small.args = {
  btnsize: "small",
  label: "Small Button",
};

export const Medium = Template.bind({});
Medium.args = {
  btnsize: "medium",
  label: "Medium Button",
};

export const Success = Template.bind({});
Success.args = {
  label: "MyButton",
  btnvariant: "contained",
  btncolor: "success",
};
