import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '@/components/Buttons';
import { cn } from '@/lib/cn';
import { Pretendard } from '@/font';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div
        className={cn(
          'flex h-[300px] w-[500px] items-center justify-center rounded-2xl bg-gray-100',
          Pretendard.className,
        )}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    variant: {
      options: ['default', 'outline'],
      control: { type: 'select' },
    },
    size: {
      options: ['login', 'signup', 'search', 'tags', 'reservation', 'save', 'review', 'write', 'manage'],
      control: { type: 'select' },
    },

    disabled: {
      options: [false, true],
      control: { type: 'inline-radio' },
    },
    children: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: '검색하기',
    variant: 'default',
    size: 'search',
    disabled: false,
    onClick: action('default variant 클릭'),
  },
};

export const Outline: Story = {
  args: {
    children: '태그 제목',
    variant: 'outline',
    size: 'tags',
    disabled: false,
    onClick: action('outline variant 클릭'),
  },
};
