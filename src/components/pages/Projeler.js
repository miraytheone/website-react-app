import React from 'react'
import proje1 from '../../img/proje1.png';
import aparat from '../../img/aparat.jpg';
import donusum from '../../img/dönüşüm.jpg';
import Footer from '../Footer';
import '../../App.css';

function Projeler() {
    return (
        <>
          
        <div className="intro">
            <div className="introKapsayici">


                   <br/><br/>
                      <img src={proje1}  width="300" height="200" alt="resim"/>
                       <h2>ÇETEKO</h2>
                       <p>Bu projemizde amacımız toplumun çevre temizliğine katkıda bulunması ve aynı zaman da eğlenceli vakit geçirmelerini sağlamak <br/>
					   ASLINDA temizliğin çok zor olmadığını ve çöplerimizi toplamanın aslında çok zor bir iş olmadığını görmemizi sağlamak. <br/>TEK BİR ŞEY OLARAK GÖRÜP GEÇMEMEK GEREKİYOR TEK TEK ,
					   DİYİP SONUNDA YIĞINLA KARŞILAŞIYORUZ </p>
                   
                   
                       <img src={aparat}  width="300" height="200" alt="resim"/>
                       <h2>YENGEÇ İLE BİRLİK OLALIM </h2>
                       <p>Çevreçi dostlarımız ile birlikte toplanan bağış ve katkılarla her  taahhüt veren üyemize yengeç çöp toplama aparatırının verilmesi. </p>
                   
                   
                        <img src={donusum} width="300" height="200" alt="resim"/>
                       <h2>GERİ DÖNÜŞTÜRELİM </h2>
                       <p> Her belediye ve her şehirin çevre ve bölge planlama ekibiyle konuşup her sokak veya her mahalle elimizden geldiği kadarıyla çöp ayrıştırma kutuları koyup halkımızı da bilinçlendirip
					   dönüşüme katkı sağlamayı amaçlıyoruz </p>
                   
                    
                  
         
               
        </div>
        </div>

        <Footer/>
        </>
    )
}

export default Projeler
