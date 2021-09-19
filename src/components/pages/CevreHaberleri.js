import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import PostCevreHaberleri from '../postcevrehaberleri/PostCevreHaberleri';

function CevreHaberleri(){
    return(
        <>
        <div className="content">
        <div className="intro">
            <div className="introKapsayici">
                <h3>ÇEVRE HABERLERİ </h3>
                <iframe width="900" height="506" src="https://www.youtube.com/embed/GH_OUhCCrKw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             <p>Artvin'de 2012 yılında hizmete açılan Deriner Barajı ve Hidroelektrik Santrali (HES) suları altında kalan Narlık köyü, barajda su seviyesinin düşmesi üzerine
			 ortaya çıktı.Çoruh Nehri üzerinde, 249 metre gövde yüksekliğiyle Türkiye'nin en yüksek, Avrupa'nın 4'üncü ve dünyanın da 6'ncı en yüksek barajı olan Deriner Barajı 
			 ve HES'te, Şubat 2012'de su tutulmaya başlandı.Cumhurbaşkanı Recep Tayyip Erdoğan tarafından başbakanlığı döneminde, 12.12.2012'de hizmete açılan barajda,
			 su tutulmasıyla Yusufeli ilçesine bağlı Narlık köyünün de aralarında bulunduğu bazı yerleşim yerleri sular altında kaldı.Deriner barajında su seviyesinin 
			 düşmesiyle 2010 yılında boşaltılan Narlık köyüne ait ev, cami ve bir dönem zeytinyağı üretiminde kullanılan fabrika gibi yapılar da gün yüzüne çıktı.Durumu
			 fark eden yöre sakinleri, eski yaşam alanlarını görmek için bölgeye akın ederek özlem gideriyor. Eski yerleşim yerini hüzünle izleyen vatandaşların bazıları 
			 ise fotoğraf çekmeyi ihmal etmiyor.Eski Narlık köyü sakinlerinden 64 yaşındaki Tekin Yalçın, AA muhabirine yaptığı açıklamada, Narlık köyünde doğduğunu ve köy
			 sular altında kalıncaya kadar ömrünü burada geçirdiğini söyledi.Çocukluğu ve gençliğinin bu köyde geçtiğini anlatan Yalçın, "Bu görünen camide çok namaz kıldım.
			 Burası büyük bir köydü, dükkanlar vardı. Dükkanlardan alışveriş yapıp evimize götürürdük. Şimdi bu halini görünce çok üzüldüm. Hatıralar canlandı, duygulandım. 
			 Sular azalıp köyün ortaya çıktığını duyunca gelip görmek istedim." dedi.32 yaşındaki Orhan Yazıcı ise barajda su tutulunca köylerinin sular altında kaldığını,
			 kendilerinin daha yükseklerdeki köye yerleştiğini ifade ederek, "Su seviyesi düşünce köyümüzün eski hali ortaya çıktı. Baktıkça yüreğimiz yanıyor. Eski anılarım 
			 aklıma geliyor. 5 yaşında bir çocuğum var. Ben de durumu fırsat bilerek oğluma baba topraklarını göstermek için buraya getirdim. Ona burada yaşadığımızı anlattım,
			 evimizi gösterdim." diye konuştu.</p>
            </div>
        </div>
        <PostCevreHaberleri/>
        </div>
        <Footer />
    </>
    )
}

export default CevreHaberleri;