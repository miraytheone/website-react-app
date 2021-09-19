import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />

      <h3>HAVANIN KORUNMASI</h3>
      <p className="postDesc">
      Toplum olarak hem ısınmak hem de havayı kirletmemek zorundayız. <br/>
      Isınmadan kaynaklanan hava kirliliğini azaltmak veya önlemek için neler yapmalıyız:<br/>
                        Yakıt tüketimi azaltılmalı,<br/>
                        Temiz enerji kaynakları ve kaliteli yakıtlar kullanılmalı,<br/>
                        Yakıtlar soba ve kaloriferlerde tekniğine uygun yakılmalı,<br/>
                        Binalarda ve evlerde ısı yalıtımına gidilmeli,<br/>
                        Kalorifer ve soba bacaları her sezon başında mutlaka temizlenmeli.<br/>
			         Taşıtların kirletici etkilerini önlemek veya azaltmak için neler yapmalıyız:<br/>
                        Egzoz gazı emisyon ölçümü zamanında yapılmalı,<br/>
                        Araçların bakım ve onarımları zamanında yapılmalı,<br/>
                        Temiz yakıt kullanılmalı,<br/>
                        Araçların muayeneleri periyodik olarak yapılmalı,<br/>
                        Araç kapasitelerinin üzerinde yolcu ve yük taşınmamalı,<br/>
                        Benzinli taşıtlarda katalitik konvertör takılmalı,<br/>
                        Toplu taşımaya önem verilmeli,<br/>
                        Sanayi kaynaklı hava kirliliği önlemek veya azaltmak için neler yapmalıyız:<br/>
                        Temiz yakıt ve hammadde kullanımı,<br/>
                        Kirliliği kaynağında yok edecek teknolojilerin kullanılması,<br/>
                        Tesislerin yakma ünitelerinde vasıflı yakıtların kullanılması,<br/>
                        eterli yükseklikte bacaların inşası ve bacalarda filtre kullanılması,<br/>
                        Arıtma tesislerinin kurulması,<br/>
                        Atıkların değerlendirilmesi, düzenli ve sağlıklı boşaltılması,<br/>
                        Tesisler mümkün olduğu kadar yerleşim yerlerinin dışına yapılmalı,<br/>
                        Personele çevre konusunda eğitimler verilmeli.

      </p>

    </div>
  );
}