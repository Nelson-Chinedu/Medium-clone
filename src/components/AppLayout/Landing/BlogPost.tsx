import React, { FunctionComponent, useEffect, useState } from 'react';
import Image from 'next/image';
import { Avatar } from 'antd';

import Button from 'src/components/Shared/Button';

import MockData from 'src/components/data/mock_data.json';

type IMockData = {
  id: number;
  blogTitle: string;
  author: string;
  published: string;
  intro: string;
  imageUrl: string;
};

const BlogPost: FunctionComponent<{}> = () => {
  const [blogPost, setBlogPost] = useState<IMockData[] | undefined>([]);

  useEffect(() => {
    setBlogPost(MockData);
  }, []);

  return (
    <div className="c-blogpost-wrapper mx-auto flex justify-between my-14 sticky inset-y-0">
      <div className="c-blogpost-bottom-left">
        {blogPost.map((data: IMockData) => (
          <div key={data.id} className="flex justify-between mb-5">
            <div className="c-blog-post-left">
              <p className="font-semibold">{data.author}</p>
              <p className="font-bold text-base">{data.blogTitle}</p>
              <p className="text-gray-500 text-base">{data.intro}</p>
              <p className="text-gray-600">
                <span>{data.published}</span>
              </p>
            </div>
            <div className="c-blog-post-right">
              <Image src={data.imageUrl} width={250} height={150} />
            </div>
          </div>
        ))}
      </div>
      <div className="c-blogpost-bottom-right sticky inset-8 h-80">
        <div className="bg-gray-50 px-4 py-8">
          <h2 className="text-xs font-bold mb-4">WHO TO FOLLOW</h2>
          <div className="flex items-center justify-between mb-4">
            <div>
              <Avatar src={<img src="/image/avatar-1.jpg" />} size={55} />
            </div>
            <div>
              <p>CS50</p>
              <p>Harvard University's</p>
              <p>Introduction to the...</p>
            </div>
            <div>
              <Button
                type="default"
                size="middle"
                shape="round"
                className="bg-transparent border border-black"
              >
                Follow
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <Avatar src={<img src="/image/avatar-1.jpg" />} size={55} />
            </div>
            <div>
              <p>CS50</p>
              <p>Harvard University's</p>
              <p>Introduction to the...</p>
            </div>
            <div>
              <Button
                type="default"
                size="middle"
                shape="round"
                className="bg-transparent border border-black"
              >
                Follow
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <Avatar src={<img src="/image/avatar-1.jpg" />} size={55} />
            </div>
            <div>
              <p>CS50</p>
              <p>Harvard University's</p>
              <p>Introduction to the...</p>
            </div>
            <div>
              <Button
                type="default"
                size="middle"
                shape="round"
                className="bg-transparent border border-black"
              >
                Follow
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <Button type="link" size="small" className="text-gray-600 mt-2 pr-4">
            Help
          </Button>
          <Button type="link" size="small" className="text-gray-600 mt-2 pr-4">
            Status
          </Button>
          <Button type="link" size="small" className="text-gray-600 mt-2 pr-4">
            Writers
          </Button>
          <Button type="link" size="small" className="text-gray-600 mt-2 pr-4">
            Blog
          </Button>
          <Button type="link" size="small" className="text-gray-600 mt-2 pr-4">
            Careers
          </Button>
          <Button type="link" size="small" className="text-gray-600 mt-2 pr-4">
            Privacy
          </Button>
          <Button type="link" size="small" className="text-gray-600 mt-2 pr-4">
            Terms
          </Button>
          <Button type="link" size="small" className="text-gray-600 mt-2 pr-4">
            About
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
