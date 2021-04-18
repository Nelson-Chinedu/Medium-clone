import React, { FunctionComponent, useState, useEffect } from 'react';
import Image from 'next/image';

import MockData from 'src/components/data/mock_data.json';
import Button from 'src/components/Shared/Button';

type IMockData = {
  id: number;
  blogTitle: string;
  author: string;
  published: string;
  intro: string;
  imageUrl: string;
};

const FeaturedPost: FunctionComponent<{}> = () => {
  const [blogPost, setBlogPost] = useState<IMockData[] | undefined>([]);
  useEffect(() => {
    setBlogPost(MockData);
  }, []);

  return (
    <div className="c-featured-post mx-auto flex justify-between my-8">
      <div className="c-featured-post-b-left">
        {blogPost.map((data: any) => (
          <div key={data.id} className="flex justify-between mb-5">
            <div className="c-featured-post-left">
              <p className="font-semibold">{data.author}</p>
              <p className="font-bold text-base">{data.blogTitle}</p>
              <p className="text-gray-500 text-base">{data.intro}</p>
              <p className="text-gray-600">
                <span>{data.published}</span> - <span>{data.read}</span>
              </p>
            </div>
            <div className="c-featured-post-right">
              <Image src={data.imageUrl} width={250} height={150} />
            </div>
          </div>
        ))}
      </div>
      <div className="c-discover">
        <h2 className="font-semibold mb-3">
          DISCOVER MORE OF WHAT MATTERS TO YOU
        </h2>
        <div className="block">
          <Button type="default" className="mb-2 mr-2" size="middle">
            Self
          </Button>
          <Button type="default" className="mb-2 mr-2" size="middle">
            Relationships
          </Button>
          <Button type="default" className="mb-2 mr-2" size="middle">
            Data Science
          </Button>
          <Button type="default" className="mb-2 mr-2" size="middle">
            Programming
          </Button>
          <Button type="default" className="mb-2 mr-2" size="middle">
            Productivity
          </Button>
          <Button type="default" className="mb-2 mr-2" size="middle">
            Javascript
          </Button>
          <Button type="default" className="mb-2 mr-2" size="middle">
            Machine Learning
          </Button>
          <Button type="default" className="mb-2 mr-2" size="middle">
            Politics
          </Button>
          <Button type="default" className="mb-2 mr-2" size="middle">
            Health
          </Button>
        </div>
        <p className="text-green-600 border-b border-gray-200 pb-4 pt-4">
          See all topics
        </p>
      </div>
    </div>
  );
};

export default FeaturedPost;
