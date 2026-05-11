import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
  title: 'Foundation/Design Tokens',
  parameters: { layout: 'padded' },
};

export default meta;

type FontToken = { name: string; spec: string; cls: string };

const heading: FontToken[] = [
  { name: 'heading-01', spec: 'Bold 32 / 140% / 0%', cls: 'text-heading-01' },
  { name: 'heading-02', spec: 'Bold 20 / 140% / -2%', cls: 'text-heading-02' },
];

const title: FontToken[] = [
  { name: 'title-01', spec: 'Regular 42 / 140% / 2%', cls: 'text-title-01' },
  { name: 'title-02', spec: 'Bold 26 / 140% / 4%', cls: 'text-title-02' },
  { name: 'title-03', spec: 'Bold 18 / 140% / -2%', cls: 'text-title-03' },
];

const subtitle: FontToken[] = [
  { name: 'subtitle-01', spec: 'Bold 14 / 140% / 4%', cls: 'text-subtitle-01' },
  { name: 'subtitle-02', spec: 'Bold 12 / 140% / 0%', cls: 'text-subtitle-02' },
];

const body: FontToken[] = [
  { name: 'body-01', spec: 'Regular 12 / 150% / 0%', cls: 'text-body-01' },
  { name: 'body-02-bold', spec: 'Bold 10 / 140% / -2%', cls: 'text-body-02-bold' },
  { name: 'body-02-regular', spec: 'Regular 10 / 140% / -2%', cls: 'text-body-02-regular' },
];

const caption: FontToken[] = [
  { name: 'caption-01', spec: 'Semibold 12 / 140% / 0%', cls: 'text-caption-01' },
  { name: 'caption-02-bold', spec: 'Bold 8 / 140% / 0%', cls: 'text-caption-02-bold' },
  { name: 'caption-02-semibold', spec: 'Semibold 8 / 140% / 0%', cls: 'text-caption-02-semibold' },
  { name: 'caption-02-regular', spec: 'Regular 8 / 140% / 0%', cls: 'text-caption-02-regular' },
];

type ColorToken = { name: string; hex: string; bg: string; fg: string };

const primary: ColorToken[] = [
  { name: 'black', hex: '#000', bg: 'bg-black', fg: 'text-white' },
  { name: 'white', hex: '#fff', bg: 'bg-white', fg: 'text-black' },
];

const secondary: ColorToken[] = [
  { name: 'gray-900', hex: '#141414', bg: 'bg-gray-900', fg: 'text-[#a4a4a4]' },
  { name: 'gray-800', hex: '#717171', bg: 'bg-gray-800', fg: 'text-[#a4a4a4]' },
  { name: 'gray-700', hex: '#b9b9b9', bg: 'bg-gray-700', fg: 'text-[#4a4a4a]' },
  { name: 'gray-500', hex: '#d9d9d9', bg: 'bg-gray-500', fg: 'text-[#4a4a4a]' },
  { name: 'gray-200', hex: '#f2f2f2', bg: 'bg-gray-200', fg: 'text-[#4a4a4a]' },
];

const accent: ColorToken[] = [
  { name: 'red', hex: '#ff2c00', bg: 'bg-red', fg: 'text-white' },
  { name: 'blue', hex: '#2a60ff', bg: 'bg-blue', fg: 'text-white' },
];

const alpha: ColorToken[] = [
  { name: 'white-opacity-10', hex: '#ffffff1a', bg: 'bg-white-opacity-10', fg: 'text-gray-900' },
  { name: 'black-opacity-10', hex: '#0000001a', bg: 'bg-black-opacity-10', fg: 'text-gray-900' },
];

type LinearToken = { name: string; cls: string };

const linear: LinearToken[] = [{ name: 'gray-linear-800', cls: 'bg-gray-linear-800' }];

const renderFontItem = (t: FontToken) => (
  <div key={t.name} className="flex flex-col gap-1">
    <div className={t.cls}>29CM 매일 스며드는 스타일</div>
    <div className="text-body-02-regular text-gray-700">
      {t.name} · {t.spec}
    </div>
  </div>
);

const renderColorItem = (c: ColorToken) => (
  <div key={c.name} className="flex flex-col gap-1">
    <div
      className={`${c.bg} ${c.fg} text-title-03 flex h-24 items-end justify-start rounded border border-gray-500 p-4`}
    >
      {c.name}
    </div>
    <div className="text-body-02-regular text-gray-700">{c.hex}</div>
  </div>
);

const checkeredStyle = {
  backgroundImage:
    'conic-gradient(#ccc 25%, transparent 25% 50%, #ccc 50% 75%, transparent 75%)',
  backgroundSize: '16px 16px',
};

const renderAlphaItem = (c: ColorToken) => (
  <div key={c.name} className="flex flex-col gap-1">
    <div className="rounded border border-gray-500 overflow-hidden" style={checkeredStyle}>
      <div
        className={`${c.bg} ${c.fg} text-title-03 flex h-24 items-end justify-start p-4`}
      >
        {c.name}
      </div>
    </div>
    <div className="text-body-02-regular text-gray-700">{c.hex}</div>
  </div>
);

const renderLinearItem = (l: LinearToken) => (
  <div key={l.name} className="flex flex-col gap-1">
    <div
      className={`${l.cls} text-white text-title-03 flex h-32 items-end justify-start rounded border border-gray-500 p-4`}
    >
      {l.name}
    </div>
  </div>
);

const Divider = ({ label }: { label?: string }) => (
  <div className="flex items-center gap-2 mb-3 mt-6">
    {label && <span className="text-body-01 text-gray-700">{label}</span>}
    <div className="h-px flex-1 bg-black" />
  </div>
);

export const FontStyle: StoryObj = {
  render: () => (
    <div>
      <h2 className="text-heading-01 mb-6">Font Style</h2>
      <Divider label="heading" />
      <div className="flex flex-col gap-6">{heading.map(renderFontItem)}</div>
      <Divider label="title" />
      <div className="flex flex-col gap-6">{title.map(renderFontItem)}</div>
      <Divider label="subtitle" />
      <div className="flex flex-col gap-6">{subtitle.map(renderFontItem)}</div>
      <Divider label="body" />
      <div className="flex flex-col gap-6">{body.map(renderFontItem)}</div>
      <Divider label="caption" />
      <div className="flex flex-col gap-6">{caption.map(renderFontItem)}</div>
    </div>
  ),
};

export const ColorStyle: StoryObj = {
  render: () => (
    <div>
      <h2 className="text-heading-01 mb-6">Color Style</h2>
      <Divider label="primary" />
      <div className="flex flex-col gap-3">{primary.map(renderColorItem)}</div>
      <Divider label="secondary" />
      <div className="flex flex-col gap-3">{secondary.map(renderColorItem)}</div>
      <Divider label="accent" />
      <div className="flex flex-col gap-3">{accent.map(renderColorItem)}</div>
      <Divider label="alpha" />
      <div className="flex flex-col gap-3">{alpha.map(renderAlphaItem)}</div>
      <Divider label="linear" />
      <div className="flex flex-col gap-3">{linear.map(renderLinearItem)}</div>
    </div>
  ),
};
