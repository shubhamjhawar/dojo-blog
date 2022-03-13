import { useState , useEffect } from "react";
import BlogList from "./Bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])

  const [name,setName] = useState('Mario');

  useEffect(() => {
    console.log('Use effect ran'); 
    console.log(name);
  },[name]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  }

  return ( 
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      {/* <BlogList blogs={blogs.filter((blog) => 
        blog.author === 'mario'
      )} title="Mario Blogs" handleDelete={handleDelete} /> */}
      <button onClick={() => setName('luigi')}>change name</button>
      <p>{name}</p>

    </div>
  );
}
 
export default Home;