
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
          <h5>KAYBETMEDEN KAYBETMENİN FARKINA VARMAK</h5>
   
        </span>
        <hr />
      </div>
      <h3>HAVA KİRLİLİĞİ</h3>
      <p className="postDesc">

      Hava, etrafımızı saran gaz karışımıdır. İçinde yaşadığımız hava katmanına atmosfer denir. Temiz hava içerisinde yaklaşık olarak %78 azot,
						    %21 oksijen ve %1 oranında da diğer gazlar, toz, su buharı gibi maddeler bulunmaktadır. İnsanoğlunun yaşamını sürdürebilmesi için oksijene 
						    ihtiyacı vardır ve oksijeni solunum yoluyla havadan alır. Hava canlılar için vazgeçilmezdir ve havanın kirlenmesi canlıların sağlığını olumsuz
						    etkilemektedir.
                            Günümüzde, her geçen gün artan çevre sorunlarının başında gelen hava kirliliği, geleceğin dünyasını ciddi bir şekilde tehdit etmekte, ekolojik tehlikelerle karşı
                            karşıya bırakmaktadır. Dünya nüfusunun hızla artmasına paralel olarak, artan enerji kullanımı, endüstrinin gelişimi ve şehirleşmeyle ortaya çıkan hava kirliliği 
                            insan sağlığı ve diğer canlılar üzerinde olumsuz etkiler yaratmaktadır. Hava kirliliği, havanın doğal bileşiminin çeşitli nedenlerle değişmesi, havada katı, sıvı 
                            ve gaz şeklindeki yabancı maddelerin insan sağlığına, canlı hayatına, ekolojik dengeye ve eşyalara zararlı olabilecek derişim ve sürede bulunmasıdır.
                            Hava kirliliğine atmosfere yabancı maddelerin girişi sebep olmakla birlikte sıcaklık, basınç, yağış, rüzgar, nem ve güneş radyasyonu gibi meteorolojik faktörlerle,
                            konum ve topografik yapı da etki etmektedir. Plansız kentleşme ve yeşil alanların yeterli miktarda bulunmaması ve kullanılan yakıtlar da hava kirliliğini büyük ölçüde 
                            etki etmektedir. Hava kirliliği nedeniyle yerel, bölgesel ve küresel düzeyde sorunlar gözlenmektedir.

                           
      </p>
      <p>  KAYNAKÇA: <a href= "https://havakalitesi.ibb.gov.tr/Icerik/bilgi" >
			                https://havakalitesi.ibb.gov.tr/Icerik/bilgi</a> </p>
    </div>
  );
}