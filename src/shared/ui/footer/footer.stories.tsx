import type { Meta, StoryObj } from '@storybook/react-vite';
import Footer from './footer';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

const mockNotices = [
  { title: '[안내] 2026년 여름 시즌 배송 일정 공지', displayOrder: 1 },
  { title: '[이벤트] 신규 회원 5,000원 쿠폰', displayOrder: 2 },
  { title: '[안내] 개인정보처리방침 개정 안내', displayOrder: 3 },
  { title: '[안내] 시스템 점검 일정', displayOrder: 4 },
  { title: '[이벤트] 룩북 이벤트 당첨자 발표', displayOrder: 5 },
];

export const Default: Story = {
  args: {
    notices: mockNotices,
  },
};
