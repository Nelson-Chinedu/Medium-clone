import { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import { Divider } from 'antd';
import { FileAddOutlined, EllipsisOutlined } from '@ant-design/icons';

import { Avatar, Chip } from 'src/components';

import BLOG_POSTS from 'src/constant/mock_data.json';

type Props = {
  id: number;
  blogTitle: string;
  author: string;
  imageUrl: string;
  intro: string;
};

const Articles: FunctionComponent<{}> = () => {
  const router = useRouter();

  const handleChange = (blog: any) => {
    const path = blog.blogTitle.split(' ').join('-');
    router.push(`/${path}-${blog.id}`);
  };
  return (
    <div>
      {BLOG_POSTS.map((blog: Props) => (
        <section
          key={blog.id}
          className="cursor-pointer"
          onClick={() => handleChange(blog)}
        >
          <article className="flex justify-between my-4">
            <div style={{ width: '75%' }}>
              <div className="flex items-center">
                <Avatar
                  alt="profile picture"
                  shape="circle"
                  size={25}
                  src={blog.imageUrl}
                />
                <p className="ml-2 text-sm">{blog.author}</p>
              </div>
              <div>
                <h4 className="font-bold text-2xl my-2">{blog.blogTitle}</h4>
                <p>{blog.intro}</p>
                <div className="flex items-baseline justify-between">
                  <div className="flex items-center mt-4">
                    <Chip>
                      <p className="text-xs">Tool</p>
                    </Chip>
                    <div className="mr-2">
                      <p className="text-xs">4 min read</p>
                    </div>
                    {'.'}
                    <div className="ml-2 mr-2">
                      <p className="text-xs">Based on your reading history</p>
                    </div>
                  </div>
                  <div>
                    <FileAddOutlined
                      style={{ fontSize: '20px' }}
                      className="mr-4"
                    />
                    <EllipsisOutlined
                      style={{ fontSize: '25px', fontWeight: 600 }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div style={{ width: '20%' }}>
              <img
                src={blog.imageUrl}
                width={150}
                height={150}
                alt="article display image"
              />
            </div>
          </article>
          <Divider />
        </section>
      ))}
    </div>
  );
};

export default Articles;
