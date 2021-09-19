
import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
    
      <div className="postInfo">
        
        <span className="postTitle">
          <h5>Besin Kaynakların Korunması</h5>
   
        </span>
        <hr />
      </div>
      <h3>ANIZ YAKMAK</h3>
      <p className="postDesc">

      Yurdumuzda hububat hasadından sonra, verimin yüksek olduğu ve saman sıkıntısı olmayan
                            yıllarda, hububat alanlarının yaklaşık % 30’unun anızı yakılmaktadır.
                            Anızın yakılması suretiyle yok edilmesinin sebebi: kolay, çabuk ve masrafsız olmasındandır.
                            Bununla birlikte böcek ve diğer zararlılar ile çeşitli hastalıkların azaltılması, toprak işlemede
                            kolaylık sağlaması ve daha yüksek verim beklentisidir. Bazı yararlar beklenerek anız
                            yakmanın, pek çok olumsuz etkileri de bulunmaktadır.<br/>
                            a. Çevreye olan etkileri: Hava kirliliğine sebep olması ve karayolunda görüşün azalmasıyla
                            trafik kazalarına sebep olmasının yanı sıra; anız yangınları komşu tarlalardaki ürünlere ve
                            meyve bahçelerine, telefon direklerine, yerleşim yerlerine, ormanlara ve pek çok yaban
                            hayvanına zarar vermektedir.<br/>
                            b. Toprak özelliğine olan etkisi: Anız yangınıyla yüzey toprağının organik maddesi yok
                            edilmiş olur. Toprak için çok önemli olan organik maddelerin; yağış sularının emilmesini ve
                            tutulmasını sağlamak, kümeleşmeyi temin ederek erozyonla taşınmayı önlemek, toprağın
                            havalanmasını sağlamak gibi önemli fonksiyonları vardır.
                            Anızın yakılması sırasında toprağın 13 cm’lik üst katmanının ısısı 50-75 0C’ye kadar
                            çıkmakta, bu sebeple mikroorganizmaların % 70’i zarar görmektedir. Halbuki topraktaki
                            mikroorganizmaların faaliyeti sonucu organik madde parçalanır, ayrışır ve humus haline
                            dönüşür.
      </p>
      <p>  KAYNAKÇA: <a href= "https://webdosya.csb.gov.tr/db/bolu/editordosya/TOPRAK.pdf" >
			                https://webdosya.csb.gov.tr/db/bolu/editordosya/TOPRAK.pdf</a> </p>
    </div>
  );
}