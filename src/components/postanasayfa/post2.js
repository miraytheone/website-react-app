import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
    
      <h3>ATIK MADDELER</h3>
      <p className="postDesc">

      Atıkların doğaya zarar vermemesi için geri dönüştürülebilir olanlarının dönüştürülmesi oldukça önemlidir.
						Geri dönüştürülebilen maddeler; plastik, hurda plastik, kâğıt, alüminyum, cam, varil, piller, motor yağı, beton, organik atıklar,
						elektronik atıklar ve akümülatörlerdiR.
                        Atıkların çevreye verdikleri zararlar; hava kirliliği, küresel ısınma, yer altı suyu kirliliği, bitki örtüsünün zarar görmesi, yangın ve patlamalar olarak karşımıza çıkmaktadır.                  Değerlendirilebilen atıkların çeşitli fiziksel ve kimyasal işlemler aracılığıyla ikincil maddeye dönüştürülerek tekrar üretime dahil edilmesi doğanın zarar görmemesi 
	                    açısından gereklidir.
      </p>
      <p>  KAYNAKÇA: <a href= "https://saydasplastik.com.tr/atiklarin-dogaya-verdigi-zararlar-nelerdir/" >
			            https://saydasplastik.com.tr/atiklarin-dogaya-verdigi-zararlar-nelerdir/</a> </p>
    </div>
  );
}