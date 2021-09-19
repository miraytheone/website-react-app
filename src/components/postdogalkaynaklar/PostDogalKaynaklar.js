import Post1 from '../postdogalkaynaklar/post1';
import Post2 from '../postdogalkaynaklar/post2';
import Post3 from '../postdogalkaynaklar/post3';
import Post4 from '../postdogalkaynaklar/post4';
import Post5 from '../postdogalkaynaklar/post5';
import Post6 from '../postdogalkaynaklar/post6';
import './postdogalkaynaklar.css';
import hk from '../../img/hk.jpg';
import gg from '../../img/gg.jpg';
import anız from '../../img/anız.jpg';

export default function PostDogalKaynaklar(){
    return (
        <div className="posts">
            <Post1 />
            <Post2 />
            <Post3 img={hk}/>
            <Post4 img={gg}/>
            <Post5/>
            <Post6 img={anız}/>
        </div>
    )
}