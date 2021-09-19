import Post1 from '../postanasayfa/post1';
import Post2 from '../postanasayfa/post2';
import Post3 from '../postanasayfa/post3';
import Post4 from '../postanasayfa/post4';
import Post5 from '../postanasayfa/post5';
import Post6 from '../postanasayfa/post6';
import "./postanasayfa.css";
import resim9 from '../../img/resim9.jpg';
import resim8 from '../../img/resim8.jpg';
import b from '../../img/b.jpg';

export default function PostsAnasayfa() {
  return (
    
    <div className="posts">
       
      <Post1 img={resim9} />
      <Post2 img={resim8} />
      <Post3 />
      <Post4/>
      <Post5 img={b}/>
      <Post6/>
    </div>
  );
}