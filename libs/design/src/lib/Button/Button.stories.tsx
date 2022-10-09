import {TitaniumButton} from './Button';

export default {
  title: "Button",
  component: TitaniumButton
}

const template = (args: any) => <TitaniumButton {...args}>
  Hello World
</TitaniumButton>

export const Default = template.bind({});
