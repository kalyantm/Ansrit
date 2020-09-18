import React from 'react';
import Card from './Card';

import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { Divider } from 'antd';

export default function TrainingCard({ title, primaryContent, secondaryContent, bg }) {
  const [initialContent, setInitialContent] = React.useState(true);
  return (
    <div
      onMouseEnter={() => setInitialContent(false)}
      onMouseLeave={() => setInitialContent(true)}
      onClick={() => setInitialContent(prevContent => !prevContent)}
      className="flex-1 lg:mb-0 shadow-nav lg:shadow-training-lg border-none flex flex-col items-center"
      style={{
        color: '#f3f6f5',
        height: 700,
        backgroundImage: `url(${bg})`,
        opacity: 0.8
      }}
    >
      <Card
        className="lg:flex lg:flex-col lg:justify-center lg:h-full"
        style={{
          boxShadow: 'none',
          borderRadius: '0px',
          border: 'none'
        }}
      >
        <div className="hidden lg:block">
          <p className="font-bold text-xl">{title}</p>
        </div>
        <div className="flex justify-between items-center lg:hidden">
          <p className="font-bold text-xl mb-0">{title}</p>
          {initialContent ? <DownOutlined /> : <UpOutlined />}
        </div>

        <Divider style={{ margin: '12px 0px', borderColor: '#f3f6f5' }} />
        {initialContent ? primaryContent : secondaryContent}
      </Card>
    </div>
  );
}
