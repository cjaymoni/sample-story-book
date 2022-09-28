import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InputField } from "./InputField";

export default {
  title: "Form/InputField",
  component: InputField,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => (
  <InputField {...args} />
);

export const Small = Template.bind({});
Small.args = {
  label: "Small InputField",
  size: "small",
  placeholder: "Small InputField",
};

export const Medium = Template.bind({});
Medium.args = {
  label: "Medium InputField",
  size: "medium",
  placeholder: "Medium InputField",
};

export const Large = Template.bind({});
Large.args = {
  label: "Large InputField",
  size: "large",
  placeholder: "Large InputField",
};
