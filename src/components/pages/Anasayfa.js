import React from 'react';
import '../../App.css';


import Footer from '../Footer';
import PostAnasayfa from '../postanasayfa/PostsAnasayfa';


function Anasayfa(){
    return(
        <>
        
        <div className="content">
                <div className="intro">
                    <div className="introKapsayici">
                        <h5>Bilgilendirme</h5>
                        <h3>ÇEVRE KİRLİLİĞİ</h3>
                        <iframe width="800" height="506" src="https://www.youtube.com/embed/PGGHFTPuQMY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>Günden güne kirlenen ve yitirilen doğal su kaynakları korunmalı; mümkünse geri kazanılmalıdır!</p>
                        <p>Çevrenin canlı ve cansız öğelerini olumsuz
                        yönde etkileyen, üzerinde yapısal zararlar
                        meydana getiren ve niteliklerini bozan yabancı
                        maddelerin hava, su ve toprağa yoğun bir şekilde
                        karışması olayına “çevre kirliliği” adı verilmektedir.
                        Çevrenin doğal olmayan bir şekilde insan eliyle bozulmasıdır. <br/>
					    Çevre kirliliğinin en önemli nedenleri:
                        » Hızlı nüfus artışı,
                        » Plansız kentleşme,
                        » Plansız endüstrileşme,
                        » Doğal kaynakların ölçüsüz
                        kullanılması olarak sıralanabilir.</p>
                    </div>
                </div>
       
            <PostAnasayfa/>
            <div className="contentBox">
                    <div className="boxKapsayici">
                        <h3 className="sporBaslik">Çevreyi Koruma Tedbirler</h3>
						<iframe width="700" height="406" src="https://www.youtube.com/embed/KchUjD5iL8w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
            </div>
        </div>
       
        <Footer />
        </>
       
    )
}

export default Anasayfa;