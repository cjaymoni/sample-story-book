import React from "react";

import { Primary } from "../myButton/MyButton.stories";

import { Large } from "../inputField/InputField.stories";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Form/Subscription",
} as ComponentMeta<any>;

const Template: ComponentStory<any> = (args) => (
  <>
    <Primary {...args} />
    <Large {...args} />
  </>
);

export const PrimarySubscription = Template.bind({});
PrimarySubscription.args = {
  /* the args you need here will depend on your component */
  label: "Small InputField",
  size: "small",
  placeholder: "Small InputField",
  btnvariant: "success",
};
