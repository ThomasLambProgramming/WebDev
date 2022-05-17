//The brackets on this file mark it as a dynamic file to next or react or whatever needs it 
import fs from 'fs';
import matter from 'gray-matter';

//this will turn all our markdown into html
import md from 'markdown-it'

export async function getStaticPaths()
{
    //Retrieve all our slugs
    const files = fs.readdirSync('posts');

    //makes all the file paths for the next state
    const paths = files.map((fileName) => ({
        params: {
            slug: fileName.replace('.md', ''),
        },
    }))
    //Test

    //I believe this returns them as an object
    return {
        paths,
        //this fallback will show a 404 page
        fallback: false,
    };
}

export async function getStaticProps({ params: { slug } }) {
    const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);
    return {
      props: {
        frontmatter,
        content,
      },
    };
  }

  export default function PostPage({ frontmatter, content }) {
    return (
      <div className='prose mx-auto'>
        <h1>{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      </div>
    );
  }

