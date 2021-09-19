import './postcevrehaberleri.css';
import Post1 from './post1';
import Post2 from './post2';
import Post3 from './post3';
import Post4 from './post4';
import Post5 from './post5';
import Post6 from './post6';
import Post7 from './post7';

import bolu from '../../img/bolu.jpg';

export default function postcevrehaberleri(){
    return(
        <div className="posts">
            <Post1/>
            <Post2/>
            <Post3/>
            <Post4 img={bolu} />
            <Post5/>
            <Post6/>
            <Post7/>
        </div>
    )
}
