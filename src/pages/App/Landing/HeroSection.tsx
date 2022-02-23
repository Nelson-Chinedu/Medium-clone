import React, { FunctionComponent, useEffect, useState } from 'react';
import Image from 'next/image';
import { Avatar } from 'antd';

import Button from 'src/components/Button';

import MockData from 'src/constant/mock_data.json';

type IMockData = {
  id: number;
  blogTitle: string;
  author: string;
  published: string;
  intro: string;
  imageUrl: string;
};

const HeroSection: FunctionComponent<{}> = () => {
  const [post, setPost] = useState<IMockData[] | undefined>([]);

  useEffect(() => {
    const data = MockData.map((dt: IMockData) => dt).slice(0, 4);
    setPost(data);
  }, []);

  return (
    <div className="border-b border-gray-300 pb-8">
      <div className="c-blogpost-wrapper mx-auto">
        <div className="c-blogpost-top flex justify-between">
          <div className="c-blog-post-left flex justify-between border-r border-gray-300 pr-8">
            <div className="c-blog-post-left-one">
              <Image
                src="/image/image-top.jpg"
                width={600}
                height={500}
                quality={100}
              />
              <p>John Doe</p>
              <h2 className="font-bold text-xl">
                Setting up virtual machine environment
              </h2>
              <p className="my-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                eos.
              </p>
              <p>Read More &bull; 5 min read </p>
            </div>
            <div className="c-blog-post-left-two">
              {post.map((pt: IMockData) => (
                <div key={pt.id} className="flex justify-between mb-4">
                  <div className="c-blog-post-left-two-left">
                    <p>{pt.published}</p>
                    <h2 className="font-bold">{pt.blogTitle.slice(0, 50)}</h2>
                    <p>Apr 14 &bull; 5 min read</p>
                  </div>
                  <div className="c-blog-post-left-two-right">
                    <Image src={pt.imageUrl} width={100} height={100} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="c-blog-post-right">
            <h2 className="text-xs font-bold">LATEST FROM FOLLOWING</h2>
            <div className="grid grid-cols-3 mt-4">
              <div>
                <Avatar src={<img src="/image/avatar-1.jpg" />} size={70} />
                <p>Dona Pasty</p>
              </div>
              <div>
                <Avatar src={<img src="/image/avatar-1.jpg" />} size={70} />
                <p>Dona Pasty</p>
              </div>
              <div>
                <Avatar src={<img src="/image/avatar-1.jpg" />} size={70} />
                <p>Dona Pasty</p>
              </div>
            </div>
            <div className="mt-12">
              <h2 className="text-xs font-bold mb-3">TOPICS TO FOLLOW</h2>
              <div className="flex items-center justify-between border-b border-gray-300 pb-4 mb-2">
                <p className="font-bold text-base">Productivity</p>
                <Button
                  type="default"
                  shape="round"
                  size="middle"
                  className="bg-green-600 text-white"
                >
                  Follow
                </Button>
              </div>
              <div className="flex items-center justify-between border-b border-gray-300 pb-4 mb-2">
                <p className="font-bold text-base">Machine Learning</p>
                <Button
                  type="default"
                  shape="round"
                  size="middle"
                  className="bg-green-600 text-white"
                >
                  Follow
                </Button>
              </div>
              <div className="flex items-center justify-between border-b border-gray-300 pb-4 mb-2">
                <p className="font-bold text-base">Web Development</p>
                <Button
                  type="default"
                  shape="round"
                  size="middle"
                  className="bg-green-600 text-white"
                >
                  Follow
                </Button>
              </div>
              <Button
                type="link"
                size="small"
                className="p-0 mt-2 text-green-600"
              >
                See More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
