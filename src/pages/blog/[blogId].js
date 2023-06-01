import BlogDetailBanner from "@/components/blogDetail/BlogDetailBanner";
import BlogDetails from "@/components/blogDetail/BlogDetails";
import blogData from "@/data/blog/blogData";
import Head from "next/head";
import { useRouter } from "next/router";

const BlogDetail = ({ singleBlog }) => {
  console.log("Single Blog", singleBlog);
  // const router = useRouter()
  // const { id } = router.query

  // const router = useRouter()
  // const { id } = router.query
  //  const singleBlog = blogData?.find((item) => item.id === parseInt(id))
  //  const singleBlog = blogData?.find((item) => item.id === parseInt (id));
  //  console.log('My Single Data 111',singleBlog);
  // const serializedSingleBlog = singleBlog !== undefined ? singleBlog : null;
  return (
    <div>
      <Head>Blog Detail </Head>
      <BlogDetailBanner />
      <BlogDetails data={singleBlog} />
    </div>
  );
};

export default BlogDetail;

export async function getServerSideProps({ params }) {
  const data = blogData.find(({ id }) => id === params.blogId);
  console.log("single data", data);
  console.log(data);
  return {
    props: {
      singleBlog: data,
    },
  };
}

// export const getStaticProps = async ({params}) => {
//   const data = blogData.find(({id}) => id === params.blogId);

//   return{
//     props: {
//       singleBlog: data
//     }
//   }
// }

// export const getStaticPaths = async () => {
//   const paths = blogData.map((item) => {
//     return {
//       params: {
//         blogId: item.id
//       }
//     }
//   })

//   return {paths, fallback: false}
// }
