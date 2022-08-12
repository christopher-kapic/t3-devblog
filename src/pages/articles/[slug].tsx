import type { NextPage } from "next";

const Article: NextPage = () => {
  return (
    <div></div>
  )
}



export async function getStaticPaths() {
  return {
    paths: [
      { params: { ... } } // See the "paths" section below
    ],
    fallback: false
  };
}

export default Article;