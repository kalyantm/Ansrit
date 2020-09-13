import React from 'react';
import Card from './Card';

import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { Divider } from 'antd';

export default function TrainingCard({ title, primaryContent, secondaryContent }) {
  const [initialContent, setInitialContent] = React.useState(true);
  return (
    <div
      onMouseEnter={() => setInitialContent(false)}
      onMouseLeave={() => setInitialContent(true)}
      onClick={() => setInitialContent(prevContent => !prevContent)}
      className="flex-1 lg:mb-0 mb-10 shadow-nav lg:shadow-training-lg border-none flex flex-col items-center"
      style={{
        height: 600
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

        <Divider style={{ margin: '12px 0px', borderColor: 'rgba(0,0,0,0.1)' }} />
        {initialContent ? primaryContent : secondaryContent}
      </Card>
    </div>
  );
}
