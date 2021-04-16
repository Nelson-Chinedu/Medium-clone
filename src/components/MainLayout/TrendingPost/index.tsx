import React, { FunctionComponent, useEffect, useState } from 'react';
import Link from 'next/link';

import posts from 'src/components/data/trendingPost.json';

const TrendingPost: FunctionComponent<{}> = () => {
  const [blogPost, setBlogPost] = useState([]);

  useEffect(() => {
    setBlogPost(posts);
  }, []);
  return (
    <div className="border-b border-gray-200">
      <div className="c-trendingPost-container mx-auto py-12">
        <p className="font-bold text-xs pb-4">TRENDING ON MEDIUM</p>
        <div className="grid grid-cols-3 gap-7">
          {blogPost.map((post: any) => {
            return (
              <div key={post.trendingId} className="flex flex-start">
                <div className="mr-4">
                  <p className="text-3xl font-bold text-gray-200">
                    {post.trendingId}
                  </p>
                </div>
                <Link href="/">
                  <div>
                    <p className="font-semibold">{post.author}</p>
                    <p className="font-bold text-base">{post.blogTitle}</p>
                    <p className="text-gray-600">
                      <span>{post.published}</span> - <span>{post.read}</span>
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TrendingPost;
