import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
          <h5>Besin Kaynakların Korunması</h5>

      <h3>ANIZ YAKMAK</h3>
      <h6>ZARARLARI</h6>
      <p className="postDesc">
         
      Toprağın birkaç santimetre altında madde döngüsünde görevli olan kemosentetik canlılar yaşar.
                            Anız yakmak madde döngüsünü bozar.
                            Madde döngüsünde görev alan canlılara zarar verir.
                            Kimyasal gübreyi çok kullanan çiftçiler, toprağa en az anız yakmak kadar zarar verir.
                            Anız yakmak tarladan alınabilecek ürün miktarını azaltır.
                            Ekosistemi tahrip eder.
                            Topraktaki karbon ve azot dengesi yok olur.
                            Bu da topraktaki organik madde miktarını azaltır ve toprağı verimsiz hale getirir.
                            Anız yakmak sadece verimliliği düşürmez aynı zamanda toprağın su tutma kapasitesini de azaltır.
                            Kemosentez yapabilen nitrit ve nitrat bakterileri, bitkilerin gereksinim duyduğu azotu toprağa bağlarlar. 
                            Bu bakteriler, anız yakılması sırasında ölürlerse hem toprak hem de bitkiler zarar görür.

      </p>

    </div>
  );
}