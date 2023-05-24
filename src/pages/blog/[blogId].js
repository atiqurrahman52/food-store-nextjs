import BlogDetailBanner from "@/components/blogDetail/BlogDetailBanner";
import BlogDetails from "@/components/blogDetail/BlogDetails";
import blogData from "@/data/blog/blogData";
import Head from "next/head";
import { useRouter } from "next/router";

const blogDetail = () => {
    const router = useRouter()
    const { id } = router.query

    // const router = useRouter()
    // const { id } = router.query
    //  const singleBlog = blogData?.find((item) => item.id === parseInt(id))
     const singleBlog = blogData?.find((item) => item.id === parseInt (id));
     console.log('My Single Data',singleBlog);


  return (
    <div>
      <Head>Blog Detail </Head>
      <BlogDetailBanner />
      <BlogDetails data={singleBlog} />
    </div>
  );
};

export default blogDetail;
