import BlogBanner from "@/components/blog/BlogBanner";
import BlogNews from "@/components/blog/BlogNews";
import Head from "next/head";


const index = () => {
    return (
        <div>
            <Head>
                <title>Blog</title>
            </Head>
            <BlogBanner />
            <BlogNews />
        </div>
    );
};

export default index;