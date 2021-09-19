import React from 'react'
import Footer from '../Footer'
import '../../App.css';
import PostDogalKaynaklar from '../postdogalkaynaklar/PostDogalKaynaklar';

function DogalKaynaklar() {
    return (
        <>
        <div className="content">
        <div className="intro">
            <div className="introKapsayici">
                <h5>Bilgilendirme</h5>
                <h3>DOĞAL KAYNAKLARIN KORUNMASI  </h3>
		        <iframe width="900" height="506" src="https://www.youtube.com/embed/TQqT0fhMls8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
               <p>Doğal kaynakları kullanma biçimimiz bizim ve toplumumuzun sağlığını
                etkiler. Doğal kaynakları hepimiz kullandığımız için onları koruma, muhafaza
                etme ve paylaşma konusunda sorumluluklarımız vardır.<br/>
                Ne yazık ki, doğal kaynaklar insanlar arasında adil bir biçimde
                paylaşılmamaktadır. Yoksullar en azını kullanırken zenginler en çoğunu
                tüketmektedir. Genellikle güçlü şirketler, hükümetler ve askerler doğal
                kaynaklardan aslan payını alırlar.<br/>
                Aynı toplum içinde bile, varlıklılar doğal kaynaklardan yoksullara oranla daha
                fazla yararlanırlar. Sıklıkla yoksullar geri kalan kaynaktan pay alabilmek için
                kendi aralarında mücadeleye zorlanırlar. Kaynakların adaletsiz dağılımı
                yoksullar arasında ciddi sağlık sorunlarına yol açar.<br/>
                Doğal kaynakları koruma konusunda ciltlerce kitap yazabiliriz ancak
                eşitsizlikler sürdükçe, çevre sağlığı gündelik hayatını sürdürebilmek için bu
                kaynaklara muhtaç olanların değil, sadece parayı ve gücü elinde
                bulunduranların hakkı olacaktır. Hindistanlı lider Mahatma Gandi’nin,
                “Herkesin ihtiyacını karşılayacak kadar var, ama gözünü doyuracak kadar
                yok” sözü ne kadar da anlamlı…</p>
              
        </div>
        </div>
        
        <PostDogalKaynaklar/>
        </div>
        <Footer />

        </>
    )
}

export default DogalKaynaklar;
