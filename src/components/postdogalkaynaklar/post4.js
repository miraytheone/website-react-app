import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />

      <h3>Atıkların Doğada Yok Olma Süreleri</h3>
      <p className="postDesc">
      <table border="2" width="500"  height="660" bordercolor="green" >
                        <tr>
                        <td>ÜRÜLER</td>
                        <td> DOĞADA YOK OLMA SÜRELERİ </td>
                        </tr>
                        <tr>
                        <td>STRAFOR</td>
                        <td>5000 YIL - 2 MİLYON YIL</td>
                        </tr>
                        <tr>
                        <td>CAM ŞİŞE </td>
                        <td>4000 YIL</td>
                        </tr>   <tr>
                        <td>Telefon Kartı </td>
                        <td>1000 yıl</td>
                        </tr>   <tr>
                        <td>Pil </td>
                        <td>300 yıl</td>
                        </tr>   <tr>
                        <td>Kağıt </td>
                        <td>3 ay</td>
                        </tr>
		                <tr>
                        <td>Alüminyum  </td>
                        <td>10-100yıl</td>
                        </tr>   <tr>
                        <td>Teneke </td>
                        <td>100 yıl</td>
                        </tr>   <tr>
                        <td>Plastik  </td>
                        <td>1000 yıl</td>
                        </tr>   <tr>
                        <td>Deterjan  </td>
                        <td>400 yıl</td>
                        </tr>
		                <tr>
                        <td>Kağıt Havlu   </td>
                        <td>1 ay </td>
                        </tr>   <tr>
                        <td>Çakmak  </td>
                        <td>100 yıl</td>
                        </tr>   <tr>
                        <td>Balık Oltası   </td>
                        <td>600 yıl</td>
                        </tr>   <tr>
                        <td>Pet Şişe  </td>
                        <td>400 yıl</td>
                        </tr>
		
		                <tr>
                        <td>Sigara İzmariti   </td>
                        <td>1 yıl - 2 yıl</td>
                        </tr>   <tr>
                        <td>Sakız </td>
                        <td> 5 yıl - 25 yıl</td>
                        </tr>   <tr>
                        <td>Tahta Parçaları  </td>
                        <td>15 yıl </td>
                        </tr>   <tr>
                        <td>Bebek Bezi  </td>
                        <td>550 yıl</td>
                        </tr>
                        </table>
      </p>

    </div>
  );
}