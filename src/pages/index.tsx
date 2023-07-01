import { client } from "@/lib/client";
import { GetStaticProps, NextPage } from "next";

type blog = {
  id: string;
  title: string;
  body: string;
};

const Home: NextPage<any> = ({ blog }) => {
  return (
    <div>
      {blog.map((b: blog) => (
        <li key={b.id}>
          <div>{b.title}</div>
          <div dangerouslySetInnerHTML={{ __html: `${b.body}` }}></div>
        </li>
      ))}
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  const blog = data.contents;

  return {
    props: {
      blog: blog,
    },
  };
};
