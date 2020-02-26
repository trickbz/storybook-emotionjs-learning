import React from 'react';
import Button from "../src/components/Button";

export default { title: 'Button' };

export const withText = () => <Button>Hello Button</Button>;

export const withRoundedCorners = () => (
  <Button rounded>
    Test button
  </Button>
);