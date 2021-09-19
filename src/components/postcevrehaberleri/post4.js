
import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
   
      <h3>Bunun adı tam bir "REZALET"</h3>
      <p className="postDesc">

      Bolu Belediye Başkanı Alaaddin Yılmaz döneminde, Büyüksu için yeniden yapılma çalışmaları şu günlerde tam bir rezalete dönüştü.
						Yenigecitveren Köyü sınırları içerisinde yer alan ve Kurban Pazarının bulunduğu bölgede bulunan fabrikaların atık suları, arıtma tesislerinden 
						geçmeden 24 saat boyunca Büyüksu’ya akıtılıyor. Dere içerisinde zehirli atıkların bulunduğu pis sulardan dolayı müsilaj olayı da gerçekleşmeye 
						başladı. İddiaya göre Alaaddin Yılmaz’ında ortakları arasında bulunduğu Bolparsan şirketinin atık suları da arıtma tesisinden arıtılmadan bu
						dereye aktarılıyor. Bölgede bulunan tesislerinin pis ve zehirli atık suları nedeniyle çevre kokudan geçilmezken, dere içerisinde hiçbir balık 
						türünün de yaşanmadığı iddia edildi. Geniş çaplı borularla, adeta bir şelaleyi andıran pis sular şarıl şarıl dereye akıtılırken, bir diğer borudan 
						ise simsiyah zehirli suyun akıtıldığı tarafımız tarafından canlı canlı görüntülendi.

                           
      </p>
     
    </div>
  );
}