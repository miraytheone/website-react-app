
import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        
        <span className="postTitle">
          <h5>Besin Kaynakların Korunması</h5>
   
        </span>
        <hr />
      </div>
      <h3>TOPRAK KİRLİLİĞİ</h3>
      <p className="postDesc">

      Toprak Kirliliğine Sebep Olan Faktörler:<br/>
                        ■ Yerleşim alanlarından çıkan atıklar, egzoz gazları, endüstri atıkları, tarımsal mücadele
                        ilaçları ve kimyasal gübreler toprak kirliliğine sebep olan en önemli etkenlerdir.<br/>
                        ■ Yerleşim alanlarından çıkan çöplerin gelişigüzel boşaltıldığı alanlar ile kanalizasyon
                        şebekelerinin arıtılmaksızın, doğrudan toprağa verildiği alanlarda toprak kirliliği meydana
                        gelmektedir.<br/>
                        ■ Egzoz gazları, karbonmonoksit, kükürtdioksit, kurşun ve kadmiyum vs. gibi zehirli
                        maddeler havaya yayılmakta ve solunum yolu ile büyük bir kısmı canlılar tarafından
                        alınmaktadır. Geriye kalanı ise, rüzgarlar ile uzak mesafelere taşınmakta ve yağışlarla yere inerek, toprak ve
                        suları kirletmektedir.<br/>
                        ■ Toprak kirliliğine sebep olan diğer bir faktör de tarımsal mücadele ilaçları ve suni
                        gübrelerdir. Tarımsal mücadele ilaçlarının bilinçsiz ve aşırı kullanımı sonucu, toksik
                        maddelerin toprakta birikimi artmakta ve doğal ortamın kirlenmesine sebep olmaktadır.
                        Sodyum, fosfor, potasyum, kalsiyum, magnezyum, demir, çinko, bakır, mangan, bor gibi
                        besin maddelerini içeren suni gübrelerin aşırı ve bilinçsiz kullanımı sonucu, toprağın yapısı
                        bozulmakta ve toprak kirliliği ortaya çıkmaktadır.<br/>
                        ■ Endüstri tesislerinden çıkan ve arıtılmaksızın havaya, suya ve toprağa verilen atıklar çevreyi
                        kirletmektedir.
                        Ayrıca; ormanların insanlar tarafından tahrip edilmesi, yakılarak tarla açılması, tarım
                        topraklarının hatalı işlenmesi, mera ve çayırların bilinçsiz kullanımı, aşırı otlatma vb.
                        sebeplerle oluşan toprak erozyonu, bugün dünyanın birçok bölgesinde olduğu gibi, ülkemizde
                        de en önemli çevre sorunlarından biri olarak karşımıza çıkmaktadır. 
      </p>
      <p>  KAYNAKÇA: <a href= "https://webdosya.csb.gov.tr/db/bolu/editordosya/TOPRAK.pdf" >
			            https://webdosya.csb.gov.tr/db/bolu/editordosya/TOPRAK.pdf</a> </p>
    </div>
  );
}