import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
    
      
      <iframe width="385" height="300" src="https://www.youtube.com/embed/4Nbbra8eYB0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <h3>KÜRESEL ISINMA</h3>
      <p className="postDesc">

      Küresel ısınmayı en açık şekilde;  “Başlıca atmosfere salınan gazların neden olduğu düşünülen sera etkisinin sonucunda,
							Dünya üzerinde yıl boyunca kara, deniz ve havada ölçülen ortalama sıcaklıklarda görülen artışa verilen isimdir.” tanımlamak mümkündür..
      </p>
      <p>  KAYNAKÇA: <a href= "https://www.hurriyet.com.tr/gundem/kuresel-isinma-nedir-kuresel-isinma-neden-oluyor-40814540" >
			                https://www.hurriyet.com.tr/gundem/kuresel-isinma-nedir-kuresel-isinma-neden-oluyor-40814540</a> </p>
    </div>
  );
}