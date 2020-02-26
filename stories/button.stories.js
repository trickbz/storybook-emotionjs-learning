import { action } from "@storybook/addon-actions";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import React from 'react';

// components
import Button from "../src/components/Button";

// constants
import { BUTTON_TYPES, BUTTON_TYPE_SECONDARY } from "../src/constants/buttonConstants";

export default {
  title: 'buttons/Button',
  decorators: [withKnobs],
  component: Button
};

export const withRoundedCorners = () => (
  <Button 
  rounded={boolean("Rounded", true)} 
  onClick={action('button-click')} 
  type={select("Type", BUTTON_TYPES, BUTTON_TYPE_SECONDARY)}
  >
    {text("Label", "Button Text")}
  </Button>
);

export const withText = () => <Button>{text("Label", "Button Text")}</Button>;
